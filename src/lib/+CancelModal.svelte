<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Confirm from '$lib/+Confirmcancelmodal.svelte';
	export let label: string;
	export let bg: string;
	export let isOpen = false;
	export let close = () => {};
	export let closeAll = () => {};
	let selectedOption = '';
	import { slide } from 'svelte/transition';

	const options = [
		{
			key: '1',
			title: 'Too expensive',
			description:
				'Looking for a more affordable option? You can switch to a lower-tier plan and still keep access to core features.',
			ul: ' Choose a cheaper plan',
			icon: `
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M10.6875 8.15625H9.84375V4.21875H10.125C10.6471 4.21875 11.1479 4.42617 11.5171 4.79538C11.8863 5.1646 12.0938 5.66536 12.0938 6.1875C12.0938 6.41128 12.1826 6.62589 12.3409 6.78412C12.4991 6.94236 12.7137 7.03125 12.9375 7.03125C13.1613 7.03125 13.3759 6.94236 13.5341 6.78412C13.6924 6.62589 13.7812 6.41128 13.7812 6.1875C13.7801 5.21814 13.3946 4.28881 12.7091 3.60337C12.0237 2.91794 11.0944 2.53237 10.125 2.53125H9.84375V1.6875C9.84375 1.46372 9.75485 1.24911 9.59662 1.09088C9.43839 0.932645 9.22378 0.84375 9 0.84375C8.77622 0.84375 8.56161 0.932645 8.40338 1.09088C8.24514 1.24911 8.15625 1.46372 8.15625 1.6875V2.53125H7.875C6.9053 2.53125 5.97532 2.91646 5.28964 3.60214C4.60396 4.28782 4.21875 5.2178 4.21875 6.1875C4.21875 7.1572 4.60396 8.08718 5.28964 8.77286C5.97532 9.45854 6.9053 9.84375 7.875 9.84375H8.15625V13.7812H7.3125C6.79035 13.7812 6.2896 13.5738 5.92038 13.2046C5.55117 12.8354 5.34375 12.3346 5.34375 11.8125C5.34375 11.5887 5.25486 11.3741 5.09662 11.2159C4.93839 11.0576 4.72378 10.9688 4.5 10.9688C4.27622 10.9688 4.06161 11.0576 3.90338 11.2159C3.74514 11.3741 3.65625 11.5887 3.65625 11.8125C3.65737 12.7819 4.04294 13.7112 4.72837 14.3966C5.41381 15.0821 6.34314 15.4676 7.3125 15.4688H8.15625V16.3125C8.15625 16.5363 8.24514 16.7509 8.40338 16.9091C8.56161 17.0674 8.77622 17.1562 9 17.1562C9.22378 17.1562 9.43839 17.0674 9.59662 16.9091C9.75485 16.7509 9.84375 16.5363 9.84375 16.3125V15.4688H10.6875C11.6572 15.4688 12.5872 15.0835 13.2729 14.3979C13.9585 13.7122 14.3438 12.7822 14.3438 11.8125C14.3438 10.8428 13.9585 9.91282 13.2729 9.22714C12.5872 8.54146 11.6572 8.15625 10.6875 8.15625ZM7.875 8.15625C7.35285 8.15625 6.8521 7.94883 6.48288 7.57962C6.11367 7.2104 5.90625 6.70964 5.90625 6.1875C5.90625 5.66536 6.11367 5.1646 6.48288 4.79538C6.8521 4.42617 7.35285 4.21875 7.875 4.21875H8.15625V8.15625H7.875ZM10.6875 13.7812H9.84375V9.84375H10.6875C11.2096 9.84375 11.7104 10.0512 12.0796 10.4204C12.4488 10.7896 12.6562 11.2904 12.6562 11.8125C12.6562 12.3346 12.4488 12.8354 12.0796 13.2046C11.7104 13.5738 11.2096 13.7812 10.6875 13.7812Z" fill="#FFD643"/>
</svg>
			`
		},
		{
			key: '2',
			title: 'I don’t have time',
			description:
				'Life gets busy — we get it. But you can always pause your subscription and return anytime! ',
			ul: ' Pause instead of canceling',
			icon: `
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M14.3438 5.31844V2.8125C14.3438 2.43954 14.1956 2.08185 13.9319 1.81813C13.6681 1.55441 13.3105 1.40625 12.9375 1.40625H5.0625C4.68954 1.40625 4.33185 1.55441 4.06813 1.81813C3.80441 2.08185 3.65625 2.43954 3.65625 2.8125V5.34375C3.65679 5.56197 3.70786 5.7771 3.80545 5.97228C3.90304 6.16746 4.0445 6.33739 4.21875 6.46875L7.59375 9L4.21875 11.5312C4.0445 11.6626 3.90304 11.8325 3.80545 12.0277C3.70786 12.2229 3.65679 12.438 3.65625 12.6562V15.1875C3.65625 15.5605 3.80441 15.9181 4.06813 16.1819C4.33185 16.4456 4.68954 16.5938 5.0625 16.5938H12.9375C13.3105 16.5938 13.6681 16.4456 13.9319 16.1819C14.1956 15.9181 14.3438 15.5605 14.3438 15.1875V12.6816C14.3435 12.4637 14.2931 12.2489 14.1962 12.0538C14.0994 11.8586 13.9588 11.6885 13.7855 11.5566L10.3992 9L13.7855 6.44062C13.9584 6.309 14.0988 6.1393 14.1956 5.9447C14.2924 5.75009 14.3431 5.5358 14.3438 5.31844ZM12.6562 14.9062H5.34375V12.7969L9 10.0547L12.6562 12.8201V14.9062ZM12.6562 5.17852L9 7.94531L5.34375 5.20312V3.09375H12.6562V5.17852Z" fill="#FFD643"/>
</svg>
			`
		},
		{
			key: '3',
			title: 'I only wanted to try it out',
			description:
				'We’re constantly adding new content and features. You might like what’s coming next!',
			ul: ' See what’s coming soon',
			icon: `
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M7.59375 5.90625C7.59375 5.68375 7.65973 5.46624 7.78335 5.28123C7.90697 5.09623 8.08267 4.95203 8.28823 4.86689C8.4938 4.78174 8.72 4.75946 8.93823 4.80287C9.15646 4.84627 9.35691 4.95342 9.51425 5.11075C9.67158 5.26809 9.77873 5.46854 9.82214 5.68677C9.86555 5.905 9.84327 6.1312 9.75812 6.33677C9.67297 6.54234 9.52878 6.71804 9.34377 6.84165C9.15876 6.96527 8.94126 7.03125 8.71875 7.03125C8.42038 7.03125 8.13424 6.91272 7.92326 6.70175C7.71228 6.49077 7.59375 6.20462 7.59375 5.90625ZM16.5938 9C16.5938 10.5019 16.1484 11.9701 15.314 13.2189C14.4796 14.4676 13.2936 15.441 11.906 16.0157C10.5184 16.5905 8.99158 16.7408 7.51854 16.4478C6.04549 16.1548 4.69242 15.4316 3.63041 14.3696C2.56841 13.3076 1.84517 11.9545 1.55217 10.4815C1.25916 9.00842 1.40954 7.48157 1.98429 6.094C2.55905 4.70642 3.53236 3.52044 4.78114 2.68603C6.02993 1.85162 7.4981 1.40625 9 1.40625C11.0133 1.40848 12.9435 2.20925 14.3671 3.63287C15.7907 5.0565 16.5915 6.9867 16.5938 9ZM14.9063 9C14.9063 7.83185 14.5599 6.68994 13.9109 5.71866C13.2619 4.74739 12.3395 3.99037 11.2602 3.54334C10.181 3.09631 8.99345 2.97934 7.84775 3.20724C6.70205 3.43513 5.64966 3.99765 4.82365 4.82365C3.99765 5.64965 3.43513 6.70205 3.20724 7.84775C2.97935 8.99345 3.09631 10.181 3.54334 11.2602C3.99037 12.3394 4.74739 13.2619 5.71867 13.9109C6.68994 14.5599 7.83186 14.9062 9 14.9062C10.5659 14.9046 12.0672 14.2818 13.1745 13.1745C14.2818 12.0672 14.9046 10.5659 14.9063 9ZM9.84375 11.5791V9.28125C9.84375 8.90829 9.69559 8.5506 9.43187 8.28688C9.16815 8.02316 8.81046 7.875 8.4375 7.875C8.23824 7.8747 8.04531 7.94494 7.89287 8.07326C7.74043 8.20158 7.63833 8.37972 7.60464 8.57611C7.57095 8.7725 7.60786 8.97447 7.70882 9.14626C7.80978 9.31805 7.96828 9.44857 8.15625 9.51469V11.8125C8.15625 12.1855 8.30441 12.5431 8.56813 12.8069C8.83186 13.0706 9.18954 13.2188 9.5625 13.2188C9.76176 13.219 9.9547 13.1488 10.1071 13.0205C10.2596 12.8922 10.3617 12.714 10.3954 12.5176C10.4291 12.3213 10.3921 12.1193 10.2912 11.9475C10.1902 11.7757 10.0317 11.6452 9.84375 11.5791Z" fill="#FFD643"/>
</svg>
			`
		},
		{
			key: '4',
			title: 'Technical issues / bugs',
			description:
				'Did you know you can open a ticket in our discord and get direct support from a support member to assist you with your problem? ',
			ul: '  Open Discord Channel',
			icon: `
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M9.84375 6.18834C9.84375 5.96584 9.90973 5.74833 10.0333 5.56332C10.157 5.37832 10.3327 5.23412 10.5382 5.14898C10.7438 5.06383 10.97 5.04155 11.1882 5.08496C11.4065 5.12837 11.6069 5.23551 11.7642 5.39285C11.9216 5.55018 12.0287 5.75064 12.0721 5.96886C12.1155 6.18709 12.0933 6.41329 12.0081 6.61886C11.923 6.82443 11.7788 7.00013 11.5938 7.12374C11.4088 7.24736 11.1913 7.31334 10.9688 7.31334C10.6704 7.31334 10.3842 7.19481 10.1733 6.98384C9.96228 6.77286 9.84375 6.48671 9.84375 6.18834ZM7.03125 5.06334C6.80875 5.06334 6.59124 5.12932 6.40623 5.25294C6.22123 5.37655 6.07703 5.55226 5.99189 5.75782C5.90674 5.96339 5.88446 6.18959 5.92787 6.40782C5.97127 6.62605 6.07842 6.8265 6.23575 6.98384C6.39309 7.14117 6.59354 7.24832 6.81177 7.29172C7.03 7.33513 7.2562 7.31285 7.46177 7.22771C7.66734 7.14256 7.84304 6.99836 7.96665 6.81336C8.09027 6.62835 8.15625 6.41084 8.15625 6.18834C8.15625 5.88997 8.03772 5.60382 7.82675 5.39285C7.61577 5.18187 7.32962 5.06334 7.03125 5.06334ZM15.4688 10.1258C15.469 10.6143 15.4138 11.1011 15.3042 11.5771L16.6507 12.1649C16.7523 12.2093 16.8441 12.2733 16.9209 12.3532C16.9978 12.4331 17.0581 12.5274 17.0985 12.6306C17.139 12.7338 17.1587 12.844 17.1565 12.9548C17.1543 13.0657 17.1304 13.175 17.0859 13.2765C17.0415 13.3781 16.9775 13.4699 16.8976 13.5468C16.8177 13.6236 16.7235 13.684 16.6203 13.7244C16.517 13.7648 16.4069 13.7845 16.296 13.7823C16.1852 13.7802 16.0759 13.7562 15.9743 13.7118L14.7087 13.1598C14.1576 14.1962 13.3349 15.0631 12.3288 15.6676C11.3226 16.2722 10.171 16.5915 8.99719 16.5915C7.82341 16.5915 6.67175 16.2722 5.66561 15.6676C4.65948 15.0631 3.83679 14.1962 3.2857 13.1598L2.02008 13.7118C1.91851 13.7562 1.80919 13.7802 1.69835 13.7823C1.58752 13.7845 1.47734 13.7648 1.37412 13.7244C1.27089 13.684 1.17664 13.6236 1.09674 13.5468C1.01684 13.4699 0.952851 13.3781 0.908437 13.2765C0.864024 13.175 0.840051 13.0657 0.837887 12.9548C0.835723 12.844 0.855411 12.7338 0.895826 12.6306C0.936242 12.5274 0.996593 12.4331 1.07343 12.3532C1.15028 12.2733 1.2421 12.2093 1.34367 12.1649L2.69016 11.5771C2.5825 11.1009 2.52919 10.614 2.53125 10.1258V9.84459H1.125C0.901224 9.84459 0.686612 9.7557 0.528379 9.59746C0.370145 9.43923 0.28125 9.22462 0.28125 9.00084C0.28125 8.77706 0.370145 8.56245 0.528379 8.40422C0.686612 8.24599 0.901224 8.15709 1.125 8.15709H2.53125V7.87584C2.53103 7.38742 2.58623 6.90056 2.69578 6.42459L1.3493 5.83678C1.14417 5.74708 0.983074 5.57957 0.901451 5.3711C0.819829 5.16262 0.824365 4.93027 0.914062 4.72514C1.00376 4.52001 1.17127 4.35891 1.37974 4.27729C1.58822 4.19567 1.82057 4.20021 2.0257 4.2899L3.29133 4.84186C3.84241 3.80548 4.6651 2.93859 5.67124 2.33406C6.67737 1.72953 7.82903 1.41016 9.00281 1.41016C10.1766 1.41016 11.3283 1.72953 12.3344 2.33406C13.3405 2.93859 14.1632 3.80548 14.7143 4.84186L15.9799 4.2899C16.0815 4.24549 16.1908 4.22152 16.3016 4.21935C16.4125 4.21719 16.5227 4.23688 16.6259 4.27729C16.7291 4.31771 16.8234 4.37806 16.9033 4.4549C16.9832 4.53174 17.0471 4.62357 17.0916 4.72514C17.136 4.82671 17.16 4.93603 17.1621 5.04686C17.1643 5.1577 17.1446 5.26787 17.1042 5.3711C17.0638 5.47432 17.0034 5.56858 16.9266 5.64848C16.8497 5.72838 16.7579 5.79236 16.6563 5.83678L15.3098 6.42459C15.4175 6.90078 15.4708 7.38764 15.4688 7.87584V8.15709H16.875C17.0988 8.15709 17.3134 8.24599 17.4716 8.40422C17.6299 8.56245 17.7188 8.77706 17.7188 9.00084C17.7188 9.22462 17.6299 9.43923 17.4716 9.59746C17.3134 9.7557 17.0988 9.84459 16.875 9.84459H15.4688V10.1258ZM4.21875 8.15709H13.7812V7.87584C13.7812 6.60777 13.2775 5.39164 12.3809 4.49499C11.4842 3.59833 10.2681 3.09459 9 3.09459C7.73193 3.09459 6.5158 3.59833 5.61915 4.49499C4.72249 5.39164 4.21875 6.60777 4.21875 7.87584V8.15709ZM8.15625 14.8312V9.84459H4.21875V10.1258C4.22034 11.247 4.61533 12.3321 5.33487 13.192C6.05442 14.0519 7.05289 14.6319 8.15625 14.8312ZM13.7812 10.1258V9.84459H9.84375V14.8312C10.9471 14.6319 11.9456 14.0519 12.6651 13.192C13.3847 12.3321 13.7797 11.247 13.7812 10.1258Z" fill="#FFD643"/>
</svg>
			`
		},

		{
			key: '5',
			title: 'Didn’t enjoy the content',
			description: 'We’re always improving and would love your feedback.'
		},
		{
			key: '6',
			title: 'Other Reason',
			description: 'Your feedback matters!'
		}
	];

	let expandedIndex: number | null = null;

	function toggleAccordion(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
		selectedOption = options[index].title;
	}
	let reasonText: { [key: string]: string } = {};
	let showModal = false;
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-20 top-20 text-[#EEEDEE] backdrop-blur-sm p-4 bg-background flex items-center justify-center"
		transition:fade
	>
		<div
			class="text-[#EEEDEE] font-inter rounded-2xl w-full max-w-[668px] max-h-[90vh] overflow-y-auto p-3 sm:p-4 xl:p-6 border border-border relative z-50 backdrop-blur-[100%] bg-background"
			transition:scale
		>
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
				<h2
					class="text-[10px] font-inter sm:text-[15px] text-{bg} uppercase leading-2 font-medium sm:mb-0"
				>
					Cancel of tier &nbsp; {label} Subscription
				</h2>
				<div class="flex items-center gap-1 sm:gap-2">
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-{bg} rounded-full" />
					<div class="w-5 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-{bg} rounded-full" />

					<div
						class="w-5 sm:w-6 xl:w-10 h-[3px] sm:h-[4px] xl:h-[6px] bg-border border border-border rounded-full"
					/>
				</div>
			</div>

			<p class="text-[14px] xl:text-[22px] leading-4 font-roboto uppercase font-black mb-2 sm:mb-3">
				Why are you canceling?
			</p>

			<div class="space-y-1 sm:space-y-2 mb-3 sm:mb-5">
				{#each options as option}
					<div>
						<button
							on:click={() =>
								selectedOption === option.key
									? (selectedOption = '')
									: (selectedOption = option.key)}
							class={`relative w-full items-center text-left font-inter border border-border-light bg-background flex justify-between p-2 sm:p-3 xl:p-4 rounded-md transition  ${
								selectedOption === option.key
									? 'border-white bg-[#08060A70]'
									: 'border-[#FFFFFF]/5 hover:bg-[#222]'
							}`}
						>
							<div class="flex-1 min-w-0">
								<span class="font-semibold text-xs leading-2 sm:text-[18px] block">
									{option.title}
								</span>
							</div>

							<div class="ml-2 sm:ml-3">
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
										<circle cx="12" cy="12" r="10" stroke="" stroke-width="2" />
									</svg>
								{/if}
							</div>
						</button>

						{#if selectedOption === option.key}
							<!-- Accordion content -->
							<div
								in:slide
								out:slide
								class={`mt-[-8px]  gap-2.5 flex items-center rounded-sm text-[12px] sm:text-sm space-y-3 ${
									option.key !== '5' && option.key !== '6'
										? 'bg-[linear-gradient(0deg,rgba(255,214,67,0.05)_0%,rgba(255,214,67,0)_100%)] h-auto md:h-[58px] bg-border-light p-4'
										: 'bg-background text-white px-4 h-[136px] rounded-md'
								}`}
							>
								{#if option.key !== '5' && option.key !== '6'}
									<div class="flex items-center gap-2">
										<div class="w-[18px] h-[18px]">{@html option.icon}</div>
										<span class="text-[10px] sm:text-[14px] leading-1 text-[#a2a0a0]"
											>{option.description}

											<span class="text-[10px] sm:text-[14px] leading-1 text-[#EEEDEE] underline"
												>{option.ul}</span
											>
										</span>
									</div>
								{:else}
									<div class="bg-background w-full h-full rounded-md">
										<textarea
											rows="3"
											bind:value={reasonText[option.key]}
											placeholder={option.description}
											class="w-full mt-6 bg-border border border-border rounded-md p-4 text-sm placeholder-[#a2a0a0] text-white placeholder-gray-500 resize-none"
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
					class="text-xs sm:text-[15px] text-gray-400 font-semibold leading-1 font-roboto py-2 sm:py-3 px-3 sm:px-4 xl:px-7 rounded-sm bg-border-light transition-colors"
					on:click={close}
				>
					Back
				</button>
				<button
					class="bg-[#8800F0] font-roboto font-semibold text-white px-3 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-2 rounded-sm hover:bg-fuchsia-700 transition-colors text-xs sm:text-sm xl:text-[15px] leading-1"
					on:click={() => {
						if (selectedOption) showModal = true;
					}}
					disabled={!selectedOption ||
    ((selectedOption === '5' || selectedOption === '6') && (!reasonText[selectedOption] || reasonText[selectedOption].trim().length === 0))}

				>
					Next Step
				</button>
			</div>
		</div>
	</div>
{/if}

<Confirm isOpen={showModal} close={() => (showModal = false)} {label} {bg} {closeAll} />
