<script setup lang="ts">
import { ref } from 'vue'

const { getStoreUrl, track } = useStore()

const items = [
  { key: 'countertops', title: 'Countertops', desc: 'Granite, quartz and marble, cut to measure', img: 'photo-1772567732989-1ddce59230e4' },
  { key: 'kitchen', title: 'Kitchen sinks and taps', desc: 'Sinks, mixers and pull-out taps', img: 'photo-1723902500025-b6414ff3a471' },
  { key: 'faucets', title: 'Faucets', desc: 'Basin and bath taps', img: 'photo-1773177930149-48a2f5df9e07' },
  { key: 'showers', title: 'Showers and shower sets', desc: 'Rain heads, hand showers, full sets', img: 'photo-1643081275354-331bf22740f1' },
  { key: 'sinks', title: 'Bathroom sinks and vanities', desc: 'Vanity units and basins', img: 'photo-1620626011761-996317b8d101' },
  { key: 'pedestals', title: 'Pedestal basins', desc: 'Clean lines for smaller spaces', img: 'photo-1740446568159-2a44cbe244a5' },
  { key: 'toilets', title: 'Toilets and seats', desc: 'Easy-fit, soft-close options', img: 'photo-1656646523560-2d9e478a243a' }
]

const currentImg = ref(items[0].img)
const isFading = ref(false)

function onPreview(imgId: string) {
  if (currentImg.value === imgId) return
  isFading.value = true
  setTimeout(() => {
    currentImg.value = imgId
    isFading.value = false
  }, 180)
}
</script>

<template>
	<section id="collection" style="padding-top: 0;">
		<div class="wrap">
			<h2>The collection</h2>
			<div class="coll">
				<div class="rows">
					<a v-for="item in items" :key="item.key" class="row" :href="getStoreUrl(item.key)"
						@mouseenter="onPreview(item.img)" @focus="onPreview(item.img)"
						@click="track('store_click', { category: item.key })">
						<div>
							<h3>{{ item.title }}</h3>
							<small>{{ item.desc }}</small>
						</div>
						<div class="ph th">
							<img :src="`https://images.unsplash.com/${item.img}?auto=format&fit=crop&w=200&q=70`" alt=""
								loading="lazy" />
						</div>
						<span class="go">Shop</span>
					</a>
				</div>

				<div class="ph pv">
					<img :class="{ fade: isFading }"
						:src="`https://images.unsplash.com/${currentImg}?auto=format&fit=crop&w=900&q=75`"
						alt="Preview" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.coll {
		display: grid;
		gap: 36px;
		margin-top: 44px;
	}

	@media (min-width: 900px) {
		.coll {
			grid-template-columns: 1.1fr 0.9fr;
			gap: 86px;
		}
	}

	.row {
		display: grid;
		grid-template-columns: 1fr auto auto;
		align-items: center;
		gap: 14px;
		padding: 24px 0;
		border-top: 1px solid var(--line);
		transition: border-color 0.25s ease;
	}

	.rows .row:last-child {
		border-bottom: 1px solid var(--line);
	}

	.row:hover {
		border-color: #c8c0b8;
	}

	.row h3 {
		font-size: clamp(1.5rem, 3vw, 2.1rem);
		font-weight: 500;
		transition: transform 0.3s, color 0.3s;
	}

	.row small {
		display: block;
		color: var(--muted);
		font-size: 0.88rem;
	}

	.row:hover h3,
	.row:focus-visible h3 {
		transform: translateX(10px);
		color: var(--accent);
	}

	.row .th {
		width: 60px;
		height: 60px;
		border-radius: 2px;
		box-shadow: var(--shadow);
	}

	.row .go {
		font-size: 0.8rem;
		color: var(--accent);
		border-bottom: 1px solid var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	@media (min-width: 900px) {
		.row .th {
			display: none;
		}

		.row {
			grid-template-columns: 1fr auto;
		}
	}

	.pv {
		display: none;
		position: sticky;
		top: 24px;
		aspect-ratio: 4/5;
		border-radius: 2px;
		box-shadow: var(--shadow-lg);
	}

	@media (min-width: 900px) {
		.pv {
			display: block;
		}
	}

	.pv img {
		filter: saturate(0.86);
		transition: opacity 0.35s ease;
	}

	.pv img.fade {
		opacity: 0;
	}

	@media (max-width: 640px) {
		.row {
			grid-template-columns: 1fr auto;
			gap: 12px;
		}

		.row .th {
			display: none;
		}

		.row h3 {
			font-size: 1.4rem;
		}

		.row small {
			font-size: 0.82rem;
		}
	}
</style>