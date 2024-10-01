<script>
import axios from 'axios';
import { store } from '../store/store';

export default {
    name: 'Projects',
    data(){
        return{
            projects:[]
        }
    },
    methods:{
        getApi(){
            axios.get(store.apiUrl + 'projects')
            .then(response => {
                console.log(response.data.data);
                this.projects = response.data.data;
            })
            .catch(error => {
                console.error(error); 
            });
        }
    },
    mounted(){
        this.getApi();
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
                <div v-for="project in projects" :key="projects.id" class="cards">
                    <h4>
                        {{ project.title }}
                    </h4>

                    <ul>
                        <li>
                            <span>Data di inizio: </span><span>{{ project.start_date }}</span>
                        </li>
                        <li>
                            <span>Data di fine:</span><span>{{ project.end_date }}</span>
                        </li>
                         <li>
                            <p>{{ project.description }}</p>
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
            align-items: center;
            margin-top: 30px;

            .cards{
                height: 300px;
                padding: 10px;
                width: calc(100% / 3 - 10px);
                border-radius: 10px;
                background-color: rgb(226, 226, 226);
                ul,
                li{
                    margin: 20px 0;
                }
            }
        }
    }
</style>