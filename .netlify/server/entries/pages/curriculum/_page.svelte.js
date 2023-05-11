import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { X } from "../../../chunks/runtime.esm.js";
import { T as Tag } from "../../../chunks/Tag.js";
const EN_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".first.svelte-1ciw1fv{margin-top:32px}.last.svelte-1ciw1fv{margin-bottom:32px}",
  map: null
};
const EN = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<p class="first svelte-1ciw1fv">Over the years, I have honed my skills and gained valuable experience in various areas of software
	development. I am well-versed in a wide range of technologies and programming languages, allowing
	me to adapt quickly to new challenges and requirements.
</p>
<p>Whether it&#39;s developing a complex backend system or creating a beautiful and intuitive frontend
	interface, I have the skills and expertise to deliver high-quality solutions that meet the needs
	of my clients.
</p>
<p class="last svelte-1ciw1fv"><a class="button" target="_blank" href="https://my.visualcv.com/vanderlei-alves-da-silva/">Checkout my CV</a>
</p>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".text-column.svelte-10un9fr{gap:32px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(X, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `${$$result.head += `<!-- HEAD_svelte-ikt1xl_START -->${$$result.title = `<title>${escape($_("menu./curriculum"))}</title>`, ""}<meta name="description"${add_attribute("content", $_("menu./curriculum"), 0)}><!-- HEAD_svelte-ikt1xl_END -->`, ""}

${validate_component(Tag, "Tag").$$render($$result, { name: $_("menu./curriculum") }, {}, {
    default: () => {
      return `<div class="text-column svelte-10un9fr">${validate_component(EN, "EN").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
export {
  Page as default
};
