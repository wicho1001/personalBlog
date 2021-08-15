<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = async ({fetch, page: {params}}) => {
    const res = await fetch(`/blog/${params.slug}.json`);
    const data = await res.json();
    if (data) {
      return { 
        props: {
          post: data
          } 
        }
    }
    return { props: {} };
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


<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="flex flex-col items-center font-rubik text-surface-200 w-full mx-auto mt-10">
  <h1 class="font-montserrat font-bold xs:text-4xl md:text-6xl text-surface-200 xs:w-full capitalize">{post.title}</h1>
  <div class='xs:w-full'>
    <article class="mx-auto text-surface-200 prose lg:prose-xl text-justify">
      {@html post.html}
    </article>
    <div class="my-6" id="disqus_thread"></div>      
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> 
    </div>
</div>
