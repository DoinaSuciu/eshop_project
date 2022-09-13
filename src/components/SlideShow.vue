<template>
  <div class="container-photos">
    <Slider
      class="slide-show"
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
      height="100%"
      :autoplay="false"
      :indicators="false"
    >
      <SliderItem v-for="(image, index) in images" :key="index" :image="image">
        <img class="photo" :src="image" />
      </SliderItem>
      <!-- <div class="scroll-line"></div> -->
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "SlideShow",
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      sliderValue: 0,
    };
  },
};
</script>

<style lang="scss">
.container-photos {
  border-radius: 5px;
}
@media only screen and (min-width: 0) {
  slider {
    object-fit: cover;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
  }

  .photo {
    float: left;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    width: 100%;
    max-height: 1000px;
    height: 100%;
    border-radius: 5px;
  }

  // .scroll-line {
  //   background: linear-gradient(
  //       217deg,
  //       rgba(255, 0, 0, 0.8),
  //       rgba(255, 0, 0, 0) 70.71%
  //     ),
  //     linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
  //     linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  //   // top: 60px;
  //   left: 0;
  //   height: 10px;
  //   position: fixed;
  //   transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  // }
}

@media only screen and (min-width: 728px) {
  .slide-show {
    width: 100%;
  }

  .slider-item {
    width: 100%;
  }
  .photo {
    float: left;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
}
</style>
