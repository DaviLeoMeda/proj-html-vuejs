<script>


export default {
    name: "InfoBanner",


}
</script>


<template>
    <main>
        <div class="bg-white p-5 position-absolute">
            <h4>
                Investing for Your Future
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea error dignissimos nobis ut odit, natus,
                asperiores dicta ratione repudiandae consequuntur expedita quam aliquid eum quos officia iste placeat ipsa!
            </p>
            <span class="fw-bold">
                Linda Green
            </span>
            <p>Product Manager, Apple Inc.</p>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;


main {
    position: relative;
    height: 800px;
    background-image: url(../../public/img/testimonial-1-1917x640-1-1914x639.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    div {
        width: 600px;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);
    }
}





// .bannerTest {
//     top: 50%;
//     left: 30%;
//     width: 400px;
//     transform: translate(-50%);
// }
</style>