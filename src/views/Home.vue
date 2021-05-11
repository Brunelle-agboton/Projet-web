<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    
  
      
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-tab-button tab="photos" href="/Home/Photos">
            <ion-icon :icon="images" />
            <ion-label>Photos</ion-label>
          </ion-tab-button>
          <ion-p> Salut</ion-p>
       </div>
       <ion-item-divider>
      <ion-button router-link="/photos" >Photos </ion-button>
    </ion-item-divider>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { images, square, triangle } from 'ionicons/icons';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel
  },
  setup(){
    const router = useRouter();

    return {
      router,
      images,square,triangle
    }
  }
});
</script>

<style scoped>
#container {
  /*text-align: center;*/
  
  /*position: absolute;*/
  width: 100%;
  margin-left: 20%;
  margin-right: 50%;
  margin-top: 10%;
  border: 2%  dashed  darkblue;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>