import * as database from '../database';
import { useState } from 'react';

function determineMatches() {
    const [allApplicants, setAllApplicants] = useState([]);

    // pull all applicants
    database.getAllEntities('applicant').then((snapshot) => {
        setAllApplicants(snapshot.val());
        console.log('got snapshot!');
    });

    // filter out applicants without overlapping spoken languages
    if (allApplicants.length > 0) {
        console.log('processing!');
    }
    // filter out applicants whose minimum salary exceeds the offered salary of the company


    // order by most matching keywords
}

function newUser(data) {
    //applicant.newUser(data)
}

function updateUserInfo() {
    
}

