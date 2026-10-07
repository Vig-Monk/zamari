<script setup lang="ts">
const { getWaUrl, track } = useStore()
</script>

<template>
	<a class="wa-float" :href="getWaUrl('Hi, I\'d like a quote for bathroom or kitchen items.')" target="_blank"
		rel="noopener" aria-label="Chat on WhatsApp"
		@click="track('whatsapp_click', { category: 'floating_action_button' })">
		<svg viewBox="0 0 32 32" class="wa-icon" aria-hidden="true" fill="currentColor">
			<path
				d="M16.01 2.667C8.653 2.667 2.667 8.647 2.667 16c0 2.473.673 4.887 1.953 6.993L2.667 29.333l6.533-1.893A13.253 13.253 0 0 0 16.01 29.333c7.353 0 13.333-5.98 13.333-13.333s-5.98-13.333-13.333-13.333zm0 24.407a11.08 11.08 0 0 1-5.647-1.54l-.407-.24-3.873 1.12 1.04-3.727-.267-.42A11.033 11.033 0 0 1 4.933 16c0-6.107 4.973-11.067 11.077-11.067 6.107 0 11.067 4.96 11.067 11.067s-4.96 11.074-11.067 11.074zm6.073-8.293c-.333-.167-1.967-.973-2.273-1.08-.3-.113-.52-.167-.74.167-.22.333-.853 1.08-1.047 1.3-.193.22-.387.247-.72.08-.333-.167-1.407-.52-2.68-1.653-.993-.887-1.66-1.98-1.853-2.313-.2-.333-.02-.513.147-.68.153-.147.333-.387.5-.58.167-.2.22-.333.333-.553.113-.22.053-.413-.027-.58-.08-.167-.74-1.787-1.013-2.453-.267-.64-.54-.553-.74-.56l-.633-.013c-.22 0-.58.08-.88.413-.3.333-1.153 1.127-1.153 2.747s1.18 3.187 1.34 3.407c.167.22 2.32 3.547 5.62 4.973.787.34 1.4.547 1.88.7.787.253 1.507.22 2.073.133.633-.093 1.967-.8 2.247-1.58.28-.773.28-1.44.193-1.58-.08-.14-.3-.227-.633-.393z" />
		</svg>
	</a>
</template>

<style scoped>
	.wa-float {
		position: fixed;
		bottom: 24px;
		right: 24px;
		z-index: 50;
		width: 58px;
		height: 58px;
		background-color: #25d366;
		color: #ffffff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4), 0 4px 12px rgba(13, 9, 7, 0.15);
		transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, background-color 0.2s ease;
		text-decoration: none;
	}

	.wa-float:hover {
		transform: translateY(-4px) scale(1.06);
		background-color: #20ba5a;
		box-shadow: 0 14px 30px rgba(37, 211, 102, 0.5), 0 6px 16px rgba(13, 9, 7, 0.2);
	}

	.wa-float:active {
		transform: translateY(0) scale(0.96);
	}

	.wa-icon {
		width: 32px;
		height: 32px;
	}

	@media (max-width: 640px) {
		.wa-float {
			bottom: 18px;
			right: 18px;
			width: 52px;
			height: 52px;
		}

		.wa-icon {
			width: 28px;
			height: 28px;
		}
	}
</style>