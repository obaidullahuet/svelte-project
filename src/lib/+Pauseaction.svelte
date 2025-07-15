<script>
	import { fade, scale } from 'svelte/transition';
	import Lower from '$lib/+lowermodal.svelte';
	export let closeAll = () => {};

	export let isOpen = false;
	export let close = () => {
		closeAll()
	};
	let selectedOption = '';
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

	// let showModal = false;
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
			<div class=" mb-3 ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="38"
					height="40"
                    class="rounded-[9px] bg-[rgba(255,183,28,0.31)]"
					viewBox="0 0 38 40"
					fill="none"
				>
					<g filter="url(#filter0_d_4156_17813)">
						<path
							d="M26.3125 9.84375H22.25C21.7113 9.84375 21.1946 10.0578 20.8137 10.4387C20.4328 10.8196 20.2188 11.3363 20.2188 11.875V28.125C20.2188 28.6637 20.4328 29.1804 20.8137 29.5613C21.1946 29.9422 21.7113 30.1562 22.25 30.1562H26.3125C26.8512 30.1562 27.3679 29.9422 27.7488 29.5613C28.1297 29.1804 28.3438 28.6637 28.3438 28.125V11.875C28.3438 11.3363 28.1297 10.8196 27.7488 10.4387C27.3679 10.0578 26.8512 9.84375 26.3125 9.84375ZM25.9062 27.7188H22.6562V12.2812H25.9062V27.7188ZM15.75 9.84375H11.6875C11.1488 9.84375 10.6321 10.0578 10.2512 10.4387C9.87026 10.8196 9.65625 11.3363 9.65625 11.875V28.125C9.65625 28.6637 9.87026 29.1804 10.2512 29.5613C10.6321 29.9422 11.1488 30.1562 11.6875 30.1562H15.75C16.2887 30.1562 16.8054 29.9422 17.1863 29.5613C17.5672 29.1804 17.7812 28.6637 17.7812 28.125V11.875C17.7812 11.3363 17.5672 10.8196 17.1863 10.4387C16.8054 10.0578 16.2887 9.84375 15.75 9.84375ZM15.3438 27.7188H12.0938V12.2812H15.3438V27.7188Z"
							fill="#FFB71C"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_4156_17813"
							x="-3.3"
							y="-2.3"
							width="44.6"
							height="44.6"
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
								values="0 0 0 0 1 0 0 0 0 0.717647 0 0 0 0 0.109804 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_4156_17813"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_4156_17813"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			</div>

			<p
				class="text-sm sm:text-lg xl:text-[22px] leading-8 font-roboto uppercase font-black mb-2 sm:mb-3"
			>
				Your subscription has been<br /> paused
			</p>

			<p class="text-[16px] font-inter py-[2px] text-[#EEEDEE] mb-3">
				You’ve successfully paused your subscription.
			</p>
			<p class="text-[16px] font-inter py-[2px] text-[#EEEDEE] mb-3">
				You’ve successfully paused your subscription. You won’t be charged during this period, and
				your data will be saved.
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
