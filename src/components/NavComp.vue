<script>

export default {
    name: "NavComp"
}
</script>

<template>
    <nav class="d-flex justify-content-between align-items-center">

        <div>
            <img src="../../public/img/MasterStudy.svg" alt="">
        </div>

        <div class="input-group inputNav">
            <span class="input-group-text text-uppercase"><i class="fa-solid fa-bars mx-1"></i>Category</span>
            <input type="text" placeholder="Search courses" class="form-control mysticBg"
                aria-label="Amount (to the nearest dollar)">
            <button class="btn btn-outline-light petrol" type="button" id="inputGroupFileAddon04"><i
                    class="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div class="d-flex justify-content-between">
            <span class="bfMegaphone mx-2"><a href="#">Become an Instructor</a></span>
            <span class="bfBusiness mx-2"><a href="#">For Enterprises</a></span>
        </div>

        <div>
            <a href="" class="mx-2"><span class="bfLogin">Login</span></a>
            <a href="#" class="mx-2"><span class="text-uppercase bg-danger py-3 px-4 rounded-5 text-white redbutton">sign
                    up</span></a>
            <a href="" class="mx-2"><i class="fa-regular fa-bookmark"></i></a>
        </div>

    </nav>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.mysticBg {
    background-color: $bg-mystic;

}

.petrol {
    background-color: $bg-petrol;
}

.bfMegaphone::before {
    font-family: 'Font Awesome\ 5 Free';
    font-weight: 900;
    content: '\f0a1';
    margin: 0 3px;
}

.bfBusiness::before {
    font-family: 'Font Awesome\ 5 Free';
    font-weight: 900;
    content: '\f0b1';
    margin: 0 3px;
}

.bfLogin::before {
    font-family: 'Font Awesome\ 5 Free';
    font-weight: 900;
    content: '\f007';
    margin: 0 3px;
}

.redbutton {
    font-size: 10px;
    font-weight: bold;
}

.inputNav {
    width: 500px;
}


nav {

    a {
        text-decoration: none;
        color: black;
    }
}
</style>