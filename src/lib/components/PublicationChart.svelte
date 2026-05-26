<script lang="ts">
	import { onMount } from 'svelte';

	interface ChartData {
		year: number;
		publications: number;
		citations: number;
	}

	const data: ChartData[] = [
		{ year: 2019, publications: 1, citations: 3 },
		{ year: 2020, publications: 2, citations: 8 },
		{ year: 2021, publications: 3, citations: 25 },
		{ year: 2022, publications: 4, citations: 64 },
		{ year: 2023, publications: 2, citations: 56 }
	];

	let isVisible = $state(false);

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
		}, 200);
	});

	const maxPubs = Math.max(...data.map((d) => d.publications));
	const maxCitations = Math.max(...data.map((d) => d.citations));
</script>

<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
	<h2 class="mb-4 text-3xl font-bold text-[--color-text-primary]">
		Publication <span class="text-[--color-accent-primary]">Trends</span>
	</h2>
	<p class="mb-12 text-[--color-text-secondary]">Papers published and citations received over time</p>

	<div class="rounded-lg border border-[--color-border] bg-[--color-bg-secondary] p-8">
		<!-- Chart -->
		<div class="space-y-8">
			{#each data as item}
				<div>
					<div class="mb-2 flex items-center justify-between">
						<span class="font-semibold text-[--color-text-primary]">{item.year}</span>
						<div class="flex gap-4 text-sm">
							<span class="text-[--color-accent-primary]">{item.publications} papers</span>
							<span class="text-[--color-accent-secondary]">{item.citations} citations</span>
						</div>
					</div>

					<!-- Dual bars -->
					<div class="flex gap-2">
						<!-- Publications bar -->
						<div class="flex-1">
							<div class="h-8 overflow-hidden rounded-md bg-[--color-bg-tertiary]">
								<div
									class="h-full bg-gradient-to-r from-[--color-accent-primary] to-[--color-accent-primary] transition-all duration-1000"
									style="width: {isVisible ? (item.publications / maxPubs) * 100 : 0}%"
								></div>
							</div>
						</div>

						<!-- Citations bar -->
						<div class="flex-1">
							<div class="h-8 overflow-hidden rounded-md bg-[--color-bg-tertiary]">
								<div
									class="h-full bg-gradient-to-r from-[--color-accent-secondary] to-[--color-accent-secondary] transition-all duration-1000"
									style="width: {isVisible ? (item.citations / maxCitations) * 100 : 0}%"
								></div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Legend -->
		<div class="mt-8 flex flex-wrap gap-6 border-t border-[--color-border] pt-6">
			<div class="flex items-center gap-2">
				<div class="h-4 w-4 rounded bg-[--color-accent-primary]"></div>
				<span class="text-sm text-[--color-text-secondary]">Publications</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-4 w-4 rounded bg-[--color-accent-secondary]"></div>
				<span class="text-sm text-[--color-text-secondary]">Citations</span>
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
		--color-border: #2a2f45;
	}
</style>
