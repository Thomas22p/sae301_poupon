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

    <div class="container-fluid">

      <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
        <RouterLink class="navbar-brand text-dark" to="/">TaVue</RouterLink>
        <button class="navbar-toggler" 
          type="button" data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
    
            <ul class="navbar-nav">              
                <li class="nav-item">
                  <RouterLink class="nav-link text-dark" to="/">Lunettes</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-dark" to="/nouveaute">Nouvautés</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-dark" to="/entretien">Entretien</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-dark" to="/contact">Contact</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-dark" to="/panier"><button class="btn ml-auto" type="button" @click="deconnect">
                    <i class="ti ti-shopping-bag"></i>
                  </button></RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-dark" to="/connexion"><button class="btn ml-auto" type="button" @click="deconnect">
                    <i class="ti ti-user text-dark"></i>
                  </button></RouterLink>
                </li>
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

        </div>

    </nav>
    </div>
  </header>

  <RouterView />
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

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

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
}
</style>
