<script setup lang="ts">
const { getStoreUrl, track } = useStore()
</script>

<template>
	<section>
		<div class="wrap intro">
			<h2>Everything for the bathroom and kitchen, in one place.</h2>
			<div>
				<p class="muted">
					Faucets, showers, sinks, toilets, kitchen taps and natural stone countertops, chosen for quality and
					priced clearly. Browse the full range online, pay by M-Pesa or card, and have it delivered to your
					door.
				</p>
				<p class="intro-link">
					<a class="ul" :href="getStoreUrl('general')" @click="track('store_click', { category: 'intro' })">
						Browse the full store
					</a>
				</p>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.intro {
		display: grid;
		gap: 28px;
	}

	@media (min-width: 900px) {
		.intro {
			grid-template-columns: 1fr 1fr;
			gap: 110px;
			align-items: start;
		}
	}

	.intro h2 {
		font-size: clamp(2rem, 4vw, 3.25rem);
		max-width: 12ch;
	}

	.intro p {
		font-size: 1.04rem;
		line-height: 1.8;
		max-width: 46ch;
	}

	.intro-link {
		margin-top: 18px;
	}
</style>