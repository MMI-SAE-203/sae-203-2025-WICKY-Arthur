import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_wnA4sAYC.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/activites/_id_.astro.mjs');
const _page3 = () => import('./pages/activites.astro.mjs');
const _page4 = () => import('./pages/billetterie.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/infos.astro.mjs');
const _page7 = () => import('./pages/invites/_id_.astro.mjs');
const _page8 = () => import('./pages/invites.astro.mjs');
const _page9 = () => import('./pages/programmation/add.astro.mjs');
const _page10 = () => import('./pages/programmation/_id_.astro.mjs');
const _page11 = () => import('./pages/programmation.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/activites/[id].astro", _page2],
    ["src/pages/activites/index.astro", _page3],
    ["src/pages/billetterie.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/infos.astro", _page6],
    ["src/pages/invites/[id].astro", _page7],
    ["src/pages/invites/index.astro", _page8],
    ["src/pages/programmation/add.astro", _page9],
    ["src/pages/programmation/[id].astro", _page10],
    ["src/pages/programmation/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0a2ccacc-5554-4f0b-982a-01d6b57498ae"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
