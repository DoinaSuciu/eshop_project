<template>
  <div class="container-photos">
    <Slider
      class="slide-show"
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
      height="100%"
    >
      <SliderItem v-for="(image, index) in images" :key="index" :image="image">
        <img class="photo" :src="image" />
      </SliderItem>
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
      sliderValue: 1,
    };
  },
};
</script>

<style lang="scss">
.container-photos {
  // display: flex;
  // flex-grow: 1;
  // border-radius: 6px;
  border-radius: 5px;
}
@media only screen and (min-width: 0) {
  slider {
    // width: 100%;
    // height: 400px;
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
