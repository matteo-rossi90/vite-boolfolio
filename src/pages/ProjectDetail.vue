<script>
import axios from 'axios';
import { store } from '../store/store';

export default {
    name: 'ProjectDetail',
    data(){
        return{
            project:{
                title:'',
                description: '',
                theme:'',
                company:'',
                start_date:'',
                end_date:'',
                img:'',
                type:{},
                technologies:[]
            }
        }
    },
    methods:{
        getApi(slug){
            axios.get(store.apiUrl + 'project-by-slug/' + slug)
            .then(res =>{
                if(res.data.success){
                    this.project = res.data.project
                }else{
                    console.log('error 404')
                }
            })
        },
        getImageUrl(imagePath) {
        const baseUrl = 'http://127.0.0.1:8000'; 
        return baseUrl + imagePath;
}
    },
    mounted(){
        console.log(this.$route.params.slug);
        const slug = this.$route.params.slug;
        this.getApi(slug);
    },
    computed:{
        infoProject(){
            return `
                <ul>
                    <li><strong>Argomento:</strong> ${this.project.theme}</li>
                    <li><strong>Azienda:</strong> ${this.project.company}</li>
                    <li><strong>Inizio:</strong> ${this.project.start_date}</li>
                    <li><strong>Fine:</strong> ${this.project.end_date}</li>
                </ul>`
        }
    }
}
</script>

<template>
    <div class="container">
        <h1 class="title">{{ project.title }}</h1>
        <div class="box-project">
            <div class="col-image">
                <img :src="getImageUrl(project.img)" :alt="project.title">
            </div>
            <div class="col-text">
                <h3>Descrizione</h3>
                <p>{{ project.description }}</p>
                <div v-html="infoProject"></div>
            </div>

        </div>
        
    </div>
</template>

<style lang="scss">

    ul li,
    div > h3, p{
        padding: 10px 0;
    }

    .box-project{
        display:flex;
        margin: 0 auto;
        padding: 40px 0;
    }

    .col-image,
    .col-text{
        padding: 10px;
    }

    .col-image{
        width: 50%;

        img{
            object-fit: contain;
            width: 90%;
        }
    }

    .col-text{
        width: 50%;
    }
</style>