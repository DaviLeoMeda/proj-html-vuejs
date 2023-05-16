<script>

export default {
    name: "SmallCard",
    props: ['infoCard']


}
</script>


<template>
    <div class="card col-2 my-4 ">
        <img :src="infoCard.imgCard" class="card-img-top" :alt="infoCard.imgCard">
        <div class="card-body">
            <h6 class="card-title">{{ infoCard.title }}</h6>
        </div>

        <div class="card-body">
            <!-- <img v-for="n in 5" src="infoCard.star" :src="(n <= infoCard.vote) ? 'F' : 'E'" alt=""> -->
            <i v-for="n in 5" class="fa-star" :class="(n <= infoCard.vote) ? 'fa-solid' : 'fa-regular'"></i>
            <p class="text-decoration-line-through fs-6">{{ infoCard.OldPrice }}</p>
            <p class="fs-5">{{ infoCard.NewPrice }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>