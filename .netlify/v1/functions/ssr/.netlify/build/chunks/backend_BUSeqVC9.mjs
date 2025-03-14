import PocketBase from 'pocketbase';

// const pb = new PocketBase('http://127.0.0.1:8090')
const pb = new PocketBase('https://flashcinema25.arthurwicky.fr:443');

async function allFilmSorted() {
    return await pb.collection('Film').getFullList({ sort: 'projection_film' });
}

async function allActivitiesSorted() {
    return await pb.collection('Activite').getFullList({ sort: 'dateheure_activite' });
}

async function allInviteSorted() {
    return await pb.collection('Invite').getFullList({ sort: 'nom_invite' });
}

async function FilmById(id) {
    return await pb.collection('Film').getOne(id, { expand: 'present' });
}

async function ActivityById(id) {
    const activite = await pb.collection('Activite').getOne(id, { expand: 'anime' });
    return activite;
}

async function InviteById(id) {
    const invite = await pb.collection('Invite').getOne(id, { expand: 'activite_invite' });
    return invite;
}


//Ajouter et modifier les infos d'un film activité ou invité
async function addNewRecord(collection, newRecord) {
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

export { ActivityById as A, FilmById as F, InviteById as I, allActivitiesSorted as a, addNewRecord as b, allInviteSorted as c, allFilmSorted as d, pb as p };
