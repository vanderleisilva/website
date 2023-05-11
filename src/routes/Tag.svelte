<!-- @component Add a container tag in the page layout -->

<script lang="ts">
	export let name: string;

	let openTag = `&lt;${name}&gt;`;
	let closeTag = `&lt;/${name}&gt;`;
</script>

<span class="tag">{@html openTag}</span>
<slot />
<span class="tag">{@html closeTag}</span>

<style>
	.tag {
		font-weight: bold;
		font-style: italic;
		font-size: 1.5rem;
	}
</style>
