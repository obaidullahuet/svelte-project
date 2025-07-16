<script>
	import { fade, scale } from 'svelte/transition';
	import Lower from '$lib/+lowermodal.svelte';

	export let isOpen = false;
	export let close = () => {};
	export let closeAll = () => {};

</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
			class="fixed inset-0 z-40 top-20 text-[#EEEDEE] backdrop-blur-sm p-4 bg-background flex items-center justify-center"
		transition:fade
		role="dialog"
		aria-modal="true"
		on:click={close}
	>
		<div
			class="text-[#EEEDEE] font-inter rounded-2xl w-full max-w-[668px] max-h-[90vh] overflow-y-auto p-3 sm:p-4 xl:p-6 border border-border relative z-50 backdrop-blur-[100%] bg-border"
			transition:scale
			on:click|stopPropagation
			role="document"
		>
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
				>
					<g clip-path="url(#clip0_4156_17801)">
						<rect width="48" height="48" rx="9" fill="#FF3059" fill-opacity="0.31" />
						<g filter="url(#filter0_d_4156_17801)">
							<path
								d="M32.8408 30.0125C33.6227 30.7948 33.6227 32.0586 32.8408 32.8408C32.4508 33.2308 31.9388 33.4267 31.4265 33.4267C30.9145 33.4267 30.4026 33.2308 30.0125 32.8408L24.0027 26.8305L17.9928 32.8408C17.6028 33.2308 17.0908 33.4267 16.5788 33.4267C16.0665 33.4267 15.5545 33.2308 15.1645 32.8408C14.3827 32.0586 14.3827 30.7948 15.1645 30.0125L21.1748 24.0027L15.1645 17.9928C14.3827 17.2105 14.3827 15.9467 15.1645 15.1645C15.9467 14.3827 17.2105 14.3827 17.9928 15.1645L24.0027 21.1748L30.0125 15.1645C30.7948 14.3827 32.0586 14.3827 32.8408 15.1645C33.6227 15.9467 33.6227 17.2105 32.8408 17.9928L26.8305 24.0027L32.8408 30.0125Z"
								fill="#FF3059"
							/>
						</g>
					</g>
					<defs>
						<filter
							id="filter0_d_4156_17801"
							x="5.27812"
							y="5.27812"
							width="37.4491"
							height="37.4486"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset />
							<feGaussianBlur stdDeviation="4.65" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 1 0 0 0 0 0.188235 0 0 0 0 0.34902 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_4156_17801"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_4156_17801"
								result="shape"
							/>
						</filter>
						<clipPath id="clip0_4156_17801">
							<rect width="48" height="48" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>

			<p
				class="text-[14px] sm:text-[20px] xl:text-[22px] leading-4 font-roboto uppercase font-black mb-2 sm:mb-3"
			>
				Your subscription has been <br /> been canceled
			</p>

			<p class="text-[16px] font-inter py-[2px] text-[#EEEDEE] mb-3">We're sorry to see you go!</p>
			<p class="text-[16px] font-inter py-[2px] text-[#EEEDEE] mb-3">
				Your access will remain active until the end of your billing period.
			</p>

			<div class="flex justify-end sm:flex-row">
				<button
					class="bg-[#8800F0]  font-roboto font-semibold text-white px-3 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-2 rounded-sm hover:bg-fuchsia-700 transition-colors text-xs sm:text-sm xl:text-[15px] leading-1"
					on:click={closeAll}
				>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}
