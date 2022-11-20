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
        let applicant_languages = Object.values(applicant['languages']);
        let posting_languages = Object.values(posting['required_languages']);
        // filter out applicants without overlapping spoken languages
        const filteredLanguages = posting_languages.filter(value => applicant_languages.includes(value));
        const validLanguages = filteredLanguages.length === posting_languages.length;

        // filter out applicants whose minimum salary exceeds the offered salary of the company
        const validSalary = applicant['minimum_salary'] <= posting['salary'];

        if (validLanguages && validSalary) {
            // Add this application to consideration for this posting
            console.log('Good application match!');
        }
        else {
            console.log('Bad application match!');
            console.log(applicant);
        }
        
        // order by most matching keywords
    }
}

function newUser(data) {

}

function updateUserInfo() {

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
