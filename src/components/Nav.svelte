<script>
  import { page } from '$app/stores';
  import { theme } from '../store/store';

  const changeMode = () => {
    if ($theme === 'dark') {
      checkbox.checked = false
      theme.set('light') 
    } else {
      checkbox.checked = true
      theme.set('dark') 
    }
  }
  let checkbox;
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
        <label class="relative">
          <input class="opacity-0 w-0 h-0" type="checkbox" bind:this={checkbox} on:click="{() => changeMode()}">
          <span class="absolute inset-0 w-15 h-8 rounded-xl bg-surface-900">
            <span class="rounded-full mx-px mt-2px w-7 h-7 absolute bg-surface-50 transform translate-x-0 {$theme === 'light' ? 'translate-x-7' : ''} transition duration-300">
              {#if $theme === 'light'}
                <svg class="absolute p-1 fill-current text-secondary-400" width="28" height="28" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M30 0L33.7 9.4C32.5 9.1 31.2 9 30 9C28.8 9 27.5 9.2 26.3 9.4L30 0ZM41.5 2.29999L34.5 9.49999C37 9.99999 39.3001 11 41.4001 12.4L41.5 2.29999ZM18.5 57.7L25.5 50.5C23 50 20.7001 49 18.6 47.6L18.5 57.7ZM12.4 41.4L2.30005 41.5L9.50005 34.5C10 37 11 39.3 12.4 41.4ZM57.7001 18.5L47.6 18.6C48.9 20.7 49.9001 23 50.5 25.5L57.7001 18.5ZM9.50005 25.5L2.30005 18.5L12.4 18.6C11 20.7 10 23 9.50005 25.5ZM57.7001 41.5L50.5 34.5C50 37 49 39.3 47.6 41.4L57.7001 41.5ZM18.6 12.4L18.5 2.29999L25.5 9.49999C23 10.1 20.7001 11.1 18.6 12.4ZM41.5 57.7L41.4001 47.6C39.3001 49 37 50 34.5 50.5L41.5 57.7ZM8.8 51.3L12.8 42C14.2 44 16 45.8 18.1 47.3L8.8 51.3ZM47.2 18L51.2 8.7L42 12.7C44 14.2 45.8 16 47.2 18ZM0 30L9.4 26.3C9.1 27.5 9 28.7 9 30C9 31.3 9.1 32.5 9.4 33.7L0 30ZM50.6 33.7L60 30L50.6 26.3C50.8 27.5 51 28.8 51 30C51 31.3 50.9 32.5 50.6 33.7ZM8.7 8.8L18 12.8C16 14.2 14.2 16 12.7 18.1L8.7 8.8ZM42 47.2L51.3 51.2L47.3 41.9C45.8 44 44 45.8 42 47.2ZM26.3 50.6L30 60L33.7 50.6C32.5 50.9 31.3 51 30 51C28.7 51 27.5 50.9 26.3 50.6ZM49 30C49 40.4934 40.4934 49 30 49C19.5066 49 11 40.4934 11 30C11 19.5066 19.5066 11 30 11C40.4934 11 49 19.5066 49 30Z"/>
                </svg>                
              {:else}
                 <svg class="absolute p-1 fill-current text-secondary-400" width="28" height="28" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M41.1 0C44.3 4.8 46.2 10.6 46.2 16.8C46.3 33.5 32.6 47 15.7 47C10 47 4.6 45.4 0 42.7C5.2 53 15.9 60 28.3 60C45.8 60 60 46 60 28.7C60 15.9 52.2 4.9 41.1 0Z"/>
                 </svg>
              {/if}
                
            </span>
          </span>
        </label>
      </li>
    </div>
  </ul>
</nav>
