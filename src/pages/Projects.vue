<script>
import axios from 'axios';
import { store } from '../store/store';

import Loader from '../components/partials/Loader.vue';


export default {
    components:{
        Loader
    },
    name: 'Projects',
    data(){
        return{
            projects:[],
            types:[],
            technologies:[],
            paginatorData:{
                current_page:1,
                links:[]
            },
            isLoading: true
        }
    },
    methods:{
        getApi(apiUrl, type = 'projects'){
            axios.get(apiUrl)
            .then(response => {
                this.isLoading = false;
                if(type === 'projects'){
                    this.paginatorData.current_page = response.data.current_page;
                    this.paginatorData.links = response.data.links;
                    this.projects = response.data.data;
                    console.log(this.paginatorData)
                }else{
                    console.log(type);
                    this[type] = response.data;
                }
            })
            .catch(error => {
                console.error(error); 
            });
        },
        getImageUrl(imagePath) {
            const baseUrl = 'http://127.0.0.1:8000'; 
            return baseUrl + imagePath;
        }
    },
    mounted(){
        this.getApi(store.apiUrl + 'projects', 'projects');
        this.getApi(store.apiUrl + 'type', 'types');
        this.getApi(store.apiUrl + 'technologies', 'technologies');
    }
}
</script>

<template>

    <section>
        <div class="container">
            <h1 class="title">
                Progetti
            </h1>
            <div class="container-cards">
                <div class="paginator">
                    <button class="btn-paginator" 
                    v-for="(link, index) in paginatorData.links" :key="index" 
                    v-html="link.label"
                    @click="getApi(link.url)"
                    :disabled="link.active || !link.url"></button>
                </div>
            
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

                <div class="paginator">
                    <button class="btn-paginator" 
                    v-for="(link, index) in paginatorData.links" :key="index" 
                    v-html="link.label"
                    @click="getApi(link.url)"
                    :disabled="link.active || !link.url"></button>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">


            <h2 class="title">Progetti per categoria</h2>

            <div class="project-by-type">
                <div class="badge-type-projects" v-for="type in types" :key="type.id">
                    <router-link :to="{name:'projectByType', params:{slug: type.slug}}">
                        {{ type.name }}
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">

            <h2 class="title">Progetti per tecnologia</h2>

            <div class="project-by-tech">
                <div class="badge-techs-projects" v-for="tech in technologies" :key="tech.id">
                    {{ tech.name }}
                </div>

            </div>
        </div>
    </section>


</template>

<style lang="scss">

.project-by-type,
.project-by-tech{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-content: center;
    padding: 20px 0
}

section{
    padding: 40px 0;
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

.paginator {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 40px 0;

    .btn-paginator {
        background-color: #e2e2e2;
        padding: 8px 12px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #ccc;
        }

        &:disabled {
            background-color: #ddd;
            cursor: not-allowed;
        }
    }
}

    .paginator .btn-paginator{
        font-size: 10px;
        padding: 10px
    }


</style>