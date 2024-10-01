<script>
import axios from 'axios';
import { store } from '../store/store';

export default {
    name: 'Projects',
    data(){
        return{

        }
    },
    methods:{
        getApi(){
            axios.get(store.apiUrl + 'projects')
            .then(response => {
                console.log(response.data);
                this.response.data;
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
        <h1>
            Progetti
        </h1>
    </div>
</template>

<style lang="scss">
    
</style>