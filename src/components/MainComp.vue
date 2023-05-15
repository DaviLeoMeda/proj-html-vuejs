<script>
import AffiliateBanner from './AffiliateBanner.vue'
import MainCards from './MainCards.vue'
import InfoBanner from './InfoBanner.vue'

export default {
    name: "MainComp",
    components: {
        AffiliateBanner,
        MainCards,
        InfoBanner

    }
}
</script>

<template>
    <AffiliateBanner />
    <MainCards />
    <InfoBanner />
</template>

<style lang="scss"></style>