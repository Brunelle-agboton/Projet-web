<template>
	<ion-page>
		<ion-header :translate="true">
			<ion-toolbar>
				<ion-title>Login</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title>S'identifier</ion-title>
				</ion-toolbar>
			</ion-header>

			<form @submit="HandleLogin">
				<ion-list>
					<ion-item>
						<ion-label position="floating">Email</ion-label>
						<ion-input v-model="user.email" name="email"></ion-input>
					</ion-item>
					<ion-item>
						<ion-label position="floating">Password</ion-label>
						<ion-input v-model="user.password" name="password"></ion-input>
					</ion-item>
				</ion-list>
				<ion-button expand="block" type="submit">Login</ion-button>
			</form>

			<ion-footer>
				<ion-toolbar>
					<ion-item>Prenez votre temps </ion-item>
				</ion-toolbar>
			</ion-footer>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
    import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonFooter, toastController } from "@ionic/vue";
    import {defineComponent } from "vue";
    import { useRouter } from "vue-router";
    import { Plugins } from "@capacitor/core";

    export default defineComponent({
        name: "Login",
        components: { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonFooter, toastController },
        
        setup(){
            //-1 passez a la creation d'un compte car vous n'en avez pas encore
            //-2
            const {Storage } = Plugins;
            const Login = async (email: string, password: string) => {
                const inDataBase = await Storage.get({key: "users"});
                if(!inDataBase.value){
                    return -1;
                } else{
                    const users = JSON.parse(inDataBase.value as string);
                    let success = false;
                    for(const el of users){
                        if(el.email === email && el.password === password)
                        success = true;
                        break;
                    }
                    return !success ? -2 : 0;
                }
            }
            const router = useRouter();
            return {
                Login,
                router
            };
        },
        
        data: function() {
            return {
                users: [],
                user:{
                    email:"",
                    password:"",
                },
            };
        },
        methods: {

            HandleLogin: async function(event : any) {
                event.preventDefault();
                const { email, password } = this.user;
                if(email.length !== 0 && password.length !== 0){
                    const result = await this.Login(email, password);
                    let message = "";
                    switch (result) {
                        case -1:
                            message = "Veuillez vous enregistrer !";
                            this.router.push("/Register");
                            break;
                        case -2:
                            message = "Identifiants non valides !";
                            break;
                        case 0:
                            message = "Vous etes connectes !\n Felicitations!";
                            this.router.push("/Connecte");
                            break
                    }
                }else{
                    this.openToast('');
                }

            },
            async openToast() {
                const toast = await toastController.create({
                    message: "Success.",
                    duration: 5000,
                });
                return toast.present();
            }        
        },
        
    });
</script>
<style lang="scoped">
    
</style>