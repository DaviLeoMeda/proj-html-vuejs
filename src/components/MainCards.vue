<script>
import SmallCard from './SmallCard.vue'
import { store } from "../store"


export default {
    name: "MainCards",
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
        <div class="assets my-4">

            <h4>Popular Development Courses</h4>
            <div class="row">
                <SmallCard v-for="(elem, index) in store.arrayMainCards" :key="index" :infoCard="elem" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

main {

    .assets {
        width: 80%;
        margin: 0 auto
    }
}
</style>