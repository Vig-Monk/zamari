<script setup lang="ts">
defineProps<{
  active: boolean
}>()

const { BRAND_NAME, getStoreUrl, track } = useStore()
</script>

<template>
	<div class="bar" :class="{ on: active }">
		<div class="wrap bar-inner">
			<a class="bar-logo" href="#top">{{ BRAND_NAME }}</a>
			<a class="btn solid" :href="getStoreUrl('general')" @click="track('store_click', { category: 'top_bar' })">
				Enter the store
			</a>
		</div>
	</div>
</template>

<style scoped>
	.bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 30;
		background: rgba(13, 9, 7, 0.86);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.12);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.28);
		transform: translateY(-100%);
		transition: transform 0.35s ease;
	}

	.bar.on {
		transform: translateY(0);
	}

	.bar-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 56px;
	}

	.bar-logo {
		font-size: 1.3rem;
		color: #ffffff;
		font-family: var(--serif);
		letter-spacing: -0.025em;
	}

	.bar .btn {
		padding: 8px 20px;
		background: var(--accent);
		border-color: var(--accent);
		color: #ffffff;
	}

	.bar .btn:hover {
		background: var(--accent-dark);
		border-color: var(--accent-dark);
	}
</style>