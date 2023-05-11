import { c as create_ssr_component, d as each, a as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { X } from "../../../chunks/runtime.esm.js";
import { T as Tag } from "../../../chunks/Tag.js";
const EN = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Hello everyone <span class="emoji">👋</span></p>

<p>As a software engineer, I have had the privilege of witnessing firsthand how technology has
	transformed the world we live in. From the way we communicate with each other to the way we
	conduct business, technology has opened up a world of opportunities and possibilities that were
	once unimaginable.
</p>

<p>But technology is not just about machines and algorithms. It&#39;s about people, and how we can use
	technology to make a positive impact on the world around us. It&#39;s about innovation, creativity,
	and problem-solving. It&#39;s about constantly pushing the boundaries of what is possible, and
	challenging ourselves to be better, to do more, and to achieve our goals.
</p>

<p>If you have any questions or would like to connect with me, please don&#39;t hesitate to reach out. I
	love meeting new people and sharing my passion for software engineering. Let&#39;s build a community
	of innovators, problem-solvers, and changemakers who are dedicated to making the world a better
	place through technology. Together, we can accomplish anything.
	<br>
	${each([1, 2, 3], (_) => {
    return `<span class="emoji">🚀</span>`;
  })}</p>`;
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
  return `${$$result.head += `<!-- HEAD_svelte-1tt0vrh_START -->${$$result.title = `<title>${escape($_("menu./about"))}</title>`, ""}<meta name="description"${add_attribute("content", $_("menu./about"), 0)}><!-- HEAD_svelte-1tt0vrh_END -->`, ""}

${validate_component(Tag, "Tag").$$render($$result, { name: $_("menu./about") }, {}, {
    default: () => {
      return `<div class="text-column svelte-10un9fr">${validate_component(EN, "EN").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
export {
  Page as default
};
