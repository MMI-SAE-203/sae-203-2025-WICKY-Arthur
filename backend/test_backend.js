import { array } from "astro:schema";
import { allFilmSorted } from "./backend.mjs";
import { allActivitiesSorted } from "./backend.mjs";
import { allInviteSorted } from "./backend.mjs";
import { FilmById } from "./backend.mjs";
import { ActivityById } from "./backend.mjs";
import { InviteById } from "./backend.mjs";
import { ActivityByInviteId } from "./backend.mjs";
import { ActivityByInviteName } from "./backend.mjs";
import { addNewRecord } from "./backend.mjs";
import { updateRecordById } from "./backend.mjs";
import fs from 'fs';

// try{
//     const result = await allFilmSorted();
//     console.log(result);
// } catch (e){
//     console.error(e);
// }

// try {
//     const result = await allActivitiesSorted();
//     console.log(result);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const result = await allInviteSorted();
//     console.log(result);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const result = await FilmById('240bfwpd25z75yv');
//     console.log(result);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const result = await ActivityById('8421nveoa61egll');
//     console.log(result);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const result = await InviteById('ld83088y5ox8uf5');
//     console.log(result);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const result = await ActivityByInviteId('ld83088y5ox8uf5');
//     console.log(result);
// } catch (e) {
//     console.error(e);
// }

// try {
//     const result = await ActivityByInviteName('Jeunet');
//     console.log(result);
// } catch (e) {
//     console.error(e);
// }

// AJOUT & MODIFICATION FILM
// const nouveauRecord = {
    // "titre_film": "El Filmos",
    // "affiche_film": fs.readFileSync("./backend/image.png"),
    // "synopsis_film": "Larry, un chat espiègle et aventurier, vit paisiblement dans une petite ville jusqu’au jour où il découvre qu’il lui reste une seule de ses neuf vies. Bien décidé à en profiter au maximum, il se lance dans une série d’aventures rocambolesques : échapper à un chien trop curieux, infiltrer un restaurant pour voler du saumon, et même jouer les héros en sauvant un oiseau piégé. Mais lorsqu’il réalise que sa dernière vie est précieuse non pas pour ses exploits, mais pour ceux qui l’aiment, Félix devra choisir entre ses farces habituelles et un acte de bravoure qui pourrait tout changer.",
    // "duree_film": "24min",
    // "sortie_film": "2021-08-10 23:30:00.000Z",
    // "projection_film": "2025-08-10 23:30:00.000Z",
    // "lieu": "Cinéma d'Ornans",
    // "genres": "Horreur",
    // "langue_film": "Français",
    // "acteurs_film": "Larry",
    // "ba_film": "https://www.youtube.com/watch?v=IxX_QHay02M&pp=ygUUdmlkZW8gY2hhdCBxdWkgZGFuc2U%3D",
// };
// await addNewRecord('Film', nouveauRecord);
// const data = {
//     "titre_film": "C'était Larry",
// };
//await updateRecordById('Film', '240bfwpd25z75yv', data);

