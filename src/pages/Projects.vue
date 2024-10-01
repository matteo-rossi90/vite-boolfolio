<script>
import axios from 'axios';
import { store } from '../store/store';

export default {
    name: 'Projects',
    data(){
        return{
            projects:[],
            types:[],
            technologies:[],
        }
    },
    methods:{
        getApi(apiUrl, type = 'projects'){
            axios.get(apiUrl)
            .then(response => {
                if(type === 'projects'){
                    console.log(response.data.data);
                    this.projects = response.data.data;
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
            <div class="box-cards">
                <div v-for="project in projects" :key="project.id" class="cards">
                    <h4 class="title">
                        {{ project.title }}
                    </h4>

                    <img :src="getImageUrl(project.img)" :alt="project.title">

                    <ul class="list-projects">
                        <li>
                            <p>{{ project.description }}</p>
                        </li>
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
        </div>
    </div>
</template>

<style lang="scss">

    .container-cards{
        width: 85%;
        margin: 0 auto;
        
        .box-cards{
            display: flex;
            flex-wrap:wrap;
            gap: 15px;
            justify-content: start;
            align-items: stretch;
            margin: 30px 0;

            .cards{
                // height: 500px;
                padding: 20px;
                width: calc(100% / 3 - 10px);
                border-radius: 10px;
                background-color: rgb(226, 226, 226);
                
                img{
                    margin: 15px 0;
                    object-fit:cover;
                    width: 100%;
                    aspect-ratio: 12 / 9;
                    border-radius: 10px;
                }

                ul, li {
                    margin: 20px 0;
                    padding: 0;
                }


                .list-techs{
                    display: flex;
                    flex-wrap:wrap;
                    gap: 10px;
                    justify-content: start;
                


                }

                

            }
        }
    }
</style>