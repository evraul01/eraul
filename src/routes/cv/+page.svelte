<script lang="ts">
	import Timeline from '$lib/components/Timeline.svelte';
	import ResearchStats from '$lib/components/ResearchStats.svelte';
	import PublicationChart from '$lib/components/PublicationChart.svelte';
	import SkillsBars from '$lib/components/SkillsBars.svelte';

	const education = [
		{
			degree: 'PhD in Astrophysics',
			institution: 'University of [Your University]',
			year: '2023',
			details: 'Dissertation: Advanced Studies in Stellar Characterization and Exoplanet Detection'
		},
		{
			degree: 'Master of Science in Astronomy',
			institution: 'University of [Your University]',
			year: '2019',
			details: 'Focus: Observational Astronomy and Data Analysis'
		},
		{
			degree: 'Bachelor of Science in Physics',
			institution: 'University of [Your University]',
			year: '2017',
			details: 'Minor: Astronomy'
		}
	];

	const experience = [
		{
			title: 'Postdoctoral Researcher',
			organization: 'Observatory/University',
			period: '2023 - Present',
			description: 'Conducting independent research on stellar populations and exoplanet characterization.'
		},
		{
			title: 'Research Assistant',
			organization: 'University of [Your University]',
			period: '2019 - 2023',
			description: 'Contributed to multiple research projects involving data analysis, observational campaigns, and computational modeling.'
		},
		{
			title: 'Teaching Assistant',
			organization: 'University of [Your University]',
			period: '2018 - 2022',
			description: 'Taught introductory astronomy and physics labs, mentored undergraduate researchers.'
		}
	];

	const skills = [
		'Data Analysis & Visualization',
		'Python & Scientific Computing',
		'Observational Astronomy',
		'Spectroscopy',
		'Statistical Modeling',
		'Telescope Operations',
		'Scientific Writing',
		'Public Communication'
	];

	const awards = [
		{
			title: 'Graduate Research Fellowship',
			year: 2021
		},
		{
			title: 'Best Poster Award - AAS Meeting',
			year: 2022
		},
		{
			title: 'Excellence in Teaching Award',
			year: 2022
		}
	];
</script>

<svelte:head>
	<title>Curriculum Vitae | E. Raul - Astrophysics PhD</title>
	<meta name="description" content="Curriculum vitae and academic background of E. Raul. PhD in Astrophysics with expertise in stellar characterization and exoplanet detection." />
	<meta name="keywords" content="CV, curriculum vitae, astrophysicist, PhD, education, experience, research" />
	<meta property="og:title" content="CV | E. Raul" />
	<meta property="og:description" content="Curriculum vitae and academic background in astrophysics." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mx-auto min-h-screen max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
		<div>
			<h1 class="text-4xl font-bold md:text-5xl">E. Raul</h1>
			<p class="mt-2 text-xl text-[--color-text-secondary]">Astrophysics PhD | Researcher | Science Communicator</p>
		</div>
		<a
			href="/contact"
			class="inline-flex items-center gap-2 rounded-lg bg-[--color-accent-primary] px-6 py-2 font-semibold text-[--color-bg-primary] transition-all duration-300 hover:shadow-lg hover:shadow-[--color-accent-primary]/50"
		>
			<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5h3V9h4v3h3l-5 5zm6-7h-4V7h4v3z"
				/>
			</svg>
			Request CV
		</a>
	</div>

	<!-- Visualizations Section -->
	<ResearchStats />
	<PublicationChart />
	<SkillsBars />
	<Timeline />

	<div class="grid gap-12 lg:grid-cols-3">
		<!-- Main Content -->
		<div class="lg:col-span-2 space-y-12">
			<!-- Education -->
			<section>
				<h2 class="mb-6 border-b border-[--color-border] pb-3 text-2xl font-bold text-[--color-accent-primary]">
					Education
				</h2>
				<div class="space-y-6">
					{#each education as edu}
						<div>
							<div class="flex items-start justify-between">
								<div>
									<h3 class="text-lg font-bold text-[--color-text-primary]">{edu.degree}</h3>
									<p class="text-[--color-text-secondary]">{edu.institution}</p>
								</div>
								<span class="text-sm font-semibold text-[--color-accent-primary]">{edu.year}</span>
							</div>
							<p class="mt-2 text-[--color-text-secondary]">{edu.details}</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- Experience -->
			<section>
				<h2 class="mb-6 border-b border-[--color-border] pb-3 text-2xl font-bold text-[--color-accent-primary]">
					Experience
				</h2>
				<div class="space-y-6">
					{#each experience as exp}
						<div>
							<div class="flex items-start justify-between">
								<div>
									<h3 class="text-lg font-bold text-[--color-text-primary]">{exp.title}</h3>
									<p class="text-[--color-text-secondary]">{exp.organization}</p>
								</div>
								<span class="text-sm font-semibold text-[--color-accent-primary]">{exp.period}</span>
							</div>
							<p class="mt-2 text-[--color-text-secondary]">{exp.description}</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- Awards & Recognition -->
			<section>
				<h2 class="mb-6 border-b border-[--color-border] pb-3 text-2xl font-bold text-[--color-accent-primary]">
					Awards & Recognition
				</h2>
				<div class="space-y-3">
					{#each awards as award}
						<div class="flex items-center justify-between rounded-lg bg-[--color-bg-secondary] p-4">
							<span class="text-[--color-text-primary]">{award.title}</span>
							<span class="text-sm text-[--color-text-secondary]">{award.year}</span>
						</div>
					{/each}
				</div>
			</section>
		</div>

		<!-- Sidebar -->
		<div class="lg:col-span-1">
			<!-- Skills -->
			<div class="sticky top-24 space-y-8">
				<section class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-6">
					<h3 class="mb-4 text-lg font-bold text-[--color-accent-primary]">Skills</h3>
					<div class="flex flex-wrap gap-2">
						{#each skills as skill}
							<span class="rounded-full bg-[--color-accent-primary]/10 px-3 py-1 text-sm text-[--color-accent-primary]">
								{skill}
							</span>
						{/each}
					</div>
				</section>

				<!-- Contact Info -->
				<section class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-6">
					<h3 class="mb-4 text-lg font-bold text-[--color-accent-primary]">Contact</h3>
					<div class="space-y-3 text-sm">
						<div>
							<p class="text-[--color-text-muted]">Email</p>
							<a href="mailto:your@email.com" class="text-[--color-accent-primary] hover:underline">
								your@email.com
							</a>
						</div>
						<div>
							<p class="text-[--color-text-muted]">Location</p>
							<p class="text-[--color-text-secondary]">City, State</p>
						</div>
						<div>
							<p class="text-[--color-text-muted]">ORCID</p>
							<a href="https://orcid.org/" target="_blank" rel="noopener noreferrer" class="text-[--color-accent-primary] hover:underline">
								0000-0000-0000-0000
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</div>

<style global>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-bg-secondary: #141829;
		--color-text-primary: #e8eef2;
		--color-text-secondary: #a8b0bd;
		--color-text-muted: #6b7280;
		--color-border: #2a2f45;
	}
</style>
