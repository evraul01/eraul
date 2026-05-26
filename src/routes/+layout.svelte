<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	const isDark = true;
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col">
	<Nav {isDark} />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer {isDark} />
</div>

<style global>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	:global(html, body) {
		height: 100%;
	}

	:global(#svelte) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
