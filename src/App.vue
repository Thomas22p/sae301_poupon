<script setup>
  import { ref, onMounted } from 'vue';

  import { useRouter } from 'vue-router';
  const router = useRouter()

  import { RouterLink, RouterView } from 'vue-router'

  // import PocketBase from 'pocketbase'

  // const pb = new PocketBase("http://127.0.0.1:8090");

</script>

<template>
  <header>

    <nav class="py-4">
      <ul class="grid grid-cols-3 justify-items-center items-center">
        <div>
          <RouterLink to="/" class="text-black text-xl font-bold font-notable">TaVue</RouterLink>
        </div>
        <div class="flex">
          <li>
            <RouterLink to="/" class="text-black font-bold font-montserrat">Lunettes</RouterLink>
          </li>
          <li>
            <RouterLink to="/nouveaute" class="text-black font-bold font-montserrat">Nouvautés</RouterLink>
          </li>
          <li>
            <RouterLink to="/entretien" class="text-black font-bold font-montserrat">Entretien</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="text-black font-bold font-montserrat">Contact</RouterLink>
          </li>
        </div>
        <div class="flex">
          <li>
            <RouterLink to="/contact" class="text-black"><img src="./assets/panier.svg" alt="panier"></RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="text-black"><img src="./assets/user.svg" alt="connexion"></RouterLink>
          </li>
        </div>
      </ul>
           <!-- <div class="ml-auto">              
              <span v-if="isConnected"> 
                <img :src="avatar" class="img-fluid" style="max-width:60px;" />
                <button class="btn btn-light mr-2">
                  {{ currentUser.name }}
                </button>              
                <button class="btn btn-dark ml-auto" type="button" @click="deconnect">
                    <i class="fa fa-sign-out"></i>
                  </button>
              </span>

              <form v-else class="form-inline  input-group-sm ml-auto" >
                  <input class="form-control mr-2" placeholder="Login" v-model="user">
                  <input class="form-control mr-2" placeholder="Password" v-model="psw">
                  <button class="btn btn-dark ml-auto" 
                      type="button" @click.prevent="connect">
                      <i class="fa fa-power-off"></i>
                  </button>
                </form>
              </div> -->
    </nav>
  </header>

  <RouterView />

  <footer>
    <nav>
      <ul class="grid grid-cols-4 px-32 py-12 bg-blue">
        <div>
          <RouterLink to="/" class="text-white text-xl font-bold font-notable">TaVue</RouterLink>
        </div>
        <div class="">
          <li class="text-white font-bold font-montserrat">Contact</li>
          <li class="text-white">09518517864</li>
          <li class="text-white">contact@tavue.com</li>
        </div>
        <div class="">
          <li class="text-white font-bold font-montserrat">Horaires</li>
          <li class="text-white">09518517864</li>
          <li class="text-white">contact@tavue.com</li>
        </div>
        <div class="">
          <div class="flex justify-end">
            <li>
              <RouterLink to="/" class="text-white font-bold font-montserrat">Lunettes</RouterLink>
            </li>
            <li>
              <RouterLink to="/nouveaute" class="text-white font-bold font-montserrat">Nouvautés</RouterLink>
            </li>
            <li>
              <RouterLink to="/entretien" class="text-white font-bold font-montserrat">Entretien</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-white font-bold font-montserrat">Contact</RouterLink>
            </li>
          </div>
          <div class="mt-16 mr-3 flex justify-end">  
            <li>
              <img src="./assets/twitter.svg" alt="twitter">
            </li>
            <li>
              <img src="./assets/insta.svg" alt="instagram">
            </li>
          </div>
          <div class="mt-2 flex justify-end">
            <li>
              <RouterLink to="/mentions-legales" class="text-white font-montserrat">Mentions légales</RouterLink>
            </li>
            <span class="text-white">|</span>
            <li>
              <RouterLink to="/cookie" class="text-white font-montserrat">Cookies</RouterLink>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

/* nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .h1TaVue {
    color: #000;
    text-align: center;
    font-family: Notable;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
  }
}
</style>
