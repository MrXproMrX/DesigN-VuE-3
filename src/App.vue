<template>
  <section class="black_max" :class="{darkmode_mrx: mrx_pro == false}">
    <Header @darkhol="darkhol"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </section>
</template>


<script>
import Header from "@/components/headerFooter/Header.vue";
import Footer from "@/components/headerFooter/Footer.vue";
export default({
  components:{
    Header,
    Footer,
  },

  data(){
    return{
      dark:'no',
      mrx_pro:Header.dark
    }
  },

  methods:{
    darkhol(dark){
     this.mrx_pro = dark
    }
  },
})
</script>