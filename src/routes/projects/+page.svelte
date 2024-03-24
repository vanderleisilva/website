<script lang="ts">
	import { _ } from 'svelte-i18n';
	import EN from './locales/EN.svelte';
	import Tag from '../Tag.svelte';
</script>

<svelte:head>
	<title>{$_('page.title', { values: { page: $_('menu./projects') } })}</title>
	<meta
		name="description"
		content={$_('page.description', { values: { page: $_('menu./projects') } })}
	/>
</svelte:head>

<Tag name={$_('menu./projects')}>
	<div class="text-column">
		<EN />
	</div>
</Tag>
