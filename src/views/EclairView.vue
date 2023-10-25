<template>
    <div class="grid grid-cols-12 gap-5 mx-[120px] mt-32 mb-32">
      <div class="flex flex-col col-start-1 col-span-6">
        <h1 class="font-montserrat font-bold text-t40 text-center -mt-10 mb-10">Éclair du soleil</h1>
        <img class="mt-12" src="../assets/lunette.svg" alt="lunette">
      </div>

      <div class="flex flex-col col-start-7 col-span-5 gap-5 pb-5 border-b-2 border-black">
        <div class="flex gap-5 items-center">
          <h2 class="font-montserrat font-bold text-t40">Éclair du soleil</h2>
          <span class="font-montserrat text-t32">- 160€</span>
        </div>
        <p>Les lunettes de soleil "Éclair du Soleil"  allient un design moderne et des verres polarisés pour une protection ultime contre les rayons UV, offrant un style audacieux tout en préservant la clarté de la vision. Avec leur monture élégante et leurs verres teintés, elles sont l'accessoire parfait pour un été ensoleillé.
        </p>
        <div class="flex gap-5 mt-10">
          <RouterLink to="/perso">
            <button class="bg-blue text-white uppercase font-montserrat font-semibold px-4 py-2 rounded-lg border-blue border-solid border-2">personnaliser</button>
          </RouterLink>
          <RouterLink to="/panier">
            <button class="bg-white text-black uppercase font-montserrat font-semibold px-4 py-2 border-black border-solid border-2 text-center rounded-lg">ajouter au panier</button>
          </RouterLink>
        </div>
        <div>
          <div class="flex gap-5">
            <div class="flex gap-2">
              <img class="w-4" src="../assets/france.svg" alt="france">
              <p> Fabriqué en France</p>
            </div>
            <p>♻️    Eco-responsable</p>
          </div>
        </div>
      </div>



      <div class="flex flex-col col-start-7 col-span-5 gap-5 mt-2">
        <div class="flex gap-5 items-center">
          <img class="w-[60px] rounded-full" src="../assets/avis1.webp" alt="juliette">
          <div>
            <h2 class="font-montserrat font-bold text-t20">Juliette.ftn</h2>
            <p class="font-montserrat text-grey">Savoir que cette montre est fabriquée en France ajoute un point à mon style. Je ne la quitte plus !</p>
          </div>
        </div>
      </div>
    </div>
</template>
