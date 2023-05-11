<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('home.title1')}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>VANDY</h1>
	<h1>VANDY</h1>
	<h2>ALVES DA SILVA</h2>
</section>

<ul>
	<li>{$_('home.title1')}</li>
	<li>{$_('home.title2')}</li>
	<li>{$_('home.title3')}</li>
	<li>{$_('home.title4')}</li>
</ul>

<style>
	section {
		font-family: 'franklin-gothic-demi-cond-regular';
		font-size: 1vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		flex: 0.6;
		position: relative;
	}
	h1 {
		font-size: 6.4em;
		transform: scaleY(2.5);
		margin-top: 0;
		margin-bottom: 0.5em;
	}
	h2 {
		font-size: 4.4em;
		margin-top: 0;
		transform: scaleY(2.5);
		letter-spacing: -0.04em;
		white-space: nowrap;
	}
	li {
		margin-top: 3%;
	}

	h1:nth-child(1) {
		color: transparent;
		-webkit-text-stroke: 2px var(--color-theme-1);
	}

	h1:nth-child(2) {
		position: absolute;
		top: 122px;
		color: var(--color-theme-1);
		animation: animate 4s ease-in-out infinite;
	}

	@media (min-width: 600px) {
		h1 {
			font-size: 10em;
		}
		h2 {
			font-size: 10em;
		}
		h1:nth-child(2) {
			top: 62px;
		}
	}

	@media (min-width: 900px) {
		ul {
			position: absolute;
			max-width: 30%;
			right: 0;
			top: 3em;
			font-size: 1.1em;
		}
		li {
			margin-top: 10%;
		}
		h1 {
			font-size: 20em;
		}
		h2 {
			font-size: 13em;
		}
		h1:nth-child(2) {
			top: 32px;
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
