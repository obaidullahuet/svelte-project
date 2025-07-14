<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import PauseModal from '$lib/+lowermodal.svelte';
	import SwitchModal from '$lib/+SwitchModal.svelte';
	import CancelModal from '$lib/+CancelModal.svelte';
	export let label: string;
	export let isOpen = false;
	export let close = () => {};
	let selectedOption = '';
	let showModal = false;

	const options = [
		{
			key: 'pause',
			title: 'Pause My Subscription',
			desc: 'Temporarily stop payments & keep your data'
		},
		{
			key: 'switch',
			title: 'Switch to a Lower Tier',
			desc: 'Stay on Tier 1 for just $2.99/month,'
		},
		{
			key: 'cancel',
			title: 'Continue to Cancel',
			desc: 'Still want to cancel'
		}
	];
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="fixed inset-0 top-20 text-[#EEEDEE] backdrop-blur-sm p-4 bg-black/60 flex items-center justify-center"
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
					class="text-[10px] font-inter sm:text-[15px] text-[#DD0355] uppercase leading-2 font-medium sm:mb-0"
				>
					Tier {label} Cancellation
				</h2>
				<div class="flex items-center gap-1 sm:gap-2">
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-[#DD0355] rounded-full" />
					<div
						class="w-5 sm:w-6 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-border border border-border rounded-full"
					/>
					<div
						class="w-5 sm:w-6 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-border border border-border rounded-full"
					/>
				</div>
			</div>

			<p
				class="text-sm sm:text-lg xl:text-[22px] leading-9 font-roboto uppercase font-black mb-2 sm:mb-3"
			>
				Wait! Want to Keep Driving?
			</p>

			<p class="text-xs sm:text-[16px] leading-2 text-[gray] mb-3 sm:mb-4">
				Canceling now means losing access to:
			</p>

			<div class="grid grid-rows-2 gap-2 font-inter text-white my-5">
				<div class="grid grid-cols-[62%_36%] gap-2 ">
					<div
						class="    "
					>
						<img
							src="/modals/Frame 2792.svg"
							alt="Exclusive Cars"
							class=" object-cover rounded-lg xl:rounded-2xl"
						/>
					</div>
						<img
							src="/modals/Frame 2572 (2).svg"
							alt="Exclusive Cars"
							class=" object-cover  rounded-lg  "
						/>
				</div>
				<div class="grid grid-cols-[37%_30%_30%] gap-2">
					<div
						class="bg-[#181818] border-x border-border-light rounded-xl flex items-center justify-center text-center"
					>
						<img
							src="/modals/Frame 9.svg"
							alt="Exclusive Cars"
							class=" h-full w-full object-cover rounded-lg xl:rounded-2xl"
						/>
					</div>
						<img
							src="/modals/Frame 2574 (2).svg"
							alt="Exclusive Cars"
							class="h-full w-full object-cover rounded-lg xl:rounded-2xl"
						/>
						<img
							src="/modals/Frame 2571.svg"
							alt="Exclusive Cars"
							class=" object-cover rounded-lg xl:rounded-2xl"
						/>
				</div>
				<!-- <div class="grid grid-rows-2 gap-2">
					<div class=" rounded-xl border-x border-border-light">
						<img
							src="/modals/Frame 2574 (1).svg"
							alt="Exclusive Cars"
							class="h-full w-full object-cover rounded-lg xl:rounded-2xl"
						/>
					</div>
					<div class=" rounded-xl border-x border-border-light">
						<img
							src="/modals/Frame 2577.svg"
							alt="Exclusive Cars"
							class="h-full w-full object-cover rounded-lg xl:rounded-2xl"
						/>
					</div>
				</div> -->
			</div>

			<div class="space-y-1 sm:space-y-2 mb-4 sm:mb-5">
				{#each options as option}
					<button
						on:click={() => (selectedOption = option.key)}
						class={`w-full items-center text-left  border border-border font-inter bg-[#08060A70] bg-[linear-gradient(268deg,rgba(8,6,10,0.05)_25.18%,rgba(231,223,216,0.05)_100%)] flex justify-between p-2 sm:p-3 xl:px-6 xl:py-3 rounded-md transition ${
							selectedOption === option.key
								? 'border-white r bg-[#08060A70] '
								: ' border-[#FFFFFF]/5 hover:bg-[#222]'
						}`}
					>
						<div class="flex-1 min-w-0">
							<span class="font-semibold text-xs leading-3 sm:text-sm xl:text-[18px] block"
								>{option.title}</span
							>
							<p class="text-[10px] sm:text-[14px] text-[gray] leading-1 mt-1">{option.desc}</p>
						</div>

						<div class="ml-2 sm:ml-3 flex-shrink-0">
							{#if selectedOption === option.key}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									class="sm:w-5 sm:h-5 xl:w-6 xl:h-6"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 0C5.40891 0 0 5.40891 0 12C0 18.5911 5.40891 24 12 24C18.5911 24 24 18.5911 24 12C24 5.40891 18.5911 0 12 0ZM10.5478 17.4581L5.29284 12.2032L7.28137 10.2147L10.6398 13.5731L17.382 7.44413L19.2743 9.52467L10.5478 17.4581Z"
										fill="white"
									/>
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									class="sm:w-5 sm:h-5 xl:w-6 xl:h-6 border border-border rounded-full bg-border"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										cx="12"
										cy="12"
										r="10"
										class="border border-border"
										stroke=""
										stroke-width="2"
									/>
								</svg>
							{/if}
						</div>
					</button>
				{/each}
			</div>

			<!-- Action buttons -->
			<div class="flex flex-col-reverse sm:flex-row sm:justify-between gap-2 sm:gap-0">
				<button
					class="text-xs sm:text-[15px] font-semibold text-gray-400 leading-1 font-roboto py-2 sm:py-3 px-3 sm:px-4 xl:px-7 rounded-md bg-border-light transition-colors"
					on:click={close}
				>
					Cancel
				</button>
				<button
					class="bg-border-selected font-roboto font-semibold text-white px-3 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-2 rounded-md hover:bg-fuchsia-700 transition-colors text-xs sm:text-sm xl:text-[15px] leading-1"
					on:click={() => {
						if (selectedOption) showModal = true;
					}}
					disabled={!selectedOption}
				>
					Next Step
				</button>
			</div>
		</div>
	</div>
{/if}

{#if showModal && selectedOption === 'pause'}
	<PauseModal isOpen={showModal} close={() => (showModal = false)} label={label} bg='[#DD0355]'  />
{:else if showModal && selectedOption === 'switch'}
	<SwitchModal isOpen={showModal} close={() => (showModal = false)} label={label} bg='[#DD0355]' />
{:else if showModal && selectedOption === 'cancel'}
	<CancelModal isOpen={showModal} close={() => (showModal = false)} label={label} bg='[#DD0355]' />
{/if}