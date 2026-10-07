<template>
	<div class="wrap">
		<div class="assure">
			<div>
				<h3>Checked</h3>
				<p>Every piece is inspected before it ships.</p>
			</div>
			<div>
				<h3>Delivered</h3>
				<p>To your home or site. Add areas and fees here.</p>
			</div>
			<div>
				<h3>Paid your way</h3>
				<p>M-Pesa and card in the store.</p>
			</div>
			<div>
				<h3>Advice</h3>
				<p>Fitting questions answered on WhatsApp.</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.assure {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		border-radius: 3px;
		overflow: hidden;
		background: var(--stone-card);
	}

	@media (min-width: 900px) {
		.assure {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.assure div {
		padding: 30px 24px;
		border-left: 1px solid var(--line);
	}

	.assure div:nth-child(odd) {
		border-left: 0;
	}

	@media (min-width: 900px) {
		.assure div:nth-child(odd) {
			border-left: 1px solid var(--line);
		}

		.assure div:first-child {
			border-left: 0;
		}
	}

	.assure h3 {
		font-size: 1.15rem;
		font-weight: 600;
		margin-bottom: 5px;
	}

	.assure h3::before {
		content: "";
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
		margin: 0 9px 3px 0;
	}

	.assure p {
		font-size: 0.88rem;
		color: var(--muted);
	}
</style>