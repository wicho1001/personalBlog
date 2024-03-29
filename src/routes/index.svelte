<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  import { base } from '$app/paths';


  export const load: Load = async ({fetch}) => {
    const res = await fetch(`${base}/index.json`)
    const data = await res.json();
    if (data) {
      return {
        props: {
          article: data
        }
      };
    }
    return { props: {} };
  }
  
</script>

<script lang="ts">
  import { theme } from "../store/store";
  export let article;
</script>

<svelte:head>
  <title>{article.seo?.title}</title>
  <meta name="keywords" content={article.seo?.keywords.join(',')}/>
  <meta name="description" content={article.seo?.description} />
  <meta property="og:title" content={article.seo?.title}/>
  <meta property="og:image" content={article.seo?.image}/>
  <meta property="og:image:secure_url" content={article.seo?.image}/>
  <meta property="og:description" content={article.seo?.description}/>
</svelte:head>

{#if article.bio}
  <section class="flex flex-col items-center w-full overflow-x-hidden">
    <section class="w-full relative px-4">
      <div class="flex justify-between items-center mt-20 mx-auto xs:w-full md:w-8/12">
        <div class="flex flex-col xs:w-full md:w-2/5 pr-5 xs:mt-4 md:mt-0">
          <div class="relative flex flex-col max-w-max">
            <div class="flex items-center">
              <h1 class="text-surface-900 font-montserrat font-bold text-5xl tracking-wider break-words">Hi, I'm Wicho</h1>
              <svg class="xs:hidden md:block fill-current text-secondary-400 ml-10" width="59" height="18" viewBox="0 0 59 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M54.84 8.83997L48.01 15.68L50.02 17.69L58.87 8.83997L50.02 0L48.01 2.01001L54.84 8.83997ZM30.84 8.83997L24.01 15.68L26.02 17.69L34.87 8.83997L26.02 0L24.01 2.01001L30.84 8.83997ZM18.9099 8.83997L12.08 15.68L14.0899 17.69L22.9399 8.83997L14.0899 0L12.08 2.01001L18.9099 8.83997ZM-3.31092e-05 15.68L6.83996 8.83997L-3.31092e-05 2.01001L2.01999 0L10.86 8.83997L2.01999 17.69L-3.31092e-05 15.68ZM36.08 15.68L42.9099 8.83997L36.08 2.01001L38.0899 0L46.9399 8.83997L38.0899 17.69L36.08 15.68Z" />
              </svg>
            </div>
            <hr class="border-b-4 rounded-2 border-secondary-400">
          </div>
          <p class="text-surface-900 font-rubik text-xl tracking-wider break-words mt-2">
            I'm a Frontend developer in Mexico,
            I'm currently working in <span><a class="text-primary-900 underline" target="__blank" href="https://www.bedu.org">BEDU</a></span>,
            my main projects are built in angular. I'm passionate about open source and new types of technologies</p>
        </div>
        <div class="relative w-auto">
          {#if $theme === 'dark'}
            <img class="h-125 object-fill xs:hidden md:block" src="assets/wicho_profile_darktheme.svg" alt="">
            {:else}
            <img class="h-125 xs:hidden md:block" src="assets/wicho_profile_lighttheme.svg" alt="">
          {/if}
          <div class="xs:hidden md:block" >
            <svg class="fill-current text-primary-600 absolute top-0 left-0 mt-20" width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7676 44.2197L47.4355 6.92471L0.806547 0.75354L18.7676 44.2197ZM20.4408 31.5753L10.9157 8.52319L35.6452 11.7933L20.4408 31.5753Z"/>
            </svg>
            <svg class="fill-current text-primary-600 absolute top-0 right-0 rotate-45 mt-50 -mr-12" width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7676 44.2197L47.4355 6.92471L0.806547 0.75354L18.7676 44.2197ZM20.4408 31.5753L10.9157 8.52319L35.6452 11.7933L20.4408 31.5753Z"/>
            </svg>
            <svg class="fill-current text-secondary-400 absolute top-0 right-0 mr-25 -mt-15" width="92" height="102" viewBox="0 0 92 102" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M70.8337 2.77472e-05L91.7938 84.0664L10.4799 59.6941L70.8337 2.77472e-05Z"/>
            </svg>
            <svg class="fill-current text-secondary-400 absolute top-0 right-0 mr-5 mt-22" width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7565 0.359091L0.10251 4.64516L13.1472 18.6497L18.7565 0.359091Z"/>
            </svg>
            <svg class="fill-current text-secondary-400 absolute bottom-0 right-0 mr-5 -mb-8"  width="94" height="90" viewBox="0 0 94 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64.8894 89.8542L-0.000113973 32.4447L61.1494 28.7047L64.8894 89.8542Z"/>
            </svg>
          </div>
            
            
        </div>
      </div>
    </section>
    
    <section class="w-full flex relative justify-center mt-20">

      <div class="xs:hidden md:block">
        <svg class="fill-current text-primary-600 absolute left-0 bottom-0 mb-80 -ml-10" width="180" height="228" viewBox="0 0 180 228" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-48 113.987V114.707L66.7327 0H66.0129C64.3419 0 62.6966 0.051415 61.077 0.10283L-47.8715 109.051C-47.9486 110.697 -48 112.342 -48 113.987ZM43.3643 2.23645L-45.738 91.3388C-45.2496 88.8708 -44.6584 86.4543 -44.0157 84.0378L36.0633 3.95886C38.4798 3.31617 40.8964 2.72489 43.3643 2.23645ZM9.53358 14.936L-33.0381 57.5077C-28.7192 49.9496 -23.552 42.9315 -17.6907 36.5817L-11.3924 30.2834C-5.04263 24.4221 1.97556 19.2548 9.53358 14.936ZM86.0904 1.77372L-46.2263 134.09C-46.509 132.497 -46.7661 130.877 -46.9718 129.283L81.2831 1.0282C82.877 1.23386 84.4966 1.49093 86.0904 1.77372ZM-41.9071 150.877L102.878 6.09259C101.49 5.60415 100.076 5.16712 98.6616 4.7558L-43.2439 146.661L-43.2428 146.665L-43.2427 146.665C-42.8061 148.078 -42.3695 149.49 -41.9071 150.877ZM117.736 12.3652L-35.6093 165.711C-36.252 164.477 -36.8433 163.217 -37.4346 161.957L113.983 10.54C115.242 11.1313 116.502 11.7482 117.736 12.3652ZM-27.6909 178.924L130.95 20.2832C129.845 19.5119 128.739 18.7664 127.608 18.0466L-29.9275 175.582C-29.2077 176.713 -28.4622 177.819 -27.6909 178.924ZM142.699 29.6664L-18.3333 190.698C-19.2074 189.722 -20.0815 188.719 -20.9298 187.742L139.742 27.0699C140.745 27.918 141.721 28.7918 142.698 29.6656L142.699 29.6664ZM-7.56194 201.059L153.084 40.4122C152.236 39.4096 151.362 38.407 150.488 37.4301L-10.5439 198.462L-10.5408 198.465C-9.56498 199.338 -8.58914 200.211 -7.56194 201.059ZM162.056 52.5461L4.57169 210.03C3.44136 209.311 2.33674 208.566 1.23211 207.821L1.23132 207.821L1.22974 207.82L159.82 49.2041C160.591 50.3095 161.336 51.4149 162.056 52.5461ZM18.2228 217.511L169.512 66.2225L169.511 66.2207L169.51 66.2201C168.92 64.9612 168.329 63.7024 167.686 62.4692L14.4438 215.712C15.7035 216.329 16.9631 216.92 18.2228 217.511ZM175.322 81.5442L33.5701 223.296C32.1562 222.884 30.7423 222.447 29.3541 221.959L173.985 77.3282C174.447 78.7164 174.91 80.1303 175.322 81.5442ZM50.9993 226.997L179.023 98.9739C178.817 97.3543 178.56 95.7348 178.277 94.1409L46.1664 226.252C47.7602 226.535 49.3798 226.792 50.9993 226.997ZM71.2571 227.872C69.5347 227.949 67.7867 228 66.0129 228C65.9927 228 65.9725 228 65.9524 227.999C65.9202 227.998 65.8883 227.996 65.8567 227.994C65.7568 227.988 65.6607 227.983 65.5758 228L180 113.576V114.013C180 115.761 179.949 117.509 179.871 119.257L71.2571 227.872ZM96.3479 223.887L175.913 144.322C176.581 141.906 177.172 139.463 177.687 136.995L89.0212 225.661C91.4892 225.146 93.9314 224.555 96.3479 223.887ZM164.627 171.161L123.161 212.627C140.334 202.652 154.653 188.333 164.627 171.161Z"/>
        </svg>
        <svg class="fill-current text-primary-600 absolute rotate-90 bottom-20 right-0 mr-20" width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7676 44.2197L47.4355 6.92471L0.806547 0.75354L18.7676 44.2197ZM20.4408 31.5753L10.9157 8.52319L35.6452 11.7933L20.4408 31.5753Z"/>
        </svg>
        <svg class="fill-current text-secondary-400 absolute top-0 right-0 mr-20 mt-60" width="92" height="102" viewBox="0 0 92 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70.8337 2.77472e-05L91.7938 84.0664L10.4799 59.6941L70.8337 2.77472e-05Z"/>
        </svg>
      </div>

      <div class="mx-auto xs:w-full md:w-8/12 px-4">
        <div class="flex flex-col">
          <div class="border-b-4 border-primary-600 max-w-max py-1">
            <h1 class="text-surface-900 font-montserrat font-bold text-4xl max-w-max">How can I help you?</h1>
          </div>
          <div class="grid xs:grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
            {#each article.services as service, index}
              <div class="flex flex-col px-6 py-4 rounded-xl col-span-1">
                {#if index === 0}
                   <div class="bg-primary-900 rounded-2 p-3 max-w-max">
                     <svg class="fill-current text-surface-50 max-w-max" width="48" height="48" viewBox="0 0 43 36" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 0H39.5C40.2954 0.000794411 41.058 0.31712 41.6204 0.879557C42.1829 1.44199 42.4992 2.20459 42.5 3V33C42.4992 33.7954 42.1829 34.558 41.6204 35.1204C41.058 35.6829 40.2954 35.9992 39.5 36H3.5C2.70459 35.9992 1.94199 35.6829 1.37956 35.1204C0.81712 34.558 0.500794 33.7954 0.5 33V3C0.500794 2.20459 0.81712 1.44199 1.37956 0.879557C1.94199 0.31712 2.70459 0.000794411 3.5 0ZM3.5 9H39.5V3H3.5V9ZM12.5 12H3.5V33H12.5V12ZM15.5 12V33H39.5V12H15.5ZM29 6C29 6.82843 28.3284 7.5 27.5 7.5C26.6716 7.5 26 6.82843 26 6C26 5.17157 26.6716 4.5 27.5 4.5C28.3284 4.5 29 5.17157 29 6ZM33.5 6C33.5 6.82843 32.8284 7.5 32 7.5C31.1716 7.5 30.5 6.82843 30.5 6C30.5 5.17157 31.1716 4.5 32 4.5C32.8284 4.5 33.5 5.17157 33.5 6ZM36.5 7.5C37.3284 7.5 38 6.82843 38 6C38 5.17157 37.3284 4.5 36.5 4.5C35.6716 4.5 35 5.17157 35 6C35 6.82843 35.6716 7.5 36.5 7.5Z"/>
                     </svg>
                   </div>
                {/if}
                {#if index === 1}
                   <div class="bg-primary-900 rounded-2 p-3 max-w-max">
                    <svg class="fill-current text-surface-50 max-w-max" width="48" height="48" viewBox="0 0 43 40" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 0.5H3.5C2.70459 0.500794 1.94199 0.81712 1.37956 1.37956C0.81712 1.94199 0.500794 2.70459 0.5 3.5V33.5C0.500794 34.2954 0.81712 35.058 1.37956 35.6204C1.94199 36.1829 2.70459 36.4992 3.5 36.5H18.5V33.5H3.5V12.5H39.5V17H42.5V3.5C42.4992 2.70459 42.1829 1.94199 41.6204 1.37956C41.058 0.81712 40.2954 0.500794 39.5 0.5ZM39.5 9.5H3.5V3.5H39.5V9.5ZM42.5 27.5H39.3485C39.155 26.561 38.7822 25.6682 38.2505 24.8705L40.4855 22.6355L38.3645 20.5145L36.1295 22.7495C35.3318 22.2178 34.439 21.845 33.5 21.6515V18.5H30.5V21.6515C29.561 21.845 28.6682 22.2178 27.8705 22.7495L25.6355 20.5145L23.5145 22.6355L25.7495 24.8705C25.2178 25.6682 24.845 26.561 24.6515 27.5H21.5V30.5H24.6515C24.845 31.439 25.2178 32.3318 25.7495 33.1295L23.5145 35.3645L25.6355 37.4855L27.8705 35.2505C28.6682 35.7822 29.561 36.155 30.5 36.3485V39.5H33.5V36.3485C34.439 36.155 35.3318 35.7822 36.1295 35.2505L38.3645 37.4855L40.4855 35.3645L38.2505 33.1295C38.7822 32.3318 39.155 31.439 39.3485 30.5H42.5V27.5ZM32 33.5C31.11 33.5 30.24 33.2361 29.4999 32.7416C28.7599 32.2471 28.1831 31.5443 27.8425 30.7221C27.5019 29.8998 27.4128 28.995 27.5865 28.1221C27.7601 27.2492 28.1887 26.4474 28.818 25.818C29.4474 25.1887 30.2492 24.7601 31.1221 24.5865C31.995 24.4128 32.8998 24.5019 33.7221 24.8425C34.5443 25.1831 35.2471 25.7599 35.7416 26.4999C36.2361 27.24 36.5 28.11 36.5 29C36.4988 30.1931 36.0243 31.337 35.1807 32.1807C34.337 33.0243 33.1931 33.4988 32 33.5ZM29 6.5C29 7.32843 28.3284 8 27.5 8C26.6716 8 26 7.32843 26 6.5C26 5.67157 26.6716 5 27.5 5C28.3284 5 29 5.67157 29 6.5ZM32 8C32.8284 8 33.5 7.32843 33.5 6.5C33.5 5.67157 32.8284 5 32 5C31.1716 5 30.5 5.67157 30.5 6.5C30.5 7.32843 31.1716 8 32 8ZM38 6.5C38 7.32843 37.3284 8 36.5 8C35.6716 8 35 7.32843 35 6.5C35 5.67157 35.6716 5 36.5 5C37.3284 5 38 5.67157 38 6.5Z"/>
                    </svg>                      
                   </div>
                {/if}
                {#if index === 2}
                   <div class="bg-primary-900 rounded-2 p-3 max-w-max">
                    <svg class="fill-current text-surface-50 max-w-max" width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.94819 5.38435C6.35185 3.83832 7.23152 2.47369 8.45167 1.50072C9.67182 0.527744 11.1647 0.000422325 12.7004 3.4688e-07H35.3011C36.8375 -0.000493533 38.3313 0.526407 39.5522 1.49945C40.7732 2.47249 41.6535 3.83763 42.0573 5.38435L47.7135 27.0198C49.1015 32.3311 45.2714 37.5652 39.9953 37.5652H20.0046V34.4348H39.9953C40.7642 34.4348 41.5227 34.2498 42.2119 33.8942C42.9012 33.5386 43.5025 33.0219 43.9692 32.3843C44.436 31.7467 44.7555 31.0053 44.9029 30.2179C45.0504 29.4305 45.0218 28.6182 44.8194 27.8442L39.1632 6.20661C38.9324 5.32298 38.4294 4.54311 37.7318 3.98721C37.0343 3.43131 36.1808 3.13025 35.3031 3.13044H12.7024C11.8247 3.13025 10.9712 3.43131 10.2737 3.98721C9.5761 4.54311 9.07312 5.32298 8.84228 6.20661L6.64621 14.6087H4.50014C4.16413 14.6087 3.83412 14.6358 3.51411 14.6859L5.94819 5.38435ZM19.9846 43.8261H36.5051C36.903 43.8261 37.2845 43.6612 37.5658 43.3676C37.8472 43.0741 38.0052 42.676 38.0052 42.2609C38.0052 41.8457 37.8472 41.4476 37.5658 41.1541C37.2845 40.8606 36.903 40.6957 36.5051 40.6957H20.0046V43.3043C20.0046 43.4797 19.9966 43.655 19.9846 43.8261V43.8261ZM9.00228 29.2174C9.79796 29.2174 10.561 28.8876 11.1237 28.3005C11.6863 27.7134 12.0024 26.9172 12.0024 26.087C12.0024 25.2567 11.6863 24.4605 11.1237 23.8734C10.561 23.2863 9.79796 22.9565 9.00228 22.9565C8.20661 22.9565 7.44352 23.2863 6.8809 23.8734C6.31827 24.4605 6.00219 25.2567 6.00219 26.087C6.00219 26.9172 6.31827 27.7134 6.8809 28.3005C7.44352 28.8876 8.20661 29.2174 9.00228 29.2174V29.2174ZM0 21.3913C0 20.1459 0.474121 18.9516 1.31806 18.071C2.162 17.1904 3.30663 16.6957 4.50014 16.6957H13.5024C14.0934 16.6957 14.6786 16.8171 15.2246 17.0531C15.7705 17.2891 16.2666 17.6349 16.6845 18.071C17.1024 18.507 17.4339 19.0247 17.66 19.5944C17.8862 20.1641 18.0026 20.7747 18.0026 21.3913V43.3043C18.0026 43.921 17.8862 44.5316 17.66 45.1013C17.4339 45.671 17.1024 46.1886 16.6845 46.6247C16.2666 47.0607 15.7705 47.4066 15.2246 47.6426C14.6786 47.8785 14.0934 48 13.5024 48H4.50214C3.91101 48.0003 3.32561 47.879 2.7794 47.6432C2.23318 47.4073 1.73686 47.0615 1.31877 46.6254C0.900679 46.1894 0.569022 45.6716 0.342744 45.1018C0.116466 44.5319 -5.83837e-08 43.9212 0 43.3043V21.3913ZM4.50014 19.8261C4.1023 19.8261 3.72076 19.991 3.43945 20.2845C3.15813 20.5781 3.00009 20.9762 3.00009 21.3913V43.3043C3.00009 44.1683 3.67212 44.8696 4.50014 44.8696H13.5024C13.9003 44.8696 14.2818 44.7047 14.5631 44.4111C14.8444 44.1176 15.0025 43.7195 15.0025 43.3043V21.3913C15.0025 20.9762 14.8444 20.5781 14.5631 20.2845C14.2818 19.991 13.9003 19.8261 13.5024 19.8261H4.50214H4.50014Z"/>
                    </svg>                      
                   </div>
                {/if}
                <p class="font-montserrat text-surface-900 font-bold text-2xl mt-2">{service.name}</p>
                <p class="font-rubik text-surface-900 text-xl mt-2">{service.description}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
    
    <section class="w-full flex relative justify-center mt-20">

      <div class="xs:hidden md:block">
        <svg class="fill-current text-secondary-400 absolute left-0 bottom-0 mb-80 -ml-3" width="117" height="165" viewBox="0 0 117 165" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.0244 0L-48 82.0244L34.0244 164.049L116.049 82.0244L34.0244 0ZM34.0244 141.209L-25.1604 82.0244L34.0244 22.8396L93.2093 82.0244L34.0244 141.209Z"/>
        </svg>
        <svg class="absolute top-0 right-0 -mr-2 mt-50" width="176" height="242" viewBox="0 0 176 242" xmlns="http://www.w3.org/2000/svg">
          <path class="fill-current text-primary-600" d="M32.8806 98.6415C51.0249 116.786 80.4648 116.818 98.6416 98.6415C116.786 80.4971 116.818 51.0573 98.6415 32.8805C80.4972 14.7362 51.0573 14.7036 32.8806 32.8804C14.7038 51.0572 14.7038 80.4647 32.8806 98.6415ZM81.1789 50.3431C89.7155 58.8797 89.7155 72.7071 81.1789 81.2437C72.6423 89.7803 58.8149 89.7803 50.2783 81.2437C41.7417 72.7071 41.7417 58.8798 50.2783 50.3432C58.8149 41.8066 72.6423 41.8065 81.1789 50.3431Z"/>
          <path class="fill-current text-secondary-400"  d="M142.721 208.482C160.865 226.626 190.305 226.658 208.482 208.481C226.626 190.337 226.658 160.897 208.482 142.721C190.337 124.576 160.897 124.544 142.721 142.72C124.544 160.897 124.576 190.337 142.721 208.482ZM191.019 160.183C199.556 168.72 199.556 182.547 191.019 191.084C182.482 199.62 168.655 199.62 160.118 191.084C151.582 182.547 151.582 168.72 160.118 160.183C168.687 151.679 182.482 151.647 191.019 160.183Z"/>
        </svg>
          
      </div>

      <div class="mx-auto xs:w-full md:w-8/12 px-4">
        <div class="flex flex-col">
          <div class="border-b-4 border-primary-600 max-w-max py-1">
            <h1 class="text-surface-900 font-montserrat font-bold text-4xl max-w-max">Main projects</h1>
          </div>
          <div class="grid xs:grid-cols-1 gap-6 mt-10">
            {#each article.projects as project, index}
              <div class="flex xs:flex-col xl:flex-row items-center px-6 py-4 rounded-xl col-span-1">
                <img class="rounded-xl h-60 w-100 object-fill z-1" src="{project.featured_image}" alt="">
                <div class="flex flex-col px-6 py-4 h-full">
                  <h3 class="font-montserrat font-bold text-2xl mt-3 text-surface-900">{project.name}</h3>
                  <p class="mt-6 font-rubik text-surface-900 text-xl">
                    {project.description}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
  </section>
{/if}
