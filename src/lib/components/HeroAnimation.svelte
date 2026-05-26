<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let animationId: number;
	let mouseX = 0;
	let mouseY = 0;

	interface Star {
		x: number;
		y: number;
		radius: number;
		opacity: number;
		vx: number;
		vy: number;
	}

	let stars: Star[] = [];
	let width = 0;
	let height = 0;

	function initStars() {
		stars = [];
		const starCount = 100;
		for (let i = 0; i < starCount; i++) {
			stars.push({
				x: Math.random() * width,
				y: Math.random() * height,
				radius: Math.random() * 1.5,
				opacity: Math.random() * 0.5 + 0.5,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5
			});
		}
	}

	function drawStars() {
		if (!ctx) return;

		stars.forEach((star) => {
			ctx!.fillStyle = `rgba(0, 212, 255, ${star.opacity})`;
			ctx!.beginPath();
			ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
			ctx!.fill();

			// Update position
			star.x += star.vx;
			star.y += star.vy;

			// Wrap around edges
			if (star.x < 0) star.x = width;
			if (star.x > width) star.x = 0;
			if (star.y < 0) star.y = height;
			if (star.y > height) star.y = 0;

			// Pulsing effect
			star.opacity += (Math.random() - 0.5) * 0.05;
			star.opacity = Math.max(0.3, Math.min(1, star.opacity));
		});
	}

	function drawOrbit() {
		if (!ctx) return;

		const centerX = width / 2;
		const centerY = height / 2;
		const orbitRadius = Math.min(width, height) * 0.15;

		// Draw orbit circles
		ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
		ctx.lineWidth = 1;

		for (let i = 1; i <= 3; i++) {
			ctx.beginPath();
			ctx.arc(centerX, centerY, (orbitRadius * i) / 3, 0, Math.PI * 2);
			ctx.stroke();
		}

		// Draw central glow
		const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, orbitRadius);
		gradient.addColorStop(0, 'rgba(0, 212, 255, 0.3)');
		gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, width, height);
	}

	function drawMouseTracer() {
		if (!ctx) return;

		const distance = 150;
		const dx = mouseX - width / 2;
		const dy = mouseY - height / 2;
		const dist = Math.sqrt(dx * dx + dy * dy);

		if (dist < distance) {
			const opacity = 1 - dist / distance;
			ctx.strokeStyle = `rgba(255, 107, 157, ${opacity * 0.3})`;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc(mouseX, mouseY, 30, 0, Math.PI * 2);
			ctx.stroke();
		}
	}

	function animate() {
		if (!ctx) return;

		// Clear canvas with fade effect
		ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
		ctx.fillRect(0, 0, width, height);

		drawOrbit();
		drawStars();
		drawMouseTracer();

		animationId = requestAnimationFrame(animate);
	}

	function handleMouseMove(e: MouseEvent) {
		const rect = canvas.getBoundingClientRect();
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;
	}

	function resizeCanvas() {
		const rect = canvas.parentElement?.getBoundingClientRect();
		if (!rect) return;

		width = rect.width;
		height = rect.height;

		canvas.width = width;
		canvas.height = height;

		if (ctx) {
			ctx.clearRect(0, 0, width, height);
		}

		initStars();
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		resizeCanvas();
		animate();

		window.addEventListener('resize', resizeCanvas);
		canvas.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			canvas.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(animationId);
		};
	});
</script>

<div class="relative h-full w-full overflow-hidden">
	<canvas bind:this={canvas} class="absolute inset-0 h-full w-full"></canvas>

	<!-- Content overlay -->
	<div class="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
		<div class="max-w-3xl space-y-6">
			<div class="space-y-2">
				<h1 class="text-5xl font-bold md:text-7xl">
					Exploring the
					<span class="text-[--color-accent-primary]">Universe</span>
				</h1>
				<p class="text-xl text-[--color-text-secondary] md:text-2xl">
					Astrophysics PhD Student | Researcher | Science Communicator
				</p>
			</div>

			<p class="mx-auto max-w-xl text-lg leading-relaxed text-[--color-text-secondary]">
				Investigating cosmic phenomena through rigorous research, contributing to our understanding of
				the stars, and sharing the wonder of astronomy with the world.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
				<a
					href="/projects"
					class="rounded-lg bg-[--color-accent-primary] px-8 py-3 font-semibold text-[--color-bg-primary] transition-all duration-300 hover:shadow-lg hover:shadow-[--color-accent-primary]/50 hover:scale-105"
				>
					View My Work
				</a>
				<a
					href="/contact"
					class="rounded-lg border border-[--color-accent-primary] px-8 py-3 font-semibold text-[--color-accent-primary] transition-all duration-300 hover:bg-[--color-accent-primary]/10"
				>
					Get in Touch
				</a>
			</div>
		</div>
	</div>
</div>

<style global>
	:global(:root) {
		--color-accent-primary: #00d4ff;
		--color-bg-primary: #0a0e27;
		--color-text-secondary: #a8b0bd;
	}
</style>
