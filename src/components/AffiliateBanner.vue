<script>


export default {
    name: "AffiliateBanner"

}
</script>


<template>
    <main class="d-flex bg-coral">
        <div class="inclined flex-grow-1 d-flex flex-column justify-content-center align-items-center text-white">
            <h2>Udemy Affiliate Sales</h2>
            <p class="mx-5">Monetize your audience and attract new customers with Udemy!</p>
        </div>
        <div class="inclinedtwo">
            <img src="../../public/img/slide-1.jpg" alt="">
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

div {
    .bg-coral {
        background-color: $bg-coral;
    }
}

.inclined {
    clip-path: polygon(0 0, 75% 0%, 100% 100%, 0% 100%);
}

.inclinedtwo {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 12.5% 100%);
}
</style>