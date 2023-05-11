import { c as create_ssr_component } from "./index2.js";
const Tag_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tag.svelte-a2464h{font-weight:bold;font-style:italic;font-size:1.5rem}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let openTag = `&lt;${name}&gt;`;
  let closeTag = `&lt;/${name}&gt;`;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `



<span class="tag svelte-a2464h"><!-- HTML_TAG_START -->${openTag}<!-- HTML_TAG_END --></span>
${slots.default ? slots.default({}) : ``}
<span class="tag svelte-a2464h"><!-- HTML_TAG_START -->${closeTag}<!-- HTML_TAG_END --></span>`;
});
export {
  Tag as T
};
