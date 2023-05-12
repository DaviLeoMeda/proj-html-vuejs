<script>
import NavComp from './NavComp.vue'

export default {
    name: "HeaderComp",
    components: {
        NavComp
    }
}
</script>

<template>
    <header>

        <div id="firstHeader">

            <section class="my-2 container d-flex justify-content-between align-items-center">

                <div>
                    <select class="border-0" name="language" id="languageSelection">
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                        <option value="fr">Francais</option>
                    </select>
                </div>

                <div>
                    <ul class="d-flex justify-content-between align-items-center">
                        <li>
                            <a class="mx-3" href="#">Home</a>
                        </li>
                        <li>
                            <a class="mx-3" href="#">Pages</a>
                        </li>
                        <li>
                            <a class="mx-3" href="#">Course Formats</a>
                        </li>
                        <li>
                            <a class="mx-3" href="#">Demos</a>
                        </li>
                        <li>
                            <a class="mx-1" href="#"><i class="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>
                            <a class="mx-1" href="#"><i class="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a class="mx-1" href="#"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a class="mx-1" href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a class="mx-1" href="#"><i class="fa-brands fa-google-plus"></i></a>
                        </li>
                        <li>
                            <a class="mx-1" href="#"><i class="fa-brands fa-youtube"></i></a>
                        </li>
                    </ul>
                </div>

            </section>

            <section>
                <NavComp />
            </section>

        </div>



    </header>
</template>

<style lang="scss" scoped>
header {

    #firstHeader {

        border-bottom: 2px solid gray;

        section {



            div {
                ul {

                    li {
                        list-style-type: none;

                        a {
                            text-decoration: none;
                            color: gray;
                        }
                    }
                }
            }
        }
    }


}
</style>