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
            filterMatches(applicants_snapshot, posting_snapshot);
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

    // filter out applicants without overlapping spoken languages
    
    // filter out applicants whose minimum salary exceeds the offered salary of the company

    // order by most matching keywords
}

function newUser(data) {
    //applicant.newUser(data)
}

function updateUserInfo() {
    
}

