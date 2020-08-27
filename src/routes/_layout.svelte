<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style></style>

<main class="flex flex-col h-screen">
	<Nav {segment}/>
	
	<section class="flex-grow">
		<slot></slot>
	</section>
	
	<Footer {segment}/>
</main>