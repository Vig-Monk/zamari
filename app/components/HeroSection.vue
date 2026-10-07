<script setup lang="ts">
const { BRAND_NAME, getStoreUrl, track } = useStore()
</script>

<template>
	<header class="hero" id="top">
		<div class="ph">
			<img fetchpriority="high"
				src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1800&q=75"
				alt="" />
			<img src="https://images.unsplash.com/photo-1772567732989-1ddce59230e4?auto=format&fit=crop&w=1800&q=75"
				alt="" />
		</div>

		<!-- Top Navigation Bar -->
		<div class="hero-top-wrapper">
			<div class="wrap hero-nav-bar">
				<a class="hero-logo" href="#top">{{ BRAND_NAME }}</a>
				<nav class="hero-nav">
					<a class="hide-mobile" href="#collection">Collection</a>
					<a class="hide-mobile" href="#stone">Countertops</a>
					<a class="ul" :href="getStoreUrl('general')"
						@click="track('store_click', { category: 'hero_nav' })">
						Enter the store
					</a>
				</nav>
			</div>
		</div>

		<!-- Hero Text with Left-Tethered Smoke Plume -->
		<div class="hero-content wrap">
			<div class="hero-text-wrap">
				<h1>Considered fixtures and stone countertops for the bathroom and kitchen.</h1>
				<div class="hero-actions">
					<a class="btn" :href="getStoreUrl('general')"
						@click="track('store_click', { category: 'hero_cta' })">
						Enter the store
					</a>
					<a class="ul" href="#quote">Request a quote</a>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
	.hero {
		position: relative;
		min-height: max(600px, 90svh);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: #ffffff;
		isolation: isolate;
	}

	.hero>.ph {
		position: absolute;
		inset: 0;
	}

	/* Soft background tint */
	.hero::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg,
				rgba(13, 9, 7, 0.45) 0%,
				rgba(13, 9, 7, 0.08) 35%,
				rgba(13, 9, 7, 0.5) 100%);
	}

	.hero>* {
		position: relative;
		z-index: 1;
	}

	.hero .ph img {
		filter: saturate(0.88) contrast(1.02);
		animation: zoom 18s ease-out both;
	}

	.hero .ph img:nth-child(2) {
		position: absolute;
		inset: 0;
		opacity: 0;
		animation: crossfade 18s ease-in-out infinite;
	}

	@keyframes zoom {
		from {
			transform: scale(1.08);
		}
	}

	@keyframes crossfade {

		0%,
		38% {
			opacity: 0;
		}

		50%,
		88% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	/* Top Nav */
	.hero-top-wrapper {
		padding: 20px 24px 0;
	}

	.hero-nav-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 28px;
		background: rgba(13, 9, 7, 0.5);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border-radius: 999px;
	}

	.hero-logo {
		font-family: var(--serif);
		font-size: 1.5rem;
		font-weight: 600;
		letter-spacing: -0.035em;
		color: #ffffff;
	}

	.hero-nav a {
		margin-left: 24px;
		font-size: 0.92rem;
		opacity: 0.94;
		color: #ffffff;
		transition: opacity 0.2s, color 0.2s;
	}

	.hero-nav a:hover {
		opacity: 1;
		color: var(--accent);
	}

	/* Text Container tightly wrapped around text */
	.hero-content {
		padding-bottom: 56px;
		width: 100%;
	}

	.hero-text-wrap {
		position: relative;
		width: fit-content;
		max-width: 620px;
		padding: 16px 0;
	}

	/* Smoke plume tethered left under the text, pulled in from the right */
	.hero-text-wrap::before {
		content: "";
		position: absolute;
		top: -30px;
		bottom: -30px;
		left: -35px;
		right: 40px;
		/* Retracted from the right edge */
		background: radial-gradient(ellipse 60% 75% at 20% 50%,
				rgba(13, 9, 7, 0.84) 0%,
				rgba(13, 9, 7, 0.55) 40%,
				rgba(13, 9, 7, 0.12) 62%,
				rgba(13, 9, 7, 0) 78%);
		filter: blur(22px);
		-webkit-filter: blur(22px);
		z-index: -1;
		pointer-events: none;
	}

	.hero-text-wrap h1 {
		font-size: clamp(2rem, 3.8vw, 3.2rem);
		line-height: 1.1;
		text-wrap: balance;
		margin-bottom: 22px;
		color: #ffffff;
		text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
	}

	.hero-actions .btn {
		background: var(--accent);
		border-color: var(--accent);
		color: #ffffff;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
	}

	.hero-actions .btn:hover {
		background: #ffffff;
		border-color: #ffffff;
		color: var(--ink);
	}

	.hero-actions .ul {
		margin-left: 22px;
		border-color: #ffffff;
		color: #ffffff;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
	}

	/* Mobile */
	@media (max-width: 640px) {
		.hide-mobile {
			display: none;
		}

		.hero {
			min-height: max(540px, 82svh);
		}

		.hero-top-wrapper {
			padding: 16px 16px 0;
		}

		.hero-nav-bar {
			padding: 10px 20px;
		}

		.hero-content {
			padding-bottom: 36px;
		}

		.hero-text-wrap {
			padding: 8px 0;
			max-width: 100%;
			width: 100%;
		}

		.hero-text-wrap::before {
			top: -20px;
			bottom: -20px;
			left: -20px;
			right: 50px;
			/* Kept tight to the left side */
			background: radial-gradient(ellipse 65% 75% at 20% 50%,
					rgba(13, 9, 7, 0.84) 0%,
					rgba(13, 9, 7, 0.45) 45%,
					rgba(13, 9, 7, 0) 70%);
			filter: blur(16px);
		}

		.hero-text-wrap h1 {
			font-size: clamp(1.5rem, 6.4vw, 1.85rem);
			line-height: 1.18;
			margin-bottom: 18px;
			max-width: 23ch;
		}

		.hero-actions .btn {
			padding: 11px 20px;
			font-size: 0.88rem;
		}

		.hero-actions .ul {
			margin-left: 14px;
			font-size: 0.88rem;
		}
	}
</style>