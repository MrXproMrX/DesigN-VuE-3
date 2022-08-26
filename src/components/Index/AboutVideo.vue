<template>
    <div class="about__video__cart">
        <iframe :src="videoIfrome" allowfullscreen></iframe>
    </div>
</template>

<script>
import IframeJs from '@/data/IframeJs';
export default{
    data(){
        return{
            IframeJs,
            videoIfrome:IframeJs[0].link.props.src,
        }
    }
}
</script>