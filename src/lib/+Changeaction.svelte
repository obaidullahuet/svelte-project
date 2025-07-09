<script>
	import { fade, scale } from 'svelte/transition';
	import Lower from '$lib/+lowermodal.svelte';

	export let isOpen = false;
	export let close = () => {};
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
			<div class=" mb-3  ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="42"
					height="40"
					viewBox="0 0 42 40"
					fill="none"
                    class="bg-[rgba(85,255,85,0.31)] rounded-md"
				>
					<g filter="url(#filter0_d_4156_17824)">
						<path
							d="M32.1562 20C32.1565 22.6702 31.1052 25.2331 29.2298 27.1339C27.3545 29.0347 24.806 30.1205 22.1361 30.1563H22C19.4072 30.1617 16.9117 29.1693 15.0308 27.3846C14.7958 27.1627 14.6585 26.8564 14.6493 26.5333C14.6401 26.2102 14.7596 25.8966 14.9815 25.6616C15.2035 25.4266 15.5097 25.2894 15.8328 25.2801C16.156 25.2709 16.4695 25.3904 16.7045 25.6124C17.8077 26.6539 19.1934 27.3472 20.6885 27.6057C22.1835 27.8641 23.7215 27.6763 25.1104 27.0655C26.4992 26.4548 27.6773 25.4484 28.4974 24.1719C29.3174 22.8954 29.7432 21.4056 29.7213 19.8886C29.6995 18.3715 29.231 16.8946 28.3745 15.6423C27.518 14.39 26.3114 13.4178 24.9056 12.8474C23.4997 12.2769 21.9569 12.1334 20.4699 12.4348C18.983 12.7362 17.6178 13.4692 16.5451 14.542C16.5319 14.5553 16.5197 14.5674 16.5055 14.5796L14.5748 16.3438H16.3125C16.6357 16.3438 16.9457 16.4722 17.1743 16.7007C17.4028 16.9293 17.5312 17.2393 17.5312 17.5625C17.5312 17.8857 17.4028 18.1957 17.1743 18.4243C16.9457 18.6529 16.6357 18.7813 16.3125 18.7813H11.4375C11.1143 18.7813 10.8043 18.6529 10.5757 18.4243C10.3472 18.1957 10.2188 17.8857 10.2188 17.5625V12.6875C10.2188 12.3643 10.3472 12.0543 10.5757 11.8257C10.8043 11.5972 11.1143 11.4688 11.4375 11.4688C11.7607 11.4688 12.0707 11.5972 12.2993 11.8257C12.5278 12.0543 12.6562 12.3643 12.6562 12.6875V14.7919L14.8378 12.7952C16.2606 11.38 18.0707 10.4181 20.0397 10.0308C22.0087 9.64344 24.0483 9.84809 25.9011 10.6189C27.7539 11.3897 29.3368 12.6921 30.4501 14.3617C31.5633 16.0313 32.157 17.9933 32.1562 20Z"
							fill="#55FF55"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_4156_17824"
							x="-0.3"
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
								values="0 0 0 0 0.333333 0 0 0 0 1 0 0 0 0 0.333333 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_4156_17824"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_4156_17824"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			</div>

			<p
				class="text-sm sm:text-lg xl:text-[22px] leading-4 font-roboto uppercase font-black mb-2 sm:mb-3"
			>
				Your plan has been changed
			</p>

			<p class="text-[16px] font-inter py-[2px] text-[#EEEDEE] mb-3">
				Your subscription has been successfully updated.
			</p>
			<p class="text-[16px] font-inter py-[2px] text-[#EEEDEE] mb-3">
				Your new plan is now active and will be reflected in your next billing cycle.
			</p>

			<div class="flex justify-end sm:flex-row">
				<!-- <button
					class="text-xs sm:text-[15px] text-gray-400 leading-1 font-roboto py-2 sm:py-3 px-3 sm:px-4 xl:px-7 rounded-sm bg-border-light transition-colors"
					on:click={close}
				>
					Keep my subscription
				</button> -->
				<button
					class="bg-border-selected font-roboto text-white px-3 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-2 rounded-sm hover:bg-fuchsia-700 transition-colors text-xs sm:text-sm xl:text-[15px] leading-1"
					on:click={close}
				>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}

<!-- <PauseModal isOpen={showModal} close={() => (showModal = false)} /> -->
