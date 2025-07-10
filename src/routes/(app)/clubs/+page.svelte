<script>
	// @ts-nocheck

	import CancelModal from '$lib/+Modal1.svelte';
	import { fade, scale } from 'svelte/transition';
	//   export let isOpen = false;
	//   export let close = () => {};
	let showModal = false;
	// data.js
	const clubCards = [
		{
			id: 1,
			bgImage: '/club/Rectangle 116.svg',
			profileImage: '/club/logo.svg',
			clanName: 'Hell Drivers',
			clanTag: 'Hell.D',
			clanIcon: '/club/image 37.svg',
			description:
				'Lorem ipsum dolor sit amet consectetur. Diam arcu tempus augue quis quis. Blandit tristique malesuada aenean duis',
			members: 500,
			type: 'Public Club'
		},
		{
			id: 2,
			bgImage: '/club/Rectangle 116 (1).svg',
			profileImage: '/club/logo (1).svg',
			clanName: 'Night Riders',
			clanTag: 'Night.R',
			clanIcon: '/club/image 37.svg',
			description: 'Fast and furious under the city lights.',
			members: 420,
			type: 'Public Club'
		},
		
		{
			id: 3,
			bgImage: '/club/Rectangle 116 (2).svg',
			profileImage: '/club/logo (2).svg',
			clanName: 'Midnight Wolves',
			clanTag: 'MWolves',
			clanIcon: '/club/image 37.svg',
			description: 'Hunt the tracks at midnight with us.',
			members: 310,
			type: 'Public Club'
		},
		{
			id: 4,
			bgImage: '/club/Rectangle 116 (3).svg',
			profileImage: '/club/image (4).svg',
			clanName: 'Drift Lords',
			clanTag: 'D.Lords',
			clanIcon: '/club/image 37.svg',
			description: 'Masters of drift and precision corners.',
			members: 690,
			type: 'Public Club'
		},
		{
			id: 5,
			bgImage: '/club/image (1).svg',
			profileImage: '/club/image (5).svg',
			clanName: 'Turbo Titans',
			clanTag: 'Turbo.T',
			clanIcon: '/club/image 37.svg',
			description: 'Boost your adrenaline with Turbo Titans.',
			members: 540,
			type: 'Private Club'
		},
		{
			id: 6,
			bgImage: '/club/image (2).svg',
			profileImage: '/club/image (6).svg',
			clanName: 'Nitro Squad',
			clanTag: 'N.Squad',
			clanIcon: '/club/image 37.svg',
			description: 'Speed runs and nitro drags every night.',
			members: 750,
			type: 'Public Club'
		},
		{
			id: 7,
			bgImage: '/club/image (3).svg',
			profileImage: '/club/image (7).svg',
			clanName: 'Nitro Squad',
			clanTag: 'N.Squad',
			clanIcon: '/club/image 37.svg',
			description: 'Speed runs and nitro drags every night.',
			members: 750,
			type: 'Public Club'
		}
	];
</script>

<div class="mt-[100px] px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<nav class="rounded-2xl py-3">
		<div class="flex flex-wrap items-center text-[#EEEDEE] justify-start lg:justify-end">
			<!-- Right Section (Buttons) -->
			<div class="px-2 bg-border border border-[#FFFFFF]/5 rounded-2xl py-2 font-inter-tight">
				<div
					class="flex w-full flex-wrap items-center justify-start gap-2 sm:w-auto sm:justify-end"
				>
					<a href="/Subscription">
						<button
							class="font-inter-tight flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] font-medium leading-1 tracking-normal transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/billing/House.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Home
						</button>
					</a>

					<a href="/Subscription">
						<button
							class="font-inter-tight flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] font-medium leading-1 tracking-normal transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/billing/Crown.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />
							Leaderboard
						</button>
					</a>

					<a href="/Subscription">
						<button
							class="font-inter-tight flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] font-medium leading-1 tracking-normal transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/billing/Users.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Friends
						</button>
					</a>

					<a href="/Billing">
						<button
							class=" flex h-9 font-inter items-center rounded-md border border-[#FFFFFF]/5 px-2 py-[6px] text-[14px] font-semibold leading-1 transition-colors hover:bg-[#FFFFFF]/10"
						>
							<img src="/purpleribin.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Clubs
						</button>
					</a>

					<a href="/Subscription">
						<button
							class="font-inter-tight flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] font-medium leading-1 transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="Star.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Favourit Servers
						</button>
					</a>

					<a href="/Subscription">
						<button
							class="font-inter-tight flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] font-medium leading-1 tracking-normal transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/billing/PencilSimple.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Edit Profile
						</button>
					</a>
					<a href="/Subscription">
						<button
							class="font-inter font-normal flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] leading-1 tracking-normal transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/billing/Cube.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Subscription
						</button>
					</a>
					<a href="/Subscription">
						<button
							class="font-inter font-normal flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] leading-1 tracking-normal transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/GearSix.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Settings
						</button>
					</a>
				</div>
			</div>
		</div>
	</nav>
</div>

<div
	class="flex flex-wrap items-center gap-5 md:justify-between my-[18px] px-1 sm:px-6 md:px-8 lg:px-9"
>
	<p class="text-[39px] font-inter font-semibold leading-5 text-[#EEEDEE]">Billing</p>

	<!-- Example div with Tailwind classes -->
	<div class="flex items-center gap-5 flex-wrap">
		<div class="relative">
			<input
				type="text"
				placeholder="Search by club name"
				class="h-[36px] w-auto md:w-[320px] text-[#EEEDEE] rounded-md border border-border-light bg-[#161416] pl-9 pr-3 text-sm placeholder-white/50 focus:outline-none"
			/>
			<img
				src="/Search.png"
				alt="Search"
				class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50"
			/>
		</div>
		<button
			class="h-[36px] items-center gap-1 flex rounded-md font-roboto text-[#EEEDEE] bg-border-light px-4 py-1.5 text-[15px] font-medium leading-1 transition hover:bg-white/20"
		>
			<img src="/Plus.svg" class="h-4 w-4" alt="" />
			Create New Club
		</button>
	</div>
</div>

<div class="  px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<div class="   border border-t-[#FFFFFF]/5">
		<!-- Heading -->
		<p class="mt-2 text-[#D3D3D3] leading-2 font-inter text-[14px]">
			Showed : <span class="text-[#EEEDEE]"> 40+ Clubs</span>
		</p>

		<div class="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-6">
			

			{#each clubCards as card}
				<div
					class="rounded-xl overflow-hidden border border-border-light text-[#EEEDEE] font-inter"
				>
					<!-- Background image -->
					<div class="relative">
						<img src={card.bgImage} alt="Car" class="w-full h-[244px] object-cover" />
						<span
							class="absolute flex items-center top-[18px] text-[15px] font-medium left-4 bg-[#FFFFFF1A] backdrop-blur-[24px] text-white px-2 py-0.5 rounded-full"
						>
							<img src="/purpleribin.svg" alt="Alert Icon" class="mr-2 h-7 w-5" />
							Your Clan
						</span>

						<img
							src={card.profileImage}
							alt="Profile"
							class="w-12 h-12 rounded-full object-cover absolute border-black border-4 bottom-[-8%] left-4"
						/>
					</div>

					<div class="flex1 items-start gap-2 mt-4 px-4 pt-3 pb-5">
						<div class="flex flex-col gap-2">
							<div class="flex items-center gap-[6px]">
								<p class="font-semibold">{card.clanName}</p>
								<span
									class="flex items-center gap-1 bg-background-light border border-border text-[16px] font-medium leading-2 font-inter"
								>
									<img src={card.clanIcon} alt="Icon" class="w-4 h-4" />
									{card.clanTag}
								</span>
							</div>

							<p class="text-[15px] h-[90px] font-normal leading-1 text-[#D3D3D3]">
								{card.description}
							</p>

							<div class="flex items-center gap-1 text-sm text-gray-400">
								<img src="/billing/Users.svg" alt="User Icon" class="mr-2 h-5 w-5" />
								<span>{card.members}</span>
								<span class="text-[gray] pl-1 text-[15px] leading-2 font-medium">
									• <span class="pl-1 text-[#EEEDEE]">{card.type}</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- svelte-ignore missing-declaration -->
<!-- <CancelModal isOpen={showModal} close={() => (showModal = false)} /> -->
