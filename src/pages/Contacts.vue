<script>
export default {
    name: 'Contacts',
    data(){
        return{
            name:'',
            email:'',
            message:''
        }
    },
    methods:{
        sendForm(){
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            console.log(data)
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
                <form action="" @submit.prevent="sendForm" @keyup.enter="sendForm">
                    <label for="name">Nome</label>
                    <input v-model="name" type="text" id="name" name="name" placeholder="Inserisci il tuo nome">

                    <label for="email">Email</label>
                    <input v-model="email" type="email" id="email" name="email" placeholder="Inserisci la tua email">

                    <label for="message">Messaggio</label>
                    <textarea v-model="message" id="message" name="message" rows="10" placeholder="Scrivi il tuo messaggio"></textarea>

                    <button type="submit">Invia</button>
                </form>
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
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 5px;
            font-weight: bold;
        }

        input, textarea {
            margin-bottom: 15px;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;

            &:focus {
                border-color: #007bff;
                outline: none;
            }
        }

        button {
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;

            &:hover {
                background-color: #0056b3;
            }
        }
    }
}

    
</style>