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
        this.getApi(store.apiUrl + 'type', 'type');
        this.getApi(store.apiUrl + 'technologies', 'technologies');
    }
}
</script>

<template>
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
                        {{ project.title }}
                    </h4>

                    <img :src="getImageUrl(project.img)" :alt="project.title">

                    <ul class="list-projects">
                        <!-- <li> -->
                            <!-- <p>{{ project.description }}</p> -->
                        <!-- </li> -->
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

</template>

<style lang="scss">

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

.container-cards {
    width: 85%;
    margin: 0 auto;

    .box-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: start;
        align-items: stretch;
        margin: 30px 0;

        .cards {
            padding: 20px;
            width: calc(100% / 3 - 10px);
            border-radius: 10px;
            background-color: rgb(226, 226, 226);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            }

            img {
                margin: 15px 0;
                object-fit: cover;
                width: 100%;
                aspect-ratio: 12 / 9;
                border-radius: 10px;
            }

            ul, li {
                margin: 20px 0;
                padding: 0;
                list-style-type: none;
            }

            .list-techs {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;

            }
        }
    }
}

//responsive
@media (max-width: 768px) {
    .container-cards .box-cards .cards {
        width: calc(100% / 2 - 10px);
    }
}

@media (max-width: 480px) {
    .container-cards .box-cards .cards {
        width: 100%;
        font-size: 12px;
    }

    .paginator .btn-paginator{
        font-size: 10px;
        padding: 10px
    }
}

</style>