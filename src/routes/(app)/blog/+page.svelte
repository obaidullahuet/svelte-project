<script lang="ts">
	import Test from '$lib/+test.svelte';
	import Tiercard from '$lib/+Card.svelte';

	let updates = [
		{
			id: 1,
			date: 'June 13, 2025',
			title:
				'The beautiful range of Apple Naturale that has an exciting mix of natural ingredients.',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			tag: 'General Bug Fixes',
			image: '/blog/ANIMATION (1).svg'
		},
		{
			id: 2,
			date: 'June 13, 2025',
			title:
				'The beautiful range of <br> Apple Naturale that has an <br> exciting mix of natural ingredients.',
			description: '',
			tag: '',
			image: '/blog/ANIMATION (1).svg'
		},
		{
			id: 3,
			date: 'June 13, 2025',
			title:
				'The beautiful range of <br> Apple Naturale that has an <br> exciting mix of natural ingredients.',
			description: '',
			tag: '',
			image: '/blog/ANIMATION (1).svg'
		},
		{
			id: 4,
			date: 'June 13, 2025',
			title:
				'The beautiful range of Apple Naturale that has an exciting mix of natural ingredients.',
			description: '',
			tag: '',
			image: '/blog/ANIMATION (1).svg'
		}
	];

	let sliderEl: HTMLDivElement;
	let animClass = '';

	const cards = [
		{
			type: 'image-card',
			date: 'June 13, 2025',
			title: 'Ergonomic executive chair upholstered in bonded black leather and PVC',
			label: 'Limited Times Event',
			image: '/blog/car1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		},
		{
			type: 'text-card',
			date: 'June 13, 2025',
			title: 'The beautiful range of Apple Naturalé that has an exciting mix of',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			buttonText: 'General Bug Fixes'
		},
		// Repeat pattern to reach 10 cards
		{
			type: 'image-card',
			date: 'June 13, 2025',
			title: 'Ergonomic executive chair upholstered in bonded black leather and PVC',
			label: 'Limited Times Event',
			image: '/blog/car1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		},
		{
			type: 'image-card',
			date: 'June 13, 2025',
			title: 'Ergonomic executive chair upholstered in bonded black leather and PVC',
			label: 'Limited Times Event',
			image: '/blog/car1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		},
		{
			type: 'text-card',
			date: 'June 13, 2025',
			title: 'The beautiful range of Apple Naturalé that has an exciting mix of',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			buttonText: 'General Bug Fixes'
		},
		// Repeat pattern to reach 10 cards
		{
			type: 'image-card',
			date: 'June 13, 2025',
			title: 'Ergonomic executive chair upholstered in bonded black leather and PVC',
			label: 'Limited Times Event',
			image: '/blog/car1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		},
		{
			type: 'image-card',
			date: 'June 13, 2025',
			title: 'Ergonomic executive chair upholstered in bonded black leather and PVC',
			label: 'Limited Times Event',
			image: '/blog/car1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		},
		{
			type: 'text-card',
			date: 'June 13, 2025',
			title: 'The beautiful range of Apple Naturalé that has an exciting mix of',
			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			buttonText: 'General Bug Fixes'
		},
		// Repeat pattern to reach 10 cards
		{
			type: 'image-card',
			date: 'June 13, 2025',
			title: 'Ergonomic executive chair upholstered in bonded black leather and PVC',
			label: 'Limited Times Event',
			image: '/blog/car1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		}
	];

	const devlogCards = [
		{
			date: 'June 13, 2025',
			title: 'Phased transitional ability that scales well across platforms and devices',
			tag: 'Devlog',
			icon: '/blog/Newspaper.svg',
			img: '/blog/image 49.png'
		},
		{
			date: 'June 14, 2025',
			title: 'Improved animation sync between client-side transitions',
			tag: 'Devlog',
			icon: '/blog/Newspaper.svg'
		},
		{
			date: 'June 15, 2025',
			title: 'New dark mode theming engine for accessibility compliance',
			tag: 'Devlog',
			icon: '/blog/Newspaper.svg'
		},
		{
			date: 'June 16, 2025',
			title: 'Enhanced API caching layer with fallback support',
			tag: 'Devlog',
			icon: '/blog/Newspaper.svg'
		},
		{
			date: 'June 17, 2025',
			title: 'Component library refactor with atomic design principles',
			tag: 'Devlog',
			icon: '/blog/Newspaper.svg'
		},
		{
			date: 'June 18, 2025',
			title: 'WebSocket implementation with auto-reconnect feature',
			tag: 'Devlog',
			icon: '/blog/Newspaper.svg'
		},
		{
			date: 'June 19, 2025',
			title: 'Performance tuning for dashboard load times',
			tag: 'Devlog',
			icon: '/blog/Newspaper.svg'
		}
	];

	const plans = [
		{
			icon: '/Vector (1).svg',
			tier: 'Tier 0',
			title: 'Public',
			price: 'Free',
			anuallayprice: 'Free',
			isCurrent: true,
			buttonText: 'Current Plan',
			// giftIcon: Gift,
			bg: 'bg-[linear-gradient(0deg,rgba(8,6,10,0.44),rgba(8,6,10,0.44)),radial-gradient(160.5%_100%_at_50%_0%,rgba(8,6,10,0.05)_25.18%,rgba(231,223,216,0.05)_100%)]',
			dp: '',
			features: [
				'Access to 100+ public servers',
				' monthly public car update',
				'Help & Faq support'
			],
			btn: 'bg-[rgba(72,71,76,0.79)] p-[16px_28px] text-white ',
			month: '',
			discount: '-20%'
		},
		{
			icon: '/Vector (1).svg',
			tier: 'Tier 1',
			title: 'Public+',
			price: '$3.99',
			anuallayprice: '$2.99',
			buttonText: 'Subscribe',
			// giftIcon: Gift,
			bg: 'bg-[linear-gradient(0deg,rgba(8,6,10,0.15),rgba(8,6,10,0.15)),radial-gradient(160.5%_100%_at_50%_0%,rgba(8,6,10,0.02)_25.18%,rgba(231,223,216,0.02)_100%)]',
			dp: 'drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]',
			features: [
				'Access to “Public Pack” Servers',
				' In-Game Badges',
				'VIP Alternative and Drift Servers',
				'Priority Queue for Server Hosting'
			],

			btn: 'bg-[#FFFFFF] text-black hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] transition-all duration-300 ',
			month: '/month',
			discount: '-20%'
		},
		{
			icon: '/ortire.svg',
			tier: 'Tier 2',
			title: 'Midnight',
			price: '$7.99',
			anuallayprice: '$5.58',
			isCurrent: true,
			buttonText: 'Free 7-Days Trial',
			// giftIcon: Gift,
			features: [
				'Access to 100+ public servers',
				' monthly public car update',
				'Help & Faq support',
				'Priority Queue for Server Hosting',
				'Priority Queue for Server Hosting'
			],
			dp: 'drop-shadow-[0_0_20px_rgba(255,129,38,0.7)]',
			bg: 'bg-[radial-gradient(160.5%_100%_at_50%_0%,rgba(8,6,10,0.05)_25.18%,rgba(255,129,38,0.05)_100%)]',

			btn: 'bg-[#FFFFFF] text-black hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] transition-all duration-300 ',
			month: '/month',
			discount: '-20%'
		},
		{
			icon: '/3itir.svg',
			tier: 'Tier 3',
			title: 'Underground',
			price: '$12.99',
			anuallayprice: '$6.67',
			buttonText: 'Subscribe',
			// giftIcon: Gift,
			features: [
				'Access to 100+ public servers',
				' monthly public car update',
				'Help & Faq support',
				'Priority Queue for Server Hosting',
				'Priority Queue for Server Hosting',
				'Priority Queue for Server Hosting'
			],
			bg: 'bg-[radial-gradient(160.5%_100%_at_50%_0%,rgba(8,6,10,0.22)_25.18%,rgba(254,44,85,0.22)_100%)]',
			dp: 'drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]',
			btn: 'bg-[#FFFFFF] text-black hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] transition-all duration-300 ',
			month: '/month',
			discount: '-40%'
		}
		// Add 2 more plans as needed...
	];

	let currentImageIndex = 0;

	const images = ['/blog/car1.svg', '/blog/car1.svg', '/blog/car1.svg'];

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	}

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	}

	function goToImage(index: number) {
		currentImageIndex = index;
	}

	let selected = 'month';
	// @ts-ignore
	function select(type) {
		selected = type;
	}
</script>

<div class=" flex flex-col gap-16 font-inter">
	<div class="relative h-[420px] w-full overflow-hidden">
		<img
			src="/blog/ANIMATION (1).svg"
			alt="Background"
			class="absolute inset-0 w-full h-full object-cover -z-10"
		/>

		<div class="absolute inset-0 bg-[rgba(8,6,10,0.3)] backdrop-blur-[50px] " />

		<section
			class="relative z-10 font-inter flex flex-col   items-center justify-end h-full text-[#FFFFFF] text-center  px-4 sm:px-6 md:px-8"
		>
			<p class="xl:text-[39px]  text-[25px] font-inter sm:text-[32px] md:text-5xl text-[#EEEDEE]  font-semibold leading-tight">
				No Hesi is always evolving
			</p>
			<p
				class="mt-3 sm:mt-4 max-w-md sm:max-w-lg md:max-w-2xl md:px-[62px] font-inter text-[#EEEDEE] text-[15px] xl:text-[18px] sm:text-sm md:text-base leading-relaxed"
			>
				Our evolution is community-led, and VIPs direct the future. The Garage is where you'll find
				every update: cars, maps, devlogs, and everything else we're working on…
			</p>
			<div class="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-4">
				<button
					class="bg-border text-[#EEEDEE] font-medium py-[12px] font-inter sm:py-[14px] px-5 sm:px-6 rounded-full text-sm sm:text-base"
				>
					See What’s New
				</button>
				<button
					class="bg-[#FFFFFF] text-[#000000] font-medium py-[12px] font-inter sm:py-[14px] px-5 sm:px-6 border border-[#FFFFFF4D] rounded-full text-sm sm:text-base"
				>
					VIPs Get First Access
				</button>
			</div>
		</section>
	</div>

	<section class="text-[#EEEDEE] px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
		<p class="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-semibold mb-3">Announcements</p>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
			<!-- First Left Card -->
			<div
				class="bg-[#E6E6E6]/[0.05] rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col h-auto"
			>
				<div class="relative">
					<img
						src="/blog/car1.svg"
						alt="car1"
						class="w-full object-cover rounded-2xl
						   h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px]"
					/>
					<span
						class="absolute bottom-1 left-1 px-9 py-4 text-xs sm:text-sm md:text-base font-medium text-[#EEEDEE] rounded-full
							   bg-[#FFFFFF1A] backdrop-blur-[24px] text-center"
					>
						Limited Times Event
					</span>
				</div>

				<div class="py-4 px-4 md:px-6 pr-[58px]">
					<p class="text-xs sm:text-sm md:text-base lg:text-[18px] mt-2">June 13, 2025</p>
					<p
						class="mt-3 text-base sm:text-lg md:text-xl lg:text-[20px] xl:text-[26px] font-semibold leading-snug lg:leading-8"
					>
						Ergonomic executive chair upholstered in <br> bonded black leather and PVC
				</p>
				</div>

				<button
					class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
				>
					<img src="/blog/ArrowUpRight.svg" alt="" />
				</button>
			</div>

			<!-- Right Column (Two Cards) -->
			<div class="flex flex-col gap-4">
				<!-- Card 2 -->
				<div
					class="bg-[#E6E6E6]/[0.05] rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col sm:flex-row"
				>
					<div class="relative sm:w-[45%]">
						<img
							src="/blog/car2.svg"
							alt="Car"
							class=" w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[200px] object-cover rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
						/>
						<span
							class="absolute bottom-1 xl:bottom-1  xl:w-[95%] left-1 px-11 py-4 text-xs sm:text-sm md:text-sm whitespace-nowrap text-[#EEEDEE] rounded-full
							   bg-[#FFFFFF1A] backdrop-blur-[24px] text-center xl:text-[16px]"
						>
							Collabs
						</span>
					</div>
					<div class="flex flex-col justify-between p-4 w-full">
						<div>
							<p class="text-xs sm:text-sm md:text-base lg:text-[18px]">June 13, 2025</p>
							<p
								class="text-sm sm:text-base md:text-lg lg:text-[12px] xl:text-[26px] mt-3 font-semibold leading-snug lg:leading-12"
							>
								Andy shoes are designed to <br>keeping in mind durability as well<br> as trends, the most
								stylish range of <br> shoes & sandals
							</p>
						</div>
						<button
							class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
						>
							<img src="/blog/ArrowUpRight.svg" alt="" />
						</button>
					</div>
				</div>

				<!-- Card 3 -->
				<div
					class="bg-[#E6E6E6]/[0.05] rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col sm:flex-row"
				>
					<div class="relative w-full sm:w-[45%]">
						<img
							src="/blog/car3.svg"
							alt="Car"
							class="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[200px] object-cover rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
						/>
						<span
							class="absolute bottom-1 xl:bottom-1 left-1 px-6 lg:px-4 xl:px-[26px] py-4 lg:text-[11px] text-xs sm:text-sm md:text-sm font-medium xl:text-[16px] whitespace-nowrap text-[#EEEDEE] rounded-full
							   bg-[#FFFFFF1A] backdrop-blur-[24px] text-center"
						>
							Exclusive Gateways
						</span>
					</div>
					<div class="flex flex-col justify-between p-4 w-full">
						<div>
							<p class="text-xs sm:text-sm md:text-base lg:text-[18px] text-[#FFFFFFB3]">
								June 13, 2025
							</p>
							<p
								class="text-sm sm:text-base md:text-lg lg:text-[12px] xl:text-[26px] mt-3 font-semibold leading-snug lg:leading-8"
							>
								The beautiful range of Apple Naturalé that has an exciting mix of natural
								ingredients.
							</p>
						</div>
						<button
							class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
						>
							<img src="/blog/ArrowUpRight.svg" alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<Test />

	<section class="text-[#EEEDEE] px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
		<p class="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-semibold mb-3">VIP-Only Updates</p>

		<div class=" ">
			<!-- First Left Card -->
			<div
				class="bg-[#E6E6E6]/[0.05] rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col h-auto"
			>
				<div class="relative w-full overflow-hidden rounded-2xl">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src={images[currentImageIndex]}
						alt="carousel image"
						class="w-full object-cover h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px] transition-all duration-500 rounded-2xl"
					/>

					<span
						class="absolute top-1 left-1 px-2 py-2 md:px-9 md:py-4 text-[8px] sm:text-sm md:text-base font-medium text-[#EEEDEE] rounded-full
							   bg-[#FFFFFF1A] backdrop-blur-[24px] text-center"
					>
						Public Car Releases
					</span>

					<span
						class="absolute top-0.5 right-1 text-xs sm:text-sm md:text-base font-medium text-[#EEEDEE] rounded-full text-center"
					>
						<img src="/blog/Frame 2616.png" class="h-7 md:h-[58px]" alt="" />
					</span>

					<!-- <div class="absoloute top-1 ">
						<img src="/blog/Frame 2616.png" alt="">
					 </div> -->

					<div class="absolute bottom-2 left-0 right-0 flex justify-center items-center gap-4 z-10">
						<!-- Left Arrow -->
						<button
							on:click={prevImage}
							class="w-8 h-8 flex items-center justify-center bg-[#FFFFFF1A] backdrop-blur-[24px] text-white rounded-full"
						>
							<svg
								class="w-4 h-4"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
						</button>

						<div class="flex gap-2 bg-[#FFFFFF1A] backdrop-blur-[24px] py-4 px-4 rounded-full">
							{#each images as _, i}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<span
									class={`w-2 h-2 rounded-full transition-all  duration-300 cursor-pointer ${
										i === currentImageIndex ? 'bg-[#FFFFFF]' : 'bg-[#FFFFFF]/30'
									}`}
									on:click={() => goToImage(i)}
								/>
							{/each}
						</div>

						<button
							on:click={nextImage}
							class="w-8 h-8 flex items-center justify-center bg-[#FFFFFF1A] backdrop-blur-[24px] text-white rounded-full"
						>
							<svg
								class="w-4 h-4"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>

				<div class="py-4 px-4 md:px-6 pr-[58px]">
					<p class="text-xs sm:text-sm md:text-base lg:text-[18px] mt-2">June 13, 2025</p>
					<p
						class="mt-3 text-base sm:text-lg md:text-xl lg:text-[20px] xl:text-[26px] font-semibold leading-snug lg:leading-8"
					>
						Ergonomic executive chair upholstered in bonded black leather and PVC
					</p>
				</div>

				<button
					class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
				>
					<img src="/blog/ArrowUpRight.svg" alt="" />
				</button>
			</div>

			<!-- Right Column (Two Cards) -->
			<div class="relative">
				<div
					class="absolute top-[35%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
				>
					<div
						class="text-[20px] md:text-[30px] whitespace-nowrap font-semibold text-[#EEEDEE] mb-4"
					>
						Join VIP to Unlock
					</div>

					<div
						class="relative inline-flex items-center justify-between bg-[#FFFFFF1A] backdrop-blur-[24px] rounded-full"
					>
						<span
							class="px-6 py-4 text-xs text-[10px] md:text-base font-medium text-[#EEEDEE] rounded-full whitespace-nowrap"
						>
							Get VIP Access
						</span>

						<!-- Arrow Button -->
						<button
							class=" w-10 h-10 flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
						>
							<img src="/blog/ArrowUpRight.svg" alt="" />
						</button>
					</div>
				</div>

				<div class="flex flex-col blur-8">
					<!-- Card 2 -->
					<div
						class="bg-[#E6E6E6]/[0.05] rounded-3xl z-0 p-2 overflow-hidden shadow-md relative flex flex-col sm:flex-row"
					>
						<div class="relative sm:w-[45%]">
							<img
								src="/blog/car2.svg"
								alt="Car"
								class=" w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[200px] object-cover rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
							/>
							<span
								class="absolute bottom-1 xl:bottom-6 xl:mb-2 xl:w-[95%] left-1 px-11 py-4 text-xs sm:text-sm md:text-sm whitespace-nowrap text-[#EEEDEE] rounded-full
							   bg-[#FFFFFF1A] backdrop-blur-[24px] text-center xl:text-[16px]"
							>
								Collab
							</span>
						</div>
						<div class="flex flex-col justify-between z-0 p-4 w-full">
							<div>
								<p class="text-xs sm:text-sm md:text-base lg:text-[18px]">June 13, 2025</p>
								<p
									class="text-sm sm:text-base md:text-lg lg:text-[12px] xl:text-[26px] mt-3 font-semibold leading-snug lg:leading-8"
								>
									Andy shoes are designed to keeping in mind durability as well as trends, the most
									stylish range of shoes & sandals
								</p>
							</div>
							<button
								class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
							>
								<img src="/blog/ArrowUpRight.svg" alt="" />
							</button>
						</div>
					</div>

					<!-- Card 3 -->
					<div
						class="bg-[#E6E6E6]/[0.05] rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col sm:flex-row"
					>
						<div class="relative w-full sm:w-[45%]">
							<img
								src="/blog/car3.svg"
								alt="Car"
								class="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[200px] object-cover rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
							/>
							<span
								class="absolute bottom-1 xl:bottom-1 left-1 px-6 lg:px-4 xl:px-6 py-4 lg:text-[11px] text-xs sm:text-sm md:text-sm font-medium xl:text-[16px] whitespace-nowrap text-[#EEEDEE] rounded-full
							   bg-[#FFFFFF1A] backdrop-blur-[24px] text-center"
							>
						Public Car Releases
							</span>
						</div>
						<div class="flex flex-col justify-between p-4 w-full">
							<div>
								<p class="text-xs sm:text-sm md:text-base lg:text-[18px] text-[#FFFFFFB3]">
									June 13, 2025
								</p>
								<p
									class="text-sm sm:text-base md:text-lg lg:text-[12px] xl:text-[26px] mt-3 font-semibold leading-snug lg:leading-8"
								>
									The beautiful range of Apple Naturalé that has an exciting mix of natural
									ingredients.
								</p>
							</div>
							<button
								class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
							>
								<img src="/blog/ArrowUpRight.svg" alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="px-1 py-2 sm:px-6 md:px-8 lg:px-9">
						<p class="text-lg sm:text-xl text-[#EEEDEE] font-inter md:text-2xl lg:text-[30px] font-semibold mb-3">Under The Hood: Devlogs and Patch Notes</p>

		{#each devlogCards as log}
			<div
				class="bg-border text-[#EEEDEE] mb-[6px] rounded-2xl px-3 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-border"
			>
				<!-- Left Section -->
				<div
					class="flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 sm:gap-6 font-inter"
				>
					<span class="text-sm sm:text-base md:text-[18px] w-full sm:w-[224px] whitespace-nowrap">
						{log.date}
					</span>

					<span
						class="flex gap-6 relative items-center text-sm sm:text-sm md:text-md lg:text-lg xl:text-[22px] font-semibold flex-1 leading-snug"
					>
						{#if log.img}
							<img src={log.img} alt="" class=" h-17 w-20 xl:w-[240px] xl:h-[135px]" />

							<!-- Button only shows when image exists -->
							<button
								class=" hidden absolute bottom-1 left-[19%] w-13 h-13 xl:flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
							>
								<img src="/blog/ArrowUpRight.svg" alt="Open" />
							</button>
						{/if}

						{log.title}
					</span>
				</div>

				<!-- Right Tag -->
				<span
					class="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-border-light border border-border-light rounded-full flex items-center gap-2 w-max self-start sm:self-center"
				>
					<img src={log.icon} alt={log.tag} class="w-4 h-4" />
					{log.tag}
				</span>
			</div>
		{/each}
	</section>

	<!-- <div class=" mt-22 flex items-center justify-cente bg-[red]">
	<div><img src={Defaul} alt="Default" class="back" /></div>
	<div class="b mt-24 flex w-[95%] flex-col items-center justify-center gap-1">
		<div class="flex w-full flex-wrap items-center justify-center gap-2 rounded-md sm:flex-row">
			<div class="SI font-bold">JOIN</div>
			<div class="SI font-bold text-[#dd0355] sm:hidden">28,643</div>

			

			<div class="SI font-bold">OTHERS</div>
		</div>
		<div class="S2 flex flex-col items-center justify-center">ON no hesi vip</div>
		<div class="SE">Enhance Your No Hesi Experience With VIP</div>
	</div>
</div> -->

	<section
		class=" font-inter flex flex-col items-center justify-end h-full text-[#FFFFFF] text-center  sm:px-6 md:px-8"
	>
		<h1 class="text-[30px] sm:text-[32px] md:text-5xl text-[#EEEDEE] font-bold leading-tight py-2">
			No Hesi is always evolving
		</h1>

		<div class="flex items-center justify-center">
			<div class="mt-4 flex flex-col items-center justify-center gap-1 py-2">
				<div class="flex items-center justify-center">
					<div class="relative z-[2] flex rounded-lg p-1">
						<button
							class="btn cursor-pointer rounded-md font-inter px-4 py-2 transition-colors delay-150 duration-300"
							class:bg-[#FFFFFF]={selected === 'month'}
							class:text-black={selected === 'month'}
							class:bg-border={selected !== 'month'}
							class:text-[#FFFFFF]={selected !== 'month'}
							on:click={() => select('month')}
						>
							Monthly
						</button>

						<button
							class="btn cursor-pointer rounded-md px-4 py-2 transition-colors duration-300"
							class:bg-[#FFFFFF]={selected === 'annualy'}
							class:text-black={selected === 'annualy'}
							class:bg-border={selected !== 'annualy'}
							class:text-[#FFFFFF]={selected !== 'annualy'}
							on:click={() => select('annualy')}
						>
							Annual
						</button>

						<div
							class="  absolute bottom-8 left-[75%] sm:left-[80%]
					 rounded-2xl bg-[#6aff67] px-1 py-[2px] text-[10px] text-black"
						>
							Save 20%
						</div>
					</div>
				</div>
				<div class="group inline-flex cursor-pointer items-center gap-1">
					Can't choose? Compare plans
					<img
						src="/leftarrow.png"
						alt="arrow"
						class="duration-600 h-2 w-2 cursor-pointer brightness-0 contrast-200 invert filter transition-transform group-hover:translate-x-[5px]"
					/>
				</div>

				<div
					class=" mt-12 grid grid-cols-1 gap-3  sm:grid-cols-2  lg:grid-cols-2 lg:gap-1 xl:grid-cols-4"
				>
					{#each plans as plan}
						<Tiercard
							{...plan}
							selectedPrice={selected === 'month' ? plan.price : plan.anuallayprice}
							selectedType={selected}
						/>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.carousel-container {
		scroll-behavior: smooth;
	}
	@keyframes bouncePulseLeft {
		0% {
			transform: translateX(0);
			opacity: 1;
		}
		50% {
			transform: translateX(-20px);
			opacity: 0.9;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes bouncePulseRight {
		0% {
			transform: translateX(0);
			opacity: 1;
		}
		50% {
			transform: translateX(40px);
			opacity: 0.9;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.animate-bounce-pulse-left {
		animation: bouncePulseLeft 0.7s ease-in-out;
	}

	.animate-bounce-pulse-right {
		animation: bouncePulseRight 0.7s ease-in-out;
	}

	.back {
		@media (max-width: 2800px) {
			position: absolute;
			top: 90px;
			left: 500px;
			width: 800px;
			height: 800px;
			opacity: 100%;
			transform: rotate(75deg);
			z-index: -50;
		}
		@media (max-width: 1440px) {
			position: absolute;
			top: 90px;
			left: 300px;
			width: 800px;
			height: 800px;
			opacity: 100%;
			transform: rotate(75deg);
			z-index: -50;
		}
		@media (max-width: 1240px) {
			position: absolute;
			top: 110px;
			left: 280px;
			width: 350px;
			height: 350px;
			opacity: 100%;
			transform: rotate(75deg);
			z-index: -50;
		}

		@media (max-width: 1024px) {
			position: absolute;
			top: 110px;
			left: 280px;
			width: 350px;
			height: 350px;
			opacity: 100%;
			transform: rotate(75deg);
			z-index: -50;
		}
		@media (max-width: 768px) {
			position: absolute;
			top: 110px;
			left: 200px;
			width: 350px;
			height: 350px;
			opacity: 100%;
			/* transform: rotate(75deg); */
			z-index: -50;
		}
		@media (max-width: 636px) {
			position: absolute;
			top: 110px;
			left: 150px;
			width: 350px;
			height: 350px;
			opacity: 100%;
			/* transform: rotate(75deg); */
			z-index: -50;
		}
		@media (max-width: 536px) {
			position: absolute;
			top: 110px;
			left: 100px;
			width: 280px;
			height: 280px;
			opacity: 100%;
			/* transform: rotate(75deg); */
			z-index: -50;
		}
		@media (max-width: 462px) {
			position: absolute;
			top: 110px;
			left: 70px;
			width: 250px;
			height: 250px;
			opacity: 100%;
			/* transform: rotate(75deg); */
			z-index: -50;
		}
		@media (max-width: 425px) {
			position: absolute;
			top: 190px;
			left: 80px;
			width: 250px;
			height: 250px;
			opacity: 100%;
			/* transform: rotate(75deg); */
			z-index: -50;
		}
		@media (max-width: 375px) {
			position: absolute;
			top: 190px;
			left: 60px;
			width: 250px;
			height: 250px;
			opacity: 100%;
			/* transform: rotate(75deg); */
			z-index: -50;
		}
		@media (max-width: 320px) {
			position: absolute;
			top: 190px;
			left: 50px;
			width: 230px;
			height: 230px;
			opacity: 100%;
			/* transform: rotate(75deg); */
			z-index: -50;
		}

		/*
		@media (max-width: 425px) {
			position: absolute;
			top: 190px;
			left: 80px;
			width: 250px;
			height: 250px;
			opacity: 100%;
			transform: rotate(75deg);
			z-index: 0;
			border: 1px solid black;
			background: #ffffff;
		}
		@media (max-width: 768px) {
			position: absolute;
			top: 110px;
			left: 200px;
			width: 350px;
			height: 350px;
			opacity: 100%;
			transform: rotate(75deg);
			z-index: 0;
			border: 1px solid black;
			background: #ffffff;
		}
		@media (max-width: 1024px) {
			position: absolute;
			top: 110px;
			left: 280px;
			width: 350px;
			height: 350px;
			opacity: 100%;
			transform: rotate(75deg);
			z-index: 0;
			border: 1px solid black;
			background: #ffffff;
		} */
		/* @media (max-width: 1440px) {
			position: absolute;
			top: 90px;
			left: 300px;
			width: 800px;
			height: 800px;
			opacity: 100%;
			transform: rotate(75deg);
			z-index: 0;
			border: 1px solid black;
			background-color: #6aff67;
		} */
	}
	.SI {
		font-size: 64px;
		/* font-family: 'Roboto flex'; */
		font-weight: 1000;
		text-transform: uppercase;

		@media (max-width: 320px) {
			font-size: 28px;
		}

		@media (max-width: 375px) {
			font-size: 28px;
		}

		@media (max-width: 475px) {
			font-size: 28px;
		}
		@media (max-width: 495px) {
			font-size: 28px;
		}
		@media (max-width: 515px) {
			font-size: 28px;
		}
	}

	.S2 {
		font-size: 64px;
		/* font-family: 'Roboto flex'; */
		font-weight: 1000;

		text-transform: uppercase;

		@media (max-width: 320px) {
			font-size: 28px;
		}

		@media (max-width: 375px) {
			font-size: 28px;
		}

		@media (max-width: 475px) {
			font-size: 28px;
		}
		@media (max-width: 495px) {
			font-size: 28px;
		}
		@media (max-width: 515px) {
			font-size: 28px;
		}
	}
	.SE {
		font-size: 17px;
		color: #ffffff;
		/* font-family: 'Inter Tight'; */
		font-weight: 400;
		text-align: center;
		@media (max-width: 320px) {
			font-size: 14px;
		}
		@media (max-width: 375px) {
			font-size: 14px;
		}
	}
	.btn {
		width: 150px;
		height: 36px;

		@media (max-width: 320px) {
			width: 110px;
			height: 36px;
			left: 200px;
		}
	}
	.badge {
		@media (max-width: 320px) {
			width: 45px;
			height: 16px;
			font-size: 8px;
		}
	}

	.comma {
		display: inline-block;
		font-size: 64px;
		line-height: 4rem;
		margin: 0 0.1rem;
		vertical-align: bottom;
		color: #dd0355;
		font-weight: 1000;
	}

	.roller {
		display: flex;
		justify-content: center;
		height: 60px;
		width: 48px;
		display: inline-block;
		position: relative;
		border-radius: 0.25rem;
		overflow: hidden;
	}

	.roller-digit {
		width: 47px;
		height: 3rem;
		display: flex;
		flex-direction: column;
		position: absolute;
		animation: rollDownBounce 0.5s linear forwards;
		/* settleBounce 0.5s ease-in-out 0.6s forwards; */
		/* animation-iteration-count: infinite; */
		/* overflow: hidden; */
	}

	.digit-row {
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 66px;
		color: #dd0355;
		font-weight: 1000;
		/*  make digit bounce  */
		animation: bounce 1.5s ease-in;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-2px);
		}

		100% {
			transform: translateY(0);
		}
	}

	@keyframes rollDownBounce {
		0% {
			transform: translateY(calc(-10 * 3.5rem));
			/* transform: translateY(-35rem); */
		}
		90% {
			/* transform: translateY(-10px); */
		}
		100% {
			/* transform: translateY(0); */
		}
	}

	@keyframes settleBounce {
		0% {
		}
		80% {
			/* transform: translateY(-3.5rem); */
		}
		100% {
		}
	}
</style>
