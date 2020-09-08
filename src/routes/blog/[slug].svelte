<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
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
  export let post;
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
  </div>
</div>
