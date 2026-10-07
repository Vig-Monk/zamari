<script setup lang="ts">
import { ref, computed } from 'vue'

const { getStoreUrl, getWaUrl, track } = useStore()

const stones = {
  marble: {
    name: 'Marble',
    desc: 'Natural veining and a soft, luxurious look. Every slab is one of a kind.',
    best: 'Vanity tops, kitchen islands, feature walls',
    care: 'Wipe spills quickly and reseal now and then',
    finishes: 'Polished, honed',
    img: 'photo-1772567732989-1ddce59230e4'
  },
  granite: {
    name: 'Granite',
    desc: 'Natural, very hard and heat resistant. A dependable choice for busy bathrooms and kitchens.',
    best: 'Kitchen countertops, vanity tops, busy areas',
    care: 'Seal occasionally and clean with mild soap',
    finishes: 'Polished, honed, leathered',
    img: 'photo-1776935359448-fb11f63c375d'
  },
  quartz: {
    name: 'Quartz',
    desc: 'Engineered for consistency. Non-porous, so it resists stains and needs no sealing.',
    best: 'Kitchen countertops, vanity tops, wall panels',
    care: 'Wipe clean and keep very hot items off it',
    finishes: 'Polished, matte',
    img: 'photo-1722605090433-41d1183a792d'
  }
}

const activeStone = ref<'marble' | 'granite' | 'quartz'>('marble')
const current = computed(() => stones[activeStone.value])
const isFading = ref(false)

function onSelect(k: 'marble' | 'granite' | 'quartz') {
  if (activeStone.value === k) return
  isFading.value = true
  setTimeout(() => {
    activeStone.value = k
    isFading.value = false
  }, 200)
}
</script>

<template>
	<section id="stone">
		<div class="wrap">
			<h2>Countertops and stone surfaces</h2>
			<p class="muted" style="margin-top: 8px; max-width: 54ch;">
				Kitchen countertops, vanity tops, islands and wall panels in granite, quartz and marble, cut to your
				measurements with cut-outs for your sink and taps. Choose a stone to see more.
			</p>

			<div class="tabs" role="tablist" aria-label="Stone type">
				<button v-for="(val, key) in stones" :key="key" class="tab" role="tab"
					:aria-selected="activeStone === key" @click="onSelect(key as any)">
					{{ val.name }}
				</button>
			</div>

			<div class="sf">
				<div class="slab" :class="activeStone">
					<div class="ph inroom">
						<img :class="{ fade: isFading }"
							:src="`https://images.unsplash.com/${current.img}?auto=format&fit=crop&w=500&q=70`"
							alt="" />
					</div>
				</div>

				<div class="tx">
					<h3>{{ current.name }}</h3>
					<p class="muted">{{ current.desc }}</p>
					<div class="kv">
						<p><b>Best for</b><span>{{ current.best }}</span></p>
						<p><b>Care</b><span>{{ current.care }}</span></p>
						<p><b>Finishes</b><span>{{ current.finishes }}</span></p>
					</div>
					<a class="btn" target="_blank" rel="noopener"
						:href="getWaUrl(`Hi, I'd like a quote for ${activeStone} surfaces.`)"
						@click="track('whatsapp_click', { category: `stone_${activeStone}` })">
						Request a {{ activeStone }} quote
					</a>
					<a class="ul" :href="getStoreUrl('countertops')">Shop countertops</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.sf {
		display: grid;
		margin-top: 22px;
		border-radius: 3px;
		overflow: hidden;
		box-shadow: var(--shadow);
	}

	@media (min-width: 900px) {
		.sf {
			grid-template-columns: 1.15fr 0.85fr;
		}
	}

	.slab {
		min-height: 430px;
		position: relative;
		background: var(--marble) center/cover;
	}

	.slab.granite {
		background-image: var(--granite);
	}

	.slab.quartz {
		background-image: var(--quartz);
	}

	.inroom {
		position: absolute;
		right: 18px;
		bottom: 18px;
		width: 40%;
		max-width: 210px;
		aspect-ratio: 4/3;
		border: 5px solid #ffffff;
		box-shadow: 0 18px 40px rgba(13, 9, 7, 0.28);
	}

	.inroom img {
		transition: opacity 0.2s ease;
	}

	.inroom img.fade {
		opacity: 0;
	}

	.sf .tx {
		padding: 36px 24px;
		background: var(--stone-card);
		display: flex;
		flex-direction: column;
		gap: 14px;
		align-items: flex-start;
	}

	@media (min-width: 900px) {
		.sf .tx {
			padding: 48px;
		}
	}

	.sf .tx h3 {
		font-size: clamp(2rem, 4vw, 2.7rem);
	}

	.kv {
		display: grid;
		gap: 8px;
		font-size: 0.93rem;
		border-top: 1px solid #cdc8bf;
		padding-top: 14px;
		width: 100%;
	}

	.kv b {
		font-weight: 500;
		margin-right: 6px;
	}

	.kv span {
		color: var(--muted);
	}

	.sf .btn {
		background: var(--accent);
		border-color: var(--accent);
		color: #ffffff;
	}

	.sf .btn:hover {
		background: var(--accent-dark);
		border-color: var(--accent-dark);
	}
</style>