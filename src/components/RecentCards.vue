<script>
import SmallCard from './SmallCard.vue'
import { store } from "../store"

export default {
    name: "RecentCards",
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
    <div class="assets text-center my-5">
        <h2 class="my-4">
            Recent courses
        </h2>
        <ul class="my-4 d-flex justify-content-around">
            <li><a href="#">All Categories</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">IT & Software</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Office Productivity</a></li>
        </ul>

        <div class="row">
            <SmallCard v-for="(elem, index) in store.arrayCompCards" :key="index" :infoCard="elem" />
        </div>

        <div class="my-5">
            <a href="#"><span class="text-uppercase bg-danger py-3 px-4 rounded-5 text-white redbutton">show
                    more</span></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.assets {
    width: 80%;
    margin: 0 auto;

    div {
        a {
            text-decoration: none;
        }
    }

    ul {
        li {
            list-style-type: none;

            a {
                text-decoration: none;
                color: $bg-oxford;
            }
        }
    }
}

li a::hover {
    background-color: rgb(116, 133, 148);
    padding: 2rem 3rem;
    border-radius: 1rem;
}

.redbutton {
    font-size: 10px;
    font-weight: bold;
}
</style>