import * as database from '../database';

/**
 * Takes a specific job posting, and returns an ordered list of the top applicants
 * 
 * @param {number} postingID 
 */
export function determineMatches(postingID) {
    // Pulling all applicants from the DB
    database.getAllEntities('applicant').then((applicants_snapshot) => {
        // Pulling the specific posting from the DB based on ID
        database.getEntity('posting', postingID).then((posting_snapshot) => {
            filterMatches(applicants_snapshot.val(), posting_snapshot.val());
        });
    });
}

/**
 * Filters and orders the applicant list based on the job posting
 * 
 * @param {applicant[]} allApplicants 
 * @param {posting} posting 
 */
function filterMatches(allApplicants, posting) {

    let eligibleApplicants = [];

    // Iterating through each applicant
    for (var key of Object.keys(allApplicants)) {

        let applicant = allApplicants[key];

        let applicantLanguages = Object.values(applicant['languages']);
        let postingLanguages = Object.values(posting['required_languages']);
        // filter out applicants without overlapping spoken languages
        const filteredLanguages = postingLanguages.filter(value => applicantLanguages.includes(value));
        const validLanguages = filteredLanguages.length === postingLanguages.length;

        // filter out applicants whose minimum salary exceeds the offered salary of the company
        const validSalary = applicant['minimum_salary'] <= posting['salary'];

        if (validLanguages && validSalary) {
            eligibleApplicants.push(applicant);
        }        
    }

    return sortApplicants(computeScores(eligibleApplicants, posting));
}

function computeScores(eligibleApplicants, posting) {
    for (var key in eligibleApplicants) {
        var score = 2*computeSkillsScore(eligibleApplicants[key], posting) + computeIndustryScore(eligibleApplicants[key], posting) + computeExperienceScore(eligibleApplicants[key], posting);
        eligibleApplicants[key]["score"] = score;
    }

    return eligibleApplicants;
}

function computeSkillsScore(applicant, posting) {
    var applicantSkills = Object.values(applicant['skills']);
    var postingSkills = Object.values(posting['skills']);
    var intersection = postingSkills.filter(value => applicantSkills.includes(value));
    var ratio = intersection.length / postingSkills.length;
    return ratio * 10;
}

function computeIndustryScore(applicant, posting) {
    var applicantIndustries = Object.values(applicant['seeking_industry']);
    var postingIndustries = Object.values(posting['industry']);
    var intersection = postingIndustries.filter(value => applicantIndustries.includes(value));
    var ratio = intersection.length / postingIndustries.length;
    return ratio * 10;
}

function computeExperienceScore(applicant, posting) {
    // Setting the total score for an applicant experience rating to be 5 to begin with
    let totalScore = 5;
    let difference = applicant['total_years_experience'] - posting['years_exprience'];

    // Adding or subtracting from 5, down to 0 or up to 10, based on how the applicant compares to the posting
    if (Math.abs(difference) <= 5) {
        totalScore += difference;
    }

    return totalScore;
}

function sortApplicants(eligibleApplicants) {
    
    const queue = new PriorityQueue();
    const sortedApplicants = [];

    for (var key in eligibleApplicants) {
        queue.enqueue(eligibleApplicants[key], eligibleApplicants[key]['score']);
    }

    for (var key in eligibleApplicants) {
        sortedApplicants.push(queue.dequeue().element);
    }

    return sortedApplicants;
}

// User defined class
// to store element and its priority
class QElement {
    element;
    priority;
    constructor(element, priority)
    {
      this.element = element;
      this.priority = priority;
    }
}
  
// PriorityQueue class
class PriorityQueue {
    items;
  
    // An array is used to implement priority
    constructor()
    {
      this.items = [];
    }
  
    // functions to be implemented
    // enqueue(item, priority)
    // enqueue function to add element to the queue as per priority
    enqueue(element, priority)
    {
        // creating object from queue element
        var qElement = new QElement(element, priority);
        var contain = false;

        // iterating through the entire
        // item array to add element at the
        // correct location of the Queue
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the correct location is found it is
                // enqueued
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) {
            this.items.push(qElement);
        }
    }

    // dequeue()
    dequeue()
    {
        // return the dequeued element
        // and remove it.
        // if the queue is empty
        // returns Underflow
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    // return true if the queue is empty.
    isEmpty()
    {
        return this.items.length === 0;
    }
}
