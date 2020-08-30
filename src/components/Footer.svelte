<script>
  import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte'
  import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte'
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
  import FaDownload from 'svelte-icons/fa/FaDownload.svelte'
</script>

<style></style>

<footer class="w-full flex justify-center bg-dark-800 py-10 mt-10">
  <div class="w-10/12 flex flex-col">
    <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-6">
      <div class="col-span-1 mt-10">
        <h1 class="text-primary-50 font-montserrat text-4xl tracking-wider">Tienes un proyecto, hablemos!</h1>
        <a class="flex items-center text-secondary-300 font-rubik text-3xl break-words" href="mailto: wichoguerrero747@gmail.com">
          <p class="">Contactame</p>
          <div class="w-6 h-6 ml-2">
            <FaArrowRight />
          </div>
        </a>
      </div>
      <div class="col-span-1 mt-10">
        <h1 class="text-primary-50 font-montserrat text-4xl tracking-wider">Dejame saber esto para tu proyecto</h1>
        <h2 class="text-primary-50 font-montserrat text-2xl tracking-wider mt-10">¿Cómo te llamas?</h2>
        <hr>
        <h2 class="text-primary-50 font-montserrat text-2xl tracking-wider mt-4">Tu correo, y otro metodo de contacto</h2>
        <hr>
        <div class="mt-4 flex">
          <h2 class="text-primary-50 font-montserrat text-2xl tracking-wider">Hablame mas sobre tu proyecto</h2>
          <a class="flex items-center justify-center text-secondary-300 font-rubik text-3xl break-words border-b-2 border-secondary-300 ml-4 px-3" href="https://drive.google.com/uc?export=download&id=1sYO0imeaOLeHA5CapIdd2Zyi6AYNSasC">
            <div class="w-6 h-6">
              <FaDownload />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center mt-20 w-full">
      <img class="w-30 h-30" src="wicho.png" alt="Logo de wicho">
      <p class="text-primary-50 font-rubik text-xl tracking-wider mt-1">Esto es todo. <span class="font-bold">Gracias!</span></p>
      <div class="flex justify-around w-1/4 mx-auto mt-2">
        <a href="https://www.facebook.com/ELW1CH0" target="__blank">
          <div class="w-6 h-6 text-primary-800">
            <FaFacebook />
          </div>
        </a>
        <a href="https://www.github.com/wicho1001" target="__blank">
          <div class="w-6 h-6 text-black">
            <FaGithub />
          </div>
        </a>
        <a href="https://www.instagram.com/wicho_guerrero" target="__blank">
          <div class="w-6 h-6 text-secondary-500">
            <FaInstagram />
          </div>
        </a>
      </div>
    </div>
  </div>
</footer>