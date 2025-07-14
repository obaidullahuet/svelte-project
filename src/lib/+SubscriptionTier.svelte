<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import CancelModal from '$lib/+Modal1.svelte';
	import CancelModal1 from '$lib/Modals/+Tier1.svelte';
	import CancelModal2 from '$lib/Modals/+Tier2.svelte';
	import CancelModal3 from '$lib/Modals/+Tier3.svelte';
	export let tier: string;

	let urlTier = '';
	$: {
		const params = $page.url.searchParams;
		if (params.get('tier')) {
			urlTier = params.get('tier') || '';
		}
	}

	let showModal = false;
	const modalComponentKeys = ['CancelModal1', 'CancelModal2', 'CancelModal3'] as const;
	type ModalComponentKey = (typeof modalComponentKeys)[number];

	const modalComponents: Record<
		ModalComponentKey,
		typeof CancelModal1 | typeof CancelModal2 | typeof CancelModal3
	> = {
		CancelModal1,
		CancelModal2,
		CancelModal3
	};

	type TierKey = '1' | '2' | '3';

	const tiers: Record<
		TierKey,
		{
			label: string;
			img: string;
			shadow: string;
			name: string;
			modalComponent?: ModalComponentKey;
		}
	> = {
		'1': {
			label: '1',
			img: '/Vector (1).svg',
			shadow: '',
			name: 'PUBLIC+',
			modalComponent: 'CancelModal1'
		},
		'2': {
			label: '2',
			img: '/ortire.svg',
			shadow: 'drop-shadow-[0_0_20px_rgba(255,129,38,0.7)]',
			name: 'MIDNIGHT',
			modalComponent: 'CancelModal2'
		},
		'3': {
			label: '3',
			img: '/3itir.svg',
			shadow: 'drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]',
			name: 'UNDERGROUND',
			modalComponent: 'CancelModal3'
		}
	};

	type Tier = {
		label: string;
		img: string;
		shadow: string;
		name: string;
		modalComponent?: ModalComponentKey; // Optional property for modal component
	};
	let currentTier: Tier | undefined;

	$: {
		const key = (tier || urlTier) as TierKey;
		currentTier = key in tiers ? tiers[key] : undefined;
	}
</script>

{#if currentTier}
	<div class="flex justify-center px-1 sm:px-6 md:px-8 lg:px-9 font-inter">
		<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
			<div class="py-3">
				<span class="text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
			</div>

			<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
				<span>TIER {currentTier.label}</span>
			</div>

			<div class="flex flex-wrap items-center gap-3 py-3">
				<img class={`h-12 w-12 ${currentTier.shadow}`} src={currentTier.img} alt="Tier Badge" />
				<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">
					{currentTier.name}
				</p>
			</div>

			<div
				class="flex flex-col items-start justify-between gap-4 py-3 text-[17px] sm:flex-row sm:items-center"
			>
				<span class="whitespace-nowrap text-[gray] leading-2 font-normal">
					New subscription renewal:
					<span class="font-medium font-inter-tight text-[#EEEDEE]">28.03.2024</span>
				</span>

				<div class="flex gap-[16px] font-inter text-[17px] font-medium leading-2 justify-end">
					<button on:click={() => (showModal = true)} class="text-[#B130FF]">Upgrade</button>
					<button class="font-normal text-[gray]">Cancel</button>
				</div>
			</div>
		</div>

		{#if showModal}
			<svelte:component
				this={currentTier.modalComponent ? modalComponents[currentTier.modalComponent] : null}
				isOpen={showModal}
				close={() => (showModal = false)}
                label={currentTier.label}
			/>
		{/if}
	</div>
{/if}
