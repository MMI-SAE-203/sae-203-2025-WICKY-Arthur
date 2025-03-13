import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DbfQRVrC.mjs';
import { $ as $$ImagePB } from '../../chunks/ImagePB_D7NrVTWc.mjs';
import { F as FilmById } from '../../chunks/backend_BUSeqVC9.mjs';
import { a as formatDateAnnee, b as formatDateNoHour } from '../../chunks/utils_BpZUXlkH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const Film = await FilmById(id);
  console.log(Film);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div> <div class="flex gap-4 items-top"> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": Film, "field": "affiche_film", "alt": Film.imgAlt, "classPicture": "border-3 border-sky-900 col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal w-50 object-cover" })} <div> <h2 class="text-black"> ${Film.titre_film} (${formatDateAnnee(Film.sortie_film)})
</h2> <p class="text-black text-sm font-light mt-4">
Un film de ${Film.realisateur_film} </p> <p class="text-black text-sm font-light mt-4">
Genres : ${Film.genres} </p> <p class="text-black text-sm font-light mt-4">
Durée : ${Film.duree_film} </p> </div> </div> </div> </section> <div class="border-1 border-sky-900 w-full"></div> <section> <div class="flex flex-col gap-4"> <p>
Court-métrage de ${Film.realisateur_film} - ${Film.duree_film} - ${formatDateNoHour(Film.sortie_film)} (France)
</p> <div> <p class="font-bold">Genres :</p> <p>${Film.genres}</p> </div> <div> <p class="font-bold">Langue :</p> <p>${Film.langue_film}</p> </div> <div> <p class="font-bold">Acteurs :</p> <p>${Film.acteurs_film}</p> </div> <div> <p class="font-bold">Synopsis :</p> <span>${unescapeHTML(Film.synopsis_film)}</span> </div> </div> </section> <div class="border-1 border-sky-900 w-full"></div> <section> <div> <h3>Bande-Annonce</h3> <div class="text-center block p-20 bg-gray-300"> <a${addAttribute(`${Film.ba_film}`, "href")}>voir bande-anonnce</a> </div> </div> </section> <div class="border-1 border-sky-900 w-full"></div> <section> <div> <h3>Invité associé</h3> <a${addAttribute(`/invites/${Film.expand?.present.id}`, "href")}> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": Film.expand?.present, "field": "image_invite", "alt": Film.imgAlt, "classPicture": "grayscale col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal w-full object-cover" })} </a> <div> <p class="pt-2 font-semibold text-xl"> ${Film.expand?.present.prenom_invite} ${Film.expand?.present.nom_invite} </p> <p class="pt-0"> ${Film.expand?.present.profession_invite} </p> </div> </div> </section> ` })}`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/programmation/[id].astro", void 0);

const $$file = "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/programmation/[id].astro";
const $$url = "/programmation/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
