<script context="module">
  export function preload({ params, query }) {

  this.fetch(`blog-home.json`).then(r => r.json()).then(blog => {
    return { blog };
  })
  return this.fetch(`/blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  };
</script>

<script>
  import type { IBlog } from './interfaces/IBlog';
  export let posts: IBlog[];
  import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="w-full flex justify-center mb-10">
  <section class="flex flex-col mt-10 w-10/12">
    <h1 class="font-montserrat font-bold text-4xl text-primary-50 border-primary-500 border-b-2 pb-2">Blogs recientes</h1>

    <ul class="grid xs:grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      {#each posts as post}
        <li class="flex flex-col shadow-md bg-dark-800 col-span-1 w-full rounded-2">
          <a href="blog/{post.slug}">
            <div class="">
              <img class="w-full h-60 object-cover rounded-2" src="{post.featured_image}" alt="">
            </div>
            <div class="flex flex-col flex-grow">
              <div class="px-8 py-5 flex flex-col flex-grow text-primary-50">
                <p class="font-rubik text-sm text-dark-100">Tiempo de lectura: {post.minutes} min</p>
                <p class="font-montserrat font-bold text-2xl capitalize">{post.title}</p>
                <p class="font-rubik">{post.description}</p>
              </div>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</section>