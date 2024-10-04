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

<style lang="scss" scoped>

.paginator {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 40px 0;

    .btn-paginator {
        background-color: #ffffff;
        padding: 8px 12px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #ececec;
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