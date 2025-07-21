<script>
	const devlogCards = [
		{
			date: 'June 13, 2025',
			title: 'Everything you know about Nohesi is about to change',
			tag: 'Devlog',
			icon: '/blog/Code.svg',
			img: '/blog/image 49.png'
		},
		{
			date: 'June 14, 2025',
			title: 'We Solved No Hesis Biggest Problem  Car Switching Teaser',
			tag: 'Devlog',
			icon: '/blog/Code.svg'
		},
		{
			date: 'June 15, 2025',
			title: 'Assimilated methodical pricing structure',
			tag: 'Upcoming',
			icon: '/blog/ArrowLineUpRight.svg'
		},
		{
			date: 'June 16, 2025',
			title: 'Our best gameplay mode yet',
			tag: 'Teaser',
			icon: '/blog/Newspaper.svg'
		},
		{
			date: 'June 17, 2025',
			title: 'Expanded eco-centric task-force',
			tag: 'Devlog',
			icon: '/blog/Code.svg'
		},
		{
			date: 'June 18, 2025',
			title: 'Configurable fresh-thinking process improvement',
			tag: 'Upcoming',
			icon: '/blog/ArrowLineUpRight.svg'
		},
		{
			date: 'June 19, 2025',
			title: 'Phased transitional ability',
			tag: 'Devlog',
			icon: '/blog/Code.svg'
		}
	];
</script>

<section class="px-1 py-2 sm:px-6 md:px-8 lg:px-9">
	<p
		class="text-lg sm:text-xl text-content-primary font-inter md:text-2xl leading-5 lg:text-xl font-semibold mb-4"
	>
		Under The Hood: Devlogs and Patch Notes
	</p>

	{#each devlogCards as log}
		<div
			class="bg-border text-content-primary mb-[6px] rounded-2xl px-7 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-border"
		>
			<div
				class="flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 sm:gap-6 font-inter"
			>
				<span class="text-sm sm:text-base md:text-base w-full sm:w-[224px] whitespace-nowrap">
					{log.date}
				</span>

				<span
					class="flex gap-6 items-center relative text-sm sm:text-sm md:text-md lg:text-lg xl:text-slg font-semibold flex-1 leading-5"
				>
					{#if log.img}


						<div class="">
							<img
								src={log.img}
								alt=""
								class="  h-17 w-20 xl:w-[240px] leading-5 xl:h-[135px]"
							/>
						</div>
						<button
							class=" hidden absolute bottom-1 left-[18%] w-13 h-13 xl:flex items-center justify-center bg-content-primary  rounded-full"
						>
							<img src="/blog/fi_27223.png" alt="Open" />
						</button>
					{/if}

					{log.title}
				</span>
			</div>

			<span
				class="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-md text-content-primary font-medium font-inter bg-border-light border border-border-light rounded-full flex items-center gap-2 w-max self-start sm:self-center"
			>
				<img src={log.icon} alt={log.tag} class="w-4 h-4" />
				{log.tag}
			</span>
		</div>
	{/each}
</section>
