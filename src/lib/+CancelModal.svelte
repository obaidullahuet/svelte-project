<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Confirm from '$lib/+Confirmcancelmodal.svelte';

	export let isOpen = false;
	export let close = () => {};
	let selectedOption = '';
	import { slide } from 'svelte/transition';

	const options = [
		{
			title: 'Too expensive',
			description: 'You can pause your subscription and resume at any time without losing data.'
		},
		{
			title: 'I don’t have time',
			description: 'Lower your plan to reduce costs while keeping essential features.'
		},
		{
			title: 'I only wanted to try it out',
			description:
				'We’re constantly adding new content and features. You might like what’s coming next! See what’s coming soon.'
		},
		{
			title: 'Technical issues / bugs',
			description: 'If you still want to cancel, we’ll guide you through the final steps.'
		},
		{
			title: 'Didn’t enjoy the content',
			description: 'If you still want to cancel, we’ll guide you through the final steps.'
		},
		{
			title: 'Other Reason',
			description: 'Your feedback matters!'
		}
	];

	let expandedIndex: number | null = null;

	function toggleAccordion(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
		selectedOption = options[index].title;
	}

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
					class="text-[10px] font-inter sm:text-[15px] text-[#FF3059] uppercase leading-2 font-medium sm:mb-0"
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
				class="text-[14px]  xl:text-[22px] leading-4 font-roboto uppercase font-black mb-2 sm:mb-3"
			>
				Why are you canceling?
			</p>

			<div class="space-y-1 sm:space-y-2 mb-3 sm:mb-5">
				{#each options as option}
					<div>
						<button
							on:click={() =>
								selectedOption === option.title
									? (selectedOption = '')
									: (selectedOption = option.title)}
							class={`relative w-full items-center text-left font-inter border border-border-light bg-background flex justify-between p-2 sm:p-3 xl:p-4 rounded-md transition ${
								selectedOption === option.title
									? 'border-white bg-[#08060A70]'
									: 'border-[#FFFFFF]/5 hover:bg-[#222]'
							}`}
						>
							<div class="flex-1 min-w-0">
								<span class="font-semibold text-xs leading-2 sm:text-sm xl:text-[18px] block">
									{option.title}
								</span>
							</div>

							<div class="ml-2 sm:ml-3 flex-shrink-0">
								{#if selectedOption === option.title}
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
										<circle cx="12" cy="12" r="10" stroke="" stroke-width="2" />
									</svg>
								{/if}
							</div>
						</button>

						{#if selectedOption === option.title}
							<!-- Accordion content -->
							<div
								in:slide
								out:slide
								class={`mt-[-8px]  gap-2.5 flex items-center rounded-sm text-xs sm:text-smspace-y-3 ${
									option.title !== 'Other Reason'
										? 'bg-[linear-gradient(0deg,rgba(255,214,67,0.05)_0%,rgba(255,214,67,0)_100%)] h-[58px] bg-border-light p-4'
										: 'bg-background text-white px-4 h-[136px] rounded-md'
								}`}
							>
								{#if option.title !== 'Other Reason'}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
									>
										<path
											d="M7.59375 5.90625C7.59375 5.68375 7.65973 5.46624 7.78335 5.28123C7.90696 5.09623 8.08266 4.95203 8.28823 4.86689C8.4938 4.78174 8.72 4.75946 8.93823 4.80287C9.15645 4.84627 9.35691 4.95342 9.51424 5.11075C9.67158 5.26809 9.77872 5.46854 9.82213 5.68677C9.86554 5.905 9.84326 6.1312 9.75811 6.33677C9.67297 6.54234 9.52877 6.71804 9.34377 6.84165C9.15876 6.96527 8.94125 7.03125 8.71875 7.03125C8.42038 7.03125 8.13423 6.91272 7.92325 6.70175C7.71228 6.49077 7.59375 6.20462 7.59375 5.90625ZM16.5937 9C16.5937 10.5019 16.1484 11.9701 15.314 13.2189C14.4796 14.4676 13.2936 15.441 11.906 16.0157C10.5184 16.5905 8.99158 16.7408 7.51853 16.4478C6.04549 16.1548 4.69241 15.4316 3.63041 14.3696C2.5684 13.3076 1.84517 11.9545 1.55216 10.4815C1.25915 9.00842 1.40954 7.48157 1.98429 6.094C2.55904 4.70642 3.53235 3.52044 4.78114 2.68603C6.02992 1.85162 7.4981 1.40625 9 1.40625C11.0133 1.40848 12.9435 2.20925 14.3671 3.63287C15.7907 5.0565 16.5915 6.9867 16.5937 9ZM14.9062 9C14.9062 7.83185 14.5599 6.68994 13.9109 5.71866C13.2619 4.74739 12.3394 3.99037 11.2602 3.54334C10.181 3.09631 8.99345 2.97934 7.84775 3.20724C6.70205 3.43513 5.64965 3.99765 4.82365 4.82365C3.99765 5.64965 3.43513 6.70205 3.20724 7.84775C2.97934 8.99345 3.09631 10.181 3.54334 11.2602C3.99037 12.3394 4.74739 13.2619 5.71866 13.9109C6.68994 14.5599 7.83185 14.9062 9 14.9062C10.5659 14.9046 12.0672 14.2818 13.1745 13.1745C14.2818 12.0672 14.9046 10.5659 14.9062 9ZM9.84375 11.5791V9.28125C9.84375 8.90829 9.69559 8.5506 9.43187 8.28688C9.16815 8.02316 8.81046 7.875 8.4375 7.875C8.23824 7.8747 8.04531 7.94494 7.89287 8.07326C7.74043 8.20158 7.63832 8.37972 7.60464 8.57611C7.57095 8.7725 7.60786 8.97447 7.70882 9.14626C7.80978 9.31805 7.96828 9.44857 8.15625 9.51469V11.8125C8.15625 12.1855 8.30441 12.5431 8.56813 12.8069C8.83185 13.0706 9.18954 13.2188 9.5625 13.2188C9.76176 13.219 9.95469 13.1488 10.1071 13.0205C10.2596 12.8922 10.3617 12.714 10.3954 12.5176C10.429 12.3213 10.3921 12.1193 10.2912 11.9475C10.1902 11.7757 10.0317 11.6452 9.84375 11.5791Z"
											fill="#FFD643"
										/>
									</svg>

									{option.description}
								{:else}
									<div class="bg-background w-full h-full rounded-md">
										<textarea
											rows="3"
											placeholder="Type your reason here..."
											class="w-full mt-6 bg-border border border-border rounded-md p-4 text-sm text-white placeholder-gray-500 resize-none"
										/>
									</div>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<div class="flex flex-col-reverse sm:flex-row sm:justify-between gap-2 sm:gap-0">
				<button
					class="text-xs sm:text-[15px] text-gray-400 font-semibold leading-1 font-roboto py-2 sm:py-3 px-3 sm:px-4 xl:px-7 rounded-md bg-border-light transition-colors"
					on:click={close}
				>
					Back
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

<Confirm isOpen={showModal} close={() => (showModal = false)} />
