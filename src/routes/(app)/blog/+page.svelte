<script lang="ts">
	import Test from '$lib/+test.svelte';

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
				'The beautiful range of Apple Naturale that has an exciting mix of natural ingredients.',
			description: '',
			tag: '',
			image: '/blog/ANIMATION (1).svg'
		},
		{
			id: 3,
			date: 'June 13, 2025',
			title:
				'The beautiful range of Apple Naturale that has an exciting mix of natural ingredients.',
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
			date: "June 13, 2025",
			title: "Phased transitional ability that scales well across platforms and devices",
			tag: "Devlog",
			icon: "/blog/Newspaper.svg"
		},
		{
			date: "June 14, 2025",
			title: "Improved animation sync between client-side transitions",
			tag: "Devlog",
			icon: "/blog/Newspaper.svg"
		},
		{
			date: "June 15, 2025",
			title: "New dark mode theming engine for accessibility compliance",
			tag: "Devlog",
			icon: "/blog/Newspaper.svg"
		},
		{
			date: "June 16, 2025",
			title: "Enhanced API caching layer with fallback support",
			tag: "Devlog",
			icon: "/blog/Newspaper.svg"
		},
		{
			date: "June 17, 2025",
			title: "Component library refactor with atomic design principles",
			tag: "Devlog",
			icon: "/blog/Newspaper.svg"
		},
		{
			date: "June 18, 2025",
			title: "WebSocket implementation with auto-reconnect feature",
			tag: "Devlog",
			icon: "/blog/Newspaper.svg"
		},
		{
			date: "June 19, 2025",
			title: "Performance tuning for dashboard load times",
			tag: "Devlog",
			icon: "/blog/Newspaper.svg"
		}
	];

	let currentImageIndex = 0;

	const images = ['/blog/car1.svg', '/blog/car2.svg', '/blog/car3.svg'];

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	}

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	}

	function goToImage(index: number) {
		currentImageIndex = index;
	}
</script>

<div class="container flex flex-col gap-16">
	<!-- Hero Section -->
	<div class="relative h-[420px] w-full overflow-hidden">
		<img
			src="/blog/ANIMATION (1).svg"
			alt="Background"
			class="absolute inset-0 w-full h-full object-cover -z-10"
		/>

		<div class="absolute inset-0 bg-[rgba(8,6,10,0.3)] backdrop-blur-[50px] z-0" />

		<section
			class="relative z-10 font-inter flex flex-col items-center justify-end h-full text-[#FFFFFF] text-center px-4 sm:px-6 md:px-8"
		>
			<h1 class="text-[28px] sm:text-[32px] md:text-5xl text-[#EEEDEE] font-bold leading-tight">
				No Hesi is always evolving
			</h1>
			<p
				class="mt-3 sm:mt-4 max-w-md sm:max-w-lg md:max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed"
			>
				Our evolution is community-led, and VIPs direct the future. The Garage is where you'll find
				every update: cars, maps, devlogs, and everything else we're working on…
			</p>
			<div class="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
				<button
					class="bg-[#E6E6E6] text-[#1A1A1A] font-medium py-[12px] sm:py-[14px] px-5 sm:px-6 rounded-full text-sm sm:text-base"
				>
					See What’s New
				</button>
				<button
					class="bg-[#FFFFFF] text-[#000000] font-medium py-[12px] sm:py-[14px] px-5 sm:px-6 border border-[#FFFFFF4D] rounded-full text-sm sm:text-base"
				>
					VIPs Get First Access
				</button>
			</div>
		</section>
	</div>

	<section class="text-[#EEEDEE] px-4 sm:px-6 md:px-8 lg:px-9 font-inter">
		<h2 class="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-semibold mb-4">Announcements</h2>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
					<h3
						class="mt-3 text-base sm:text-lg md:text-xl lg:text-[20px] xl:text-[26px] font-semibold leading-snug lg:leading-8"
					>
						Ergonomic executive chair upholstered in bonded black leather and PVC
					</h3>
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
							class="absolute bottom-1 xl:bottom-6 xl:mb-2 xl:w-[95%] left-1 px-11 py-4 text-xs sm:text-sm md:text-sm whitespace-nowrap text-[#EEEDEE] rounded-full
							   bg-[#FFFFFF1A] backdrop-blur-[24px] text-center xl:text-[16px]"
						>
							Collab
						</span>
					</div>
					<div class="flex flex-col justify-between p-4 w-full">
						<div>
							<p class="text-xs sm:text-sm md:text-base lg:text-[18px]">June 13, 2025</p>
							<h1
								class="text-sm sm:text-base md:text-lg lg:text-[12px] xl:text-[26px] mt-3 font-semibold leading-snug lg:leading-8"
							>
								Andy shoes are designed to keeping in mind durability as well as trends, the most
								stylish range of shoes & sandals
							</h1>
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
							Limited Times Event
						</span>
					</div>
					<div class="flex flex-col justify-between p-4 w-full">
						<div>
							<p class="text-xs sm:text-sm md:text-base lg:text-[18px] text-[#FFFFFFB3]">
								June 13, 2025
							</p>
							<h3
								class="text-sm sm:text-base md:text-lg lg:text-[12px] xl:text-[26px] mt-3 font-semibold leading-snug lg:leading-8"
							>
								The beautiful range of Apple Naturalé that has an exciting mix of natural
								ingredients.
							</h3>
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

	<!-- Public Updates Section -->
	<Test />

	<section class="text-[#EEEDEE] px-4 sm:px-6 md:px-8 lg:px-9 font-inter">
		<h2 class="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-semibold mb-4">Announcements</h2>

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
						Limited Times Event
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
					<h3
						class="mt-3 text-base sm:text-lg md:text-xl lg:text-[20px] xl:text-[26px] font-semibold leading-snug lg:leading-8"
					>
						Ergonomic executive chair upholstered in bonded black leather and PVC
					</h3>
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
								<h1
									class="text-sm sm:text-base md:text-lg lg:text-[12px] xl:text-[26px] mt-3 font-semibold leading-snug lg:leading-8"
								>
									Andy shoes are designed to keeping in mind durability as well as trends, the most
									stylish range of shoes & sandals
								</h1>
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
								Limited Times Event
							</span>
						</div>
						<div class="flex flex-col justify-between p-4 w-full">
							<div>
								<p class="text-xs sm:text-sm md:text-base lg:text-[18px] text-[#FFFFFFB3]">
									June 13, 2025
								</p>
								<h3
									class="text-sm sm:text-base md:text-lg lg:text-[12px] xl:text-[26px] mt-3 font-semibold leading-snug lg:leading-8"
								>
									The beautiful range of Apple Naturalé that has an exciting mix of natural
									ingredients.
								</h3>
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



<section class="px-4 py-2">
	{#each devlogCards as log}
		<div
			class="bg-border text-[#EEEDEE] mb-[6px] rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-border h-[68px]"
		>
			<div class="flex flex-col font-inter sm:flex-row items-center w-full gap-6 sm:gap-6">
				<span class="text-[18px] min-w-[100px] w-[224px] px-[10px] whitespace-nowrap">
					{log.date}
				</span>

				<p class="text-[18px] font-inter sm:text-lg font-semibold flex-1">
					{log.title}
				</p>
			</div>

			<span
				class="px-4 py-2 text-sm text-white bg-border-light border border-border-light w-[114px] rounded-full flex items-center gap-2 self-start sm:self-center"
			>
				<img src={log.icon} alt={log.tag} class="w-4 h-4" />
				{log.tag}
			</span>
		</div>
	{/each}
</section>
s



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
</style>
