import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$ImagePB } from './ImagePB_D7NrVTWc.mjs';

const $$Astro = createAstro();
const $$CardInvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInvite;
  const { ...Invite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(`/invites/${Invite.id}`, "href")}> ${renderComponent($$result, "ImagePB", $$ImagePB, { "record": Invite, "field": "image_invite", "alt": Invite.imgAlt, "classPicture": "grayscale col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal w-[390px] object-cover" })} </a> <div> <p>${Invite.prenom_invite} ${Invite.nom_invite}</p> <p class="pb-12 pt-0">${Invite.profession_invite}</p> </div> </article>`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/components/CardInvite.astro", void 0);

export { $$CardInvite as $ };
