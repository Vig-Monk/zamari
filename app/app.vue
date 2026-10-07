<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isBarActive = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const heroEl = document.getElementById('top')
  if (heroEl && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => {
      isBarActive.value = !entry.isIntersecting
    })
    observer.observe(heroEl)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
	<div>
		<!-- Sticky Navigation Bar (Reveals on scroll past hero) -->
		<TopBar :active="isBarActive" />

		<!-- Hero Section -->
		<HeroSection />

		<main>
			<!-- Brand & Shop Intro -->
			<IntroSection />

			<!-- Collection List with Sticky Hover Preview -->
			<CollectionSection />

			<!-- Faucet Three Finishes SVG Customizer -->
			<FinishCustomizer />

			<!-- Stone Surfaces with Interactive Specs & Room Preview -->
			<StoneSection />

			<!-- Tabbed Product Catalog List -->
			<ProductCatalog />

			<!-- Customer & Contractor Reviews -->
			<ReviewsSection />

			<!-- Service Assurances Grid -->
			<AssuranceGrid />

			<!-- WhatsApp Direct Quote Form -->
			<QuoteForm />
		</main>

		<!-- Site Footer -->
		<SiteFooter />

		<!-- Mobile Bottom CTA Bar -->
		<StickyBottomBar />
	</div>
</template>