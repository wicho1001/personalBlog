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
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="language" content="Spanish"/>
  <meta property="og:type" content="website"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="W1CH0"/>
</svelte:head>

<main class="flex flex-col h-screen overflow-y-scroll bg-surface-50">
  <Nav></Nav>
  <section class="flex-grow">
    <slot></slot>
  </section>
  <FooterComponent></FooterComponent>
</main>