<script lang="ts">
	type TierKey = "1" | "2" | "3";
	type TierInfo = {
		tier: string;
		title: string;
		image: string;
		renewal: string;
	};

	export let tier: TierKey = "1"; // default to tier 1
	export let onUpgrade: (info: TierInfo) => void = () => {};

	const tierData: Record<TierKey, TierInfo> = {
		"1": {
			tier: "TIER 1",
			title: "SURFACE",
			image: "/1tier.svg",
			renewal: "10.01.2024"
		},
		"2": {
			tier: "TIER 2",
			title: "MIDWAY",
			image: "/2tier.svg",
			renewal: "20.02.2024"
		},
		"3": {
			tier: "TIER 3",
			title: "UNDERGROUND",
			image: "/3itir.svg",
			renewal: "28.03.2024"
		}
	};

	$: current = tierData[tier];
</script>

{#if current}
<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
	<!-- Heading -->
	<div class="py-3">
		<span class="text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
	</div>

	<!-- Tier -->
	<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
		<span>{current.tier}</span>
	</div>

	<!-- Badge -->
	<div class="flex flex-wrap items-center gap-3 py-3">
		<img
			class="h-12 w-12 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]"
			src={current.image}
			alt="Tier Badge"
		/>
		<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">
			{current.title}
		</p>
	</div>

	<!-- Renewal & Actions -->
	<div class="flex flex-col items-start justify-between gap-4 py-3 text-[17px] sm:flex-row sm:items-center">
		<span class="whitespace-nowrap text-[gray] leading-2 font-normal">
			New subscription renewal:
			<span class="font-medium font-inter-tight text-[#EEEDEE]">
				{current.renewal}
			</span>
		</span>

		<div class="flex gap-[16px] font-inter text-[17px] font-medium leading-2 justify-end">
			<button on:click={() => onUpgrade(current)} class="text-[#B130FF]">Upgrade</button>
			<button class="font-normal text-[gray]">Cancel</button>
		</div>
	</div>
</div>
{/if}
