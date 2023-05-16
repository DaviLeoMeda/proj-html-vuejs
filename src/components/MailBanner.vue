<script>


export default {
    name: "MailBanner",


}
</script>


<template>
    <main>
        <div class="container d-flex justify-content-center align-items-center py-4">
            <div>
                <h6>
                    Subscribe our Newsletter
                </h6>
                <p>
                    There are mani variations of passages of Lorem Ipsium aviable, but the majority have suffered alteration
                    in some form, by injected humours, or randomized words
                </p>
            </div>

            <div>
                <h6 class="text-uppercase">
                    your email address
                </h6>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter your E-mail"
                        aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary petrol text-white text-uppercase" type="button"
                        id="button-addon2">subscribe</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

main {

    background-color: $bg-coral;


}

.petrol {
    background-color: $bg-petrol;
}
</style>