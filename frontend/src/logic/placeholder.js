import * as database from '../database';

export function pullApplicants() {
    // pull all applicants
    database.getAllEntities('applicant').then((snapshot) => {
        console.log('here!');
        console.log(snapshot.val());
        determineMatches(snapshot.val());
    });
}

function determineMatches(allApplicants) {

    if (!allApplicants) {
        return;
    }

    // filter out applicants without overlapping spoken languages
    if (allApplicants.length > 0) {
        console.log('processing!');
        console.log(allApplicants);
    }
    // filter out applicants whose minimum salary exceeds the offered salary of the company


    // order by most matching keywords
}

function newUser(data) {
    //applicant.newUser(data)
}

function updateUserInfo() {
    
}

