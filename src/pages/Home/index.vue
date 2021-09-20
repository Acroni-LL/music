<template>
    <div>
        <Nav/>
        <HomeData/>
        <Carousel :bannerImg="swiperImg"/>
        <HomeTab />
    </div>
</template>

<script>
import Nav from "../../components/Nav";
import HomeData from "./HomeData";
import Carousel from "../../components/Carousel";
import HomeTab from "./HomeTab"

export default {
    name: "Home",
    data() {
        return {
            swiperImg: [
                require("../../assets/img/b1.jpg"),
                require("../../assets/img/b2.jpg"),
                require("../../assets/img/b3.jpg")
            ]
        };
    },
    components: {
        Nav,
        HomeData,
        Carousel,
        HomeTab
    }
};
</script>

<style scoped>
</style>

