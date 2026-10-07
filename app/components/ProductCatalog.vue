<script setup lang="ts">
import { ref, computed } from 'vue'

const { getStoreUrl, track } = useStore()

const categories = [
  {
    key: 'countertops',
    title: 'Countertops',
    img: 'photo-1772567732989-1ddce59230e4',
    items: [
      ['Granite countertop', 'Cut to size, polished edge'],
      ['Quartz countertop', 'Non-porous, low maintenance'],
      ['Marble vanity top', 'With basin cut-out']
    ]
  },
  {
    key: 'kitchen',
    title: 'Kitchen sinks and taps',
    img: 'photo-1723902500025-b6414ff3a471',
    items: [
      ['Stainless steel kitchen sink', 'Single bowl with drainer'],
      ['Pull-out kitchen mixer', 'Chrome or matte black'],
      ['Granite composite sink', 'Scratch and heat resistant']
    ]
  },
  {
    key: 'faucets',
    title: 'Faucets',
    img: 'photo-1773177930149-48a2f5df9e07',
    items: [
      ['Basin mixer tap', 'Chrome, ceramic cartridge'],
      ['Wall-mounted bath filler', 'Brushed brass'],
      ['Single-lever kitchen tap', 'Matte black']
    ]
  },
  {
    key: 'showers',
    title: 'Showers',
    img: 'photo-1643081275354-331bf22740f1',
    items: [
      ['Rain shower set', 'Head, arm and hand shower'],
      ['Concealed shower mixer', 'Chrome'],
      ['Slim hand shower', 'Matte black']
    ]
  },
  {
    key: 'sinks',
    title: 'Sinks and vanities',
    img: 'photo-1620626011761-996317b8d101',
    items: [
      ['Vanity unit with basin', 'Cabinet and mirror'],
      ['Countertop basin', 'Ceramic, round'],
      ['Floating vanity', 'Wall-hung, two drawers']
    ]
  },
  {
    key: 'pedestals',
    title: 'Pedestals',
    img: 'photo-1740446568159-2a44cbe244a5',
    items: [
      ['Classic pedestal basin', 'Full pedestal'],
      ['Compact pedestal basin', 'For small spaces'],
      ['Semi-pedestal basin', 'Wall-hung with half column']
    ]
  },
  {
    key: 'toilets',
    title: 'Toilets and seats',
    img: 'photo-1656646523560-2d9e478a243a',
    items: [
      ['Soft-close toilet seat', 'Easy-fit hinges'],
      ['Close-coupled toilet', 'Dual flush'],
      ['Wall-hung toilet', 'Concealed cistern']
    ]
  }
]

const activeKey = ref('countertops')
const current = computed(() => categories.find(c => c.key === activeKey.value)!)
const isFading = ref(false)

function onCategory(key: string) {
  if (activeKey.value === key) return
  isFading.value = true
  setTimeout(() => {
    activeKey.value = key
    isFading.value = false
  }, 200)
}
</script>

<template>
	<section style="padding-top: 0;">
		<div class="wrap">
			<h2>Shop the range</h2>
			<p class="muted" style="margin-top: 8px;">Pick a category to see what's popular. Replace these with your
				real products and prices.</p>

			<div class="tabs" role="tablist" aria-label="Product category">
				<button v-for="c in categories" :key="c.key" class="tab" role="tab" :aria-selected="activeKey === c.key"
					@click="onCategory(c.key)">
					{{ c.title }}
				</button>
			</div>

			<div class="pe">
				<div class="ph">
					<img :class="{ fade: isFading }"
						:src="`https://images.unsplash.com/${current.img}?auto=format&fit=crop&w=800&q=75`" alt="" />
				</div>

				<div>
					<ul>
						<li v-for="(p, idx) in current.items" :key="idx">
							<a :href="getStoreUrl(activeKey)" @click="track('store_click', { category: activeKey })">
								<h3>{{ p[0] }}</h3>
								<small>{{ p[1] }}</small>
								<span class="p">KES 0,000</span>
							</a>
						</li>
					</ul>
					<a class="ul more" :href="getStoreUrl(activeKey)"
						@click="track('store_click', { category: activeKey })">
						Shop all {{ current.title.toLowerCase() }}
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.pe {
		display: grid;
		gap: 28px;
		margin-top: 22px;
	}

	@media (min-width: 900px) {
		.pe {
			grid-template-columns: 0.9fr 1.1fr;
			gap: 56px;
			align-items: start;
		}
	}

	.pe .ph {
		aspect-ratio: 4/5;
		border-radius: 3px;
		box-shadow: var(--shadow);
	}

	.pe .ph img {
		transition: opacity 0.3s;
	}

	.pe .ph img.fade {
		opacity: 0;
	}

	.pe ul {
		list-style: none;
	}

	.pe li a {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 0 16px;
		padding: 16px 0;
		border-top: 1px solid var(--line);
		transition: padding-left 0.2s;
	}

	.pe li:last-child a {
		border-bottom: 1px solid var(--line);
	}

	.pe li a:hover {
		padding-left: 10px;
	}

	.pe li a:hover h3 {
		color: var(--accent);
	}

	.pe li h3 {
		font-size: 1.25rem;
		transition: color 0.25s;
	}

	.pe li small {
		color: var(--muted);
	}

	.pe li .p {
		grid-row: 1/3;
		grid-column: 2;
		align-self: center;
		color: var(--accent);
		font-weight: 600;
	}

	.more {
		display: inline-block;
		margin-top: 20px;
	}
</style>