import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090')
export {pb};

export async function allFilmSorted() {
    return await pb.collection('Film').getFullList({ sort: 'projection_film' });
}

export async function allActivitiesSorted() {
    return await pb.collection('Activite').getFullList({ sort: 'dateheure_activite' });
}

export async function allInviteSorted() {
    return await pb.collection('Invite').getFullList({ sort: 'nom_invite' });
}

export async function FilmById(id) {
    return await pb.collection('Film').getOne(id);
}

export async function ActivityById(id) {
    return await pb.collection('Activite').getOne(id);
}

export async function InviteById(id) {
    return await pb.collection('Invite').getOne(id);
}

export async function ActivityByInviteId(id) {
    const activityInviteId = await pb.collection('Activite').getFullList({
        filter: `anime.id = '${id}'`,
        expand: 'anime',
    });
    return activityInviteId;
}

export async function ActivityByInviteName(nom) {
    const activityInviteName = await pb.collection('Activite').getFullList({
        filter: `anime.nom_invite = '${nom}'`,
        expand: 'anime',
    });
    return activityInviteName;
}

//Ajouter et modifier les infos d'un film activité ou invité
export async function addNewRecord(collection, newRecord) {
    await pb.collection(collection).create(newRecord);
}
export async function updateRecordById(collection, id, data) {
    await pb.collection(collection).update(id, data);
}