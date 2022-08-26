<template>
    <ul class="footer__icons">
        <li v-for="(icon,index) in icons" :key="index">
            <a :href="icon.link" class="footer__icons__link">
                <img :src="icon.img" :alt="icon.img">
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    props:['icons']
}
</script>