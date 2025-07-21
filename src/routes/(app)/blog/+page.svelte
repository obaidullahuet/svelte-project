<script lang="ts">
	import Tiercard from '$lib/+Card.svelte';
	import HeroSection from '../../../Components/Blog/+Hero-Section.svelte';
	import Announcements from '../../../Components/Blog/+Announcements.svelte';
	import PublicUpdates from '../../../Components/Blog/+Public-Updates.svelte';
	import VipUpdates from '../../../Components/Blog/+Vip-Updates.svelte';
	import UnderTheHood from '../../../Components/Blog/+Under-The-Hood.svelte';
	import Pricing from '../../../Components/Blog/+Pricing.svelte';
</script>

<div class=" flex flex-col gap-16 font-inter">
	<HeroSection />
	<Announcements />
	<PublicUpdates />
	<VipUpdates />
	<UnderTheHood />
	<Pricing />
</div>


