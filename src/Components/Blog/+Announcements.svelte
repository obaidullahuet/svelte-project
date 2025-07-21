<script>
	const announcements = [
		{
			id: 1,
			imgSrc: '/blog/car1.svg',
			imgAlt: 'car1',
			tag: 'Limited Time Events',
			date: 'June 13, 2025',
			title: 'Ergonomic executive chair upholstered in bonded black leather and PVC'
		},
		{
			id: 2,
			imgSrc: '/blog/car3.svg',
			imgAlt: 'Car',
			tag: 'Collabs',
			date: 'June 13, 2025',
			title:
				'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals'
		},
		{
			id: 3,
			imgSrc: '/blog/car2.svg',
			imgAlt: 'Car',
			tag: 'Exclusive Giveaways',
			date: 'June 13, 2025',
			title:
				'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients.'
		}
	];

	// First announcement (large card)
	$: firstAnnouncement = announcements[0];
	// Remaining announcements (smaller cards)
	$: otherAnnouncements = announcements.slice(1);
</script>

<section class="text-content-primary px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<p class="text-lg sm:text-xl md:text-2xl lg:text-xl lg:leading-5 font-semibold mb-3">
		Announcements
	</p>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
		{#if firstAnnouncement}
			<!-- First announcement - Large card -->
			<div
				class="bg-border rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col h-auto"
			>
				<div class="relative">
					<img
						src={firstAnnouncement.imgSrc}
						alt={firstAnnouncement.imgAlt}
						class="w-full object-cover rounded-2xl h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px]"
					/>
					<span
						class="absolute bottom-1   left-1 px-6 py-3 text-xs sm:text-sm md:text-md font-medium border  bg-border-light border-border-light text-content-primary rounded-full backdrop-blur-16 text-center leading-1"
					>
						{firstAnnouncement.tag}
					</span>
				</div>

				<div class="py-4 px-4 md:px-6 pr-[58px]">
					<p class="text-xs sm:text-sm md:text-base lg:text-base font-normal left-1 mt-2">
						{firstAnnouncement.date}
					</p>
					<p
						class="mt-3 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-semibold  xl:leading-10"
					>
						{firstAnnouncement.title}
					</p>
				</div>

				<button
					class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-content-primary rounded-full"
				>
					<img src="/blog/ArrowUpRight.svg" alt="" />
				</button>
			</div>
		{/if}

		<!-- Other announcements - Smaller cards -->
		<div class="flex flex-col gap-4">
			{#each otherAnnouncements as announcement (announcement.id)}
				<div
					class="bg-border rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col sm:flex-row"
				>
					<div class="relative w-full sm:w-[45%]">
						<img
							src={announcement.imgSrc}
							alt={announcement.imgAlt}
							class="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-auto object-cover rounded-2xl sm:rounded-l-2xl sm:rounded-md"
						/>
						<span
							class="absolute bottom-1 xl:bottom-1 border border-border-light left-1 px-6 sm:w-[95%] lg:px-4 xl:px-[24px] py-4 lg:text-xxs text-xs sm:text-sm md:text-sm font-medium xl:text-md whitespace-nowrap text-content-primary rounded-full bg-border-light backdrop-blur-16 text-center leading-1"
						>
							{announcement.tag}
						</span>
					</div>

					<div class="flex flex-col justify-between  p-4 w-full">
						<div>
							<p
								class="text-xs sm:text-sm md:text-base  leading-2 font-normal"
								class:text-content-secondary={announcement.id === 2}
							>
								{announcement.date}
							</p>
							<p
								class="text-sm sm:text-base md:text-lg lg:text-xs xl:text-slg mt-3 font-semibold leading-8 "
								class:xl:leading-8={announcement.id === 3}
							>
								{announcement.title}
							</p>
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
</section>
