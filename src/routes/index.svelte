<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({fetch}) => {
    const res = await fetch(`index.json`)
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
  export let article;
</script>

<svelte:head>
  <title>W1CH0</title>
</svelte:head>

{#if article.bio}
  <section class="flex flex-col items-center w-full">
    <section class="w-full h-auto flex justify-center xs:pb-10 md:pb-0">
      <div class="w-full flex justify-center relative">
        <div class="flex justify-between">
          <div class="flex flex-col xs:w-full md:w-2/5 pr-5 xs:mt-4 md:mt-0">
            <h1 class="text-surface-200 font-montserrat text-4xl tracking-wider break-words">{article.bio.job}</h1>
            <p class="text-surface-200 font-rubik text-xl tracking-wider break-words">{article.bio.description.first}
              <span class="font-bold text-secondary-700"><br>{article.bio.description.second}</span>
              {article.bio.description.third}
            </p>
          </div>
        </div>
        <img class="h-125 xs:hidden md:block object-cover" src="wicho_profile.svg" alt="">
      </div>
    </section>
    <section class="w-full flex justify-center mt-10">
      <div class="w-10/12">
        <div class="flex flex-col">
          <div class="border-b-2 border-primary-500">
            <h1 class="text-surface-200 font-montserrat font-bold">Tecnologías que he usado</h1>
          </div>
          <div class="grid xs:grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {#each article.usedTechnologies as technology}
              <div class="flex flex-col items-center px-6 py-4 border-dark-100 border rounded-xl">
                <div class="flex flex-col">
                  {#if technology.name === "Angular"}
                    <div class="h-35 w-35 p-2 rounded-full text-surface-200 border-2 border-dark-100">
                      <!-- <FaAngular /> -->
                    </div>
                  {:else if technology.name === "React"}
                    <div class="h-35 w-35 p-2 rounded-full text-surface-200 border-2 border-dark-100">
                      <!-- <FaReact /> -->
                    </div>
                  {:else}
                    <div class="h-35 w-35 p-2 rounded-full border-2 border-dark-100">
                      <!-- <img src="logo-192.png" alt="Logo de svelte"> -->
                    </div>
                  {/if}
                  <h3 class="font-montserrat font-bold text-xl mt-3 text-center text-surface-200">{technology.name}</h3>
                </div>
                <p class="mt-6 font-rubik text-surface-200 text-xl">
                  {technology.description}
                </p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex justify-center mt-10 py-10">
      <div class="w-10/12">
        <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-6">
          <div class="col-span-1 mt-10">
            <h1 class="text-surface-200 font-montserrat text-4xl tracking-wider">{article.projectContact.firstSection.title}</h1>
            <a class="flex items-center text-secondary-700 font-rubik text-3xl break-words" href="mailto: {article.projectContact.firstSection.email}">
              <p class="">{article.projectContact.firstSection.contact}</p>
              <div class="w-6 h-6 ml-2">
              </div>
            </a>
          </div>
          <div class="col-span-1 mt-10">
            <h1 class="text-surface-200 font-montserrat text-4xl tracking-wider mb-10">{article.projectContact.secondSection.title}</h1>
            {#each article.projectContact.secondSection.subtitles as subtitle, Index}  
              {#if Index === article.projectContact.secondSection.subtitles.length -1}     
                <div class="mt-4 flex">
                  <h2 class="text-surface-200 font-montserrat text-2xl tracking-wider">{subtitle}</h2>
                  <a sveltekit:prefetch 
                    class="flex items-center justify-center text-secondary-700 font-rubik text-3xl break-words border-b-2 border-secondary-700 ml-4 px-3"
                    href="{article.projectContact.secondSection.file}"
                  >
                    <div class="w-6 h-6">
                      
                    </div>
                  </a>
                </div>
              {:else}
                <h2 class="text-surface-200 font-montserrat text-2xl tracking-wider mt-4">{subtitle}</h2>
                <hr>
              {/if} 
            {/each}
          </div>
        </div>
      </div>
    </section>
  </section>
{/if}
