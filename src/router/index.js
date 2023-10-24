import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EntretienView from '../views/EntretienView.vue'
import ContactView from '../views/ContactView.vue'
import NouveauteView from '../views/NouveauteView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import PanierView from '../views/PanierView.vue'
import MentionLegView from '../views/MentionLegView.vue'
import  CookieView from '../views/CookieView.vue'



// import PocketBase from 'pocketbase'
// // Objet pocketBase
// const pb = new PocketBase("http://127.0.0.1:8090");


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',    name: 'home',     component: HomeView },
    { path: '/entretien',     name: 'entretien',   component: EntretienView  },
    { path: '/contact',     name: 'contact',   component: ContactView  },
    { path: '/nouveaute',     name: 'nouveaute',   component: NouveauteView  },
    { path: '/connexion',     name: 'connexion',   component: ConnexionView  },
    { path: '/panier',     name: 'panier',   component: PanierView  },
    { path: '/mentions-legales',     name: 'mentions-legales',   component: MentionLegView  },
    { path: '/cookie',     name: 'cookies',   component: CookieView  },
  ]
})

export default router
