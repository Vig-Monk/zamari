<template>
	<section style="padding-top: 0;">
		<div class="wrap pr">
			<blockquote>
				“Replace this with a real customer review about quality, delivery or the stone work.”
				<cite>Customer name, area</cite>
			</blockquote>
			<div class="sm">
				<p>“A shorter review from a second customer.”<cite>Name, area</cite></p>
				<p>“A review from a contractor or designer.”<cite>Name, company</cite></p>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.pr {
		display: grid;
		gap: 36px;
	}

	@media (min-width: 900px) {
		.pr {
			grid-template-columns: 1.3fr 1fr;
			gap: 80px;
		}
	}

	.pr blockquote {
		font-family: var(--serif);
		font-size: clamp(1.4rem, 2.6vw, 2rem);
		line-height: 1.3;
		font-weight: 500;
	}

	.pr blockquote::before {
		content: "“";
		display: block;
		color: var(--accent);
		font-size: 3rem;
		line-height: 0.6;
		margin-bottom: 18px;
	}

	.pr cite {
		display: block;
		font: 400 0.88rem var(--sans);
		color: var(--muted);
		margin-top: 14px;
		font-style: normal;
	}

	.pr .sm {
		display: grid;
		gap: 22px;
	}

	.pr .sm p {
		border-top: 1px solid var(--line);
		padding-top: 14px;
	}
</style>