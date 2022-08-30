<template>
    <ul class="iframe__list__mrx">
        <li class="iframe__item__mrx" v-for="(iframe,index) in iframes" :key="index" @click="$emit('video',iframe.link)">
           <div class="iframe__item__cart">
                <img class="iframe__video" :src="iframe.img" alt="iframe.link.props.title">
           </div>
           <h2 class="iframe__title">{{iframe.link.props.title}}</h2>
        </li>
    </ul>
</template>

<script>
export default {
    emits:['video'],
    props:['iframes'],
}
</script>