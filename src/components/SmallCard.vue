<script>

export default {
    name: "SmallCard",
    props: ['infoCard']


}
</script>


<template>
    <div class="card col-2 my-4">
        <img :src="infoCard.imgCard" class="card-img-top" :alt="infoCard.imgCard">
        <div class="card-body">
            <h6 class="card-title">{{ infoCard.title }}</h6>
        </div>

        <div class="card-body d-flex justify-content-between align-items-center">
            <span>Stars</span>
            <span>Price</span>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>