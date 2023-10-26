<script setup> 
    import { RouterLink, RouterView } from 'vue-router'
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import PocketBase from 'pocketbase'
    const pb = new PocketBase("https://tavue.thomaspoupon.fr:443");

    const loginGithub =  async()=>{
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        isConnected = true;
        currentUser=pb.authStore.model;
      }
    }

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
            "https://tavue.thomaspoupon.fr:443/api/files/"  // Adresse serveur et repertoire des fichiers image
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
                      type="button" v-on:click="loginGithub()">Se connecter avec Github
                  </button>
                </form>
      </div>
      
    </div>
    <div v-if="isConnected">
      <p class="text-center -mt-16 mb-12">✔️  Vous êtes connecté !</p>
    </div>        
</template>