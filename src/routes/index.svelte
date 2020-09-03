<script context="module">
	export async function preload() {
		const res = await this.fetch(`index.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { page: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let page;
	import FaAngular from 'svelte-icons/fa/FaAngular.svelte'
	import FaReact from 'svelte-icons/fa/FaReact.svelte'
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
	import FaDownload from 'svelte-icons/fa/FaDownload.svelte'
	import { each } from 'svelte/internal';
</script>

<style>
</style>

<svelte:head>
	<title>W1CH0</title>
</svelte:head>

<section class="flex flex-col items-center w-full">
	<section class="w-full h-auto flex justify-center bg-dark-800 xs:pb-10 md:pb-0">
		<div class="w-10/12 flex justify-center relative">
			<div class="z-1 w-7/12">
				<img class="h-125 xs:hidden md:block" src="wicho_profile_2.png" alt="">
			</div>
			<div class="flex justify-between flex-wrap mt-25 z-2 md:absolute">
				<div class="flex flex-col xs:w-full md:w-1/5">
					<h1 class="text-primary-50 font-montserrat text-4xl tracking-wider">{page.title}</h1>
					<div class="flex xs:flex-col md:flex-row">
						<h1 class="text-primary-500 font-bold font-montserrat text-6xl tracking-wider mb-0"><span class="text-primary-50">Soy</h1>
						<img class="h-16 md:ml-2 z-2" src="wicho_logo.png" alt="" srcset="">
					</div>
				</div>
				<div class="flex flex-col xs:w-full md:w-2/5 pr-5 xs:mt-4 md:mt-0">
					<h1 class="text-primary-50 font-montserrat text-4xl tracking-wider break-words">{page.bio.job}</h1>
					<p class="text-primary-50 font-rubik text-xl tracking-wider break-words">{page.bio.description.first}
						<span class="font-bold text-secondary-400"><br>{page.bio.description.second}</span>
						{page.bio.description.third}
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="w-full flex justify-center mt-10">
		<div class="w-10/12">
			<div class="flex flex-col">
				<div class="border-b-2 border-primary-500">
					<h1 class="text-primary-50 font-montserrat font-bold">Tecnologías que he usado</h1>
				</div>
				<div class="grid xs:grid-cols-1 md:grid-cols-3 gap-6 mt-10">
					{#each page.usedTechnologies as technology}
						<div class="flex flex-col items-center px-6 py-4 border-dark-100 border rounded-xl">
							<div class="flex flex-col">
								{#if technology.name === "Angular"}
									<div class="h-35 w-35 p-2 rounded-full text-secondary-800 border-2 border-dark-100">
										<FaAngular />
									</div>
								{:else if technology.name === "React"}
									<div class="h-35 w-35 p-2 rounded-full text-primary-700 border-2 border-dark-100">
										<FaReact />
									</div>
								{:else}
									<div class="h-35 w-35 p-2 rounded-full border-2 border-dark-100">
										<img src="logo-192.png" alt="Logo de svelte">
									</div>
								{/if}
								<h3 class="font-montserrat font-bold text-xl mt-3 text-center text-primary-50">{technology.name}</h3>
							</div>
							<p class="mt-6 font-rubik text-primary-50 text-xl">
								{technology.description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
	<section class="w-full flex justify-center bg-dark-800 mt-10 py-10">
		<div class="w-10/12">
			<div class="grid xs:grid-cols-1 md:grid-cols-2 gap-6">
				<div class="col-span-1 mt-10">
					<h1 class="text-primary-50 font-montserrat text-4xl tracking-wider">{page.projectContact.firstSection.title}</h1>
					<a class="flex items-center text-secondary-300 font-rubik text-3xl break-words" href="mailto: {page.projectContact.firstSection.email}">
						<p class="">{page.projectContact.firstSection.contact}</p>
						<div class="w-6 h-6 ml-2">
							<FaArrowRight />
						</div>
					</a>
				</div>
				<div class="col-span-1 mt-10">
					<h1 class="text-primary-50 font-montserrat text-4xl tracking-wider mb-10">{page.projectContact.secondSection.title}</h1>
					{#each page.projectContact.secondSection.subtitles as subtitle, Index}	
						{#if Index === page.projectContact.secondSection.subtitles.length -1}		 
							<div class="mt-4 flex">
								<h2 class="text-primary-50 font-montserrat text-2xl tracking-wider">{subtitle}</h2>
								<a class="flex items-center justify-center text-secondary-300 font-rubik text-3xl break-words border-b-2 border-secondary-300 ml-4 px-3" href="{page.projectContact.secondSection.file}">
									<div class="w-6 h-6">
										<FaDownload />
									</div>
								</a>
							</div>
						{:else}
							<h2 class="text-primary-50 font-montserrat text-2xl tracking-wider mt-4">{subtitle}</h2>
							<hr>
						{/if} 
					{/each}
				</div>
			</div>
		</div>
	</section>
</section>
