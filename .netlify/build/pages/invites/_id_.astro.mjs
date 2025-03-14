import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C7miE2PW.mjs';
import { $ as $$ImagePB } from '../../chunks/ImagePB_D7NrVTWc.mjs';
import { I as InviteById } from '../../chunks/backend_BUSeqVC9.mjs';
import { f as formatDate } from '../../chunks/utils_BpZUXlkH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const Invite = await InviteById(id);
  console.log(Invite);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="flex gap-4 items-center"> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": Invite, "field": "image_invite", "alt": Invite.imgAlt, "classPicture": "border-3 border-sky-900 grayscale col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal w-50 object-cover" })} <div class="box bg-sky-950 rounded-3xl text-white p-4 w-auto h-auto"> <h2 class="text-orange-400"> ${Invite.prenom_invite} ${Invite.nom_invite} </h2> <p class="text-sm font-light">${Invite.nationalite_invite}</p> <p class="text-sm font-light"> ${Invite.annee_naissance_invite} (${Invite.age_invite}ans)
</p> <p class="text-sm font-light">${Invite.profession_invite}</p> </div> </div> </section> <div class="border-1 border-sky-900 w-full"></div> <section> <h3>Biographie</h3> <div>${unescapeHTML(Invite.biographie_invite)}</div> </section> <div class="border-1 border-sky-900 w-full"></div> <section> <div> <h3>${Invite.expand?.activite_invite.titre_activite}</h3> <p class="italic block border-t-1 border-b-1"> ${formatDate(Invite.expand?.activite_invite.dateheure_activite)} /
${Invite.expand?.activite_invite.lieu_activite} </p> <div class="pt-4">${unescapeHTML(Invite.expand?.activite_invite.description_activite)}</div> </div> </section> ` })}`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/invites/[id].astro", void 0);

const $$file = "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/invites/[id].astro";
const $$url = "/invites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
