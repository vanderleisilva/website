<!-- @component Top menu -->

<script lang="ts">
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import { _ } from 'svelte-i18n';

	let isSelected: Function;
	$: isSelected = (page: string) => ($page.url.pathname === page ? 'page' : undefined);
</script>

<header>
	<div class="corner logo">
		<a href="/"><span>VAS</span></a>
		<div>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg>
		</div>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={isSelected('/')}>
				<a href="/">{$_('menu./')}</a>
			</li>
			<li aria-current={isSelected('/about')}>
				<a href="/about">{$_('menu./about')}</a>
			</li>
			<li aria-current={isSelected('/curriculum')}>
				<a href="/curriculum">{$_('menu./curriculum')}</a>
			</li>
			<li aria-current={isSelected('/contact')}>
				<a href="/contact">{$_('menu./contact')}</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/vanderleisilva">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		z-index: 1;
		--background: rgba(255, 255, 255, 0.7);
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.logo {
		display: flex;
		width: auto;
		overflow: hidden;
	}

	.logo svg {
		transform: scaleY(-1);
	}
	.logo a {
		font-family: 'franklin-gothic-demi-cond-regular';
		color: var(--color-text);
		display: block;
		background: var(--background);
		padding-left: 5px;
		transform: scaleY(2);
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	@media (max-width: 599px) {
		.corner {
			display: none;
		}
		header {
			display: block;
		}
	}
</style>
