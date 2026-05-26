<script lang="ts">
	import { onMount } from 'svelte';

	interface Stat {
		label: string;
		value: number;
		unit: string;
		color: string;
	}

	const stats: Stat[] = [
		{ label: 'Publications', value: 12, unit: 'peer-reviewed', color: '#00d4ff' },
		{ label: 'Citations', value: 156, unit: 'total', color: '#ff6b9d' },
		{ label: 'H-Index', value: 7, unit: '', color: '#ffc107' },
		{ label: 'Research Projects', value: 8, unit: 'completed', color: '#00d4ff' }
	];

	let animatedValues = $state<number[]>([]);
	let isVisible = $state(false);

	onMount(() => {
		// Trigger animation when component mounts
		setTimeout(() => {
			isVisible = true;
			animateCounters();
		}, 200);
	});

	function animateCounters() {
		const duration = 1500; // ms
		const startTime = Date.now();

		const animate = () => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);

			animatedValues = stats.map((stat) => {
				return Math.floor(stat.value * progress);
			});

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		};

		animate();
	}
</script>

<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
	<h2 class="mb-12 text-3xl font-bold text-[--color-text-primary]">
		Research <span class="text-[--color-accent-primary]">Statistics</span>
	</h2>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat, index}
			<div
				class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-8 text-center transition-all duration-500 hover:border-[--color-accent-primary] hover:shadow-lg hover:shadow-[--color-accent-primary]/20"
				style="border-top: 3px solid {stat.color}"
			>
				<!-- Animated Counter -->
				<div class="mb-4">
					<p class="text-5xl font-bold" style="color: {stat.color}">
						{isVisible ? animatedValues[index] || 0 : 0}
					</p>
				</div>

				<!-- Label -->
				<h3 class="mb-2 text-lg font-bold text-[--color-text-primary]">{stat.label}</h3>

				<!-- Unit -->
				{#if stat.unit}
					<p class="text-sm text-[--color-text-secondary]">{stat.unit}</p>
				{/if}

				<!-- Bar Chart -->
				<div class="mt-6">
					<div class="h-2 w-full overflow-hidden rounded-full bg-[--color-bg-tertiary]">
						<div
							class="h-full transition-all duration-1000"
							style="width: {isVisible ? '100%' : '0%'}; background-color: {stat.color}"
						></div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style global>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-bg-secondary: #141829;
		--color-bg-tertiary: #1a1f3a;
		--color-text-primary: #e8eef2;
		--color-text-secondary: #a8b0bd;
		--color-border: #2a2f45;
	}
</style>
