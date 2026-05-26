<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let submitted = $state(false);
	let isLoading = $state(false);
	let error = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isLoading = true;
		error = '';

		try {
			// Using Formspree.io for form handling (free service)
			const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				submitted = true;
				formData = { name: '', email: '', subject: '', message: '' };

				// Reset success message after 5 seconds
				setTimeout(() => {
					submitted = false;
				}, 5000);
			} else {
				error = 'Failed to send message. Please try again.';
			}
		} catch (err) {
			error = 'An error occurred. Please try again later.';
			console.error('Form submission error:', err);
		} finally {
			isLoading = false;
		}
	}

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement;
		const { name, value } = target;
		formData[name as keyof typeof formData] = value;
	}
</script>

<svelte:head>
	<title>Contact | E. Raul - Astrophysics Research</title>
	<meta name="description" content="Get in touch for research inquiries, collaboration, or outreach opportunities. Contact form and social media links." />
	<meta name="keywords" content="contact, collaboration, research, astrophysics, inquiries" />
	<meta property="og:title" content="Contact | E. Raul" />
	<meta property="og:description" content="Get in touch for research inquiries, collaboration, or outreach opportunities." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mx-auto min-h-screen max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-16 text-center">
		<h1 class="text-4xl font-bold md:text-5xl">
			Get in <span class="text-[--color-accent-primary]">Touch</span>
		</h1>
		<p class="mt-4 text-xl text-[--color-text-secondary]">
			Interested in research collaboration, outreach, or just want to chat about astronomy?
		</p>
	</div>

	<div class="grid gap-12 lg:grid-cols-2">
		<!-- Contact Form -->
		<div class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-8">
			<h2 class="mb-6 text-2xl font-bold text-[--color-text-primary]">Send a Message</h2>

			{#if submitted}
				<div class="mb-6 rounded-lg bg-green-500/20 p-4 text-green-300">
					<p class="font-semibold">✓ Message sent successfully!</p>
					<p class="text-sm">Thank you for reaching out. I'll get back to you soon.</p>
				</div>
			{/if}

			{#if error}
				<div class="mb-6 rounded-lg bg-red-500/20 p-4 text-red-300">
					<p class="font-semibold">✗ {error}</p>
				</div>
			{/if}

			<form onsubmit={handleSubmit} class="space-y-5">
				<!-- Name -->
				<div>
					<label for="name" class="block text-sm font-semibold text-[--color-text-primary] mb-2">
						Full Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						oninput={handleInput}
						required
						class="w-full rounded-lg border border-[--color-border] bg-[--color-bg-tertiary] px-4 py-2 text-[--color-text-primary] placeholder-[--color-text-muted] transition-colors focus:border-[--color-accent-primary] focus:outline-none focus:ring-2 focus:ring-[--color-accent-primary]/20"
						placeholder="Your name"
					/>
				</div>

				<!-- Email -->
				<div>
					<label for="email" class="block text-sm font-semibold text-[--color-text-primary] mb-2">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						oninput={handleInput}
						required
						class="w-full rounded-lg border border-[--color-border] bg-[--color-bg-tertiary] px-4 py-2 text-[--color-text-primary] placeholder-[--color-text-muted] transition-colors focus:border-[--color-accent-primary] focus:outline-none focus:ring-2 focus:ring-[--color-accent-primary]/20"
						placeholder="your@email.com"
					/>
				</div>

				<!-- Subject -->
				<div>
					<label for="subject" class="block text-sm font-semibold text-[--color-text-primary] mb-2">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						oninput={handleInput}
						required
						class="w-full rounded-lg border border-[--color-border] bg-[--color-bg-tertiary] px-4 py-2 text-[--color-text-primary] placeholder-[--color-text-muted] transition-colors focus:border-[--color-accent-primary] focus:outline-none focus:ring-2 focus:ring-[--color-accent-primary]/20"
						placeholder="What's this about?"
					/>
				</div>

				<!-- Message -->
				<div>
					<label for="message" class="block text-sm font-semibold text-[--color-text-primary] mb-2">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						oninput={handleInput}
						required
						rows="5"
						class="w-full rounded-lg border border-[--color-border] bg-[--color-bg-tertiary] px-4 py-2 text-[--color-text-primary] placeholder-[--color-text-muted] transition-colors focus:border-[--color-accent-primary] focus:outline-none focus:ring-2 focus:ring-[--color-accent-primary]/20"
						placeholder="Your message here..."
					></textarea>
				</div>

				<!-- Submit Button -->
				<button
					type="submit"
					disabled={isLoading}
					class="w-full rounded-lg bg-[--color-accent-primary] px-6 py-3 font-semibold text-[--color-bg-primary] transition-all duration-300 hover:shadow-lg hover:shadow-[--color-accent-primary]/50 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isLoading ? 'Sending...' : 'Send Message'}
				</button>
			</form>

			<!-- Note about form -->
			<p class="mt-4 text-xs text-[--color-text-muted]">
				Note: To enable form submissions, create a free Formspree account at formspree.io and update the form ID above.
			</p>
		</div>

		<!-- Contact Information -->
		<div class="space-y-6">
			<!-- Quick Contact Info -->
			<div class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-8">
				<h2 class="mb-6 text-2xl font-bold text-[--color-text-primary]">Contact Information</h2>

				<div class="space-y-6">
					<!-- Email -->
					<div>
						<h3 class="mb-2 font-semibold text-[--color-accent-primary]">Email</h3>
						<a
							href="mailto:your@email.com"
							class="text-[--color-text-secondary] transition-colors hover:text-[--color-accent-primary]"
						>
							your@email.com
						</a>
					</div>

					<!-- Location -->
					<div>
						<h3 class="mb-2 font-semibold text-[--color-accent-primary]">Location</h3>
						<p class="text-[--color-text-secondary]">City, State, Country</p>
					</div>

					<!-- Social Media -->
					<div>
						<h3 class="mb-3 font-semibold text-[--color-accent-primary]">Follow Me</h3>
						<div class="flex gap-4">
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
								class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--color-bg-tertiary] text-[--color-accent-primary] transition-all hover:bg-[--color-accent-primary] hover:text-[--color-bg-primary]"
							>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M9 19s-1.5-3 1-5"
									/>
								</svg>
							</a>
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--color-bg-tertiary] text-[--color-accent-primary] transition-all hover:bg-[--color-accent-primary] hover:text-[--color-bg-primary]"
							>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.546.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
									/>
								</svg>
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--color-bg-tertiary] text-[--color-accent-primary] transition-all hover:bg-[--color-accent-primary] hover:text-[--color-bg-primary]"
							>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM9 17H6v-7h3v7zm-1.5-8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm10.5 8h-3v-3.5c0-.8-.3-1.3-1-1.3-.5 0-.9.3-1 .7-.1.1-.1.3-.1.5V17h-3V10h3v1c.3-.5.9-1.2 2.2-1.2 1.6 0 2.8 1.1 2.8 3.4V17z"
									/>
								</svg>
							</a>
						</div>
					</div>

					<!-- Response Time -->
					<div class="rounded-lg bg-[--color-accent-primary]/10 p-4">
						<p class="text-sm text-[--color-text-secondary]">
							<span class="font-semibold text-[--color-accent-primary]">Response Time:</span> I typically respond to messages within 24-48 hours.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style global>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-bg-secondary: #141829;
		--color-bg-tertiary: #1a1f3a;
		--color-text-primary: #e8eef2;
		--color-text-secondary: #a8b0bd;
		--color-text-muted: #6b7280;
		--color-border: #2a2f45;
	}
</style>
