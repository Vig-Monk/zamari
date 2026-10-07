<script setup lang="ts">
import { reactive } from 'vue'

const { getWaUrl, track } = useStore()

const form = reactive({
  name: '',
  phone: '',
  need: 'Kitchen countertops',
  details: ''
})

function onSubmit() {
  const msg = `Quote request\nName: ${form.name}\nPhone: ${form.phone}\nNeed: ${form.need}\nDetails: ${form.details || '-'}`
  track('whatsapp_quote_submit', { need: form.need })
  window.open(getWaUrl(msg), '_blank', 'noopener')
}
</script>

<template>
	<section id="quote">
		<div class="wrap q">
			<div>
				<h2>Not sure what you need?</h2>
				<p class="muted" style="margin-top: 14px; max-width: 40ch;">
					Tell us about your space and we'll recommend what fits. We reply on WhatsApp, usually within a few
					hours. Designers and contractors can ask for trade pricing.
				</p>
			</div>

			<form @submit.prevent="onSubmit">
				<label>Your name<input v-model="form.name" required autocomplete="name" /></label>
				<label>Phone number<input v-model="form.phone" type="tel" required autocomplete="tel" /></label>
				<label>What do you need?
					<select v-model="form.need">
						<option>Kitchen countertops</option>
						<option>Vanity tops or stone surfaces</option>
						<option>Kitchen sinks or taps</option>
						<option>Bathroom faucets or showers</option>
						<option>Sinks, vanities or pedestals</option>
						<option>Toilets or seats</option>
						<option>A full bathroom or kitchen</option>
						<option>Trade or bulk order</option>
					</select>
				</label>
				<label>Details (optional)<textarea v-model="form.details" rows="2"
						placeholder="Sizes, quantities, location"></textarea></label>
				<button class="btn" type="submit">Send on WhatsApp</button>
			</form>
		</div>
	</section>
</template>

<style scoped>
	.q {
		display: grid;
		gap: 40px;
		align-items: start;
	}

	@media (min-width: 900px) {
		.q {
			grid-template-columns: 1fr 1fr;
			gap: 110px;
		}
	}

	.q h2 {
		font-size: clamp(2rem, 4vw, 3.2rem);
		max-width: 10ch;
	}

	form {
		display: grid;
		gap: 22px;
		background: var(--stone-card);
		padding: 32px;
		border-radius: 3px;
		box-shadow: var(--shadow);
	}

	@media (max-width: 640px) {
		form {
			padding: 24px;
		}
	}

	label {
		font-size: 0.85rem;
		color: var(--muted);
		display: grid;
		gap: 2px;
	}

	input,
	select,
	textarea {
		font: inherit;
		color: var(--ink);
		padding: 12px 0;
		border: 0;
		border-bottom: 1px solid #b9b4ab;
		border-radius: 0;
		background: transparent;
		width: 100%;
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: 0;
		border-color: var(--accent);
	}

	form .btn {
		justify-self: start;
		background: var(--accent);
		border-color: var(--accent);
		color: #ffffff;
	}

	form .btn:hover {
		background: var(--accent-dark);
		border-color: var(--accent-dark);
	}
</style>