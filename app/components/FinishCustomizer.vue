<script setup lang="ts">
import { ref } from 'vue'

const { getStoreUrl, track } = useStore()

const finishes = {
  chrome: {
    label: 'Chrome',
    stops: ['#f4f6f8', '#aab3bb', '#5d666e'],
    style: 'linear-gradient(135deg, #f4f6f8, #aab3bb, #5d666e)'
  },
  brass: {
    label: 'Brushed brass',
    stops: ['#f1dcae', '#b8924d', '#6e5128'],
    style: 'linear-gradient(135deg, #f1dcae, #b8924d, #6e5128)'
  },
  black: {
    label: 'Matte black',
    stops: ['#5a5a5c', '#2a2a2c', '#0d0d0e'],
    style: 'linear-gradient(135deg, #5a5a5c, #2a2a2c, #0d0d0e)'
  }
}

const activeKey = ref<'chrome' | 'brass' | 'black'>('chrome')
</script>

<template>
	<div class="fin">
		<div class="art">
			<svg viewBox="0 0 300 300" role="img" aria-label="Faucet shown in the selected finish">
				<defs>
					<linearGradient id="faucetG" gradientUnits="userSpaceOnUse" x1="90" y1="0" x2="260" y2="0">
						<stop :stop-color="finishes[activeKey].stops[0]" offset="0" />
						<stop :stop-color="finishes[activeKey].stops[1]" offset="0.5" />
						<stop :stop-color="finishes[activeKey].stops[2]" offset="1" />
					</linearGradient>
				</defs>
				<ellipse cx="150" cy="274" rx="56" ry="5" fill="#000" opacity="0.12" />
				<rect x="118" y="248" width="64" height="20" rx="4" fill="url(#faucetG)" />
				<rect x="136" y="120" width="28" height="132" rx="6" fill="url(#faucetG)" />
				<path d="M150 132 C150 72 160 60 204 60 C236 60 246 74 246 104" fill="none" stroke="url(#faucetG)"
					stroke-width="22" stroke-linecap="round" />
				<rect x="234" y="104" width="24" height="22" rx="4" fill="url(#faucetG)" />
				<path d="M150 126 L96 100" stroke="url(#faucetG)" stroke-width="12" stroke-linecap="round" />
			</svg>
		</div>

		<div class="tx">
			<h2>One faucet, three finishes.</h2>
			<p class="muted">
				Choose the metal that suits your bathroom or kitchen. Most of our faucets, mixers, showers and
				accessories come in chrome, brushed brass and matte black.
			</p>

			<div class="sw" role="group" aria-label="Choose a finish">
				<button v-for="(val, key) in finishes" :key="key" :aria-pressed="activeKey === key"
					:aria-label="val.label" :style="{ background: val.style }" @click="activeKey = key as any" />
			</div>

			<p id="fn" aria-live="polite">{{ finishes[activeKey].label }}</p>

			<a class="btn" :href="getStoreUrl('faucets')" @click="track('store_click', { category: 'faucets' })">
				Shop faucets
			</a>
		</div>
	</div>
</template>

<style scoped>
	.fin {
		display: grid;
		background: #e9e5de;
		border-radius: 3px;
		overflow: hidden;
		box-shadow: 0 12px 45px rgba(13, 9, 7, 0.07);
	}

	@media (min-width: 900px) {
		.fin {
			grid-template-columns: 1fr 1fr;
		}
	}

	.fin .art {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 48px 24px;
		min-height: 360px;
		background: var(--marble) center/cover;
	}

	.fin svg {
		width: min(290px, 78%);
		height: auto;
	}

	.fin .tx {
		padding: 56px 24px;
		background: var(--stone-card);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 16px;
		align-items: flex-start;
	}

	@media (min-width: 900px) {
		.fin .tx {
			padding: 72px;
		}
	}

	.sw {
		display: flex;
		gap: 16px;
	}

	.sw button {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 1px solid var(--line);
		cursor: pointer;
		padding: 0;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.sw button:hover {
		transform: scale(1.07);
	}

	.sw button[aria-pressed="true"] {
		box-shadow: 0 0 0 3px #eee9e3, 0 0 0 5px var(--accent);
	}

	#fn {
		font-family: var(--serif);
		font-size: 1.4rem;
		color: var(--accent);
		font-weight: 600;
	}
</style>