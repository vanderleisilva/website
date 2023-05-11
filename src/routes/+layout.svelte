<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	import { _ } from 'svelte-i18n';
	import { scale } from 'svelte/transition';
	import csm from '$lib/images/csm-certification.png';
	import microsoft from '$lib/images/microsoft-certification.png';

	export let data: { pathname: string };
</script>

<div class="app">
	<Header />

	{#key data.pathname}
		<main in:scale={{ duration: 300 }}>
			<slot />
		</main>
	{/key}

	<footer>
		<p>
			{$_('footer.sentence1')}
			<a href="/contact">{$_('footer.sentence2')}</a>!
		</p>
		<p class="certificates">
			<img src={microsoft} alt="tes" />
			<img src={csm} alt="tes" />
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 1em;
		position: relative;
		justify-content: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		position: relative;
	}

	footer a {
		font-weight: bold;
	}

	.certificates img {
		width: 80px;
	}
	.certificates {
		position: absolute;
		right: 0;
		bottom: 0;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	@media (max-width: 899px) {
		.certificates {
			display: none;
		}
	}
</style>
