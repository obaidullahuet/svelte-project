<script>
	//   import car1 from '$lib/assets/car1.jpg';
	//   import car2 from '$lib/assets/car2.jpg';
	//   import car3 from '$lib/assets/car3.jpg';

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
						class="absolute bottom-3 left-3 px-3 py-1.5 text-xs sm:text-sm md:text-base font-medium text-[#EEEDEE] rounded-full
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
					<span class="text-xl">↗</span>
				</button>
			</div>

			<!-- Right Column (Two Cards) -->
			<div class="flex flex-col gap-4">
				<!-- Card 2 -->
				<div
					class="bg-[#E6E6E6]/[0.05] rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col sm:flex-row"
				>
					<div class="relative w-full sm:w-[45%]">
						<img
							src="/blog/car2.svg"
							alt="Car"
							class="w-full h-[140px] sm:h-full lg:h-[200px] object-cover rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
						/>
						<span
							class="absolute bottom-3 left-3 px-3 py-1.5 text-xs sm:text-sm md:text-base font-medium text-[#EEEDEE] rounded-full
							   bg-[#FFFFFF1A] backdrop-blur-[24px] text-center"
						>
							Collabs
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
							class="w-10 h-10 mt-4 self-end flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
						>
							<span class="text-xl">↗</span>
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
							class="w-full h-[140px] sm:h-full lg:h-[200px] object-cover rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
						/>
						<span
							class="absolute bottom-3 left-3 px-3 py-1.5 text-xs sm:text-sm md:text-base font-medium text-[#EEEDEE] rounded-full
							   bg-[#FFFFFF1A] backdrop-blur-[24px] text-center"
						>
							Exclusive Giveaways
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
							class="w-10 h-10 mt-4 self-end flex items-center justify-center bg-[#FFFFFF] text-[#000000] rounded-full"
						>
							<span class="text-xl">↗</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Public Updates Section -->
	<section class=" px-9 ">
		<h2 class="text-[#EEEDEE] font-inter text-xl md:text-2xl font-semibold mb-6">Public Updates</h2>

		<div class="flex gap-3 overflow-x-auto no-scrollbar text-[#EEEDEE] font-inter">
			<!-- Card 1 -->
			<div
				class="bg-[#E6E6E6]/[0.05] w-[497px] h-[455px] rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col"
			>
				<div class="relative">
					<img
						src="/blog/car1.svg"
						alt="car1"
						class="w-full object-cover rounded-2xl
						   h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px]"
					/>
					<span
						class="absolute bottom-3 left-3 px-3 py-1.5 text-xs sm:text-sm md:text-base font-medium text-[#EEEDEE] rounded-full
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
					<span class="text-xl">↗</span>
				</button>
			</div>

			<!-- Card 2 (Detailed Style) -->
			<div
				class="bg-border min-w-[340px] max-w-[360px] w-[366px] h-[455px] rounded-2xl shadow-md p-4 flex flex-col justify-between"
			>
				<p class="text-xs text-white/60 mb-1">June 13, 2025</p>
				<h3 class="text-[17px] text-white font-semibold leading-snug mb-2">
					The beautiful range of Apple Naturalé that has an exciting mix of
					<br />
					<span class="font-normal text-sm">
						Andy shoes are designed to keeping in mind durability as well as trends, the most
						stylish range of shoes & sandals
					</span>
				</h3>

				<button class="mt-auto bg-white/10 text-white text-xs px-4 py-1 rounded-full w-max">
					General Bug Fixes
				</button>
			</div>

			<!-- Card 3 (Same as 1) -->
			<div
				class="bg-[#E6E6E6]/[0.05] w-[497px] h-[455px] rounded-3xl p-2 overflow-hidden shadow-md relative flex flex-col"
			>
				<div class="relative">
					<img
						src="/blog/car1.svg"
						alt="car1"
						class="w-full object-cover rounded-2xl
						   h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px]"
					/>
					<span
						class="absolute bottom-3 left-3 px-3 py-1.5 text-xs sm:text-sm md:text-base font-medium text-[#EEEDEE] rounded-full
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
					<span class="text-xl">↗</span>
				</button>
			</div>
		</div>

		<!-- Dots Navigation (Optional) -->
		<div class="flex justify-center mt-4 space-x-1">
			<span class="w-2 h-2 bg-white/40 rounded-full" />
			<span class="w-2 h-2 bg-white/80 rounded-full" />
			<span class="w-2 h-2 bg-white/40 rounded-full" />
			<span class="w-2 h-2 bg-white/40 rounded-full" />
		</div>
	</section>
</div>
