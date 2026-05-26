<script lang="ts">
	const outreachActivities = [
		{
			title: 'Planetarium Shows',
			description: 'Led interactive planetarium presentations about stellar evolution and exoplanet discovery for school groups and public audiences.',
			audience: 'General Public',
			year: 2022
		},
		{
			title: 'Science Summer Camp',
			description: 'Developed and taught curriculum for high school students on observational astronomy techniques and data analysis.',
			audience: 'High School Students',
			year: 2023
		},
		{
			title: 'Public Outreach Lectures',
			description: 'Delivered accessible lectures on current topics in astrophysics at local libraries and community centers.',
			audience: 'Adults',
			year: 2023
		},
		{
			title: 'Science Fair Judge',
			description: 'Mentored and evaluated student astronomy projects at regional science fairs, providing constructive feedback.',
			audience: 'Middle & High School',
			year: 2022
		},
		{
			title: 'Online Astronomy Tutorials',
			description: 'Created educational video content on YouTube about observing techniques and understanding the cosmos.',
			audience: 'Online Community',
			year: 2023
		},
		{
			title: 'University Open Nights',
			description: 'Organized and conducted telescope viewing sessions at the university observatory for community members.',
			audience: 'General Public',
			year: 2023
		}
	];
</script>

<svelte:head>
	<title>Science Outreach & Public Engagement | E. Raul</title>
	<meta name="description" content="Science outreach activities including planetarium shows, summer camps, and public lectures. Sharing the wonder of astronomy with communities." />
	<meta name="keywords" content="science outreach, astronomy education, public engagement, STEM, planetarium, science communication" />
	<meta property="og:title" content="Science Outreach | E. Raul" />
	<meta property="og:description" content="Sharing the wonder of astronomy through outreach and public engagement activities." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mx-auto min-h-screen max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-16 space-y-4">
		<h1 class="text-4xl font-bold md:text-5xl">
			Science <span class="text-[--color-accent-primary]">Outreach</span>
		</h1>
		<p class="max-w-2xl text-xl text-[--color-text-secondary]">
			Sharing the wonder of astronomy and making science accessible to everyone.
		</p>
	</div>

	<!-- Outreach Stats -->
	<div class="mb-16 grid gap-6 md:grid-cols-3">
		<div
			class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-6 text-center"
		>
			<p class="text-4xl font-bold text-[--color-accent-primary]">500+</p>
			<p class="text-[--color-text-secondary]">Students Reached</p>
		</div>
		<div
			class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-6 text-center"
		>
			<p class="text-4xl font-bold text-[--color-accent-primary]">15+</p>
			<p class="text-[--color-text-secondary]">Outreach Events</p>
		</div>
		<div
			class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-6 text-center"
		>
			<p class="text-4xl font-bold text-[--color-accent-primary]">10K+</p>
			<p class="text-[--color-text-secondary]">Online Viewers</p>
		</div>
	</div>

	<!-- Activities -->
	<div class="space-y-6">
		{#each outreachActivities as activity (activity.title)}
			<div
				class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-8 transition-all duration-300 hover:border-[--color-accent-primary] hover:shadow-lg hover:shadow-[--color-accent-primary]/10"
			>
				<div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
					<div class="flex-1">
						<h3 class="mb-2 text-2xl font-bold text-[--color-text-primary]">{activity.title}</h3>
						<p class="mb-4 text-[--color-text-secondary]">{activity.description}</p>
						<div class="flex flex-wrap gap-3">
							<span class="rounded-full bg-[--color-accent-primary]/10 px-3 py-1 text-sm text-[--color-accent-primary]">
								{activity.audience}
							</span>
							<span class="rounded-full bg-[--color-accent-secondary]/10 px-3 py-1 text-sm text-[--color-accent-secondary]">
								{activity.year}
							</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Call to Action -->
	<div class="mt-16 rounded-lg border border-[--color-accent-primary] bg-[--color-accent-primary]/5 p-8 text-center">
		<h3 class="mb-4 text-2xl font-bold text-[--color-accent-primary]">Interested in Collaborating?</h3>
		<p class="mb-6 text-[--color-text-secondary]">
			I'm always excited to share the wonders of astronomy and work with schools, organizations, and communities.
		</p>
		<a
			href="/contact"
			class="inline-block rounded-lg bg-[--color-accent-primary] px-8 py-3 font-semibold text-[--color-bg-primary] transition-all duration-300 hover:shadow-lg hover:shadow-[--color-accent-primary]/50 hover:scale-105"
		>
			Get in Touch
		</a>
	</div>
</div>

<style global>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-accent-secondary: #ff6b9d;
		--color-bg-secondary: #141829;
		--color-text-primary: #e8eef2;
		--color-text-secondary: #a8b0bd;
		--color-border: #2a2f45;
	}
</style>
