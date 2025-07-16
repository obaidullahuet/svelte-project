<script lang="ts">
	import CancelModal from '$lib/+Modal1.svelte';
	import CancelModal1 from '$lib/Modals/+Tier1.svelte';
	import CancelModal2 from '$lib/Modals/+Tier2.svelte';
	import CancelModal3 from '$lib/Modals/+Tier3.svelte';
	import SubscriptionTier from '$lib/+SubscriptionTier.svelte';
	import { fade, scale } from 'svelte/transition';
	let showModal = false;
	let showModal1 = false;
	let showModal2 = false;
	let showModal3 = false;

	function closeModal() {
		showModal = false;
	}

	let isOpen = false;
</script>

<div class="hidden lg:block   mt-[100px] px-2 sm:px-6 md:px-8 lg:px-9 font-inter">
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

<!-- Sidebar Wrapper -->


<!-- <div class=" my-10  px-2 sm:px-6 md:px-8 lg:px-9">
	<div
		class="w-full text-[#EEEDEE] max-w-xs bg-border border border-border-light rounded-2xl p-4 space-y-2"
	>
		<div
			class="flex items-center justify-between px-3 py-2 rounded-lg bg-border border border-[#333] cursor-pointer"
			on:click={() => (isOpen = !isOpen)}
		>
			<div class="flex items-center gap-2">
				<img src="/billing/Crown.svg" alt="Crown" class="h-5 w-5" />
				<span class="text-sm sm:text-base font-bold uppercase">Leaderboard</span>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 text-white transform transition-transform duration-300 {isOpen
					? 'rotate-180'
					: ''}"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</div>

		{#if isOpen}
			<div  class="space-y-1 mt-2">
				<a
					href="/home"
					class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 "
				>
					<img src="/billing/House.svg" alt="Home" class="h-5 w-5" />
					<span class="text-sm sm:text-base font-bold uppercase">Home</span>
				</a>

				<a
					href="/leaderboard"
					class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10"
				>
					<img src="/billing/Crown.svg" alt="Leaderboard" class="h-5 w-5" />
					<span class="text-sm sm:text-base font-bold uppercase">Leaderboard</span>
				</a>

				<a
					href="/friends"
					class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 "
				>
					<img src="/billing/Users.svg" alt="Friends" class="h-5 w-5" />
					<span class="text-sm sm:text-base font-bold uppercase">Friends</span>
				</a>

				<a
					href="/clients"
					class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10"
				>
					<img src="/billing/fi_6557720.svg" alt="Clients" class="h-5 w-5" />
					<span class="text-sm sm:text-base font-bold uppercase">Clients</span>
				</a>

				<a
					href="/edit-profile"
					class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10"
				>
					<img src="/billing/PencilSimple.svg" alt="Edit" class="h-5 w-5" />
					<span class="text-sm sm:text-base font-bold uppercase">Edit Profile</span>
				</a>

				<a
					href="/subscriptions"
					class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 "
				>
					<img src="/billing/Cube.svg" alt="Subscriptions" class="h-5 w-5" />
					<span class="text-sm sm:text-base font-bold uppercase">Subscriptions</span>
				</a>

				<a
					href="/transactions"
					class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 "
				>
					<img src="/billing/Cube.svg" alt="Transactions" class="h-5 w-5" />
					<span class="text-sm sm:text-base font-bold uppercase">Transactions</span>
				</a>

				<a
					href="/billing"
					class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10 "
				>
					<img src="/billing/fi_9554529.svg" alt="Billing" class="h-5 w-5" />
					<span class="text-sm sm:text-base font-bold uppercase">Billing</span>
				</a>
			</div>
		{/if}
	</div>
</div> -->


<div class="relative  mt-[100px] px-2 sm:px-6 md:px-8 lg:px-9 lg:hidden">
	<!-- Wrapper with z-index to bring it above others -->
	<div
		class="relative z-50 text-[#EEEDEE] max-w-xs bg-background border border-border-light rounded-2xl p-4"
	>
		<!-- Header Button -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex items-center justify-between px-3 py-2 rounded-lg bg-border border border-[#333] cursor-pointer"
			on:click={() => (isOpen = !isOpen)}
		>
			<div class="flex items-center gap-2">
				<img src="/billing/Crown.svg" alt="Crown" class="h-5 w-5" />
				<span class="text-sm sm:text-base font-bold uppercase">Leaderboard</span>
			</div>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				class={`h-4 w-4 text-white transform transition-transform duration-300 ${
					isOpen ? 'rotate-180' : ''
				}`}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</div>

		{#if isOpen}
			<div
				class="absolute left-0 right-0 top-[80px]  bg-background border border-border-light rounded-xl p-2 shadow-xl space-y-1"
			>
				<a href="/home" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10">
					<img src="/billing/House.svg" alt="Home" class="h-5 w-5" />
					<span class="text-sm font-bold uppercase">Home</span>
				</a>
				<a href="/leaderboard" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10">
					<img src="/billing/Crown.svg" alt="Leaderboard" class="h-5 w-5" />
					<span class="text-sm font-bold uppercase">Leaderboard</span>
				</a>
				<a href="/friends" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10">
					<img src="/billing/Users.svg" alt="Friends" class="h-5 w-5" />
					<span class="text-sm font-bold uppercase">Friends</span>
				</a>
				<a href="/clients" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10">
					<img src="/billing/fi_6557720.svg" alt="Clients" class="h-5 w-5" />
					<span class="text-sm font-bold uppercase">Clients</span>
				</a>
				<a href="/edit-profile" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10">
					<img src="/billing/PencilSimple.svg" alt="Edit" class="h-5 w-5" />
					<span class="text-sm font-bold uppercase">Edit Profile</span>
				</a>
				<a href="/subscriptions" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10">
					<img src="/billing/Cube.svg" alt="Subscriptions" class="h-5 w-5" />
					<span class="text-sm font-bold uppercase">Subscriptions</span>
				</a>
				<a href="/transactions" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10">
					<img src="/billing/Cube.svg" alt="Transactions" class="h-5 w-5" />
					<span class="text-sm font-bold uppercase">Transactions</span>
				</a>
				<a href="/billing" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#FFFFFF]/10">
					<img src="/billing/fi_9554529.svg" alt="Billing" class="h-5 w-5" />
					<span class="text-sm font-bold uppercase">Billing</span>
				</a>
			</div>
		{/if}
	</div>
</div>
<div class=" my-10 px-2 sm:px-6 md:px-8 lg:px-9">
	<p class="text-[39px] font-inter font-semibold leading-5 text-[#EEEDEE]">Billing</p>
</div>

<!-- <div class=" flex justify-center px-1 sm:px-6 md:px-8 lg:px-9 font-inter">

	<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
		<div class="py-3">
			<span class=" text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
		</div>

		<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
			<span>TIER 3</span>
		</div>

		<div class="flex flex-wrap items-center gap-3 py-3">
			<img
				class="h-12 w-12 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]"
				src="/3itir.svg"
				alt="Tier Badge"
			/>
			<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">UNDERGROUND</p>
		</div>

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
</div>  -->
<!-- <div class=" flex justify-center px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
		<div class="py-3">
			<span class=" text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
		</div>

		<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
			<span>TIER 3</span>
		</div>

		<div class="flex flex-wrap items-center gap-3 py-3">
			<img
				class="h-12 w-12 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]"
				src="/3itir.svg"
				alt="Tier Badge"
			/>
			<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">UNDERGROUND</p>
		</div>

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
<div class=" flex justify-center px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
	<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
		<div class="py-3">
			<span class=" text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
		</div>

		<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
			<span>TIER 2</span>
		</div>

		<div class="flex flex-wrap items-center gap-3 py-3">
			<img
				class="h-12 w-12 drop-shadow-[0_0_20px_rgba(255,129,38,0.7)]"
				src="/ortire.svg"
				alt="Tier Badge"
			/>
			<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">UNDERGROUND</p>
		</div>

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
	<div class="flex w-full it flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
		<div class="py-3">
			<span class=" text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
		</div>

		 <div class="flex items-center"></div>
		<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
			<span>TIER 1</span>
		</div>

		<div class="flex flex-wrap items-center gap-3 py-3">
			<img
				class="h-12 w-12 "
				src="/Vector (1).svg"
				alt="Tier Badge"
			/>
			<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">UNDERGROUND</p>
		</div>

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
</div> -->

<!-- svelte-ignore missing-declaration -->
<!-- <CancelModal isOpen={showModal} close={() => (showModal = false)} /> -->

<CancelModal isOpen={showModal} close={() => (showModal = false)} />
<!-- <CancelModal1 isOpen={showModal1} close={() => (showModal1 = false)} />
<CancelModal2 isOpen={showModal2} close={() => (showModal2 = false)} />
<CancelModal3 isOpen={showModal3} close={() => (showModal3 = false)} /> -->

<SubscriptionTier tier="3" />
