<script>
	import CancelModal from '$lib/+Modal1.svelte';
	import CancelModal1 from '$lib/Modals/+Tier1.svelte';
	import CancelModal2 from '$lib/Modals/+Tier2.svelte';
	import CancelModal3 from '$lib/Modals/+Tier3.svelte';
	import { fade, scale } from 'svelte/transition';
	let showModal = false;
	let showModal1 = false;
	let showModal2 = false;
	let showModal3 = false;

	const tiers = [
		{
			id: 1,
			tier: 'TIER 1',
			title: 'SURFACE',
			image: '/1tier.svg',
			renewal: '10.01.2024',
		},
		{
			id: 2,
			tier: 'TIER 2',
			title: 'MIDWAY',
			image: '/2tier.svg',
			renewal: '15.02.2024',
		},
		{
			id: 3,
			tier: 'TIER 3',
			title: 'UNDERGROUND',
			image: '/3itir.svg',
			renewal: '28.03.2024',
		},
		{
			id: 4,
			tier: 'TIER 4',
			title: 'DEEPCORE',
			image: '/4tier.svg',
			renewal: '12.04.2024',
		}
	];

	function openModal(tier) {
		selectedTier = tier;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

</script>

// @ts-nocheck
<div class="mt-[100px] px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<nav class="rounded-2xl py-3">
		<div class="flex flex-wrap items-center text-[#EEEDEE] justify-start lg:justify-end">
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

					<a href="/Subscription">
						<button
							class="font-inter-tight flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] font-medium leading-1 tracking-normal transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/billing/fi_6557720.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Clients
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
							class="font-inter-tight flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] font-medium leading-1 transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/billing/Cube.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Transactions
						</button>
					</a>

					<a href="/Billing">
						<button
							class=" flex h-9 font-inter items-center rounded-md border border-[#FFFFFF]/5 px-2 py-[6px] text-[14px] font-semibold leading-1 transition-colors hover:bg-[#FFFFFF]/10"
						>
							<img src="/billing/fi_9554529.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Billing
						</button>
					</a>
				</div>
			</div>
		</div>
	</nav>
</div>

<div class=" my-10 px-1 sm:px-6 md:px-8 lg:px-9">
	<p class="text-[39px] font-inter font-semibold leading-5 text-[#EEEDEE]">Billing</p>
</div>

<div class=" flex justify-center px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
		<div class="py-3">
			<span class=" text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
		</div>

		<!-- Tier -->
		<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
			<span>TIER 3</span>
		</div>

		<!-- Badge -->
		<div class="flex flex-wrap items-center gap-3 py-3">
			<img
				class="h-12 w-12 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]"
				src="/3itir.svg"
				alt="Tier Badge"
			/>
			<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">UNDERGROUND</p>
		</div>

		<!-- Renewal & Actions -->
		<div
			class="flex flex-col items-start justify-between gap-4 py-3 text-[17px] sm:flex-row sm:items-center"
		>
			<span class="whitespace-nowrap text-[gray] leading-2 font-normal">
				New subscription renewal: <span class="font-medium font-inter-tight text-[#EEEDEE]"
					>28.03.2024</span
				>
			</span>

			<div class="flex gap-[16px] font-inter text-[17px] font-medium leading-2 justify-end">
				<button on:click={() => (showModal = true)} class="text-[#B130FF]">Upgrade</button>
				<button class="font-normal text-[gray]">Cancel</button>
			</div>
		</div>
	</div>
</div>
<div class=" flex justify-center px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
		<div class="py-3">
			<span class=" text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
		</div>

		<!-- Tier -->
		<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
			<span>TIER 3</span>
		</div>

		<!-- Badge -->
		<div class="flex flex-wrap items-center gap-3 py-3">
			<img
				class="h-12 w-12 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]"
				src="/3itir.svg"
				alt="Tier Badge"
			/>
			<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">UNDERGROUND</p>
		</div>

		<!-- Renewal & Actions -->
		<div
			class="flex flex-col items-start justify-between gap-4 py-3 text-[17px] sm:flex-row sm:items-center"
		>
			<span class="whitespace-nowrap text-[gray] leading-2 font-normal">
				New subscription renewal: <span class="font-medium font-inter-tight text-[#EEEDEE]"
					>28.03.2024</span
				>
			</span>

			<div class="flex gap-[16px] font-inter text-[17px] font-medium leading-2 justify-end">
				<button on:click={() => (showModal1 = true)} class="text-[#B130FF]">Upgrade</button>
				<button class="font-normal text-[gray]">Cancel</button>
			</div>
		</div>
	</div>
</div>
<div class=" flex justify-center px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
		<div class="py-3">
			<span class=" text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
		</div>

		<!-- Tier -->
		<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
			<span>TIER 3</span>
		</div>

		<!-- Badge -->
		<div class="flex flex-wrap items-center gap-3 py-3">
			<img
				class="h-12 w-12 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]"
				src="/3itir.svg"
				alt="Tier Badge"
			/>
			<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">UNDERGROUND</p>
		</div>

		<!-- Renewal & Actions -->
		<div
			class="flex flex-col items-start justify-between gap-4 py-3 text-[17px] sm:flex-row sm:items-center"
		>
			<span class="whitespace-nowrap text-[gray] leading-2 font-normal">
				New subscription renewal: <span class="font-medium font-inter-tight text-[#EEEDEE]"
					>28.03.2024</span
				>
			</span>

			<div class="flex gap-[16px] font-inter text-[17px] font-medium leading-2 justify-end">
				<button on:click={() => (showModal2 = true)} class="text-[#B130FF]">Upgrade</button>
				<button class="font-normal text-[gray]">Cancel</button>
			</div>
		</div>
	</div>
</div>
<div class=" flex justify-center px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
		<div class="py-3">
			<span class=" text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
		</div>

		<!-- Tier -->
		<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
			<span>TIER 3</span>
		</div>

		<!-- Badge -->
		<div class="flex flex-wrap items-center gap-3 py-3">
			<img
				class="h-12 w-12 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]"
				src="/3itir.svg"
				alt="Tier Badge"
			/>
			<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">UNDERGROUND</p>
		</div>

		<!-- Renewal & Actions -->
		<div
			class="flex flex-col items-start justify-between gap-4 py-3 text-[17px] sm:flex-row sm:items-center"
		>
			<span class="whitespace-nowrap text-[gray] leading-2 font-normal">
				New subscription renewal: <span class="font-medium font-inter-tight text-[#EEEDEE]"
					>28.03.2024</span
				>
			</span>

			<div class="flex gap-[16px] font-inter text-[17px] font-medium leading-2 justify-end">
				<button on:click={() => (showModal3 = true)} class="text-[#B130FF]">Upgrade</button>
				<button class="font-normal text-[gray]">Cancel</button>
			</div>
		</div>
	</div>
</div>

<!-- svelte-ignore missing-declaration -->
<!-- <CancelModal isOpen={showModal} close={() => (showModal = false)} /> -->

<CancelModal isOpen={showModal} close={() => (showModal = false)} />
<CancelModal1 isOpen={showModal1} close={() => (showModal1 = false)} />
<CancelModal2 isOpen={showModal2} close={() => (showModal2 = false)} />
<CancelModal3 isOpen={showModal3} close={() => (showModal3 = false)} />


	