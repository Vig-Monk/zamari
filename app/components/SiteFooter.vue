<script setup lang="ts">
const { BRAND_NAME, ADMIN_URL, WA_NUMBER, getStoreUrl, getWaUrl, track } = useStore()
</script>

<template>
	<footer>
		<div class="fcta wrap">
			<h2>The full range is in the store.</h2>
			<a class="btn" :href="getStoreUrl('general')" @click="track('store_click', { category: 'footer' })">
				Enter the store
			</a>
		</div>

		<div class="fbar">
			<div class="wrap fbar-inner">
				<span>{{ BRAND_NAME }} · Shop address, City · Mon–Sat, 8am–6pm</span>
				<span>
					<a :href="getWaUrl('Hi, I\'d like a quote for bathroom or kitchen items.')" target="_blank"
						rel="noopener">WhatsApp</a> &nbsp;
					<a :href="`tel:+${WA_NUMBER}`">Call</a> &nbsp;
					<a :href="ADMIN_URL">Staff login</a>
				</span>
			</div>
		</div>
	</footer>
</template>

<style scoped>
	footer {
		background: linear-gradient(rgba(13, 9, 7, 0.94), rgba(13, 9, 7, 0.94)), var(--granite);
		color: #c8c3bb;
	}

	.fcta {
		padding: 84px 0 56px;
		text-align: center;
	}

	.fcta h2 {
		font-size: clamp(2rem, 4vw, 3.2rem);
		color: #ffffff;
		margin-bottom: 22px;
	}

	.fcta .btn {
		background: var(--accent);
		border-color: var(--accent);
		color: #ffffff;
	}

	.fcta .btn:hover {
		background: #ffffff;
		border-color: #ffffff;
		color: var(--ink);
	}

	.fbar {
		border-top: 1px solid var(--line-dark);
		padding: 26px 0;
		font-size: 0.88rem;
	}

	.fbar-inner {
		display: flex;
		flex-wrap: wrap;
		gap: 16px 28px;
		justify-content: space-between;
	}

	.fbar a {
		color: #ffffff;
	}
</style>