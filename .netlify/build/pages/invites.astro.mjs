import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C7miE2PW.mjs';
import { $ as $$CardInvite } from '../chunks/CardInvite_Brp7vNIZ.mjs';
import { c as allInviteSorted } from '../chunks/backend_BUSeqVC9.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { id } = Astro2.params;
  const invites = await allInviteSorted();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-12"> <div class="lg:col-span-6 flex relative"> <img class="w-full lg:hidden" src="./src/assets/images/hero_invites.avif" alt="Bannière invités du festival"> <img class="hidden lg:block w-full h-[400px] object-cover rounded-lg" src="./src/assets/images/hero_invites.avif" alt="Bannière invités du festival"> <h1 class="absolute left-0 top-0 p-8 text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
Nos Invités
</h1> </div> <div class="lg:col-span-6 flex items-center mt-6 lg:mt-0"> <div class="bg-sky-950/5 p-6 lg:p-8 rounded-lg"> <h2 class="text-xl lg:text-2xl font-semibold mb-4">
Découvrez les personnalités qui font briller le festival
                        cette année !
</h2> <p class="text-gray-700">
Retrouvez la liste complète des réalisateurs, acteurs,
                        membres du jury, et autres talents qui vous partageront
                        leur passion pour le 7ᵉ art. Chaque invité est présenté
                        avec un aperçu de son parcours et ses contributions au
                        festival. Cliquez sur leur profil pour en savoir plus !
</p> </div> </div> </div> <!-- All Guests Section --> <section class="mb-16"> <h2 class="text-2xl lg:text-3xl font-bold mb-6">
Tous nos invités
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> ${invites.map((invite) => renderTemplate`${renderComponent($$result2, "CardInvite", $$CardInvite, { ...invite })}`)} </div> </section> </div> ` })}`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/invites/index.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/invites/index.astro";
const $$url = "/invites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
