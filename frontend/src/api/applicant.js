import { getDatabase, ref, child, get, set } from "firebase/database";

export function createApplicant(id, data) {
    const db = getDatabase();

    set(ref(db, 'applicant/' + id), data);
}

export function updateApplicant(id, data) {
    return;
}

export function getApplicant(id) {
    const dbRef = ref(getDatabase());

    /*
    get(child(dbRef, `applicant/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    */

    return get(child(dbRef, `applicant/${id}`));
}

export function getAllApplicants() {
}

export function deleteApplicant(id) {
    return;
}
