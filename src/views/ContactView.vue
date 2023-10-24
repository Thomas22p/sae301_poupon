<script setup>

import { ref } from 'vue'

import MapOsm from '../components/MapOsm.vue';

</script>


<template>
    <div class="ml-[120px] mt-14">
      <h1 class="font-montserrat font-bold text-t40">Nous Contactez</h1>
      <ul class="flex flex-col gap-2 mt-5 ml-28">
        <li class="font-montserrat font-bold flex gap-5">Adresse : <p class="font-montserrat font-normal">3 Rue de la Paix, 92000 Paris</p></li>
        <li class="font-montserrat font-bold flex gap-5">Téléphone : <p class="font-montserrat font-normal">09518517864</p></li>
        <li class="font-montserrat font-bold flex gap-5">E-mail : <p class="font-montserrat font-normal">contact@tavue.com</p></li>
      </ul>
      <h1 class="font-montserrat font-bold text-t40 mt-14 mb-5">Nos Locaux</h1>
    <MapOsm />
    </div>
</template>
