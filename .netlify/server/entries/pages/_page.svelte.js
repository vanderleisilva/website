import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/index2.js";
import { X } from "../../chunks/runtime.esm.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-3j9mk7{font-family:'franklin-gothic-demi-cond-regular';font-size:1vh;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;flex:0.6;position:relative}h1.svelte-3j9mk7{font-size:6.4em;transform:scaleY(2.5);margin-top:0;margin-bottom:0.5em}h2.svelte-3j9mk7{font-size:4.4em;margin-top:0;transform:scaleY(2.5);letter-spacing:-0.04em;white-space:nowrap}li.svelte-3j9mk7{margin-top:3%}h1.svelte-3j9mk7:nth-child(1){color:transparent;-webkit-text-stroke:2px var(--color-theme-1)}h1.svelte-3j9mk7:nth-child(2){position:absolute;top:122px;color:var(--color-theme-1);animation:svelte-3j9mk7-animate 4s ease-in-out infinite}@media(min-width: 600px){h1.svelte-3j9mk7{font-size:10em}h2.svelte-3j9mk7{font-size:10em}h1.svelte-3j9mk7:nth-child(2){top:62px}}@media(min-width: 900px){ul.svelte-3j9mk7{position:absolute;max-width:30%;right:0;top:3em;font-size:1.1em}li.svelte-3j9mk7{margin-top:10%}h1.svelte-3j9mk7{font-size:20em}h2.svelte-3j9mk7{font-size:13em}h1.svelte-3j9mk7:nth-child(2){top:32px}}@keyframes svelte-3j9mk7-animate{0%,100%{clip-path:polygon(\n				0% 45%,\n				16% 44%,\n				33% 50%,\n				54% 60%,\n				70% 61%,\n				84% 59%,\n				100% 52%,\n				100% 100%,\n				0% 100%\n			)}50%{clip-path:polygon(\n				0% 60%,\n				15% 65%,\n				34% 66%,\n				51% 62%,\n				67% 50%,\n				84% 45%,\n				100% 46%,\n				100% 100%,\n				0% 100%\n			)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(X, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `${$$result.head += `<!-- HEAD_svelte-1qmufws_START -->${$$result.title = `<title>${escape($_("home.title1"))}</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1qmufws_END -->`, ""}

<section class="svelte-3j9mk7"><h1 class="svelte-3j9mk7">VANDY</h1>
	<h1 class="svelte-3j9mk7">VANDY</h1>
	<h2 class="svelte-3j9mk7">ALVES DA SILVA</h2></section>

<ul class="svelte-3j9mk7"><li class="svelte-3j9mk7">${escape($_("home.title1"))}</li>
	<li class="svelte-3j9mk7">${escape($_("home.title2"))}</li>
	<li class="svelte-3j9mk7">${escape($_("home.title3"))}</li>
	<li class="svelte-3j9mk7">${escape($_("home.title4"))}</li>
</ul>`;
});
export {
  Page as default
};
