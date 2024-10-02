<script>
export default {
    name: 'Paginator',
    props:{
        data: Object
    },
    methods:{
        callApi(link){
            this.$emit('callApi', link)
        }
    }
}
</script>

<template>
    <div class="paginator">
        <button class="btn-paginator" 
        v-for="(link, index) in data.links" :key="index" 
        v-html="link.label"
        @click="callApi(link.url)"
        :disabled="link.active || !link.url"></button>
    </div>
</template>

<style lang="scss">
    .paginator .btn-paginator{
        font-size: 10px;
        padding: 10px
    }   
</style>