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
</script>


<nav class="flex justify-center h-25 xs:w-full md:w-8/12 mx-auto">
  <ul class="flex items-center justify-between w-full py-3">
    <a href="/" class="h-25">
      <!-- <img class="h-full" src="wicho.png" alt="wicho"> -->
    </a>
    <div class="flex">
      <li class="px-6 py-1 text-surface-900 rounded transition duration-700 ease-in-out {$page.path === '/' ? 'rounded border-b-2 border-primary-500' : ''}">
        <a href="/">Inicio</a>
      </li>
      <li class="px-6 py-1 text-surface-900 rounded transition duration-700 ease-in-out {$page.path.includes('blog') ? 'rounded border-b-2 border-primary-500' : ''}">
        <a sveltekit:prefetch rel=prefetch href="/blog">Blog</a>
      </li>
      <li class="px-6 py-1">
        <button on:click="{changeMode}">toogle theme</button>
      </li>
    </div>
  </ul>
</nav>
