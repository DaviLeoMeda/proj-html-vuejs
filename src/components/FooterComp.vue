<script>
import FooterFirst from "./FooterFirst.vue"

export default {
    name: "FooterComp",
    components: {
        FooterFirst
    }
}
</script>

<template>
    <footer>
        <div class="containerShort py-5">
            <FooterFirst />
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