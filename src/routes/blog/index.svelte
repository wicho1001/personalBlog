<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import { base } from '$app/paths';

  export const load: Load = async ({fetch}) => {
    const res = await fetch(`${base}/blog/index.json`)
    let data = await res.json();

    if (data) {
      let page = 0;
      data = data.reduce((acc, current, index) => {
        if ((index + 1)%10 === 0) {
          page = page + 1
        }
        if (acc.posts[page] !== undefined) {
          acc.posts[page] = [...acc.posts[page], {...current, page}]
        } else {
          acc.posts[page] = [{...current, page}]
        }
        return {posts: acc.posts, pages: page}
      }, {posts: [], pages: 0});

      const pages = Array.from(new Array(data.pages + 1).keys())
      return { 
        props: {
            posts: data.posts,
            pages 
          } 
        }
    }
    return { props: {
      posts: [[]]
    } };
  };
</script>

<script lang="ts">
  export let posts: any[];
  export let pages: number[];
  let page: number = 0;


</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="w-full flex justify-center mb-10 relative">
  <div class="xs:hidden md:block">
    <svg class="fill-current text-secondary-400 absolute top-0 left-0 ml-15 mt-25" width="92" height="102" viewBox="0 0 92 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M70.8337 2.77472e-05L91.7938 84.0664L10.4799 59.6941L70.8337 2.77472e-05Z"/>
    </svg>
    <svg class="fill-current text-primary-600 absolute rotate-90 right-0 top-1/2 mr-20" width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.7676 44.2197L47.4355 6.92471L0.806547 0.75354L18.7676 44.2197ZM20.4408 31.5753L10.9157 8.52319L35.6452 11.7933L20.4408 31.5753Z"/>
    </svg>
    <svg class="fill-current text-primary-600 absolute left-0 bottom-0 -ml-10" width="180" height="228" viewBox="0 0 180 228" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M-48 113.987V114.707L66.7327 0H66.0129C64.3419 0 62.6966 0.051415 61.077 0.10283L-47.8715 109.051C-47.9486 110.697 -48 112.342 -48 113.987ZM43.3643 2.23645L-45.738 91.3388C-45.2496 88.8708 -44.6584 86.4543 -44.0157 84.0378L36.0633 3.95886C38.4798 3.31617 40.8964 2.72489 43.3643 2.23645ZM9.53358 14.936L-33.0381 57.5077C-28.7192 49.9496 -23.552 42.9315 -17.6907 36.5817L-11.3924 30.2834C-5.04263 24.4221 1.97556 19.2548 9.53358 14.936ZM86.0904 1.77372L-46.2263 134.09C-46.509 132.497 -46.7661 130.877 -46.9718 129.283L81.2831 1.0282C82.877 1.23386 84.4966 1.49093 86.0904 1.77372ZM-41.9071 150.877L102.878 6.09259C101.49 5.60415 100.076 5.16712 98.6616 4.7558L-43.2439 146.661L-43.2428 146.665L-43.2427 146.665C-42.8061 148.078 -42.3695 149.49 -41.9071 150.877ZM117.736 12.3652L-35.6093 165.711C-36.252 164.477 -36.8433 163.217 -37.4346 161.957L113.983 10.54C115.242 11.1313 116.502 11.7482 117.736 12.3652ZM-27.6909 178.924L130.95 20.2832C129.845 19.5119 128.739 18.7664 127.608 18.0466L-29.9275 175.582C-29.2077 176.713 -28.4622 177.819 -27.6909 178.924ZM142.699 29.6664L-18.3333 190.698C-19.2074 189.722 -20.0815 188.719 -20.9298 187.742L139.742 27.0699C140.745 27.918 141.721 28.7918 142.698 29.6656L142.699 29.6664ZM-7.56194 201.059L153.084 40.4122C152.236 39.4096 151.362 38.407 150.488 37.4301L-10.5439 198.462L-10.5408 198.465C-9.56498 199.338 -8.58914 200.211 -7.56194 201.059ZM162.056 52.5461L4.57169 210.03C3.44136 209.311 2.33674 208.566 1.23211 207.821L1.23132 207.821L1.22974 207.82L159.82 49.2041C160.591 50.3095 161.336 51.4149 162.056 52.5461ZM18.2228 217.511L169.512 66.2225L169.511 66.2207L169.51 66.2201C168.92 64.9612 168.329 63.7024 167.686 62.4692L14.4438 215.712C15.7035 216.329 16.9631 216.92 18.2228 217.511ZM175.322 81.5442L33.5701 223.296C32.1562 222.884 30.7423 222.447 29.3541 221.959L173.985 77.3282C174.447 78.7164 174.91 80.1303 175.322 81.5442ZM50.9993 226.997L179.023 98.9739C178.817 97.3543 178.56 95.7348 178.277 94.1409L46.1664 226.252C47.7602 226.535 49.3798 226.792 50.9993 226.997ZM71.2571 227.872C69.5347 227.949 67.7867 228 66.0129 228C65.9927 228 65.9725 228 65.9524 227.999C65.9202 227.998 65.8883 227.996 65.8567 227.994C65.7568 227.988 65.6607 227.983 65.5758 228L180 113.576V114.013C180 115.761 179.949 117.509 179.871 119.257L71.2571 227.872ZM96.3479 223.887L175.913 144.322C176.581 141.906 177.172 139.463 177.687 136.995L89.0212 225.661C91.4892 225.146 93.9314 224.555 96.3479 223.887ZM164.627 171.161L123.161 212.627C140.334 202.652 154.653 188.333 164.627 171.161Z"/>
    </svg>
  </div>
  <section class="flex flex-col mt-10 xs:w-full md:w-8/12 z-1 px-4">
    <div class="max-w-max">
      <h1 class="font-montserrat font-bold text-4xl text-surface-900 pb-2">Blogs recientes</h1>
      <hr class="border-b-4 rounded-2 border-primary-600">
    </div>
    <ul class="grid xs:grid-cols-1 xl:grid-cols-3 gap-6 mt-15">
      {#each posts[page] as post}
      
        <li class="flex flex-col bg-dark-800 col-span-1 w-full">
          <a href="blog/{post.slug}" class="flex flex-col">
            <img class="w-full h-80 object-cover rounded-t-xl bg-surface-50" src="{post.featured_image}" alt="">
            <div class="flex flex-col flex-grow bg-surface-100 rounded-b-xl px-8 pt-4 pb-6">
              <p class="font-montserrat font-bold text-surface-900 text-2xl capitalize">{post.title}</p>
              <p class="font-rubik text-surface-600 mt-2 text-xl">{post.description}</p>
              <p class="font-rubik text-sm text-surface-400 self-end mt-6">Time to read: {post.minutes} min</p>
            </div>
          </a>
        </li>
        
      {/each}
    </ul>
    <ul class="flex self-end mt-10">
      {#each pages as item}
        <li class="bg-surface-500 rounded-2 px-6 py-3 m-2 font-bold cursor-pointer {page === item ? 'bg-surface-900 text-surface-50' : ''}" on:click="{() => page = item}">{item}</li>
      {/each}
    </ul>
  </section>
</section>