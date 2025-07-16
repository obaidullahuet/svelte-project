<script>
    import '../app.css';
	import Header  from '../lib/+Header.svelte';
	import Contact from '$lib/+Contact.svelte';
</script>

<div class=" "> 
	
	<Header/>

	<main class="">
		<slot />
	</main>
	<Contact />


</div>
