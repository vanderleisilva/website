import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { X } from "../../chunks/runtime.esm.js";
const github = "/_app/immutable/assets/github.1ea8d62e.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1uwqzur.svelte-1uwqzur{display:flex;justify-content:space-between;z-index:1;--background:rgba(255, 255, 255, 0.7)}.corner.svelte-1uwqzur.svelte-1uwqzur{width:3em;height:3em}.logo.svelte-1uwqzur.svelte-1uwqzur{display:flex;width:auto;overflow:hidden}.logo.svelte-1uwqzur svg.svelte-1uwqzur{transform:scaleY(-1)}.logo.svelte-1uwqzur a.svelte-1uwqzur{font-family:'franklin-gothic-demi-cond-regular';color:var(--color-text);display:block;background:var(--background);padding-left:5px;transform:scaleY(2)}.corner.svelte-1uwqzur a.svelte-1uwqzur{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-1uwqzur img.svelte-1uwqzur{width:2em;height:2em;object-fit:contain}nav.svelte-1uwqzur.svelte-1uwqzur{display:flex;justify-content:center}svg.svelte-1uwqzur.svelte-1uwqzur{width:2em;height:3em;display:block}path.svelte-1uwqzur.svelte-1uwqzur{fill:var(--background)}ul.svelte-1uwqzur.svelte-1uwqzur{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1uwqzur.svelte-1uwqzur{position:relative;height:100%}li[aria-current='page'].svelte-1uwqzur.svelte-1uwqzur::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-1uwqzur a.svelte-1uwqzur{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;transition:color 0.2s linear}a.svelte-1uwqzur.svelte-1uwqzur:hover{color:var(--color-theme-1)}@media(max-width: 599px){.corner.svelte-1uwqzur.svelte-1uwqzur{display:none}header.svelte-1uwqzur.svelte-1uwqzur{display:block}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $_, $$unsubscribe__;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe__ = subscribe(X, (value) => $_ = value);
  let isSelected;
  $$result.css.add(css$1);
  isSelected = (page2) => $page.url.pathname === page2 ? "page" : void 0;
  $$unsubscribe_page();
  $$unsubscribe__();
  return `



<header class="svelte-1uwqzur"><div class="corner logo svelte-1uwqzur"><a href="/" class="svelte-1uwqzur"><span>VAS</span></a>
		<div><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1uwqzur"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1uwqzur"></path></svg></div></div>

	<nav class="svelte-1uwqzur"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1uwqzur"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1uwqzur"></path></svg>
		<ul class="svelte-1uwqzur"><li${add_attribute("aria-current", isSelected("/"), 0)} class="svelte-1uwqzur"><a href="/" class="svelte-1uwqzur">${escape($_("menu./"))}</a></li>
			<li${add_attribute("aria-current", isSelected("/about"), 0)} class="svelte-1uwqzur"><a href="/about" class="svelte-1uwqzur">${escape($_("menu./about"))}</a></li>
			<li${add_attribute("aria-current", isSelected("/curriculum"), 0)} class="svelte-1uwqzur"><a href="/curriculum" class="svelte-1uwqzur">${escape($_("menu./curriculum"))}</a></li>
			<li${add_attribute("aria-current", isSelected("/contact"), 0)} class="svelte-1uwqzur"><a href="/contact" class="svelte-1uwqzur">${escape($_("menu./contact"))}</a></li></ul>
		<svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1uwqzur"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1uwqzur"></path></svg></nav>

	<div class="corner svelte-1uwqzur"><a href="https://github.com/vanderleisilva" class="svelte-1uwqzur"><img${add_attribute("src", github, 0)} alt="GitHub" class="svelte-1uwqzur"></a></div>
</header>`;
});
const styles = "";
const csm = "/_app/immutable/assets/csm-certification.8395449a.png";
const microsoft = "/_app/immutable/assets/microsoft-certification.64eb6ac9.png";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-fxy21v.svelte-fxy21v{display:flex;flex-direction:column;min-height:100vh}main.svelte-fxy21v.svelte-fxy21v{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box;padding:1em;position:relative;justify-content:center}footer.svelte-fxy21v.svelte-fxy21v{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px;position:relative}footer.svelte-fxy21v a.svelte-fxy21v{font-weight:bold}.certificates.svelte-fxy21v img.svelte-fxy21v{width:80px}.certificates.svelte-fxy21v.svelte-fxy21v{position:absolute;right:0;bottom:0}@media(min-width: 480px){footer.svelte-fxy21v.svelte-fxy21v{padding:12px 0}}@media(max-width: 899px){.certificates.svelte-fxy21v.svelte-fxy21v{display:none}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(X, (value) => $_ = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="app svelte-fxy21v">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="svelte-fxy21v">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-fxy21v"><p>${escape($_("footer.sentence1"))}
			<a href="/contact" class="svelte-fxy21v">${escape($_("footer.sentence2"))}</a>!
		</p>
		<p class="certificates svelte-fxy21v"><img${add_attribute("src", microsoft, 0)} alt="tes" class="svelte-fxy21v">
			<img${add_attribute("src", csm, 0)} alt="tes" class="svelte-fxy21v"></p></footer>
</div>`;
});
export {
  Layout as default
};
