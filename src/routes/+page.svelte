<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('site-description')}</title>
	<meta name="description" content={$_('site-description')} />
</svelte:head>

<section>
	<div class="h1-container">
		<h1>VANDY</h1>
		<h1>VANDY</h1>
		<ul class="lg-devices">
			<li>{$_('home.title1')}</li>
			<li>{$_('home.title2')}</li>
			<li>{$_('home.title3')}</li>
			<li>{$_('home.title4')}</li>
		</ul>
	</div>
	<h2>ALVES DA SILVA</h2>
</section>

<ul class="md-devices">
	<li>{$_('home.title1')}</li>
	<li>{$_('home.title2')}</li>
	<li>{$_('home.title3')}</li>
	<li>{$_('home.title4')}</li>
</ul>

<style>
	section {
		font-size: 1vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		flex: 0.6;
		position: relative;
	}
	h1,
	h2 {
		line-height: 80%;
		font-family: 'Arges', sans-serif;
	}
	h1 {
		font-size: min(40em, 450px);
		margin-bottom: 0.03em;
	}
	h2 {
		font-size: min(28.7em, 360px);
		white-space: nowrap;
		letter-spacing: 0.008em;
	}
	h1:nth-child(1) {
		color: transparent;
		-webkit-text-stroke: 2px var(--color-theme-1);
	}
	h1:nth-child(2) {
		position: absolute;
		color: var(--color-theme-1);
		animation: animate 4s ease-in-out infinite;
	}
	.h1-container {
		display: flex;
		gap: 0.1em;
	}
	ul {
		font-size: 1.1rem;
		text-align: right;
		display: flex;
		flex-direction: column;
		gap: 8%;
	}
	.md-devices {
		display: none;
	}

	@media (max-width: 899px) {
		.md-devices {
			display: flex;
			text-align: left;
			gap: 5vw;
		}
		.lg-devices {
			display: none;
		}
		h2 {
			font-size: 27.8em;
		}
	}

	@keyframes animate {
		0%,
		100% {
			clip-path: polygon(
				0% 45%,
				16% 44%,
				33% 50%,
				54% 60%,
				70% 61%,
				84% 59%,
				100% 52%,
				100% 100%,
				0% 100%
			);
		}

		50% {
			clip-path: polygon(
				0% 60%,
				15% 65%,
				34% 66%,
				51% 62%,
				67% 50%,
				84% 45%,
				100% 46%,
				100% 100%,
				0% 100%
			);
		}
	}
</style>
