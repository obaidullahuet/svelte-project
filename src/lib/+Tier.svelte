<script>
	export let tier = '';
	export let title = '';
	export let image = '';
	export let renewal = '';
	export let onUpgrade = () => {};
</script>

<div class="flex w-full flex-col rounded-2xl border border-[#FFFFFF]/5 bg-[#0D0B0F] p-4">
	<!-- Heading -->
	<div class="py-3">
		<span class="text-[gray] text-[14px] font-medium leading-1">Your Subscription</span>
	</div>

	<!-- Tier -->
	<div class="py-3 text-[16px] font-roboto font-bold italic text-[#EEEDEE] leading-1">
		<span>{tier}</span>
	</div>

	<!-- Badge -->
	<div class="flex flex-wrap items-center gap-3 py-3">
		<img
			class="h-12 w-12 drop-shadow-[0_0_20px_rgba(221,3,85,0.7)]"
			src={image}
			alt="Tier Badge"
		/>
		<p class="md:text-[37px] leading-10 self-stretch font-roboto text-[#EEEDEE]">
			{title}
		</p>
	</div>

	<!-- Renewal & Actions -->
	<div class="flex flex-col items-start justify-between gap-4 py-3 text-[17px] sm:flex-row sm:items-center">
		<span class="whitespace-nowrap text-[gray] leading-2 font-normal">
			New subscription renewal:
			<span class="font-medium font-inter-tight text-[#EEEDEE]">{renewal}</span>
		</span>

		<div class="flex gap-[16px] font-inter text-[17px] font-medium leading-2 justify-end">
			<button on:click={onUpgrade} class="text-[#B130FF]">Upgrade</button>
			<button class="font-normal text-[gray]">Cancel</button>
		</div>
	</div>
</div>
