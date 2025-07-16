<script lang="ts">
	import { fade, scale, slide } from 'svelte/transition';
	import Done from '$lib/+Pauseaction.svelte';
	export let label: string;
	export let bg: string;
	export let isOpen = false;
	export let close = () => {};
	let selectedOption = '';

	let selectedMonth = '1 month'; // default selected
	let showDropdown = false;
	const months = [{ month: '1 month' }, { month: '2 months' }, { month: '3 months' }];

	let showModal = false;
	export let closeAll = () => {};

</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="fixed inset-0 z-20 top-20 text-[#EEEDEE] backdrop-blur-sm p-4 bg-background flex items-center justify-center"
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
					Cancel of  tier {label} Subscription
				</h2>
				<div class="flex items-center gap-1 sm:gap-2">
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-{bg} rounded-full" />
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-{bg} rounded-full" />

					<div
						class="w-5 sm:w-6 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-border border border-border rounded-full"
					/>
				</div>
			</div>

			<p
				class="text-sm sm:text-lg xl:text-[22px] font-roboto uppercase leading-4 font-black mb-2 sm:mb-3"
			>
				Pause My Subscription
			</p>

			<p class="text-[16px] font-inter py-[2px] text-[#EEEDEE] mb-3">
				Your subscription will be paused on <span
					class="bg-background px-[10px]
                py-[2px] border border-border-light rounded-md">12/06/2025</span
				>
				and you will <br /> be charged $10.99 when it resumes.
			</p>

			<p class="text-[14px] text-[#D3D3D3] leading-1 font-inter font-normal mb-1.5">
				When would you like to resume your subscription?
			</p>

			<!-- Dropdown Wrapper -->
			<!-- Dropdown Wrapper -->
			<!-- Dropdown Wrapper -->
			<script>
				import { slide } from 'svelte/transition';

				let showDropdown = false;
				let selectedMonth = '1 Month'; // or default
				let months = [
					{ month: '1 Month' },
					{ month: '3 Months' },
					{ month: '6 Months' },
					{ month: '12 Months' }
				];
			</script>

			<!-- Dropdown Wrapper -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="relative mb-6">
				<!-- Clickable Dropdown Header -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="px-[16px] py-[14px] border border-border-light rounded-md cursor-pointer"
					on:click={() => (showDropdown = !showDropdown)}
				>
					<div class="flex items-center justify-between gap-2 font-inter text-[#EEEDEE]">
						<p>{selectedMonth}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							class="transform transition-transform duration-300"
							class:rotate-180={showDropdown}
						>
							<path
								d="M20.2969 9.79586L12.7969 17.2959C12.6924 17.4007 12.5682 17.484 12.4314 17.5407C12.2947 17.5975 12.1481 17.6267 12 17.6267C11.8519 17.6267 11.7053 17.5975 11.5686 17.5407C11.4318 17.484 11.3076 17.4007 11.2031 17.2959L3.70312 9.79586C3.49178 9.58451 3.37305 9.29787 3.37305 8.99898C3.37305 8.7001 3.49178 8.41345 3.70312 8.20211C3.91447 7.99076 4.20111 7.87203 4.5 7.87203C4.79888 7.87203 5.08553 7.99076 5.29687 8.20211L12.0009 14.9062L18.705 8.20117C18.9163 7.98983 19.203 7.87109 19.5019 7.87109C19.8008 7.87109 20.0874 7.98983 20.2987 8.20117C20.5101 8.41252 20.6288 8.69916 20.6288 8.99805C20.6288 9.29693 20.5101 9.58358 20.2987 9.79492L20.2969 9.79586Z"
								fill="white"
								fill-opacity="0.3"
							/>
						</svg>
					</div>
				</div>

				<!-- Dropdown Options (animated) -->
				{#if showDropdown}
					<div
						transition:slide
						class="w-full mt-1 border border-border-light rounded-md  max-h-[250px] overflow-y-auto"
					>
						{#each months as item}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								class="px-[16px] py-[14px] hover:bg-[#333] cursor-pointer"
								on:click={() => {
									selectedMonth = item.month;
									showDropdown = false;
								}}
							>
								{item.month}
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<div class="flex flex-col-reverse sm:flex-row sm:justify-between gap-2 sm:gap-0">
				<button
					class="text-xs sm:text-[15px] text-gray-400 leading-1 font-semibold font-roboto py-2 sm:py-3 px-3 sm:px-4 xl:px-7 rounded-sm bg-border-light transition-colors"
					on:click={close}
				>
					Keep my subscription
				</button>
				<button
					class="bg-[#8800F0]  font-roboto font-semibold text-white px-3 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-2 rounded-sm hover:bg-fuchsia-700 transition-colors text-xs sm:text-sm xl:text-[15px] leading-1"
					on:click={() => {
						showModal = true;
					}}
				>
					Pause subscription
				</button>
			</div>
		</div>
	</div>
{/if}

<Done isOpen={showModal} close={() => (showModal = false)} {closeAll} />
