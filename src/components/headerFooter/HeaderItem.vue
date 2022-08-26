<template>
    <ul class="header__menu">
        <li v-for="(link,index) in links" :key="index">
            <router-link class="header__menu__link" :to="link.link">{{link.title}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props:['links'],
}
</script>