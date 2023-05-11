import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { X } from "../../../chunks/runtime.esm.js";
import { T as Tag } from "../../../chunks/Tag.js";
const EN = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>It&#39;s a pleasure to have you here on my corner of the internet! <span class="emoji">❤️</span></p>

<p>Thank you for visiting. I&#39;m glad you&#39;re interested in getting in touch.</p>

<p>If you would like to connect with me on LinkedIn, you can find me <a href="https://www.linkedin.com/in/vanderlei-alves-da-silva/" target="_blank">here</a></p>

<p>Also available on <a href="https://github.com/vanderleisilva" target="_blank">Github</a> or simply
	send me an email at
	<a href="mailto:vanderlei.alves.da.silva@gmail.com">vanderlei.alves.da.silva@gmail.com</a>
	.
</p>

<p>I&#39;m currently based in Munich, so if you&#39;re located nearby or would like to discuss local
	opportunities, feel free to reach out.
</p>

<p>Looking forward to hearing from you! <span class="emoji">👋</span></p>`;
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
  return `${$$result.head += `<!-- HEAD_svelte-1cwmz0l_START -->${$$result.title = `<title>${escape($_("menu./contact"))}</title>`, ""}<meta name="description"${add_attribute("content", $_("menu./contact"), 0)}><!-- HEAD_svelte-1cwmz0l_END -->`, ""}

${validate_component(Tag, "Tag").$$render($$result, { name: $_("menu./contact") }, {}, {
    default: () => {
      return `<div class="text-column svelte-10un9fr">${validate_component(EN, "EN").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
export {
  Page as default
};
