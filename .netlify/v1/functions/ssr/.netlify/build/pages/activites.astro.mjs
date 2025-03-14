import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C7miE2PW.mjs';
import { $ as $$ImagePB } from '../chunks/ImagePB_D7NrVTWc.mjs';
import { f as formatDate } from '../chunks/utils_BpZUXlkH.mjs';
/* empty css                                 */
import { a as allActivitiesSorted } from '../chunks/backend_BUSeqVC9.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardActivite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardActivite;
  const { ...Activite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition duration-300 hover:shadow-lg group" data-astro-cid-bdkgohj3> <div class="relative" data-astro-cid-bdkgohj3> <a${addAttribute(`/activites/${Activite.id}`, "href")} class="block" data-astro-cid-bdkgohj3> ${renderComponent($$result, "ImagePB", $$ImagePB, { "record": Activite, "field": "image_activite", "alt": Activite.titre_activite || "Image de l'activit\xE9", "classPicture": "w-full aspect-[16/9] overflow-hidden duotone group-hover:before:bg-black", "classImg": "w-full h-[full] object-cover transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105 group-hover:mix-blend-normal", "data-astro-cid-bdkgohj3": true })} <!-- Category Badge --> ${Activite.categorie_activite && renderTemplate`<span class="absolute top-4 right-4 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full" data-astro-cid-bdkgohj3> ${Activite.categorie_activite} </span>`} </a> </div> <div class="p-5 flex-grow flex flex-col" data-astro-cid-bdkgohj3> <h3 class="text-xl font-bold text-orange-400 mb-3 group-hover:text-orange-500 transition-colors" data-astro-cid-bdkgohj3> <a class="text-orange-400"${addAttribute(`/activites/${Activite.id}`, "href")} data-astro-cid-bdkgohj3> ${Activite.titre_activite} </a> </h3> <!-- Date & Time --> ${Activite.dateheure_activite && renderTemplate`<div class="flex items-center gap-2 text-sm text-gray-600 mb-3" data-astro-cid-bdkgohj3> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bdkgohj3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-bdkgohj3></path> </svg> <span data-astro-cid-bdkgohj3>${formatDate(Activite.dateheure_activite)}</span> </div>`} <!-- Location --> ${Activite.lieu_activite && renderTemplate`<div class="flex items-center gap-2 text-sm text-gray-600 mb-3" data-astro-cid-bdkgohj3> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bdkgohj3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-bdkgohj3></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-bdkgohj3></path> </svg> <span data-astro-cid-bdkgohj3>${Activite.lieu_activite}</span> </div>`} <!-- Description --> ${Activite.description_activite && renderTemplate`<div class="text-sm text-gray-700 mb-4 line-clamp-3" data-astro-cid-bdkgohj3> <p data-astro-cid-bdkgohj3>${unescapeHTML(Activite.description_activite)}</p> </div>`} <!-- Button --> <div class="mt-4 mb-0" data-astro-cid-bdkgohj3> <a${addAttribute(`/activites/${Activite.id}`, "href")} class="bottom-0 block text-center bg-orange-400 hover:bg-orange-500 transition-colors text-white rounded-lg py-2 px-4 font-medium" data-astro-cid-bdkgohj3>
Voir les détails
</a> </div> </div> </article> `;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/components/CardActivite.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const activities = await allActivitiesSorted();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" lg:mx-8 lg:px-8 lg:mt-4"> <!-- Hero Section --> <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-8"> <div class="lg:col-span-6 flex relative"> <img class="w-full lg:hidden" src="./src/assets/images/hero_activites.avif" alt="Bannière activités"> <img class="hidden lg:block w-full h-[400px] object-cover rounded-lg" src="./src/assets/images/hero_activites.avif" alt="Bannière activités"> <h1 class="absolute lg:left-0 top-0 p-8 text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
Activités
</h1> </div> <div class="lg:col-span-6 flex items-center mt-6 lg:mt-0"> <div class="bg-sky-950/5 p-6 lg:p-8 rounded-lg"> <h2 class="text-xl lg:text-2xl font-semibold mb-4">
Voici la liste des activités que vous pourrez retrouver
                        lors de notre festival !
</h2> <p class="text-gray-700">
Plus qu'un simple festival de cinéma, Flash Cinéma 25
                        vous propose une expérience complète avec des activités
                        variées pour tous les publics : ateliers créatifs,
                        rencontres avec des professionnels, expositions et
                        animations ludiques.
</p> </div> </div> </div> <!-- Activities Grid Section --> <section class="mb-16"> <div class="lg:grid lg:grid-cols-12"> <div class="lg:col-span-12"> <h3 class="text-2xl lg:text-3xl font-bold pb-6">
Nos activités
</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${activities.map((activite) => renderTemplate`${renderComponent($$result2, "CardActivite", $$CardActivite, { ...activite })}`)} </div> </div> </div> </section> <!-- Call to Action --> <section class="mb-16"> <div class="lg:grid lg:grid-cols-12 lg:gap-8"> <div class="lg:col-span-8 lg:col-start-3"> <div class="bg-orange-50 border border-orange-100 p-6 lg:p-8 rounded-lg text-center"> <h3 class="text-2xl font-bold mb-4">
Réservez votre place aux activités
</h3> <p class="mb-6 text-gray-700">
Les activités sont incluses dans votre pass
                            festival, mais certains ateliers ont une capacité
                            limitée. N'attendez pas pour réserver votre place !
</p> <div class="flex justify-center"> <a href="/billetterie" class="bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-lg transition-colors">
Réserver maintenant
</a> </div> </div> </div> </div> </section> </div> ` })}`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/activites/index.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/activites/index.astro";
const $$url = "/activites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
