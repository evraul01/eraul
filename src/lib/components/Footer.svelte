<script lang="ts">
	let { isDark = true } = $props();

	const socialLinks = [
		{
			label: 'GitHub',
			href: 'https://github.com',
			icon: 'github',
			ariaLabel: 'Visit GitHub'
		},
		{
			label: 'Twitter',
			href: 'https://twitter.com',
			icon: 'twitter',
			ariaLabel: 'Visit Twitter'
		},
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com',
			icon: 'linkedin',
			ariaLabel: 'Visit LinkedIn'
		},
		{
			label: 'Email',
			href: 'mailto:your.email@example.com',
			icon: 'email',
			ariaLabel: 'Send email'
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<footer
	class={`border-t transition-colors ${
		isDark
			? 'border-[--color-border] bg-[--color-bg-secondary]'
			: 'border-gray-200 bg-gray-50'
	}`}
>
	<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Main Footer Content -->
		<div class="mb-8 grid gap-8 md:grid-cols-3">
			<!-- About Section -->
			<div>
				<h3 class={`mb-4 text-lg font-bold ${isDark ? 'text-[--color-accent-primary]' : 'text-blue-600'}`}>
					About
				</h3>
				<p
					class={`text-sm leading-relaxed ${
						isDark ? 'text-[--color-text-secondary]' : 'text-gray-600'
					}`}
				>
					Astrophysics PhD student exploring the universe through research, teaching, and public
					engagement.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class={`mb-4 text-lg font-bold ${isDark ? 'text-[--color-accent-primary]' : 'text-blue-600'}`}>
					Links
				</h3>
				<nav class={`space-y-2 text-sm`}>
					<a
						href="/projects"
						class={`transition-colors ${
							isDark
								? 'text-[--color-text-secondary] hover:text-[--color-accent-primary]'
								: 'text-gray-600 hover:text-blue-600'
						}`}
					>
						Projects
					</a>
					<a
						href="/publications"
						class={`block transition-colors ${
							isDark
								? 'text-[--color-text-secondary] hover:text-[--color-accent-primary]'
								: 'text-gray-600 hover:text-blue-600'
						}`}
					>
						Publications
					</a>
					<a
						href="/contact"
						class={`block transition-colors ${
							isDark
								? 'text-[--color-text-secondary] hover:text-[--color-accent-primary]'
								: 'text-gray-600 hover:text-blue-600'
						}`}
					>
						Contact
					</a>
				</nav>
			</div>

			<!-- Social Links -->
			<div>
				<h3 class={`mb-4 text-lg font-bold ${isDark ? 'text-[--color-accent-primary]' : 'text-blue-600'}`}>
					Connect
				</h3>
				<div class="flex gap-4">
					{#each socialLinks as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.ariaLabel}
							class={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-all ${
								isDark
									? 'bg-[--color-bg-tertiary] text-[--color-accent-primary] hover:bg-[--color-accent-primary] hover:text-[--color-bg-primary]'
									: 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white'
							}`}
						>
							{#if social.icon === 'github'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.546.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
									/>
								</svg>
							{:else if social.icon === 'twitter'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M9 19s-1.5-3 1-5"
									/>
								</svg>
							{:else if social.icon === 'linkedin'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
									/>
									<circle cx="4" cy="4" r="2" />
								</svg>
							{:else if social.icon === 'email'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							{/if}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Divider -->
		<div class={`my-8 ${isDark ? 'border-[--color-border]' : 'border-gray-200'} border-t`}></div>

		<!-- Bottom Section -->
		<div
			class={`flex flex-col items-center justify-between gap-4 text-center text-sm md:flex-row ${
				isDark ? 'text-[--color-text-muted]' : 'text-gray-500'
			}`}
		>
			<p>&copy; {currentYear} E. Raul. All rights reserved.</p>
			<p>Built with SvelteKit and ❤️</p>
		</div>
	</div>
</footer>

<style>
	:global(:root) {
		--color-bg-secondary: #141829;
		--color-bg-tertiary: #1a1f3a;
		--color-accent-primary: #00d4ff;
		--color-text-secondary: #a8b0bd;
		--color-text-muted: #6b7280;
		--color-border: #2a2f45;
	}
</style>
