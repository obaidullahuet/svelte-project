<script lang="ts">
	let currentImageIndex = 0;

	// Dynamic data for VIP section
	const vipData = {
		carouselImages: ['/blog/car1.png', '/blog/car2.png', '/blog/car3.png','/blog/car1.png', '/blog/car2.png', '/blog/car3.png'],
		mainCard: {
			id: 1,
			tag: 'Vip Access Car Releases',
			date: 'June 13, 2025',
			title: 'The beautiful range of Apple Naturalé that has an exciting mix of'
		},
		blurredCards: [
			{
				id: 2,
				imgSrc: '/blog/car2.svg',
				imgAlt: 'Car',
				tag: 'Collab',
				date: 'June 13, 2025',
				title:
					'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals'
			},
			{
				id: 3,
				imgSrc: '/blog/car3.svg',
				imgAlt: 'Car',
				tag: 'Public Car Releases',
				date: 'June 13, 2025',
				title:
					'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients.'
			}
		]
	};

	function prevImage() {
		currentImageIndex =
			(currentImageIndex - 1 + vipData.carouselImages.length) % vipData.carouselImages.length;
	}

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % vipData.carouselImages.length;
	}

	function goToImage(index: number) {
		currentImageIndex = index;
	}
</script>

<section class="text-content-primary px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<p class="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold lg:leading-5 mb-3">
		VIP-Only Updates
	</p>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
		<!-- First Left Card with Carousel -->
		<div class="bg-border rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col h-auto">
			<div class="relative w-full overflow-hidden rounded-2xl">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src={vipData.carouselImages[currentImageIndex]}
					alt="carousel image"
					class="w-full object-cover h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px] transition-all duration-500 rounded-2xl"
				/>

				<span
					class="absolute top-1 left-1 px-2 py-2 md:px-9 md:py-3 text-xxs sm:text-sm md:text-base font-medium text-content-primary rounded-full border border-border-light leading-1 backdrop-blur-16 text-center"
				>
					{vipData.mainCard.tag}
				</span>

				<span
					class="absolute top-0.5 right-1 text-xs m sm:text-sm md:text-base font-medium text-content-primary rounded-full text-center"
				>
					<img src="/blog/Frame 2616.png" class="h-7 md:h-[50px]" alt="" />
				</span>

				<div class="absolute bottom-1 left-0 right-0 flex justify-center items-center gap-4 z-10">
					<!-- Left Arrow -->
					<button
						on:click={prevImage}
						class="w-8 h-8 flex items-center justify-center border border-border-light bg-border-light backdrop-blur-[24px] text-white rounded-full"
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

					<div
						class="flex gap-2 bg-border-light border border-border-light backdrop-blur-[24px] py-3 px-4 rounded-full"
					>
						{#each vipData.carouselImages as _, i}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<span
								class={`w-2 h-2 rounded-full transition-all  duration-300 cursor-pointer ${
									i === currentImageIndex ? 'bg-content-primary' : 'bg-top-light-30'
								}`}
								on:click={() => goToImage(i)}
							/>
						{/each}
					</div>

					<button
						on:click={nextImage}
						class="w-8 h-8 flex items-center border border-border-light justify-center bg-border-light backdrop-blur-[24px] text-white rounded-full"
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
				<p class="text-xs sm:text-sm md:text-base lg:text-base mt-2">{vipData.mainCard.date}</p>
				<p
					class="mt-3 text-base sm:text-lg md:text-xl lg:text-lg xl:text-mlg font-semibold leading-snug lg:leading-8"
				>
					{vipData.mainCard.title}
				</p>
			</div>
		</div>

		<!-- Right Column (Two Blurred Cards with VIP Overlay) -->
		<div class="relative">
			<div
				class="absolute top-[40%] md:top-1/2 left-1/2 lg:left-[58%] transform -translate-x-1/2 -translate-y-1/2 text-center z-20"
			>
				<div
					class="text-[20px] md:text-[30px] whitespace-nowrap leading-[48px] font-semibold text-content-primary mb-4"
				>
					Join VIP to Unlock
				</div>

				<div
					class="relative inline-flex border border-border-light items-center justify-between bg-top-light-10 backdrop-blur-[24px] rounded-full px-1"
				>
					<span
						class="px-6 py-3 text-xs text-[10px] leading-1 md:text-base font-medium text-content-primary rounded-full whitespace-nowrap"
					>
						Get Vip Access
					</span>

					<!-- Arrow Button -->
					<button
						class=" w-10 h-10  flex items-center justify-center bg-content-primary rounded-full"
					>
						<img src="/blog/ArrowUpRight.svg" alt="" />
					</button>
				</div>
			</div>

			<div class="flex flex-col blur-8 gap-0">
				{#each vipData.blurredCards as card, index (card.id)}
					<!-- Card with blur effect -->
					<div
						class="bg-border rounded-3xl z-0 p-2 overflow-hidden shadow-md relative flex flex-col sm:flex-row"
						class:mb-0={index === 0}
					>
						<div class="relative sm:w-[45%]">
							<img
								src={card.imgSrc}
								alt={card.imgAlt}
								class=" w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[200px] object-cover rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
							/>
							<span
								class="absolute bottom-1 left-1 px-6 py-4 text-xs sm:text-sm md:text-sm font-medium whitespace-nowrap text-content-primary rounded-full backdrop-blur-16 text-center"
								class:xl:bottom-6={card.id === 2}
								class:xl:mb-2={card.id === 2}
								class:xl:w-[95%]={card.id === 2}
								class:px-11={card.id === 2}
								class:bg-border={card.id === 2}
								class:xl:bottom-1={card.id === 3}
								class:lg:px-4={card.id === 3}
								class:xl:px-6={card.id === 3}
								class:lg:text-xxs={card.id === 3}
								class:xl:text-md={card.id === 2 || card.id === 3}
							>
								{card.tag}
							</span>
						</div>
						<div class="flex flex-col justify-between z-0 p-4 w-full">
							<div>
								<p
									class="text-xs sm:text-sm md:text-base lg:text-base"
									class:text-content-primary={card.id === 3}
								>
									{card.date}
								</p>
								<p
									class="text-sm sm:text-base md:text-lg lg:text-xs mt-3 font-semibold lg:leading-8"
									class:xl:text-mlg={card.id === 2 || card.id === 3}
								>
									{card.title}
								</p>
								{#if card.id === 3}
									<div
										class="relative inline-flex border border-border-light items-center justify-between bg-top-light-10 backdrop-blur-16 rounded-full"
									>
										<button
											class=" w-10 h-10 flex items-center justify-center bg-content-primary rounded-full"
										>
											<img src="/blog/ArrowUpRight.svg" alt="" />
										</button>
										<span
											class="px-6 py-4 text-xxs md:text-base font-medium text-content-primary rounded-full whitespace-nowrap bg-border-light backdrop-blur-16 text-center"
										>
											Get VIP Access
										</span>
									</div>
								{/if}
							</div>
							<button
								class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-content-primary rounded-full"
							>
								<img src="/blog/ArrowUpRight.svg" alt="" />
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
