<script>
  import Nav from '../components/Nav.svelte';
  import FooterComponent from '../components/Footer.svelte';

  export let segment;
</script>

<style></style>

<main class="flex flex-col h-screen overflow-y-scroll bg-dark-600">
  <Nav {segment}/>
  
  <section class="flex-grow">
    <slot></slot>
  </section>
  <FooterComponent/>
</main>