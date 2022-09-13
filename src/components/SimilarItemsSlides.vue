<template>
  <div class="container-similar-items">
    <hooper :settings="hooperSettings">
      <slide class="slide" v-for="(product, index) in products" :key="index">
        <ProductCard :product="product" class="product-card-similar-item" />
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import ProductCard from "./ProductCard.vue";

export default {
  name: "SimilarItemsSlides",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    Hooper,
    Slide,
    ProductCard,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        // centerMode: true,
        // height: auto,
      },
    };
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

.container-similar-items {
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* text-align: center; */
}

.hooper {
  height: auto;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  border-radius: 5px;
}

.product-card-similar-item {
  flex: 1;
  min-width: 47%;
  height: auto;
  justify-content: center;
  text-decoration: none;
  color: $black;
  border-radius: 5px;
}
</style>
