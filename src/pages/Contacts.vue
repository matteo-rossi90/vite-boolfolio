<script>
import axios from 'axios';
import { store } from '@/store/store';

import Loader from '@/components/partials/Loader.vue';

export default {
    components:{
        Loader
    },
    name: 'Contacts',
    data(){
        return{
            name:'',
            email:'',
            message:'',
            errors:{
                name: [],
                email: [],
                message: []
            },
            sending:false,
            isError: false,
            errorMessage: '',
            sent:false
        }
    },
    methods:{
        sendForm(){
            this.sending = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            console.log(data)

            axios.post(store.apiUrl + 'send-email', data)
            .then(res =>{
                console.log(res.data);
                this.sending = false;
                if(!res.data.success){
                    this.errors = res.data.errors;
                }else{
                    this.sent = true;
                    this.errors = {
                        name:[],
                        email: [],
                        message:[]
                    }
                }
            })
            .catch(er =>{
                console.log(er.message)
                this.errorMessage = er.res?.data?.message || 'Si è verificato un errore durante l\'invio. Riprova';
                this.isError = true;
                this.sending = false;
            })
        },
        resetError(){
            this.errorMessage = '';
            this.isError = false;
        }

    }
}
</script>

<template>
    <section>
        <div class="container">
            <h1 class="title contact-title">
                Contatti
            </h1>
            <div class="form-container">
                <div v-if="isError">
                    <p>{{ errorMessage }}</p>
                    <button class="btn-error" @click="resetError">Riprova</button>
                </div>
                <div>
                    <div v-if="!sending">
                        <form action="" @submit.prevent="sendForm" @keyup.enter="sendForm" v-if="!sent">
                            <label for="name">Nome*</label>
                            <input v-model="name" type="text" id="name" name="name" placeholder="Inserisci il tuo nome">
                            <small>{{ errors.name?.toString() }}</small>

                            <label for="email">Email*</label>
                            <input v-model="email" type="email" id="email" name="email" placeholder="Inserisci la tua email">
                            <small>{{ errors.email?.toString() }}</small>

                            <label for="message">Messaggio*</label>
                            <textarea v-model="message" id="message" name="message" rows="10" placeholder="Scrivi il tuo messaggio"></textarea>
                            <small>{{ errors.message?.toString() }}</small>

                            <button type="submit">Invia</button>
                        </form>
                        <div v-else>
                            <h2>Messaggio inviato correttamente</h2>
                        </div>
                    </div>
                <div class="loading" v-else>
                    <Loader />
                </div>

                </div>
            </div>

        </div>



    </section>
</template>

<style lang="scss">

.contact-title{
    margin-bottom: 30px;
}

.form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    button{
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        width:100%;
    }

    .btn-error{
        background-color: lightgrey;
        margin-bottom: 15px;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 5px;
            font-weight: bold;
        }

        input, textarea {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;

            &:focus {
                border-color: #2b00ff;
                outline: none;
            }
        }

        small{
            margin-bottom: 15px;
            color: red;
        }

        button {
            background-color: #007bff;
            color: white;

            &:hover {
                background-color: #0056b3;
            }
        }
    }
}

    
</style>