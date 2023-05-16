<script>


export default {
    name: "FooterFirst",


}
</script>


<template>
    <div class="d-flex justify-content-between">
        <div class="text-white w-25">
            <h5 class="text-uppercase">
                about
            </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime ipsam fugit, praesentium aliquam aut
                veritatis ut fugiat asperiores ipsum temporibus quam distinctio alias quisquam labore! Eligendi
                necessitatibus ullam eveniet.</p>
        </div>
        <div class="text-white ">
            <h5 class="text-uppercase">
                contact
            </h5>
            <p>USA, California 20, First Avenue, California</p>
            <p>
                Tel.: +1 212 458 300 32
                Fax: +1 212 375 24 14
            </p>
            <span><a href="#">info@masterstudy.com</a></span>
        </div>
        <div class="text-white" style="width: 150px;">
            <h5 class="text-uppercase">
                social network
            </h5>
            <div class="row">
                <span class="social col-3 d-flex justify-content-center bg-dark rounded-5 p-2">
                    <a class="rounded-5" href="#"><i class="fa-brands fa-facebook"></i></a>
                </span>
                <span class="social col-3 d-flex justify-content-center bg-pinker rounded-5 p-2">
                    <a class="rounded-5" href="#"><i class="fa-brands fa-instagram"></i></a>
                </span>
                <span class="social col-3 d-flex justify-content-center bg-petrol rounded-5 p-2">
                    <a class="rounded-5" href="#"><i class="fa-brands fa-linkedin"></i></a>
                </span>
                <span class="social col-3 d-flex justify-content-center bg-danger rounded-5 p-2">
                    <a class="rounded-5" href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                </span>
                <span class="social col-3 d-flex justify-content-center bg-primary rounded-5 p-2">
                    <a class="rounded-5" href="#"><i class="fa-brands fa-twitter"></i></a>
                </span>
                <span class="social col-3 d-flex justify-content-center bg-pinker rounded-5 p-2">
                    <a class="rounded-5" href="#"><i class="fa-brands fa-discord"></i></a>
                </span>
                <span class="social col-3 d-flex justify-content-center bg-coral rounded-5 p-2">
                    <a class="rounded-5" href="#"><i class="fa-brands fa-google-plus"></i></a>
                </span>
                <span class="social col-3 d-flex justify-content-center bg-primary rounded-5 p-2">
                    <a class="rounded-5" href="#"><i class="fa-brands fa-skype"></i></a>
                </span>

            </div>
        </div>
        <div class="p-4 w-25">
            <img class="w-100" src="../../public/img/Top-udemy-courses-90-percent-off.jpg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.bg-pinker {
    background-color: $bg-pink;
}

.bg-petrol {
    background-color: $bg-petrol;
}

.bg-coral {
    background-color: $bg-coral;
}

div {
    .social {



        a {
            background-color: #fff;

        }
    }
}
</style>