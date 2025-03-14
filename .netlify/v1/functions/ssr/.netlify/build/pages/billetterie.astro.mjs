import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C7miE2PW.mjs';
export { renderers } from '../renderers.mjs';

const $$Billetterie = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto px-4 py-8"> <!-- Hero Section --> <div class="lg:grid lg:grid-cols-12 lg:gap-8 mb-12"> <div class="lg:col-span-6 flex relative"> <img class="w-full lg:hidden" src="./src/assets/images/hero_billetterie.avif" alt="Bannière billetterie"> <img class="hidden lg:block w-full h-[600px] object-cover rounded-lg" src="./src/assets/images/hero_billetterie.avif" alt="Bannière billetterie"> <h1 class="absolute left-0 top-0 p-8 text-4xl lg:text-5xl font-bold text-black drop-shadow-lg">
Billetterie
</h1> </div> <div class="lg:col-span-6 flex items-center mt-6 lg:mt-0"> <div class="bg-sky-950/5 p-6 lg:p-8 rounded-lg"> <h2 class="text-xl lg:text-2xl font-semibold mb-4">
Réservez vos places pour le festival Flash Cinéma 25 et
                        vivez une expérience cinématographique exceptionnelle.
</h2> <p class="text-gray-700">
Du 8 au 10 août, plongez dans l'univers du court-métrage
                        au cœur de la région Bourgogne Franche-Comté.
                        Différentes options de billets sont disponibles pour
                        répondre à vos besoins.
</p> </div> </div> </div> <!-- Options de billetterie --> <section class="mb-16"> <div class="lg:grid lg:grid-cols-12 lg:gap-8"> <!-- Public --> <div class="lg:col-span-6 bg-white p-6 lg:p-8 rounded-lg shadow-md mb-8 lg:mb-0"> <div class="flex items-start"> <div class="bg-orange-400 p-3 rounded-full text-white mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </div> <div> <h3 class="text-2xl font-bold text-orange-400 mb-4">
Grand Public
</h3> <div class="space-y-4"> <p class="text-gray-700">
Découvrez notre programmation exceptionnelle
                                    de courts-métrages et d'événements spéciaux.
                                    C'est l'occasion idéale pour vous d'assister
                                    au festival en réservant vos places via la
                                    Billetterie Grand Public.
</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"> <div class="border border-gray-200 p-4 rounded-lg"> <h4 class="font-semibold text-lg">
Pass Journée
</h4> <p class="text-orange-400 text-xl font-bold">
15€
</p> <p class="text-sm text-gray-600">
Accès à toutes les projections pour
                                            une journée
</p> </div> <div class="border border-gray-200 p-4 rounded-lg"> <h4 class="font-semibold text-lg">
Pass Festival
</h4> <p class="text-orange-400 text-xl font-bold">
35€
</p> <p class="text-sm text-gray-600">
Accès complet aux 3 jours de
                                            festival
</p> </div> </div> <div class="flex justify-center pt-4"> <button class="uppercase bg-orange-400 hover:bg-orange-500 transition-colors text-white font-medium rounded-3xl py-3 px-6"> <a href="">Accéder à la billetterie</a> </button> </div> </div> </div> </div> </div> <!-- Scolaires --> <div class="lg:col-span-6 bg-white p-6 lg:p-8 rounded-lg shadow-md"> <div class="flex items-start"> <div class="bg-orange-400 p-3 rounded-full text-white mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path d="M12 14l9-5-9-5-9 5 9 5z"></path> <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path> </svg> </div> <div> <h3 class="text-2xl font-bold text-orange-400 mb-4">
Établissements scolaires
</h3> <div class="space-y-4"> <p class="text-gray-700">
Vous pouvez réserver un pass festival via le
                                    pass culture ou via les fonds de votre
                                    propre établissement.
</p> <p class="text-gray-700">
Le pass festival vous donne accès à
                                    l'intégralité des projections, ateliers
                                    cinéma et Masterclass pendant 2 jours.
</p> <div class="bg-sky-50 p-4 rounded-lg border border-sky-100"> <p class="text-gray-700">
Veuillez remplir le formulaire suivant
                                        qui nous permettra par la suite de créer
                                        une offre personnalisée pour votre
                                        établissement via le pass culture :
</p> </div> <div class="flex justify-center pt-4"> <button class="uppercase bg-orange-400 hover:bg-orange-500 transition-colors text-white font-medium rounded-xl py-3 px-6"> <a href="">Formulaire à remplir</a> </button> </div> </div> </div> </div> </div> </div> </section> <!-- Informations pratiques --> <section class="mb-16"> <div class="lg:grid lg:grid-cols-12 lg:gap-8"> <div class="lg:col-span-8 lg:col-start-3"> <div class="bg-sky-950/5 p-6 lg:p-8 rounded-lg"> <h3 class="text-2xl font-bold mb-6 text-center">
Informations pratiques
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"> <div> <div class="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h4 class="font-semibold mb-2">Horaires</h4> <p class="text-sm text-gray-600">
Ouverture des portes à 9h<br>Fermeture à
                                    23h
</p> </div> <div> <div class="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path> </svg> </div> <h4 class="font-semibold mb-2">Paiement</h4> <p class="text-sm text-gray-600">
Carte bancaire<br>Espèces<br>Pass
                                    Culture
</p> </div> <div> <div class="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h4 class="font-semibold mb-2">Questions ?</h4> <p class="text-sm text-gray-600">
Contactez-nous par email<br><a href="mailto:billetterie@flashcinema25.com" class="text-orange-400 hover:underline">billetterie@flashcinema25.com</a> </p> </div> </div> </div> </div> </div> </section> </div> ` })}`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/billetterie.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/billetterie.astro";
const $$url = "/billetterie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Billetterie,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
