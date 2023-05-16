<script>
import BigCard from './BigCard.vue'
import { store } from "../store"


export default {
    name: "AccessArea",
    components: {
        BigCard
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
        <div class="row justify-content-around assets py-5">
            <BigCard v-for="(elem, index) in store.arrayAccess" :key="index" :textCard="elem" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;


main {

    background-color: #fff;

    .assets {
        width: 80%;
        margin: 0 auto;
    }
}
</style>