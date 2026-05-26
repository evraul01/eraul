<script lang="ts">
	import ResearchStats from '$lib/components/ResearchStats.svelte';

	const projects = [
		{
			title: 'Exoplanet Detection and Analysis',
			description: 'Using transit photometry to detect and characterize exoplanets orbiting distant stars.',
			tags: ['Exoplanets', 'Spectroscopy', 'Data Analysis'],
			status: 'Ongoing'
		},
		{
			title: 'Stellar Evolution Modeling',
			description: 'Computational modeling of stellar life cycles and nucleosynthesis processes.',
			tags: ['Stellar Physics', 'Modeling', 'Python'],
			status: 'Published'
		},
		{
			title: 'Supernova Remnant Survey',
			description: 'Multi-wavelength observations and analysis of supernova remnants in nearby galaxies.',
			tags: ['SNe Remnants', 'Observations', 'X-ray'],
			status: 'Data Collection'
		}
	];
</script>

<svelte:head>
	<title>Research Projects | E. Raul - Astrophysics</title>
	<meta name="description" content="Explore my research projects in exoplanet detection, stellar evolution, and supernova remnants. Current work and ongoing investigations." />
	<meta name="keywords" content="astrophysics, research, projects, exoplanets, stellar physics, supernova" />
	<meta property="og:title" content="Research Projects | E. Raul" />
	<meta property="og:description" content="Explore my research projects in exoplanet detection, stellar evolution, and supernova remnants." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Research Projects | E. Raul" />
	<meta name="twitter:description" content="Explore my research projects in exoplanet detection, stellar evolution, and supernova remnants." />
</svelte:head>

<div class="mx-auto min-h-screen max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-16 space-y-4">
		<h1 class="text-4xl font-bold md:text-5xl">
			Research <span class="text-[--color-accent-primary]">Projects</span>
		</h1>
		<p class="max-w-2xl text-xl text-[--color-text-secondary]">
			Exploring the cosmos through rigorous investigation and innovative research methodologies.
		</p>
	</div>

	<!-- Research Stats Visualization -->
	<ResearchStats />

	<!-- Projects Grid -->
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.title)}
			<div
				class="group rounded-xl border border-[--color-border] bg-[--color-bg-secondary] p-6 transition-all duration-300 hover:border-[--color-accent-primary] hover:shadow-lg hover:shadow-[--color-accent-primary]/20"
			>
				<!-- Status Badge -->
				<div class="mb-4 flex items-center justify-between">
					<span
						class={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
							project.status === 'Ongoing'
								? 'bg-green-500/20 text-green-300'
								: project.status === 'Published'
									? 'bg-blue-500/20 text-blue-300'
									: 'bg-yellow-500/20 text-yellow-300'
						}`}
					>
						{project.status}
					</span>
				</div>

				<!-- Title and Description -->
				<h3 class="mb-3 text-xl font-bold text-[--color-text-primary]">{project.title}</h3>
				<p class="mb-6 text-[--color-text-secondary]">{project.description}</p>

				<!-- Tags -->
				<div class="flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span class="rounded-md bg-[--color-accent-primary]/10 px-2 py-1 text-sm text-[--color-accent-primary]">
							{tag}
						</span>
					{/each}
				</div>

				<!-- Learn More Link -->
				<a
					href="/projects"
					class="mt-6 inline-block text-[--color-accent-primary] transition-all duration-300 group-hover:translate-x-1"
				>
					Learn more →
				</a>
			</div>
		{/each}
	</div>
</div>

<style global>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-bg-secondary: #141829;
		--color-text-primary: #e8eef2;
		--color-text-secondary: #a8b0bd;
		--color-border: #2a2f45;
	}
</style>
