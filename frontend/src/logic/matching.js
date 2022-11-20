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

    //allApplicants = JSON.parse(JSON.stringify(allApplicants[1]));

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
            console.log('Good application match!');
        }
        else {
            console.log('Bad application match!');
            console.log(applicant);
        }
        
        // order by most matching keywords
        // for each applicant, assign a matching score, and then sort applicants by that score
            // create function that takes the list of valid applicants and their matching scores as input and returns the same list sorted according to these scores

        var matchingScores = computeScores(eligibleApplicants, posting)
        return sortApplicants(eligibleApplicants)
    }
}

function computeScores(eligibleApplicants, posting) {
    for (var applicant in eligibleApplicants) {
        var applicantSkills = Object.values(applicant['skills']);
        var postingSkills = Object.values(posting['skills']);
        var intersection = postingSkills.filter(value => applicantSkills.includes(value));

        var ratio = intersection.length / postingSkills.length;
    }

    // "skills" matching rating from 0 to 10
        // skillScore = ratio of matching to total num skills * 10
    
    // "industry" matching rating from 0 to 10
        // industryScore = ratio of matching to total num industries * 10

    // years_experience
        // experienceScore = 5
        // every year of experience above this number adds one to the score, up to 10
        // every year of experience below this number removes one from the score, down to 0

    // score for the current applicant in consideration is 2*skillScore + industryScore + experienceScore

    return []
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

function sortApplicants(eligibleApplicants) {
    return[]
}