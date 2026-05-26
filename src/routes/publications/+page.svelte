<script lang="ts">
	import { onMount } from 'svelte';
	import PublicationChart from '$lib/components/PublicationChart.svelte';

	interface Publication {
		id: string;
		title: string;
		authors: string;
		year: number;
		journal: string;
		doi?: string;
		arxiv?: string;
	}

	let publications: Publication[] = [
		{
			id: '1',
			title: 'Characterization of High-Mass X-ray Binaries in the Small Magellanic Cloud',
			authors: 'E. Raul et al.',
			year: 2023,
			journal: 'The Astrophysical Journal',
			doi: '10.3847/1538-4357/...',
			arxiv: '2301.00001'
		},
		{
			id: '2',
			title: 'Stellar Population Analysis of Nearby Dwarf Galaxies',
			authors: 'E. Raul et al.',
			year: 2022,
			journal: 'Monthly Notices of the Royal Astronomical Society',
			doi: '10.1093/mnras/...',
			arxiv: '2204.00001'
		},
		{
			id: '3',
			title: 'A Comprehensive Survey of Exoplanet Atmospheres',
			authors: 'E. Raul, J. Smith, & A. Johnson',
			year: 2021,
			journal: 'The Astronomical Journal',
			doi: '10.3847/1538-3881/...',
			arxiv: '2106.00001'
		}
	];

	let loading = $state(true);
	const nasaAdsUrl = 'https://ui.adsabs.harvard.edu/';

	onMount(() => {
		// Simulate loading NASA ADS data
		setTimeout(() => {
			loading = false;
		}, 1000);
	});
</script>

<svelte:head>
	<title>Publications & Research Papers | E. Raul</title>
	<meta name="description" content="Peer-reviewed research papers and publications in astrophysics. View my work on exoplanet characterization, stellar populations, and X-ray binaries." />
	<meta name="keywords" content="publications, peer-reviewed, astrophysics, exoplanets, stellar populations, research papers" />
	<meta property="og:title" content="Publications | E. Raul" />
	<meta property="og:description" content="View my peer-reviewed research papers and publications in astrophysics." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div class="mx-auto min-h-screen max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-16 space-y-4">
		<h1 class="text-4xl font-bold md:text-5xl">
			<span class="text-[--color-accent-primary]">Publications</span>
		</h1>
		<p class="max-w-2xl text-xl text-[--color-text-secondary]">
			Peer-reviewed research and contributions to the astronomical community.
		</p>
	</div>

	<!-- Publication Trends Visualization -->
	<PublicationChart />

	<div class="grid gap-12 lg:grid-cols-3">
		<!-- Publications List -->
		<div class="lg:col-span-2">
			<div class="space-y-6">
				{#if loading}
					<div class="space-y-4">
						{#each [1, 2, 3] as i}
							<div class="animate-pulse rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-6">
								<div class="mb-3 h-6 w-3/4 rounded bg-[--color-bg-tertiary]"></div>
								<div class="mb-2 h-4 w-full rounded bg-[--color-bg-tertiary]"></div>
								<div class="h-4 w-2/3 rounded bg-[--color-bg-tertiary]"></div>
							</div>
						{/each}
					</div>
				{:else}
					{#each publications as pub (pub.id)}
						<div
							class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-6 transition-all duration-300 hover:border-[--color-accent-primary] hover:shadow-lg hover:shadow-[--color-accent-primary]/10"
						>
							<!-- Title -->
							<h3 class="mb-3 text-lg font-bold text-[--color-text-primary]">{pub.title}</h3>

							<!-- Authors and Year -->
							<p class="mb-2 text-sm text-[--color-text-secondary]">
								{pub.authors} <span class="text-[--color-text-muted]">({pub.year})</span>
							</p>

							<!-- Journal -->
							<p class="mb-4 text-sm italic text-[--color-text-secondary]">{pub.journal}</p>

							<!-- Links -->
							<div class="flex flex-wrap gap-3">
								{#if pub.doi}
									<a
										href="https://doi.org/{pub.doi}"
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 rounded-md bg-[--color-accent-primary]/10 px-3 py-1 text-sm text-[--color-accent-primary] transition-all duration-300 hover:bg-[--color-accent-primary]/20"
									>
										<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm3.5-9c0 1.93-1.57 3.5-3.5 3.5S8.5 13.93 8.5 12 10.07 8.5 12 8.5s3.5 1.57 3.5 3.5z"
											/>
										</svg>
										DOI
									</a>
								{/if}
								{#if pub.arxiv}
									<a
										href="https://arxiv.org/abs/{pub.arxiv}"
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 rounded-md bg-[--color-accent-secondary]/10 px-3 py-1 text-sm text-[--color-accent-secondary] transition-all duration-300 hover:bg-[--color-accent-secondary]/20"
									>
										<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm3.5-9c0 1.93-1.57 3.5-3.5 3.5S8.5 13.93 8.5 12 10.07 8.5 12 8.5s3.5 1.57 3.5 3.5z"
											/>
										</svg>
										arXiv
									</a>
								{/if}
							</div>
						</div>
					{/each}
				{/if}
			</div>

			<!-- NASA ADS Link -->
			<div class="mt-12 rounded-lg border border-[--color-accent-primary] bg-[--color-accent-primary]/5 p-6">
				<h3 class="mb-2 text-lg font-semibold text-[--color-accent-primary]">Find More Publications</h3>
				<p class="mb-4 text-[--color-text-secondary]">
					View my complete publication record and citation statistics on NASA ADS.
				</p>
				<a
					href={nasaAdsUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-[--color-accent-primary] px-4 py-2 font-semibold text-[--color-bg-primary] transition-all duration-300 hover:shadow-lg hover:shadow-[--color-accent-primary]/50"
				>
					Visit NASA ADS
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M5 3c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4H5zm0 2h8v4h4v8H5V5zm9-2h5l-5 5v-5z"
						/>
					</svg>
				</a>
			</div>
		</div>

		<!-- Sidebar - NASA ADS Embed -->
		<div class="lg:col-span-1">
			<div class="sticky top-24 rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-6">
				<h3 class="mb-4 text-lg font-bold text-[--color-accent-primary]">NASA ADS Library</h3>
				<p class="mb-6 text-sm text-[--color-text-secondary]">
					Real-time access to my publication record and citation metrics from the NASA Astrophysics Data
					System.
				</p>
				<iframe
					title="NASA ADS Library"
					src="https://ui.adsabs.harvard.edu/search/q=author%3A%22Raul%22&fq=doctype%3A(%22article%22)&sort=date%20desc%2C%20bibcode%20desc&p_=0"
					class="h-96 w-full rounded-lg border border-[--color-border]"
				></iframe>
			</div>
		</div>
	</div>
</div>

<style global>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-accent-secondary: #ff6b9d;
		--color-bg-secondary: #141829;
		--color-bg-tertiary: #1a1f3a;
		--color-text-primary: #e8eef2;
		--color-text-secondary: #a8b0bd;
		--color-text-muted: #6b7280;
		--color-border: #2a2f45;
	}
</style>
