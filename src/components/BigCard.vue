<script>

export default {
    name: "BigCard",
    props: ['textCard']


}
</script>


<template>
    <div class="card mb-3 col-5">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="textCard.imgCard" class="img-fluid rounded-start" alt="textCard.imgCard">
            </div>
            <div class="col-md-8 d-flex align-items-center">
                <div class="card-body">
                    <h5 class="card-title">{{ textCard.title }}</h5>
                    <p class="card-text">{{ textCard.text }}</p>
                    <a href="#" class="my-3"><span
                            class="text-uppercase bg-danger py-3 px-4 rounded-5 text-white redbutton">{{ textCard.textAnchor
                            }}</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.redbutton {
    font-size: 10px;
    font-weight: bold;
}

a {
    text-decoration: none;
    color: #fff;
}
</style>