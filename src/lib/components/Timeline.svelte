<script lang="ts">
	interface TimelineEvent {
		year: number;
		title: string;
		description: string;
		type: 'education' | 'research' | 'award';
	}

	const events: TimelineEvent[] = [
		{
			year: 2017,
			title: 'Bachelor of Science',
			description: 'Physics with minor in Astronomy',
			type: 'education'
		},
		{
			year: 2019,
			title: 'Master of Science',
			description: 'Astronomy - Observational focus',
			type: 'education'
		},
		{
			year: 2020,
			title: 'Research Fellow',
			description: 'Major publication on exoplanet detection',
			type: 'research'
		},
		{
			year: 2021,
			title: 'Graduate Fellowship',
			description: 'Awarded prestigious research fellowship',
			type: 'award'
		},
		{
			year: 2022,
			title: 'Best Poster Award',
			description: 'American Astronomical Society Meeting',
			type: 'award'
		},
		{
			year: 2023,
			title: 'PhD in Astrophysics',
			description: 'Dissertation on stellar characterization',
			type: 'education'
		}
	];

	let scrollY = $state(0);

	const getTypeColor = (type: TimelineEvent['type']) => {
		switch (type) {
			case 'education':
				return { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500' };
			case 'research':
				return { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500' };
			case 'award':
				return { bg: 'bg-yellow-500/20', text: 'text-yellow-300', border: 'border-yellow-500' };
		}
	};

	const getTypeIcon = (type: TimelineEvent['type']) => {
		switch (type) {
			case 'education':
				return '🎓';
			case 'research':
				return '🔬';
			case 'award':
				return '🏆';
		}
	};
</script>

<svelte:window bind:scrollY />

<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
	<h2 class="mb-12 text-3xl font-bold text-[--color-text-primary]">
		Academic <span class="text-[--color-accent-primary]">Timeline</span>
	</h2>

	<div class="relative">
		<!-- Vertical line -->
		<div class="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[--color-accent-primary] via-[--color-accent-secondary] to-[--color-accent-primary] md:left-1/2 md:mx-0"></div>

		<!-- Events -->
		<div class="space-y-8 md:space-y-12">
			{#each events as event, index}
				{@const colors = getTypeColor(event.type)}
				{@const icon = getTypeIcon(event.type)}
				<div class="relative">
					<!-- Timeline dot -->
					<div
						class="absolute left-0 top-0 z-10 h-10 w-10 rounded-full border-4 border-[--color-bg-primary] bg-[--color-accent-primary] transition-transform duration-700 md:left-1/2 md:-ml-5"
						style="transform: scale({scrollY > index * 100 ? 1 : 0.8})"
					></div>

					<!-- Content -->
					<div class={`ml-20 md:ml-0 md:${index % 2 === 0 ? 'mr-[52%] text-right' : 'ml-[52%]'}`}>
						<div
							class={`rounded-lg border ${colors.border} ${colors.bg} p-6 transition-all duration-500 hover:shadow-lg hover:shadow-[--color-accent-primary]/20`}
						>
							<div class="flex items-start gap-3">
								<span class="text-2xl">{icon}</span>
								<div class="flex-1">
									<p class={`text-sm font-semibold ${colors.text} uppercase tracking-wide`}>
										{event.type}
									</p>
									<h3 class="mt-2 text-xl font-bold text-[--color-text-primary]">{event.title}</h3>
									<p class="mt-1 text-[--color-text-secondary]">{event.description}</p>
									<p class="mt-3 text-sm font-semibold text-[--color-accent-primary]">{event.year}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style global>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-accent-secondary: #ff6b9d;
		--color-bg-primary: #0a0e27;
		--color-text-primary: #e8eef2;
		--color-text-secondary: #a8b0bd;
	}
</style>
