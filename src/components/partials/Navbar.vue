<script>
export default {
    
}
</script>

<template>
    <div>
        <header>
            <nav class="container">
                <ul>
                    <li><router-link :to="{ name:'home'}">Home</router-link></li>
                    <li><router-link :to="{ name:'projects'}">i miei progetti</router-link></li>
                    <li><router-link :to="{ name:'contacts'}">Contatti</router-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<style lang="scss">
    ul{
        list-style-type: none;
        display: flex;
        gap: 3rem;
        padding-left: 0;
    }

    li{
        display:flex;
    }
</style>