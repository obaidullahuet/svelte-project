<script lang="ts">
	import { onMount } from 'svelte';

	let sliderEl: HTMLDivElement;
	let activeIndex = 0;
	let dots: any[] = [];
	let animClass = '';
	let lastScrollLeft = 0;

	const cards = [
		{
			type: 'image-card',
			date: 'June 13, 2025',
			title:
				'The beautiful range of Apple Naturalé that  has an exciting mix of natural ingredients.',
			label: 'Public Car Releases',
			image: '/blog/Rectangle 165 (2) 1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		},
		{
			type: 'text-card',
			date: 'June 13, 2025',
			title: 'The beautiful range of\nApplee`s Naturalé that has an\nexciting mix of',

			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			buttonText: 'General Bug Fixes'
		},
		// Repeat pattern to reach 10 cards
		{
			type: 'image-card',
			date: 'June 13, 2025',
			title:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients.',
			label: 'Public Car Releases',
			image: '/blog/Rectangle 165 (3) 1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		},
{
			type: 'image-card',
			date: 'June 13, 2025',
			title:
				'The beautiful range of Apple Naturalé that  has an exciting mix of natural ingredients.',
			label: 'Public Car Releases',
			image: '/blog/Rectangle 165 (2) 1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		},
		{
			type: 'text-card',
			date: 'June 13, 2025',
			title: 'The beautiful range of\nApplee`s Naturalé that has an\nexciting mix of',

			description:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
			buttonText: 'General Bug Fixes'
		},
		// Repeat pattern to reach 10 cards
		{
			type: 'image-card',
			date: 'June 13, 2025',
			title:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients.',
			label: 'Public Car Releases',
			image: '/blog/Rectangle 165 (3) 1.svg',
			buttonIcon: '/blog/ArrowUpRight.svg'
		},
		// Repeat pattern to reach 10 cards
		
	];

	function updateDots() {
		const containerWidth = sliderEl?.clientWidth || window.innerWidth;
		const avgCardWidth = 400;
		const visibleCards = containerWidth / avgCardWidth;
		const totalDots = Math.ceil(cards.length / visibleCards);
		dots = Array.from({ length: totalDots }, (_, i) => i);
	}

	onMount(() => {
		updateDots();
		window.addEventListener('resize', updateDots);
		return () => window.removeEventListener('resize', updateDots);
	});

	function scrollLeft() {
		if (!sliderEl) return;
		const scrollAmount = getScrollAmount();
		sliderEl.scrollLeft -= scrollAmount;
		triggerBounce('left');
		updateActiveIndex();
	}

	function scrollRight() {
		if (!sliderEl) return;
		const scrollAmount = getScrollAmount();
		sliderEl.scrollLeft += scrollAmount;
		triggerBounce('right');
		updateActiveIndex();
	}
	function getScrollAmount(): number {
		const screenWidth = window.innerWidth;

		if (screenWidth < 640) {
			// Mobile
			return sliderEl.clientWidth * 1;
		} else if (screenWidth < 1024) {
			// Tablet
			return sliderEl.clientWidth * 1;
		} else {
			// Desktop and above
			return sliderEl.clientWidth * 1; // You can tweak this
		}
	}

	function updateActiveIndex() {
		if (!sliderEl) return;
		const scrollLeft = sliderEl.scrollLeft;
		const containerWidth = sliderEl.clientWidth;
		activeIndex = Math.round(scrollLeft / (containerWidth * 0.8));
	}

	function scrollToIndex(index: number) {
		if (!sliderEl) return;
		const scrollAmount = getScrollAmount();
		sliderEl.scrollLeft = index * scrollAmount;
		activeIndex = index;
		triggerBounce('right');
	}

	function triggerBounce(direction: 'left' | 'right') {
		// Only trigger animation on large screens and above (≥1024px)
		if (window.innerWidth < 1024) return;

		animClass = direction === 'left' ? 'animate-bounce-pulse-left' : 'animate-bounce-pulse-right';

		setTimeout(() => {
			animClass = '';
		}, 700);
	}

	function handleScroll() {
		if (!sliderEl) return;
		const current = sliderEl.scrollLeft;
		const direction = current > lastScrollLeft ? 'right' : 'left';
		triggerBounce(direction);
		lastScrollLeft = current;
		updateActiveIndex();
	}
</script>

<section class="px-1 sm:px-6 md:px-8 lg:px-9">
	<div class="flex items-center justify-between mb-6">
		<p
			class="text-lg sm:text-xl text-content-primary font-inter md:text-2xl lg:text-xl leading-5 font-semibold"
		>
			Public Updates
		</p>

		<div class="flex items-center gap-3">
			<button
				on:click={scrollLeft}
				class="w-9 h-9 bg-border-light rounded-full text-white flex items-center justify-center"
			>
				<img src="/blog/CaretRight.svg" alt="Left" class=" w-4 h-4" />
			</button>
			<button
				on:click={scrollRight}
				class="w-9 h-9 bg-border-light rounded-full text-white flex items-center justify-center"
			>
				<img src="/blog/CaretRight (1).svg" alt="Right" class="w-4 h-4" />
			</button>
		</div>
	</div>

	<!-- Scrollable Slider -->
	<div
		bind:this={sliderEl}
		class={`flex gap-3 overflow-x-auto scroll-smooth no-scrollbar ${animClass}`}
		on:scroll={handleScroll}
	>
		{#each cards as card}
			{#if card.type === 'image-card'}
				<!-- Image Card -->
				<div
					class="bg-border border border-border sm:w-[360px] md:w-[49%] w-full xl:w-[497px] lg:w-[60%] h-[400px] lg:h-[455px] rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col shrink-0 transition-all duration-300"
				>
					<div class="relative">
						<img
							src={card.image}
							alt="card"
							class="w-full object-cover rounded-2xl h-[160px] sm:h-[200px] md:h-[200px] lg:h-[260px]"
						/>
						<span
							class="absolute bottom-1 border border-border-light left-1 px-7 py-3 text-[16px] leading-1 font-medium text-content-primary rounded-full bg-border backdrop-blur-[24px]"
						>
							{card.label}
						</span>
					</div>
					<div class="py-4 px-4 md:px-6 font-inter pr-[58px]">
						<p class="text-sm lg:text-[18px] text-content-secondary leading-2 font-inter mt-2">
							{card.date}
						</p>
						<p
							class="mt-3 text-base sm:text-lg md:text-[18px] font-inter whitespace-pre-line text-content-primary lg:text-[20px] xl:text-[24px] font-semibold  lg:leading-8"
						>
							{card.title}
						</p>
					</div>
					
				</div>
			{:else}
				<div
					class="bg-border border border-border text-content-primary font-inter min-w-[85%] lg:w-full sm:min-w-[320px] max-w-[360px] w-full md:w-[48%] xl:w-[366px] h-[400px] lg:h-[455px] rounded-3xl shadow-md p-4 flex flex-col justify-between shrink-0 transition-all duration-300"
				>
					<p class="text-[18px] font-inter font-normal  text-content-secondary leading-2 mb-4">{card.date}</p>
					<p class="text-[24px] font-semibold font-inter mb-4 leading-9">{card.title}</p>
					<span class="text-[18px] mb-4 leading-[26px] font-semibold font-inter text-content-secondary">{card.description}</span>
					<button
						class="mt-auto bg-border font-inter text-[16px] px-9 py-4 leading-1 font-medium rounded-full w-max"
						>{card.buttonText}</button
					>
				</div>
			{/if}
		{/each}
	</div>

	<div class="flex justify-center mt-6 gap-2">
		{#each dots as _, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span class="dot w-2 h-2 rounded-full bg-border-light  cursor-pointer  {i === activeIndex ? 'bg-content-primary' : ''}" on:click={() => scrollToIndex(i)} />
		{/each}
	</div>
</section>

<style>
	
	
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
