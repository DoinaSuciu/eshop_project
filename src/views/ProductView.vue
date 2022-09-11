<template>
  <div class="product-view">
    <!-- <div v-if="!images.length">
      Please Wait......
      <img width="50%" src="" />
    </div>
    <div v-else> -->
    <SlideShow class="slide-show-photos" :images="images" />
    <h1 class="product-name">{{ product.name }}</h1>
    <div class="product-share">
      <h5 class="product-price">$ {{ product.price }}</h5>
      <img class="share-image" src="../assets/share.png" />
    </div>
    <button class="product-view-btn">ADD TO CART</button>
    <div>
      <p class="body-small about-products">
        {{ productDescription }}
      </p>

      <button @click="showMoreOrLess" class="view-more-group body-small">
        <span class="view-more-text"> {{ buttonText }} </span>

        <img class="view-more-icon" src="../assets/Icon view-more.png" />
      </button>
    </div>
    <div class="description-reviews-container">
      <div class="description-reviews-group">
        <p class="description-text body-small">Description</p>
        <img
          class="view-more-icon-vertical"
          src="../assets/Icon view-more-vertical.png"
        />
      </div>
      <div class="description-reviews-group">
        <p class="description-text body-small">Additional information</p>
        <img
          class="view-more-icon-vertical"
          src="../assets/Icon view-more-vertical.png"
        />
      </div>
      <div class="description-reviews-group">
        <p class="description-text body-small">Reviews</p>
        <img
          class="view-more-icon-vertical"
          src="../assets/Icon view-more-vertical.png"
        />
      </div>
    </div>
    <div>
      <h5>Similar Items</h5>
    </div>
  </div>
</template>

<script>
import SlideShow from "../components/SlideShow.vue";

//import { setTimeout } from "timers";
export default {
  name: "ProductView",
  components: {
    SlideShow,
  },
  data() {
    return {
      // images: [],
      readMore: false,
    };
  },
  created() {},
  computed: {
    images() {
      // console.log(this.$route.params.productId);
      // console.log(this.$store.state.products.length); //result = 18 photos
      const products = this.$store.state.products.filter(
        (product) => `${product.id}` === this.$route.params.productId
      );
      // console.log(`products ${products.length}`);
      // console.log(`id ${products[0].id}`);

      if (products.length > 0) {
        return products[0].carousel;
      }
      return [];
    },
    product() {
      return this.$store.state.products.filter(
        (product) => `${product.id}` === this.$route.params.productId
      )[0];
    },
    productDescription() {
      // console.log(`${JSON.stringify(this.product, null, 3)}`);
      return this.readMore
        ? this.product.aboutProducts
        : this.product.aboutProducts.split(" ").splice(0, 10).join(" ") +
            " ...";
    },
    buttonText() {
      return this.readMore ? "View less" : "View more";
    },
  },
  methods: {
    showMoreOrLess() {
      this.readMore = !this.readMore;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography";

@media only screen and (min-width: 0) {
  .product-view {
    display: flex;
    flex-direction: column;
  }
  .slide-show-photos {
    width: 100%;
    height: 374px;
    border-radius: 5px;
  }

  .product-name {
    margin-top: 24px;
    margin-bottom: 0;
    // font-size: 20px;
  }

  .product-price {
    margin-top: 5px;
    margin-bottom: 0;
    color: $accent;
  }

  .product-share {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .product-view-btn {
    left: 8px;
    height: 32px;
    max-width: 320px;
    padding: 6px 100px 6px 100px;
    line-height: 20px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    color: $black;
    background-color: $white;
    border-radius: 4px;
    // border-color: $white;
    border: 1px solid $black;
    cursor: pointer;
    // margin-top: 24px;
    // margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
  }

  .about-products {
    color: $dark-grey;
    margin-top: 16px;
  }

  .view-more-group {
    font-size: 12px;
    border: none;
    background-color: $white;
    padding: 0;

    .view-more-text {
      color: $accent;
      margin-right: 5px;
    }
  }
  .description-reviews-container {
    margin-top: 16px;
    margin-bottom: 10px;
    border-top: 1px $light-gray;
    border-bottom: 1px $light-gray;
    border-style: solid none solid none;
    padding: 16px 0 5px;
  }
  .description-reviews-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // margin: 0;
  }
  .description-text {
    margin-top: 0;
    margin-bottom: 9px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media only screen and (min-width: 728px) {
  .slide-show-photos {
    flex-grow: 1;
    width: 100%;
    height: 800px;
  }
}
</style>
