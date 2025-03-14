import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C7miE2PW.mjs';
import { $ as $$ImagePB } from '../chunks/ImagePB_D7NrVTWc.mjs';
import { d as allFilmSorted } from '../chunks/backend_BUSeqVC9.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardFilm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardFilm;
  const { film } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"> <div class="relative aspect-[2/3] bg-sky-950"> ${renderComponent($$result, "ImagePB", $$ImagePB, { "record": film, "field": "affiche_film", "alt": `Affiche du film ${film.titre_film}`, "classPicture": "w-full h-full", "classImg": "object-cover object-center w-full h-full", "thumb": "0x400" })} </div> <div class="p-5 flex-grow flex flex-col"> <h3 class="text-xl font-bold text-orange-400 mb-2"> ${film.titre_film} </h3> <div class="text-sm text-gray-700 mb-4 space-y-2"> ${film.realisateur_film && renderTemplate`<p class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path> </svg> <span> <strong>Réalisateur:</strong>${" "} ${film.realisateur_film} </span> </p>`} ${film.projection_film && renderTemplate`<p class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path> </svg> <span> <strong>Projection:</strong>${" "} ${new Date(
    film.projection_film
  ).toLocaleDateString()} </span> </p>`} ${(film.expand?.lieu?.name || film.lieu) && renderTemplate`<p class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path> </svg> <span> <strong>Lieu:</strong>${" "} ${film.expand?.lieu?.name || film.lieu} </span> </p>`} </div> ${film.synopsis_film && renderTemplate`<div class="prose prose-sm line-clamp-3 mb-4 text-gray-600"> <span>${unescapeHTML(film.synopsis_film)}</span> </div>`} <div class="mt-auto pt-4"> <a${addAttribute(`/programmation/${film.id}`, "href")} class="inline-block bg-orange-400 font-medium py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors w-full text-center">
Voir détails
</a> </div> </div> </div>`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/components/CardFilm.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Film = await allFilmSorted();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-8"> <div class="lg:col-span-6 flex relative"> <img class="w-full lg:hidden" src="./src/assets/images/hero_prog.avif" alt="Bannière programmation"> <img class="hidden lg:block w-full h-[400px] object-cover rounded-lg" src="./src/assets/images/prog_accueil.avif" alt="Bannière programmation"> <h1 class="absolute left-0 top-0 p-8 text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
Programmation
</h1> </div> <div class="lg:col-span-6 flex items-center mt-6 lg:mt-0"> <div class="bg-sky-950/5 p-6 lg:p-8 rounded-lg"> <h2 class="text-xl lg:text-2xl font-semibold mb-4">
Voici la liste des films choisis par nos soins pour une
                        expérience cinématographique unique et diversifiée.
</h2> <p class="text-gray-700">
Découvrez notre sélection soigneusement préparée par
                        notre comité de programmation, mettant en avant des
                        œuvres originales, des talents émergents et des films
                        primés dans divers festivals internationaux.
</p> </div> </div> </div> <section class="mb-16"> <div class="lg:grid lg:grid-cols-12"> <div class="lg:col-span-12"> <h2 class="text-2xl lg:text-3xl font-bold pb-6">
Programmation du festival
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${Film && Film.map((film) => renderTemplate`${renderComponent($$result2, "FilmCard", $$CardFilm, { "film": film })}`)} </div> </div> </div> </section> </div> <section class="mb-16"> <div class="lg:grid lg:grid-cols-12 lg:gap-8"> <div class="lg:col-span-7"> <h3 class="text-2xl lg:text-3xl font-bold mb-4">
Séances spéciales
</h3> <p class="text-lg mb-6">
Plongez dans l'univers unique du festival avec des
                    événements exclusifs :
</p> <ul class="list-disc pl-6 space-y-4"> <li> <p class="text-gray-800"> <span class="font-semibold text-orange-500">Avant-premières</span> : Découvrez en exclusivité des œuvres inédites et échangez
                            avec leurs créateurs lors de projections intimistes.
</p> </li> <li> <p class="text-gray-800"> <span class="font-semibold text-orange-500">Masterclasses</span> : Apprenez des plus grands noms du cinéma et de l'audiovisuel
                            grâce à des sessions pédagogiques captivantes.
</p> </li> <li> <p class="text-gray-800"> <span class="font-semibold text-orange-500">Rencontres</span> : Participez à des discussions privilégiées avec des
                            réalisateurs, scénaristes ou acteurs, et explorez les
                            coulisses de leurs créations.
</p> </li> </ul> </div> <div class="lg:col-span-5 mt-8 lg:mt-0"> <figure class="bg-white p-4 rounded-lg shadow-md"> <img class="w-full h-auto rounded-lg object-cover" src="./src/assets/images/masterclass.avif" alt="Masterclass sur l'animation"> <figcaption class="text-center pt-4 text-gray-600 font-medium">
Masterclass sur l'animation
</figcaption> </figure> </div> </div> </section> <section class="mb-16"> <div class="lg:grid lg:grid-cols-12 lg:gap-8"> <div class="lg:col-span-5 order-2 lg:order-1 mt-8 lg:mt-0"> <figure class="bg-white p-4 rounded-lg shadow-md"> <img class="w-full h-auto rounded-lg object-cover" src="./src/assets/images/musee.avif" alt="Musée Gustave Courbet"> <figcaption class="text-center pt-4 text-gray-600 font-medium">
Musée Gustave Courbet
</figcaption> </figure> </div> <div class="lg:col-span-7 order-1 lg:order-2"> <h3 class="text-2xl lg:text-3xl font-bold mb-4">
Activités annexes
</h3> <p class="text-lg mb-6">
Le festival, c'est bien plus que des projections ! Profitez
                    d'un éventail d'activités pour enrichir votre expérience :
</p> <ul class="list-disc pl-6 space-y-4"> <li> <p class="text-gray-800"> <span class="font-semibold text-orange-500">Ateliers</span> : Initiez-vous aux techniques audiovisuelles, du montage
                            vidéo à l'écriture de scénario, encadré par des professionnels.
</p> </li> <li> <p class="text-gray-800"> <span class="font-semibold text-orange-500">Expositions</span> : Admirez des installations artistiques et photographiques
                            célébrant le 7ᵉ art.
</p> </li> <li> <p class="text-gray-800"> <span class="font-semibold text-orange-500">Animations</span> : Vibrez avec des performances en direct, projections
                            en plein air, et moments conviviaux pour tous les âges.
</p> </li> </ul> </div> </div> </section> <section class="mb-16"> <div class="lg:grid lg:grid-cols-12 lg:gap-8"> <div class="lg:col-span-8 mb-8 lg:mb-0"> <div class="bg-sky-50 p-6 rounded-lg border border-sky-100"> <h3 class="text-xl lg:text-2xl font-bold mb-4">
Téléchargement du programme (PDF)
</h3> <p class="text-gray-700 mb-4">
Pour ne rien manquer, téléchargez le programme complet
                        du festival en un clic. Disponible au format PDF, il est
                        conçu pour vous accompagner partout, en ligne ou hors
                        ligne.
</p> <a class="inline-block bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-lg transition-colors" href="">
Télécharger le programme
</a> </div> </div> <!-- Admin link --> <div class="lg:col-span-4"> <div class="bg-gray-50 p-6 rounded-lg border border-gray-100"> <h3 class="text-xl lg:text-2xl font-bold mb-4">
Ajoutez un film
</h3> <p class="text-gray-700 mb-4">
Espace réservé à l'administration du festival pour
                        ajouter de nouveaux films à la programmation.
</p> <a class="inline-block bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors" href="/programmation/add">
Accès administration
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/programmation/index.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/programmation/index.astro";
const $$url = "/programmation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
