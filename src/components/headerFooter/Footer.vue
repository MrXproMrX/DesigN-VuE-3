<template>
    <footer>
        <div class="footer">
            <section class="container">
                <div class="footer__list">
                    <h2 class="footer__title__h2">Let’s Connect</h2>
                    <h4 class="footer__title__h4">Get in touch for opportunities or just to say hi! 👋</h4>
                    <FooterIcons :icons="icons"></FooterIcons>
                </div>
            </section>
        </div>
    </footer>
</template>

<script>
import FooteIcon from '@/data/FooteIcon';
import FooterIcons from '@/components/headerFooter/FooterIcons.vue';
export default {
    components:{
        FooterIcons,
    },

    data(){
        return{
            icons:FooteIcon
        }
    }
}
</script>