<script>

export default {
    name: "NavComp"
}
</script>

<template>
    <nav>

        <div>
            <img src="../../public/img/MasterStudy.svg" alt="">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text text-uppercase"><i class="fa-solid fa-bars mx-1"></i>Category</span>
            <input type="text" placeholder="Search courses" class="form-control mysticBg"
                aria-label="Amount (to the nearest dollar)">
            <button class="btn btn-outline-light petrol" type="button" id="inputGroupFileAddon04"><i
                    class="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div class="d-flex justify-content-between">
            <span class="bfMegaphone">Become an Instructor</span>
            <span class="bfBusiness">For Enterprises</span>
        </div>

        <div>
            <span class="bfLogin">Login</span>
            <span class="text-uppercase bg-danger py-3 px-4 rounded-5 text-white redbutton">sign up</span>
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
</style>