<template>
<section>
    <!-- about start -->

    <div class="about">
        <section class="container">
            <div class="about__list">
                <div class="about__item">
                    <h2 class="about__title__h2">Yet the story of Orpheus</h2>
                    <div class="about__text">
                        <p>Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
                    </div>

                    <div class="about__cart">
                        <button @click="aboutVideo = !aboutVideo" class="about__cart__link_1">Video <span><i class="fas fa-angle-down"></i></span></button>
                        <router-link to="/video" class="about__cart__link_2">All videos</router-link>
                    </div>
                </div>

                <div class="about__item">
                    <div class="about__img">
                        <img src="../../assets/foto/fon.png" alt="logo">
                    </div>
                </div>
            </div>


            <div class="about__video" v-if="aboutVideo" @click="aboutVideo = !aboutVideo">
                <button class="header__button"><i class="fas fa-times"></i></button>
                <AboutVideoVue></AboutVideoVue>
            </div>
        </section>
    </div>

    <!-- about end -->


    <!-- works start -->
    
    <div class="works">
        <section class="container">
            <div class="works__cart">
                <ul class="works__cart__menu">
                    <li>
                        <a href="#!" class="works__cart__link">Recent NFT</a>
                    </li>

                    <li>
                        <a href="#!" class="works__cart__link__item">View More</a>
                    </li>
                </ul>
                <IndexWorks :works="works"></IndexWorks>
            </div>
        </section>
    </div>
    
    <!-- works end -->

    <!-- Contribution start -->

     <div class="Contribution">
        <section class="container">
            <div class="Contribution__cart">
                <ul class="works__cart__menu">
                    <li>
                        <a href="#!" class="works__cart__link">Contribution</a>
                    </li>

                    <li>
                        <a href="#!" class="works__cart__link__item">View More</a>
                    </li>
                </ul>

                <div class="Contribution__list">
                    <div class="Contribution__img">
                        <img src="../../assets/foto/Contribution_2.png" alt="">
                    </div>

                    <div class="Contribution__item">
                        <h2 class="Contribution__title__h2">3D Greek Statue Pack</h2>
                        <h3 class="Contribution__title__h3">Over 200 Greek style sculpture</h3>
                        <a href="../../assets/foto/Contribution.png" download class="Contribution__link">
                            <span>
                                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.375 13.625V17.125C18.375 17.5891 18.1906 18.0342 17.8624 18.3624C17.5342 18.6906 17.0891 18.875 16.625 18.875H4.375C3.91087 18.875 3.46575 18.6906 3.13756 18.3624C2.80937 18.0342 2.625 17.5891 2.625 17.125V13.625M6.125 9.25L10.5 13.625M10.5 13.625L14.875 9.25M10.5 13.625V3.125" stroke="#0A0D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            Download
                        </a>
                    </div>
                </div>

                <div class="Contribution__list">
                    <div class="Contribution__img">
                        <img src="../../assets/foto/Contribution_3.png" alt="">
                    </div>

                    <div class="Contribution__item">
                        <h2 class="Contribution__title__h2">Greek Statue Avatars</h2>
                        <h3 class="Contribution__title__h3">+500 Greek style <span>User Avatars</span></h3>
                        <a href="../../assets/foto/Contribution_3.png" download class="Contribution__link">
                            <span>
                                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.375 13.625V17.125C18.375 17.5891 18.1906 18.0342 17.8624 18.3624C17.5342 18.6906 17.0891 18.875 16.625 18.875H4.375C3.91087 18.875 3.46575 18.6906 3.13756 18.3624C2.80937 18.0342 2.625 17.5891 2.625 17.125V13.625M6.125 9.25L10.5 13.625M10.5 13.625L14.875 9.25M10.5 13.625V3.125" stroke="#0A0D11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </section>
     </div>

    <!-- Contribution end -->
</section>
</template>


<script>
import IndexWorks from '@/components/Index/IndexWorks.vue'
import Indexworks from '@/data/IndexWorks';
import AboutVideoVue from '@/components/Index/AboutVideo.vue';
export default {
    components:{
        IndexWorks,
        AboutVideoVue
    },

    data(){
        return{
            works:Indexworks,
            aboutVideo:false
        }
    }
}
</script>