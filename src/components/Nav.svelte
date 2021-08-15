<script>
  import { page } from '$app/stores';
  import { theme } from '../store/store';

  const changeMode = () => {
    if ($theme === 'dark') {
      theme.set('light') 
    } else {
      theme.set('dark') 
    }
  }
  theme.subscribe((e) => {
    console.log(e)
  })
</script>


<nav class="flex justify-center h-25 xs:w-full md:w-9/12 mx-auto">
  <ul class="flex items-center justify-between w-full py-3">
    <a href="/" class="h-25">
      <!-- <img class="h-full" src="wicho.png" alt="wicho"> -->
    </a>
    <div class="flex">
      <li class="px-6 py-1 {$page.path === '/' ? 'bg-primary-500 text-white rounded' : 'text-surface-200'}">
        <a href="/">Inicio</a>
      </li>
      <li class="px-6 py-1 {$page.path.includes('blog') ? 'bg-primary-500 text-white rounded' : 'text-surface-200'}">
        <a sveltekit:prefetch rel=prefetch href="/blog">Blog</a>
      </li>
      <li class="px-6 py-1">
        <button on:click="{changeMode}">toogle theme</button>
      </li>
    </div>
  </ul>
</nav>
