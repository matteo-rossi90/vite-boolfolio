<script>
import axios from 'axios';
import { store } from '../store/store';

import Loader from '../components/partials/Loader.vue';

export default {
    components:{
        Loader
    },
    name: 'ProjectByType',
    data(){
        return{
            projects:[],
            typeName:'',
            isLoading: true
        }
    },
    methods:{
        getApi(slug){
            axios.get(store.apiUrl + 'project-by-type/' + slug)
            .then(res =>{
                this.isLoading = false;
                console.log(res)
                if(res.data.success){
                    console.log(res.data.type.name)
                    this.projects = res.data.type.projects;
                    this.typeName = res.data.type.name;
                }else{
                    console.log('error 404');
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
            <div v-if="projects.length > 0">
                <h1 class="title">{{ typeName }}</h1>

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
                                <li v-if="project.technologies && project.technologies.length > 0">
                                    <ul class="list-techs">
                                        <li v-for="tech in project.technologies" :key="tech.id">
                                            <small class="badge-tech">
                                                {{ tech.name }}
                                            </small>
                                        </li>
                                    </ul>
                                </li>
                                <li v-else>
                                    <small>Nessuna tecnologia</small>
                                </li>
                            </ul> 
                        </div>
                    </div>

                </div>

            </div>
            <div v-else>
                <p>Non è stato trovato nessun progetto</p>
            </div>
        
    </div>

    </section>
</template>

<style lang="scss">

section{
    padding: 40px 0;
}

</style>