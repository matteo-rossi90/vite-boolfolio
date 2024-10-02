<script>
import axios from 'axios';
import { store } from '../store/store';

import Loader from '@/components/partials/Loader.vue';

export default {
    components:{
        Loader
    },
    name: 'ProjectByTechnologies',
    data(){
        return{
            projects:[],
            techsName:'',
            isLoading: true
        }
    },
    methods:{
        getApi(slug){
            axios.get(store.apiUrl + 'project-by-technologies/' + slug)
            .then(res =>{
                this.isLoading = false;
                console.log(res)
                if(res.data.success){
                    console.log(res.data.technologies.name)
                    this.projects = res.data.technologies.projects;
                    this.techsName = res.data.technologies.name;
                }else{
                    console.log('error 404')
                    this.$router.push({name: '404'});
                }
            })
        },
        getImageUrl(imagePath) {
        const baseUrl = 'http://127.0.0.1:8000'; 
        return baseUrl + imagePath;
    }
    },
    mounted(){
        console.log(this.$route);
        const slug = this.$route.params.slug;
        this.getApi(slug);
    }
}
</script>

<template>

    <section>
        <div class="container">
            <h1 class="title">{{ techsName }}</h1>

        <div class="container-cards">
            <div class="loading" v-if="isLoading">
                <Loader />
            </div>
            <div class="box-cards" v-else>
                <div v-for="project in projects" :key="project.id" class="cards">
                    <h4>
                        
                        <router-link :to="{name: 'projectDetail', params:{slug: project.slug}}">
                            {{ project.title }}
                        </router-link> 
                    </h4>

                    <img :src="getImageUrl(project.img)" :alt="project.title">

                    <ul class="list-projects">
                         <li>
                            <span class="badge-type">{{ project.type.name }}</span>
                        </li>
                    </ul> 
                </div>
            </div>

        </div>
        
    </div>

    </section>
</template>

<style lang="scss">

section{
    padding: 40px 0;
}

</style>