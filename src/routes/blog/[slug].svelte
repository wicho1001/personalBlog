<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  export let post;

  onMount(() => {
    const d = document, s = d.createElement('script');
    s.src = 'https://w1ch0-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', `${new Date()}`);
    (d.head || d.body).appendChild(s);
  });
</script>

<style>
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="flex flex-col items-center font-rubik text-primary-50 xs:w-11/12 md:w-10/12 mx-auto mt-10">
  <h1 class="font-montserrat font-bold xs:text-4xl md:text-6xl text-primary-50 xs:w-full md:w-8/12 capitalize">{post.title}</h1>
  <div class='xs:w-full md:w-7/12'>
    {@html post.html}
    <div class="my-6" id="disqus_thread"></div>      
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> 
    </div>
</div>
