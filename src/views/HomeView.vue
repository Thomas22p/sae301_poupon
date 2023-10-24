<template>
  <img class="mt-4 z-0" src="../assets/home_img.webp" alt="TaVue">
  <div class="flex flex-col -mt-[450px] mb-[100px] z-10 gap-10">
    <h1 class="font-notable font-bold text-t40 text-white text-center">TAVUE</h1>
    <p class="font-montserrat font-thin text-t40 text-white text-center">Découvrez le nouveau modèle personnalisable <br> “éclair du soleil”</p>
    <div class="flex mt-20 gap-5 justify-center">
      <RouterLink to="/perso"><button class="bg-white text-black uppercase font-montserrat font-semibold px-4 py-2 rounded-lg border-black border-solid border-2">personnaliser</button></RouterLink>
      <RouterLink to="/nouveaute"><button class="bg-white text-black uppercase font-montserrat font-semibold px-4 py-2 rounded-lg border-black border-solid border-2">en savoir plus</button></RouterLink>
    </div>
  </div>
  <div>

    <div class="flex justify-evenly">
      <div class="bg-grey2 w-80 h-44 flex justify-center items-center rounded-lg"><img class="w-[300px] mt-5" src="../assets/lunette.svg" alt="lunette"></div>
      <div class="bg-grey2 w-80 h-44 flex justify-center items-center rounded-lg"><img class="w-[300px] mt-5" src="../assets/lunette2.svg" alt="lunette2"></div>
      <div class="bg-grey2 w-80 h-44 flex justify-center items-center rounded-lg"><img class="w-[300px] mt-5" src="../assets/lunette3.svg" alt="lunette3"></div>
      <div class="bg-grey2 w-80 h-44 flex justify-center items-center rounded-lg"><img class="w-[300px] mt-5" src="../assets/lunette4.svg" alt="lunette4"></div>
    </div>

    <div class="grid grid-cols-12 gap-5 mx-[120px] mt-52">
      <div class="flex flex-col col-start-1 col-span-5 gap-5">
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
          <RouterLink to="/eclair" class="w-40 border-black border-solid border-2 text-center rounded-lg">
            <button class="bg-white text-black uppercase font-montserrat font-semibold px-4 py-2">voir</button>
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
      <img class="col-start-7 col-span-6 gap-5 mt-12" src="../assets/lunette.svg" alt="lunette">
    </div>


    <div class="grid grid-cols-12 gap-5 mx-[120px] mt-32 mb-32">
      <img class="col-start-1 col-span-6 gap-5 mt-12" src="../assets/lunette5.svg" alt="lunette2">
      <div class="flex flex-col col-start-7 col-span-5 gap-5">
        <div class="flex gap-5 items-center">
          <h2 class="font-montserrat font-bold text-t40">Safari sauvage</h2>
          <span class="font-montserrat text-t32">- 176€</span>
        </div>
        <p>La lunette "Safari Sauvage" vous offre une touche d'aventure avec ses branches en bois français, ajoutant une note de caractère à votre style tout en exprimant votre engagement envers la fabrication locale. Parfaite pour les esprits aventuriers en quête de confort et d'authenticité.
        </p>
        <div class="flex gap-5 mt-10">
          <RouterLink to="/perso">
            <button class="bg-blue text-white uppercase font-montserrat font-semibold px-4 py-2 rounded-lg border-blue border-solid border-2">personnaliser</button>
          </RouterLink>
          <RouterLink to="/safari" class="w-40 border-black border-solid border-2 text-center rounded-lg">
            <button class="bg-white text-black uppercase font-montserrat font-semibold px-4 py-2">voir</button>
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
    </div>
  </div>
</template>
