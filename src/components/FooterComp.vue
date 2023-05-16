<script>
import FooterFirst from "./FooterFirst.vue"
import FooterSecond from "./FooterSecond.vue"

export default {
    name: "FooterComp",
    components: {
        FooterFirst,
        FooterSecond

    }
}
</script>

<template>
    <footer>
        <div class="containerShort py-5">
            <FooterFirst />
        </div>
        <div class="border-top border-secondary d-flex justify-content-center align-items-center py-4">
            <FooterSecond />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

footer {

    background-color: $bg-blueBar;

    .containerShort {
        width: 60%;
        margin: 0 auto;
    }
}
</style>