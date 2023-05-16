<script>
import AffiliateBanner from './AffiliateBanner.vue'
import MainCards from './MainCards.vue'
import InfoBanner from './InfoBanner.vue'
import RecentCards from './RecentCards.vue'
import MailBanner from './MailBanner.vue'
import PopCards from './PopCards.vue'
import AccessArea from './AccessArea.vue'
import Testimonials from './Testimonials.vue'

export default {
    name: "MainComp",
    components: {
        AffiliateBanner,
        MainCards,
        InfoBanner,
        RecentCards,
        MailBanner,
        PopCards,
        AccessArea,
        Testimonials

    }
}
</script>

<template>
    <AffiliateBanner />
    <MainCards />
    <InfoBanner />
    <RecentCards />
    <MailBanner />
    <PopCards />
    <AccessArea />
    <Testimonials />
</template>

<style lang="scss"></style>