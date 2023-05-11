import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.81106f7b.js","_app/immutable/chunks/index.93769664.js","_app/immutable/chunks/runtime.esm.4555f97b.js","_app/immutable/chunks/index.2d6009d5.js"];
export const stylesheets = ["_app/immutable/assets/2.f51794d9.css"];
export const fonts = [];
