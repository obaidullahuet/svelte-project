import { c as create_ssr_component } from "../../chunks/ssr2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class=""> <main class="">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
