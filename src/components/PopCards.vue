<script>
import SmallCard from './SmallCard.vue'
import { store } from "../store"


export default {
    name: "PopCards",
    components: {
        SmallCard
    },
    data() {
        return {
            store
        }
    }


}
</script>


<template>
    <main>
        <div class="assets py-5 text-center">

            <h2>Popular Development Courses</h2>
            <p>Discover our most popular courses for self learning</p>
            <div class="row gy-3">
                <SmallCard v-for="(elem, index) in store.arrayLastCards" :key="index" :infoCard="elem" />
            </div>
        </div>

        <div class="d-flex justify-content-center align-items-center py-5">
            <div class="border p-3 bg-white">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="border p-3 bg-white">
                <i class="fa-solid fa-chevron-right"></i>
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;


main {

    background-color: $bg-mystic;

    .assets {
        width: 80%;
        margin: 0 auto
    }
}
</style>