<script>
import { store } from "../store"

export default {
    name: "NavBar",
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <nav>

        <div class="containering">

            <ul class="d-flex justify-content-between align-items-center py-4">

                <li v-for="(elem, index) in store.arrayNav" :key="index">
                    <span>{{ elem.imgLink }}</span><a href="#">{{ elem.name }}</a>
                </li>

            </ul>

        </div>


    </nav>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

nav {

    background-color: $bg-blueBar;



    .containering {
        width: 50%;
        margin: 0 auto;

        ul {

            li {
                list-style-type: none;
                color: $bg-whitening;

                a {
                    text-decoration: none;
                    color: $bg-whitening;
                }
            }
        }
    }
}
</style>