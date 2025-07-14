<script lang="ts">
  import SubscriptionTier from '$lib/+SubscriptionTier.svelte';
  import { page } from '$app/stores';

  type Tier = "1" | "2" | "3";
  let urlTier: Tier = "2";
  $: {
    const t = $page.params.tier;
    urlTier = (t === "1" || t === "2" || t === "3") ? t : "1";
  }
</script>

<SubscriptionTier tier={urlTier} />