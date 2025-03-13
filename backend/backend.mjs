import PocketBase from 'pocketbase';
// const pb = new PocketBase('http://127.0.0.1:8090')
const pb = new PocketBase('https://flashcinema25.arthurwicky.fr:443')
export { pb };

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
    return await pb.collection('Film').getOne(id, { expand: 'present' });
}

export async function ActivityById(id) {
    const activite = await pb.collection('Activite').getOne(id, { expand: 'anime' });
    return activite;
}

export async function InviteById(id) {
    const invite = await pb.collection('Invite').getOne(id, { expand: 'activite_invite' });
    return invite;
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

export async function getFilmsByGenre(genre) {
    return await pb.collection('Film').getFullList({ filter: `genre_film = '${genre}'` });
}


//Ajouter et modifier les infos d'un film activité ou invité
export async function addNewRecord(collection, newRecord) {
    try {
        await pb.collection(collection).create(newRecord);
        return {
            success: true,
            message: 'Offre ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
    // await pb.collection(collection).create(newRecord);
}
export async function updateRecordById(collection, id, data) {
    await pb.collection(collection).update(id, data);
}