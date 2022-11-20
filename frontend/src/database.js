import { getDatabase, ref, child, get, set, push, update, remove } from "firebase/database";

export function createEntity(entity, id, data) {
    const db = getDatabase();

    set(ref(db, `${entity}/${id}`), data);
}

export function updateEntity(entity, id, data) {
    const db = getDatabase();

    set(ref(db, `${entity}/${id}`), data);
}

export async function getEntity(entity, id) {
    const dbRef = ref(getDatabase());

    return get(child(dbRef, `${entity}/${id}`));
}

export async function getAllEntities(entity) {
    const dbRef = ref(getDatabase());

    const promise = get(child(dbRef, `${entity}`));

    const result = await promise;

    return result;
}

export function deleteEntity(entity, id) {
    const db = getDatabase();

    remove(ref(db, `${entity}/${id}`));
}
