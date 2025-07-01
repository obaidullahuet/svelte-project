

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/server/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BT7t_Yp6.js","_app/immutable/chunks/C_NSvUt5.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = [];
export const fonts = [];
