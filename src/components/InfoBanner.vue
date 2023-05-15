<script>


export default {
    name: "InfoBanner",


}
</script>


<template>
    <main>
        <div id="bannerImg" class="position-relative">
            <!-- <img class="devImg" src="../../public/img/bg.jpg" alt=""> -->
            <div class="bannerAnchor position-absolute">
                <h2>Limitless learning, more possibilities</h2>
                <p>Online courses open the opportunity for learning to almost anyone, regardless od their sceduling
                    commitments.</p>
                <a href="#" class="mx-2"><span
                        class="text-uppercase bg-danger py-3 px-4 rounded-5 text-white redbutton">read more</span></a>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
// .devImg {
//     width: 100wh;
// }

#bannerImg {
    height: 500px;
    background-image: url(../../public/img/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.redbutton {
    font-size: 10px;
    font-weight: bold;
}

a {
    text-decoration: none;
    color: #fff;
}

.bannerAnchor {
    top: 50%;
    left: 30%;
    width: 400px;
    transform: translate(-50%);
}
</style>