<script>
import AffiliateBanner from './AffiliateBanner.vue'
import MainCards from './MainCards.vue'
import InfoBanner from './InfoBanner.vue'
import RecentCards from './RecentCards.vue'

export default {
    name: "MainComp",
    components: {
        AffiliateBanner,
        MainCards,
        InfoBanner,
        RecentCards

    }
}
</script>

<template>
    <AffiliateBanner />
    <MainCards />
    <InfoBanner />
    <RecentCards />
</template>

<style lang="scss"></style>