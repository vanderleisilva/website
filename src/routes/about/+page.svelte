<script lang="ts">
	import { _ } from 'svelte-i18n';
	import EN from './locales/EN.svelte';
	import Tag from '../Tag.svelte';
</script>

<svelte:head>
	<title>{$_('menu./about')}</title>
	<meta name="description" content={$_('menu./about')} />
</svelte:head>

<Tag name={$_('menu./about')}>
	<div class="text-column">
		<EN />
	</div>
</Tag>

<style>
	.text-column {
		gap: 32px;
	}
</style>
