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

<style>
  .image-card {
    max-height: 200px;
    object-fit: cover;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="w-full flex justify-center mb-10">
  <section class="flex flex-col mt-10 w-10/12">
    <h1 class="font-montserrat font-bold text-4xl text-primary-50 border-primary-500 border-b-2 pb-2">Blogs recientes</h1>

    <ul class="grid xs:grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      {#each posts as post}
        <li class="flex flex-col shadow-md bg-primary-50 col-span-1 w-full rounded">
          <div class="">
            <img class="w-full h-30 image-card" src="{post.featured_image}" alt="">
          </div>
          <div class="flex flex-col flex-grow">
            <div class="px-8 py-5 flex-grow">
              <p class="font-rubik">{post.description}</p>
            </div>
            <div class="flex justify-end py-4 bg-secondary-500 px-8">
              <a rel='prefetch' href='blog/{post.slug}' class="flex items-baseline text-primary-50 text-xl">Leer mas 
                <div class="h-3 w-3 text-primary-50 ml-3">
                  <FaArrowRight />
                </div>
              </a>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </section>
</section>