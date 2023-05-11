<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('home.title1')}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
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

	@media (min-width: 600px) {
		h1 {
			font-size: 10em;
		}
		h2 {
			font-size: 10em;
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
	}
</style>
