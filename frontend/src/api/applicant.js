import { getDatabase, ref, set } from "firebase/database";

export function createApplicant(id, data) {
    const db = getDatabase();

    set(ref(db, 'applicant/' + id), data);
}

export function updateApplicant(id, data) {
    return;
}

export function getApplicant(id) {
    return;
}

export function deleteApplicant(id) {
    return;
}
