<script>
	import { fade, scale } from 'svelte/transition';
	import Done from '$lib/+Changeaction.svelte';

	export let isOpen = false;
	export let close = () => {};
	let selectedOption = '';

	const tiers = [
		{
			name: 'Tier 1',
			price: '$2.99',
			img: '/Vector (1).svg',
			bg: 'from-[#383737] to-[#08060a] via-[#08060a] via-44%',
			value: 'tier1',
			dp: 'drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]',
		},
		{
			name: 'Tier 2',
			price: '$6.99',
			img: '/ortire.svg',
			bg: 'from-[#291814] to-[#08060a] via-[#08060a] via-44%',
			value: 'tier2',
						dp: 'drop-shadow-[0_0_20px_rgba(255,129,38,0.7)] ',

		}
	];

	let showModal = false;
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-40 text-[#EEEDEE] backdrop-blur-sm p-4 bg-black/60 flex items-center justify-center"
		transition:fade
	>
		<div
			class="text-[#EEEDEE] font-inter rounded-2xl w-full max-w-[668px] max-h-[90vh] overflow-y-auto p-3 sm:p-4 xl:p-6 border border-border relative z-50 backdrop-blur-[64px] bg-border"
			transition:scale
		>
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
				<h2
					class="text-[10px] font-inter sm:text-[16px] text-[#FF3059] uppercase leading-2 font-medium sm:mb-0"
				>
					Cancel of Tier 3 Subscription
				</h2>
				<div class="flex items-center gap-1 sm:gap-2">
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-[#FF3059] rounded-full" />
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-[#FF3059] rounded-full" />

					<div
						class="w-5 sm:w-6 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-border border border-border rounded-full"
					/>
				</div>
			</div>

			<p
				class="text-sm sm:text-lg xl:text-[22px] leading-4 font-roboto uppercase font-black mb-2 sm:mb-3"
			>
				Switch to a Lower Tier
			</p>

			<p class="text-xs sm:text-sm text-[gray] mb-3 sm:mb-4">Your current subscription</p>


			<div class=" flex justify-center font-inter mb-3">
				<div
					class="flex w-full flex-col rounded-xl border border-red-bg-surface bg-gradient-to-r from-[#241215] to-[#08060a] via-[#08060a] via-44% p-5"
				>
				
					<div class="flex flex-wrap items-center gap-1 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)] ">
						<img
							class="h-5 w-5 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]"
							src="/3itir.svg"
							alt="Tier Badge"
						/>
						<span class="font-roboto text-[16px] leading-1 font-medium italic text-[#EEEDEE]">Tier 3</span>
					</div>

					<div class="mt-6 leading-2 sm:text-[20px] font-semibold italic text-[#EEEDEE]">
						<span>UNDERGROUND</span>
					</div>
					<div
						class="text-content-secondary py-1 text-[38px] leading-5 font-semibold text-[#EEEDEE]"
					>
						<span class="title-gradient">
							$10.99<span class="text-[20px] font-medium leading-3 title-gradient">
								/month</span
							></span
						>
					</div>

					
				</div>
			</div>

			<p class="text-[16px] text-[#EEEDEE] mb-3">
				Your can choose from the following subscription types
			</p>

			{#each tiers as tier}
	<div class="flex justify-center font-inter mb-3">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class={`flex w-full flex-col rounded-xl border ${
				selectedOption === tier.value
					? 'border-white'
					: 'border-transparent'
			} bg-gradient-to-r ${tier.bg} py-6 px-5 cursor-pointer`}
			on:click={() => selectedOption = tier.value}
		>
			<div class="flex justify-between items-center">
				<div>
					<div class="flex flex-wrap items-center gap-1 {tier.dp}">
						<img
							class="h-5 w-5 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)] {tier.dp}"
							src={tier.img}
							alt="Tier Badge"
						/>
						<span class="text-[16px] leading-1 font-roboto font-bold italic text-[#EEEDEE]">{tier.name}</span>
					</div>

					<div class="text-content-secondary py-1 text-[24px] leading-5 font-semibold text-[#EEEDEE]">
						<span class="title-gradient">
							{tier.price}
							<span class="text-[20px] font-medium leading-2 title-gradient">/month</span>
						</span>
					</div>
				</div>

				{#if selectedOption === tier.value}
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="sm:w-5 sm:h-5 xl:w-6 xl:h-6" fill="none" viewBox="0 0 24 24">
						<path
							d="M12 0C5.40891 0 0 5.40891 0 12C0 18.5911 5.40891 24 12 24C18.5911 24 24 18.5911 24 12C24 5.40891 18.5911 0 12 0ZM10.5478 17.4581L5.29284 12.2032L7.28137 10.2147L10.6398 13.5731L17.382 7.44413L19.2743 9.52467L10.5478 17.4581Z"
							fill="white"
						/>
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="sm:w-5 sm:h-5 xl:w-6 xl:h-6 bg-border rounded-full border border-border" fill="none" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="10" stroke="" stroke-width="2" />
					</svg>
				{/if}
			</div>
		</div>
	</div>
{/each}

			<div class="flex flex-col-reverse sm:flex-row sm:justify-between gap-2 sm:gap-0">
				<button
					class="text-xs sm:text-[15px] text-gray-400 font-semibold leading-1 font-roboto py-2 sm:py-3 px-3 sm:px-4 xl:px-7 rounded-md bg-border-light transition-colors"
					on:click={close}
				>
					Keep my subscription
				</button>
				<button
					class="bg-border-selected font-roboto font-semibold text-white px-3 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-2 rounded-md hover:bg-fuchsia-700 transition-colors text-xs sm:text-sm xl:text-[15px] leading-1"
					on:click={() => {
						if (selectedOption) showModal = true;
					}}
					disabled={!selectedOption}
				>
					Continue
				</button>
			</div>
		</div>
	</div>
{/if}


<Done isOpen={showModal} close={() => (showModal = false)} />