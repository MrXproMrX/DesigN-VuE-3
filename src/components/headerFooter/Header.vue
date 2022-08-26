<template>
    <header>
        <div class="header">
            <section class="container">
                <div class="header__list">
                    <div class="header__logo">
                        <router-link v-if="dark" to="/"><img src="../../assets/foto/Logo.svg" alt="logo"></router-link>
                        <router-link v-else to="/"><img src="../../assets/foto/Logo_2.svg" alt="logo"></router-link>
                    </div>

                    <div class="header__cart">

                        <div class="header__burger__menu" :class="{burger_mrx: burger == true}">
                            <HeaderItem :links="links"></HeaderItem>
                        </div>

                        <div class="header__burger">
                            <button v-if="burger" @click="burger = !burger" data-target="slide-out" class="header__button"><i class="fas fa-times"></i></button>
                            <button v-else @click="burger = !burger" data-target="slide-out" class="header__button"><i class="fas fa-bars"></i></button>
                        </div>

                        <button @click="$emit('darkhol',this.dark = !this.dark)" class="header__button">
                            <span v-if="dark"><i class="fas fa-sun"></i></span>
                            <span v-else><i class="fas fa-moon"></i></span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </header>
</template>

<script>
import HeaderItem from '@/components/headerFooter/HeaderItem.vue';
import headerLinks from '@/data/headerLinks';
export default {
    emits:['darkhol'],
    components:{
        HeaderItem
    },

    data(){
        return{
            links:headerLinks,
            burger:false,
            dark:true
        }
    },
}
</script>