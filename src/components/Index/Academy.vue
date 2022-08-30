<template>
    <section class="container">
        <div class="Academy">
             <div class="Academy__cart">
                <h2 class="Academy__title__h2">{{Academy.title}} {{Academy.span}}</h2>
                <div class="Academy__list clearfix">
                    <div class="Academy__img">
                        <img :src="Academy.img" :alt="Academy.title">
                    </div>
                    <div class="Academy__text">
                        <p>{{Academy.text}}</p>
                    </div>
                </div>

                <div v-if="Academy.videoList">

                <div class="Academy__list__video">
                    <iframe :src="Academy.videoList.videoiframe" allowfullscreen></iframe>
                </div>

                <div class="Academy__video">
                    <ul class="Academy__menu">
                        <li v-for="(vedeo,index) in Academy.videoList" :key="index">
                            <div class="Academy__menu__img">
                                <img :src="vedeo.img" :alt="vedeo.img + index">
                            </div>
                            <h2 class="Academy__menu__title">{{vedeo.videoiframe.props.title}}</h2>
                        </li>
                    </ul>
                </div>
                
                </div>
             </div>
        </div>
    </section>
</template>

<script>
    import IndexWorks from '@/data/IndexWorks';
    export default{
        computed:{
            Academy(){
                return IndexWorks.find(Academy => Academy.id === +this.$route.params.id);
            }
        },

        data(){
            return{

            }
        }
    }
</script>