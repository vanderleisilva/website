<script lang="ts">
	import Header from './Header.svelte';
	import './styles.css';
	import { _ } from 'svelte-i18n';
	import { scale } from 'svelte/transition';
	import csm from '$lib/images/csm-certification.png';
	import microsoft from '$lib/images/microsoft-certification.png';
	import aws from '$lib/images/aws-certification.png';
	import profileImg from '$lib/images/profile-sm.jpeg';

	export let data: { pathname: string };
</script>

<svelte:head>
	<meta property="og:site_name" content={$_('site-description')} />
	<meta name="description" content={$_('site-meta-description')} />
	<meta name="keywords" content={$_('keywords')} />
	<meta property="og:title" content={$_('site-description')} />
	<meta property="og:description" content={$_('site-meta-description')} />

	<meta property="og:url" content="https://vanderleialves.com" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={profileImg} />
</svelte:head>

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
			<a
				target="_blank"
				href="https://www.credly.com/badges/4a70bdb3-4c6a-4c25-9d25-d714c62e0b80/public_url"
			>
				<img src={aws} width="55" alt={$_('footer.aws-certificate')} />
			</a>
			<img src={microsoft} alt={$_('footer.microsoft-certificate')} />
			<img class="scrum" src={csm} alt={$_('footer.scrum-certificate')} />
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
		max-width: 77rem;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 1em;
		position: relative;
		justify-content: center;
		margin-top: 48px;
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
		width: 60px;
	}
	.certificates .scrum {
		width: 50px;
	}
	.certificates {
		position: absolute;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: flex-start;
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
