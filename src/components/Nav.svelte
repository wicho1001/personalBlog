<script>
	export let segment;
</script>

<style>
</style>

<nav class="flex justify-center h-25 bg-dark-800">
	<ul class="flex items-center justify-between w-10/12 py-3">
		<a href="." class="h-25">
			<img class="h-full" src="wicho.png" alt="wicho" srcset="wicho.png">
		</a>
		<div class="flex">
			<li class="px-6 py-1 {segment === undefined ? 'bg-primary-500 text-white rounded' : 'text-primary-50'}"><a href="." sapper:noscroll>Inicio</a></li>
			<li class="px-6 py-1 {segment === 'blog' ? 'bg-primary-500 text-white rounded' : 'text-primary-50'}"><a rel=prefetch href="blog" sapper:noscroll>Blog</a></li>
		</div>
	</ul>
</nav>
