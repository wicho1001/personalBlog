<script>
	import FaAngular from 'svelte-icons/fa/FaAngular.svelte'
	import FaReact from 'svelte-icons/fa/FaReact.svelte'
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
					<h1 class="text-primary-50 font-montserrat text-4xl tracking-wider">Bienvenido</h1>
					<div class="flex xs:flex-col md:flex-row">
						<h1 class="text-primary-500 font-bold font-montserrat text-6xl tracking-wider mb-0"><span class="text-primary-50">Soy</h1>
						<img class="h-16 md:ml-2 z-2" src="wicho_logo.png" alt="" srcset="">
					</div>
				</div>
				<div class="flex flex-col xs:w-full md:w-2/5 pr-5 xs:mt-4 md:mt-0">
					<h1 class="text-primary-50 font-montserrat text-4xl tracking-wider break-words">Frontend Developer</h1>
					<p class="text-primary-50 font-rubik text-xl tracking-wider break-words">
						Actualmente vivo en México, soy un chico de 20 años apasionado por la tecnología y cómo esta puede cambiar al mundo.
						<span class="font-bold text-secondary-400"><br>Yo quiero cambiar el mundo.</span> Acompañame en esta aventura.
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
					<div class="flex flex-col items-center px-6 py-4 border-dark-100 border rounded-xl">
						<div class="flex flex-col">
							<div class="h-35 w-35 p-2 rounded-full text-secondary-800 border-2 border-dark-100">
								<FaAngular />
							</div>
							<h3 class="font-montserrat font-bold text-xl mt-3 text-center text-primary-50">Angular</h3>
						</div>
						<p class="mt-6 font-rubik text-primary-50 text-xl">
							Esto es simplemente un framework hermoso, cada vez me enomoro mas de esta tecnología. 
							<br>
							Lo que mas me ha gustado de angular a parte del typescript que te ayuda de una forma inimaginable, no hay algo
							mas cool, que los observables, es de lo mejor que podrás ocupar para desarrollar día a día. Lo unico que puedo decir:
							<br>
							<br>
							¡¡Angular es un framework reactivo y hermoso!!
						</p>
					</div>
					<div class="flex flex-col items-center px-6 py-4 border-dark-100 border rounded-xl">
						<div class="flex flex-col">
							<div class="h-35 w-35 p-2 rounded-full text-primary-700 border-2 border-dark-100">
								<FaReact />
							</div>
							<h3 class="font-montserrat font-bold text-xl mt-3 text-center text-primary-50">React</h3>
						</div>
						<p class="mt-6 font-rubik text-primary-50 text-xl">
							Un framework si se puede llegar a decir, tengo sentimientos encontrados con este framework 
							ya que no llega a ser lo suficientemente robusto para llegar a ser un framework
							sin en cambio es un framework con el que puedes iniciar y crear cosas muy fancys
							<br>
							<br>
							React te ayudara a crear proyectos medianos rapidamente. 
						</p>
					</div>
					<div class="flex flex-col items-center px-6 py-4 border-dark-100 border rounded-xl">
						<div class="flex flex-col">
							<div class="h-35 w-35 p-2 rounded-full border-2 border-dark-100">
								<img src="logo-192.png" alt="Logo de svelte">
							</div>
							<h3 class="font-montserrat font-bold text-xl mt-3 text-center text-primary-50">Svelte</h3>
						</div>
						<p class="mt-6 font-rubik text-primary-50 text-xl">
							Svelte no es un framework, svelte es un compilador.
							<br>
							Al ser asi svelte es sumamente ligero. Con ello tome la decision de generar este sitio
							ya que quiero generar el mejor SEO y performance dentro de esta pagina.
							<br>
							<br>
							Ocupalo, no te arrepentiras.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>
