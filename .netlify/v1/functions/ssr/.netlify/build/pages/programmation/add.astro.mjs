import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BZPsnJEQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DbfQRVrC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Add = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h2>Ajoutez un film à la programmation</h2> </section> ` })}`;
}, "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/programmation/add.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/sae-203-2025-WICKY-Arthur/src/pages/programmation/add.astro";
const $$url = "/programmation/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
