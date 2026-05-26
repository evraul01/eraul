<script lang="ts">
	import { onMount } from 'svelte';

	interface Skill {
		name: string;
		proficiency: number;
		category: string;
	}

	const skills: Skill[] = [
		{ name: 'Python & Data Analysis', proficiency: 95, category: 'Technical' },
		{ name: 'Spectroscopy Analysis', proficiency: 90, category: 'Technical' },
		{ name: 'Machine Learning', proficiency: 80, category: 'Technical' },
		{ name: 'Scientific Computing', proficiency: 92, category: 'Technical' },
		{ name: 'Public Communication', proficiency: 85, category: 'Soft Skills' },
		{ name: 'Research Writing', proficiency: 88, category: 'Soft Skills' },
		{ name: 'Teaching & Mentoring', proficiency: 87, category: 'Soft Skills' },
		{ name: 'Data Visualization', proficiency: 84, category: 'Technical' }
	];

	let animatedProficiencies: { [key: string]: number } = {};
	let isVisible = $state(false);

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
			animateBars();
		}, 200);
	});

	function animateBars() {
		const duration = 1500;
		const startTime = Date.now();

		const animate = () => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);

			skills.forEach((skill) => {
				animatedProficiencies[skill.name] = Math.floor(skill.proficiency * progress);
			});

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		};

		animate();
	}

	const categories = ['Technical', 'Soft Skills'];
	const getColor = (index: number) => {
		const colors = ['#00d4ff', '#ff6b9d', '#ffc107', '#10b981'];
		return colors[index % colors.length];
	};
</script>

<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
	<h2 class="mb-12 text-3xl font-bold text-[--color-text-primary]">
		Core <span class="text-[--color-accent-primary]">Competencies</span>
	</h2>

	{#each categories as category}
		<div class="mb-16">
			<h3 class="mb-8 text-xl font-bold text-[--color-text-secondary]">{category}</h3>

			<div class="space-y-6">
				{#each skills.filter((s) => s.category === category) as skill, index}
					<div>
						<!-- Skill name and proficiency -->
						<div class="mb-2 flex items-center justify-between">
							<span class="font-semibold text-[--color-text-primary]">{skill.name}</span>
							<span class="text-sm font-bold" style="color: {getColor(index)}">
								{isVisible ? animatedProficiencies[skill.name] || 0 : 0}%
							</span>
						</div>

						<!-- Skill bar -->
						<div class="h-3 overflow-hidden rounded-full bg-[--color-bg-secondary] shadow-inner">
							<div
								class="h-full transition-all duration-1000 ease-out"
								style="
									width: {isVisible ? skill.proficiency : 0}%;
									background: linear-gradient(90deg, {getColor(index)}, {getColor(index + 1)});
									box-shadow: 0 0 20px {getColor(index)}40;
								"
							></div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style global>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-bg-secondary: #141829;
		--color-text-primary: #e8eef2;
		--color-text-secondary: #a8b0bd;
	}
</style>
