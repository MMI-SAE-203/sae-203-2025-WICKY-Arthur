import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C7miE2PW.mjs';
import { $ as $$ImagePB } from '../../chunks/ImagePB_D7NrVTWc.mjs';
import { $ as $$CardInvite } from '../../chunks/CardInvite_Brp7vNIZ.mjs';
import { A as ActivityById, I as InviteById } from '../../chunks/backend_BUSeqVC9.mjs';
import { f as formatDate } from '../../chunks/utils_BpZUXlkH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const Activite = await ActivityById(id);
  const IdInvite = { id: Activite.anime };
  const Invite = await InviteById(IdInvite.id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div> <h2>${Activite.titre_activite}</h2> <ul> <li>${Activite.lieu_activite}</li> <li>${formatDate(Activite.dateheure_activite)}</li> </ul> </div> </section> <div> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": Activite, "field": "image_activite", "alt": Activite.imgAlt, "classPicture": "duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal w-full object-cover" })} </div> <section class="pb-6"> <div>${unescapeHTML(Activite.description_activite)}</div> </section> <section class="pt-0"> <h3>Invité présent</h3> <div> ${renderComponent($$result2, "CardInvite", $$CardInvite, { ...Invite })} </div> <!-- <ImagePB
            record={Invite}
            field="image_invite"
            alt={Invite.imgAlt}
            classPicture="duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black"
            classImg="group-hover:grayscale-0 group-hover:mix-blend-normal w-full object-cover"
        />
        <p class="pt-2">{Invite.prenom_invite} {Invite.nom_invite}</p>
        <p class="text-sm font-light">{Invite.profession_invite}</p> --> </section> ` })}`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/activites/[id].astro", void 0);

const $$file = "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/activites/[id].astro";
const $$url = "/activites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
