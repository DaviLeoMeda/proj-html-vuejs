<script>


export default {
    name: "FooterFirst",


}
</script>


<template>
    <div class="row">
        <div class="text-white col-2">
            <h5 class="text-uppercase">
                about
            </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime ipsam fugit, praesentium aliquam aut
                veritatis ut fugiat asperiores ipsum temporibus quam distinctio alias quisquam labore! Eligendi
                necessitatibus ullam eveniet.</p>
        </div>
        <div class="text-white col-2">
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
        <div class="text-white col-2">
            <h5 class="text-uppercase">
                social network
            </h5>
            <div class="row">
                <span class="social col-3 bg-dark rounded-5 p-2">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                </span>
                <span class="social col-3 bg-pinker rounded-5 p-2">
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </span>
                <span class="social col-3 bg-petrol rounded-5 p-2">
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                </span>
                <span class="social col-3 bg-danger rounded-5 p-2">
                    <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                </span>
                <span class="social col-3 bg-primary rounded-5 p-2">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </span>
                <span class="social col-3 bg-pinker rounded-5 p-2">
                    <a href="#"><i class="fa-brands fa-discord"></i></a>
                </span>
                <span class="social col-3 bg-coral rounded-5 p-2">
                    <a href="#"><i class="fa-brands fa-google-plus"></i></a>
                </span>
                <span class="social col-3 bg-primary rounded-5 p-2">
                    <a href="#"><i class="fa-brands fa-skype"></i></a>
                </span>

            </div>
        </div>
        <div class="col-2">
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

        width: 40px;

        a {
            background-color: #fff;

        }
    }
}
</style>