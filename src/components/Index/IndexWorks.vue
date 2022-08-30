<template>
    <div class="works__list">
        <div class="works__item" v-for="(work,index) in works" :key="index">
            <div class="works__img">
                <router-link :to="work.link + work.id">
                    <img :src="work.img" :alt="work.title">
                    <h4 class="works__title__h4">{{work.title}} <span>{{work.span}}</span></h4>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props:['works'],
}
</script>