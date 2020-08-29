<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="w-full flex justify-center">
	<section class="flex flex-col mt-10 w-10/12">
		<h1 class="font-montserrat font-bold text-4xl">Recent posts</h1>
		
		<ul>
			{#each posts as post}
				<li class="px-8 py-5 shadow-md">
					<a rel='prefetch' href='blog/{post.slug}' class="flex justify-between">
						{post.title}
					</a>
				</li>
			{/each}
		</ul>
	</section>
</section>