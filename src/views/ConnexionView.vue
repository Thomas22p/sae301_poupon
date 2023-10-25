<script setup> 
    import { RouterLink, RouterView } from 'vue-router'
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import PocketBase from 'pocketbase'
    const pb = new PocketBase("http://127.0.0.1:8090")

    const router = useRouter()
    
    let isConnected = ref(false)
    let user = ref('')
    let psw = ref('')

    let currentUser = ref(null)
    let avatar = ref(null)  
    
    onMounted(async() => {  
        refresh()  
    })  


    const refresh = ()=>{
        if(pb.authStore.isValid){
            currentUser.value = pb.authStore.model
            isConnected.value = true

            avatar.value =
            "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
            +currentUser.value.collectionId     // Id ou name de la collection concernée
            +"/"
            +currentUser.value.id               // Id de l'utilisateur connecté
            +"/"
            +currentUser.value.avatar           // Nom fichier image pocketbase
            +"?thumb=100x100"                   // Taille par défaut
        }
    }


    const connect = async()=>{
      try{
      const authData = await pb.collection('users')
      .authWithPassword(user.value, psw.value)
      refresh()    
    }catch(error){
      alert("Erreur d'identification : mauvais login et/ou mot de passe")
      user.value = ""
      psw.value = ""
    }
    }


    const deconnect = ()=>{
      pb.authStore.clear()
      isConnected.value=false
      avatar.value = null
      router.push({name:"home"})
    }
  
  // Liste des matériaux
  // let Materiaux = ref([])
  
  // // Liste des formes
  // let Formes = ref([])
  
  // // Liste des couleurs
  // let Couleurs = ref([])
  
  // // Matériaux, formes et couleurs sélectionnés
  // let selectedMaterial = ref({ svg: '' })
  // let selectedShape = ref({ svg: '' })
  // let selectedColor = ref({ svg: '' })
  
  // Au montage du composant
  onMounted(async () => {
    try {
      // Récupérer la liste des matériaux depuis PocketBase
      Materiaux.value = await pb.collection("Materiaux").getFullList({ sort: 'libelle' })
  
      // Récupérer la liste des formes depuis PocketBase
      Formes.value = await pb.collection("Forme").getFullList({ sort: 'libelle' })
  
      // Récupérer la liste des couleurs depuis PocketBase
      Couleurs.value = await pb.collection("Couleurs").getFullList({ sort: 'libelle' })
    } catch (error) {
      console.error("Erreur lors de la récupération des données : ", error)
    }
  })
  
  const selectMaterial = (materiau) => {
    selectedMaterial.value.svg = materiau.svg
  }
  
  const selectShape = (forme) => {
    selectedShape.value.svg = forme.svg
  }
  
  const selectColor = (couleur) => {
    selectedColor.value.svg = couleur.svg
  }
</script>


<template>
    <div class="grid grid-cols-12 gap-5 mx-[120px] my-24">
      
      <div class="flex flex-col col-start-1 col-span-4 gap-12 items-center">
        <h1 class="font-notable font-bold text-6xl">TAVUE</h1>
        <p class="font-montserrat text-t32 text-center font-light mb-5">Le moment est venu d'entrer dans le monde de la lunette française !</p>
        <img src="../assets/lunette2.svg" alt="lunette">
      </div>

      <div class="flex flex-col col-start-8 col-span-4">
        <div v-if="isConnected" class="flex flex-col mx-auto"> 
                <img :src="avatar" class="img-fluid rounded-full my-5 ml-2" style="max-width:250px;" />
                <p class="text-center font-montserrat font-bold text-sm">{{ currentUser.email }}</p>
                <button class="btn btn-light mr-2">
                  {{ currentUser.name }}
                </button>           
                <button class="uppercase font-montserrat px-4 py-2 rounded-lg border-black border-solid border-2 mx-auto mt-5" type="button" @click.prevent="deconnect">Se déconnecter
                  </button>
                </div>

              <form v-else class="flex flex-col" >
                  <p class="mt-5 mb-2 font-montserrat font-bold">Email *</p>
                  <input class="form-control px-5 py-3 rounded-md border-black border-solid border-2" placeholder="Entrez votre adresse mail" v-model="user">
                  <p class="mt-5 mb-2 font-montserrat font-bold">Mot de Passe *</p>  
                  <input class="form-control px-5 py-3 rounded-md border-black border-solid border-2" placeholder="Entrez votre mot de passe" type="password" v-model="psw">

                  <p class="font-montserrat text-grey mt-2">* Ces informations sont obligatoires</p>
                  <button class="uppercase font-montserrat px-4 py-2 rounded-lg border-black border-solid border-2 mx-auto mt-5" 
                      type="button" @click.prevent="connect">Se connecter
                  </button>
                  <p class="font-montserrat font-bold text-center my-5"> OU </p>
                  <button class="font-montserrat px-4 py-2 rounded-lg border-black border-solid border-2 mx-auto" 
                      type="button" v-on:click="googlelogin()">Se connecter avec Google
                  </button>
                </form>
      </div>
      
    </div>
    <div v-if="isConnected">
      <p class="text-center -mt-16 mb-12">✔️  Vous êtes connecté !</p>
    </div>        
</template>


<script>
var connected = false;
var pocketbase_ip = "";
    if (import.meta.env.MODE === "production")
    pocketbase_ip = "https://sharedpoesy.thomaspoupon.fr:443";
    else pocketbase_ip = "http://127.0.0.1:8090";
    const pb = new PocketBase(pocketbase_ip);
    var currentUser;
    export default {
        async login() {
          await pb
            .collection("users")
            .authWithPassword(
              document.getElementById("email").value,
              document.getElementById("passwd").value
            );

          if (pb.authStore.isValid) {
            document.getElementById("status").innerHTML = "You are now logged in";
            connected = true;
            currentUser = pb.authStore.model;
            document.getElementById("signOut").style.visibility = "hidden";
            document.getElementById("addPoem").style.visibility = "visible";
          }
        },
        //this method allows the already registred user to log in the system.
        async register() {
          currentUser = await pb.collection("users").create({
            email: document.getElementById("email").value,
            password: document.getElementById("passwd").value,
            passwordConfirm: document.getElementById("passwd").value,
            name: "John Di",
          });
          if (currentUser) {
            document.getElementById("status").innerHTML =
              "Wainting for your email validation ...";
            await pb
              .collection("users")
              .requestVerification(document.getElementById("email").value);
          }
        },
        async googlelogin() {
          await pb.collection("users").authWithOAuth2({ provider: "google" });
          if (pb.authStore.isValid) {
            document.getElementById("status").innerHTML = "You are now logged in";
            connected = true;
            currentUser = pb.authStore.model;
            document.getElementById("signOut").style.visibility = "hidden";
            document.getElementById("addPoem").style.visibility = "visible";
          }
        },
    };
</script>