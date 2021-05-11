<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>
    

    <ion-content :fullscreen="true">
      
      <ion-content >
        <form @submit="handleSubmit">
          <ion-list>
              <ion-item >
                <ion-label position="floating">Email</ion-label>
                  <ion-input v-model="user.email" name="email"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                  <ion-input v-model="user.password" name="password" ></ion-input>
              </ion-item>
            
              <ion-fab vertical="bottom" horizontal="start" >
                <ion-fab-button  @click="takePhoto()">
                  <ion-icon :icon="camera"></ion-icon>
                </ion-fab-button>
              </ion-fab>
          </ion-list>
           <ion-button expand="block" type="submit">S'enregistrer</ion-button>
        </form>
      
      </ion-content>
  
    </ion-content>

  </ion-page>
</template> 

<script lang="ts">
    import { camera, trash, close } from 'ionicons/icons';
    import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon, 
            IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonInput, IonGrid, toastController } from '@ionic/vue';
    import {usePhotoGallerry } from '@/composables/usePhotoGallerry';
    import {Plugins } from "@capacitor/core"



        export default  {
            name: 'Register',
            components: { IonPage, IonHeader, IonFab, IonFabButton, IonIcon, 
            IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonInput, IonGrid, toastController },
            setup() {
              const { photos, takePhoto } = usePhotoGallerry();
              const { Storage } = Plugins;
               
              const saveData = async (email: string, password: string) => {
                const dataInDb = await Storage.get({key: "users" });
                let users: any[];
                if(dataInDb.value){
                  users= JSON.parse(dataInDb.value as string);
                } else{
                  users = [];
                }
                users.push({email, password});

                await Storage.set({
                  key:"users",
                  value:JSON.stringify(users),
                });
              };

                return {
                  photos,
                  takePhoto,
                  camera, trash, close,
                  saveData
                }
            },
            data: function () {
              return {
                user: {
                  email:"",
                  password:"",
                },
              };
            },
            methods: {
               handleSubmit: function(ev: any) {
                  ev.preventDefault();
                  const {email, password } = this.user;
                  if(email.length !== 0 || password.length !== 0)
                  {
                    this.saveData( email, password);
                  }
                  else
                  {
                    this.openToast('Veuillez remplir les champs !');
                  }
              },
              async openToast(message : string){
                const toast = await toastController.create({
                  message:"Success",
                  duration:5000,
                });
                return toast.present();
              }
            }, 
        };
</script>
<style scoped>
 
</style>