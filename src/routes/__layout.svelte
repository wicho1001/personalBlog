<script lang="ts">
  import "../app.postcss";
  import Nav from '../components/Nav.svelte';
  import FooterComponent from '../components/Footer.svelte';
  import { theme } from "../store/store";
</script>

<svelte:head>
  {#if $theme === 'dark'}
    <link rel="stylesheet" href="/variables.darkmode.css">
    {:else}
    <link rel="stylesheet" href="/variables.lightmode.css">
  {/if}
</svelte:head>

<main class="flex flex-col h-screen overflow-y-scroll px-4 bg-neutral">
  <Nav></Nav>
  <section class="flex-grow xs:w-full md:w-9/12 mx-auto">
    <slot></slot>
  </section>
  <FooterComponent></FooterComponent>
</main>