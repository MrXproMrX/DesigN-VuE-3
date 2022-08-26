<template>
    <section class="container">
      <div class="iframe">
        <div class="iframe__list">

          <div class="iframe__video__mrx">
            <iframe :src="videoIfrome" allowfullscreen></iframe>
          </div>
          
          <div class="iframe__item">
            <Iframelist :iframes="iframes" @video="video"></Iframelist>
          </div>

        </div>
      </div>
    </section>
</template>

<script>
import Iframelist from '@/components/video/Iframelist.vue';
import IframeJs from '@/data/IframeJs'
export default {
  components:{
    Iframelist
  },
  data(){
    return{
      iframes:IframeJs,
      videoIfrome:IframeJs[0].link.props.src,
    }
  },
  methods:{
    video(link){
      this.videoIfrome = link.props.src
    }
  }
}
</script>