// +layout.ts
import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (param) => {
	if (browser) {
		locale.set(window.navigator.language);
	}
	await waitLocale();

	return {
		pathname: param.url.pathname
	};
};
