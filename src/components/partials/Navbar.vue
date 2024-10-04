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

<style lang="scss" scoped>
    header{
        background-color: white;
    }
    header,
    nav{
        height: 60px;
    }
    
    ul{
        display: flex;
        gap: 3rem;
        padding-left: 0;
        height: 100%
    }

    li{
        display:flex;
        line-height: 35px;
        align-items: center;
    }
</style>