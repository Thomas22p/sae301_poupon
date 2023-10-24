<template>
    <div class="grid grid-cols-12 gap-5 mx-[120px] mt-32 mb-32">
      <img class="col-start-1 col-span-6 gap-5 mt-12 transform scale-x-[-1]" src="../assets/lunette5.svg" alt="lunette2">

      <div class="flex flex-col col-start-7 col-span-5 gap-5  pb-5 border-b-2 border-black">
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
        <div class="flex gap-5 items-start">
          <img class="w-[60px] rounded-full" src="../assets/avis2.webp" alt="guillaume">
          <div>
            <h2 class="font-montserrat font-bold text-t20">Guillaume_jl</h2>
            <p class="font-montserrat text-grey">La Lunette "Safari Sauvage" est un chef-d'œuvre français. Les branches en bois français lui donnent un aspect authentique</p>
          </div>
        </div>
      </div>
    </div>
</template>
