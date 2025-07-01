

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.nwMKuLd9.js","_app/immutable/chunks/C_NSvUt5.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/BX655cEg.js"];
export const stylesheets = [];
export const fonts = [];
