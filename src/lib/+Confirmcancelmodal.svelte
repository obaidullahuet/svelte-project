<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Done from '$lib/+ActionModal.svelte';
	export let label: string;
	export let bg: string;
	export let isOpen = false;
	export let close = () => {};
	const features = [
		{
			text: 'Priority queue + max player slots'
		},
		{
			text: 'Advanced anti-cheat system'
		},
		{
			text: 'Daily automated backups'
		}
	];

	let showModal = false;
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="fixed inset-0 text-[#EEEDEE] backdrop-blur-sm p-4 bg-background flex items-center justify-center"
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
				<h2
					class="text-[10px] font-inter sm:text-[15px] text-{bg} uppercase leading-2 font-medium sm:mb-0"
				>
					Cancel of {label} Subscription
				</h2>
				<div class="flex items-center gap-1 sm:gap-2">
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] {bg} rounded-full" />
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] {bg} rounded-full" />
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] {bg} rounded-full" />
				</div>
			</div>

			<p
				class="text-[14px] sm:text-[20px] xl:text-[22px] leading-4 font-roboto uppercase font-black mb-2 sm:mb-3"
			>
				Confirm cancellation
			</p>

			<p class="text-[16px] font-inter py-[2px] text-[#EEEDEE] mb-3">
				You’ll keep your benefits until <span
					class="bg-background px-[10px]
                py-[2px] border border-border-light rounded-sm">01/01/2025</span
				>
				<br /> After that, your account will be downgraded to free tier.
			</p>

			<div class="px-[16px] py-[14px] mb-6 border border-border-light rounded-md">
				{#each features as feature}
					<div class="flex items-center gap-2 mb-2 font-inter text-[#EEEDEE]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<g clip-path="url(#clip0_4156_17780)">
								<g filter="url(#filter0_d_4156_17780)">
									<path
										d="M8 0C3.58862 0 0 3.58862 0 8C0 12.4114 3.58862 16 8 16C12.4114 16 16 12.4114 16 8C16 3.58862 12.4114 0 8 0Z"
										fill="#FF3059"
									/>
								</g>
								<path
									d="M10.9469 10.0042C11.2076 10.2649 11.2076 10.6862 10.9469 10.9469C10.8169 11.0769 10.6463 11.1422 10.4755 11.1422C10.3048 11.1422 10.1342 11.0769 10.0042 10.9469L8.00089 8.94351L5.99759 10.9469C5.86758 11.0769 5.69693 11.1422 5.52628 11.1422C5.3555 11.1422 5.18484 11.0769 5.05484 10.9469C4.79422 10.6862 4.79422 10.2649 5.05484 10.0042L7.05826 8.00089L5.05484 5.99759C4.79422 5.73685 4.79422 5.31558 5.05484 5.05484C5.31558 4.79422 5.73685 4.79422 5.99759 5.05484L8.00089 7.05826L10.0042 5.05484C10.2649 4.79422 10.6862 4.79422 10.9469 5.05484C11.2076 5.31558 11.2076 5.73685 10.9469 5.99759L8.94351 8.00089L10.9469 10.0042Z"
									fill="white"
								/>
							</g>
							<defs>
								<filter
									id="filter0_d_4156_17780"
									x="-4"
									y="-4"
									width="24"
									height="24"
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
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_4156_17780"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_4156_17780"
										result="shape"
									/>
								</filter>
								<clipPath id="clip0_4156_17780">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<p class="font-inter text-[15px] font-medium leading-2">{feature.text}</p>
					</div>
				{/each}
			</div>

			<div class="flex flex-col-reverse sm:flex-row sm:justify-between gap-2 sm:gap-0">
				<button
					class="text-xs sm:text-[15px] text-gray-400 leading-1 font-semibold font-roboto py-2 sm:py-3 px-3 sm:px-4 xl:px-7 rounded-sm bg-border-light transition-colors"
					on:click={close}
				>
					Keep my subscription
				</button>
				
                <button
					class="bg-border-selected font-roboto font-semibold text-white px-3 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-2 rounded-md hover:bg-fuchsia-700 transition-colors text-xs sm:text-sm xl:text-[15px] leading-1"
                    	on:click={() => {
						 showModal = true;
					}}
				>
					Continue
				</button>
			</div>
		</div>
	</div>
{/if}

<Done isOpen={showModal} close={() => (showModal = false)}  />