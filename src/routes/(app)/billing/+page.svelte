<script>
// @ts-nocheck

	import CancelModal from '$lib/+Modal1.svelte'
	  import { fade, scale } from 'svelte/transition';
//   export let isOpen = false;
//   export let close = () => {};
let showModal = false;
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
							class="font-inter font-normal flex h-9 items-center rounded-md px-2 py-[6px] text-[14px]  leading-1 tracking-normal transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/billing/Cube.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Subscription
						</button>
					</a>
					<a href="/Subscription">
						<button
							class="font-inter-tight flex h-9 items-center rounded-md px-2 py-[6px] text-[14px] font-medium leading-1  transition-colors hover:bg-[#FFFFFF]/5"
						>
							<img src="/billing/Cube.svg" alt="Alert Icon" class="mr-2 h-5 w-5" />

							Transactions
						</button>
					</a>

					<a href="/Billing">
						<button
							class=" flex h-9 font-inter items-center rounded-md border border-[#FFFFFF]/5 px-2 py-[6px] text-[14px] font-semibold leading-1  transition-colors hover:bg-[#FFFFFF]/10"
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
	
	<!-- Example div with Tailwind classes -->
	<div class="w-10 h-[6px] bg-red-500 rounded-full"></div>
</div>

<div class=" flex justify-center px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
		<!-- Heading -->
		<div class="py-3">
			<span class=" text-[#EEEDEE] text-[14px] font-medium leading-1 ">Your Subscription</span>
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
			<span class="md:text-[37px] leading-10   font-roboto font-black text-[#EEEDEE] "
				>UNDERGROUND</span
			>
		</div>

		<!-- Renewal & Actions -->
		<div
			class="flex flex-col items-start justify-between gap-4 py-3 text-[17px] text-[#EEEDEE] sm:flex-row sm:items-center "
		>
			<span class="whitespace-nowrap leading-2 font-normal">
				New subscription renewal: <span class="font-medium font-inter-tight">28.03.2024</span>
			</span>

			<div class="flex gap-[16px] font-inter text-[17px] font-medium leading-2 justify-end">
				<button on:click={() => (showModal = true)} class="text-[#B130FF] ">Upgrade</button>
				<button class="font-normal">Cancel</button>
			</div>
		</div>
	</div>
</div>

<!-- svelte-ignore missing-declaration -->
<!-- <CancelModal isOpen={showModal} close={() => (showModal = false)} /> -->

<CancelModal isOpen={showModal} close={() => (showModal = false)} />
