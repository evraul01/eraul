<script lang="ts">
	import { page } from '$app/stores';

	let { isDark = true } = $props();

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Publications', href: '/publications' },
		{ label: 'Outreach', href: '/outreach' },
		{ label: 'CV', href: '/cv' },
		{ label: 'Contact', href: '/contact' }
	];

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav
	class={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
		isDark
			? 'border-b border-[--color-border] bg-[--color-bg-primary]/80'
			: 'border-b border-gray-200 bg-white/80'
	}`}
>
	<div class="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a
				href="/"
				class={`text-2xl font-bold transition-colors ${
					isDark ? 'text-[--color-accent-primary]' : 'text-blue-600'
				}`}
				onclick={closeMobileMenu}
			>
				E. Raul
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-1 md:flex">
				{#each navItems as item}
					<a
						href={item.href}
						class={`rounded-lg px-3 py-2 font-medium transition-all duration-200 ${
							$page.url.pathname === item.href
								? isDark
									? 'bg-[--color-accent-primary]/20 text-[--color-accent-primary]'
									: 'bg-blue-100 text-blue-600'
								: isDark
									? 'text-[--color-text-secondary] hover:text-[--color-accent-primary] hover:bg-[--color-bg-secondary]'
									: 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
						}`}
						onclick={closeMobileMenu}
					>
						{item.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class={`md:hidden rounded-lg p-2 transition-colors ${
					isDark
						? 'text-[--color-text-secondary] hover:bg-[--color-bg-secondary]'
						: 'text-gray-600 hover:bg-gray-100'
				}`}
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class={`mt-4 space-y-2 border-t ${isDark ? 'border-[--color-border]' : 'border-gray-200'}`}>
				{#each navItems as item}
					<a
						href={item.href}
						class={`block rounded-lg px-3 py-2 font-medium transition-all ${
							$page.url.pathname === item.href
								? isDark
									? 'bg-[--color-accent-primary]/20 text-[--color-accent-primary]'
									: 'bg-blue-100 text-blue-600'
								: isDark
									? 'text-[--color-text-secondary] hover:text-[--color-accent-primary]'
									: 'text-gray-600 hover:text-blue-600'
						}`}
						onclick={closeMobileMenu}
					>
						{item.label}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</nav>

<style>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-bg-primary: #0a0e27;
		--color-bg-secondary: #141829;
		--color-text-secondary: #a8b0bd;
		--color-border: #2a2f45;
	}
</style>
