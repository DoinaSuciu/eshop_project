<template>
  <div class="product-view">
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
      <div class="description-reviews-btn body-small">
        <div class="description-reviews-group">
          <p class="description-text body-small">Description</p>
          <button @click="showHideDesciption" class="btn-view-more-vertical">
            <img
              class="view-more-icon-vertical"
              src="../assets/Icon view-more-vertical.png"
            />
          </button>
        </div>
        <p v-if="isHiddenDescription">
          {{ product.description }}
        </p>
      </div>

      <div class="description-reviews-btn body-small">
        <div class="description-reviews-group">
          <p class="description-text body-small">Additional information</p>
          <button @click="showHideAddInfo" class="btn-view-more-vertical">
            <img
              class="view-more-icon-vertical"
              src="../assets/Icon view-more-vertical.png"
            />
          </button>
        </div>
        <span v-if="isHiddenAddInfo">
          Arrival date: {{ product.arrivalDate }}
        </span>
      </div>

      <div class="description-reviews-btn body-small">
        <div class="description-reviews-group">
          <p class="description-text body-small">Reviews</p>
          <button @click="showHideReviews" class="btn-view-more-vertical">
            <img
              class="view-more-icon-vertical"
              src="../assets/Icon view-more-vertical.png"
            />
          </button>
        </div>
        <span v-if="isHiddenReviews"> 0 reviews {{ product.reviews }} </span>
      </div>
    </div>

    <div>
      <h5 class="similar-items-title">Similar Items</h5>
      <SimilarItemsSlides :products="similarProducts" />
    </div>

    <div class="continue-shopping">
      <p class="continue-shopping-text body-small">Continue shopping</p>
      <button @click="redirectShopPage" class="btn-continue-shopping">
        <img
          class="view-more-icon-horizintal"
          src="../assets/Icon view-more.png"
        />
      </button>
    </div>
  </div>
</template>

<script>
import SlideShow from "../components/SlideShow.vue";
import SimilarItemsSlides from "@/components/SimilarItemsSlides.vue";

//import { setTimeout } from "timers";
export default {
  name: "ProductView",
  components: {
    SlideShow,
    SimilarItemsSlides,
  },
  data() {
    return {
      // images: [],
      readMore: false,
      isHiddenDescription: false,
      isHiddenAddInfo: false,
      isHiddenReviews: false,
    };
  },

  computed: {
    similarProducts() {
      return this.$store.state.products.filter(
        (product) =>
          `${product.id}` !== this.$route.params.productId &&
          product.category === this.product.category
      );
    },

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
    showHideDesciption() {
      this.isHiddenDescription = !this.isHiddenDescription;
    },
    showHideAddInfo() {
      this.isHiddenAddInfo = !this.isHiddenAddInfo;
    },
    showHideReviews() {
      this.isHiddenReviews = !this.isHiddenReviews;
    },
    redirectShopPage() {
      this.$router.push({ path: "/shop" });
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
    margin: 16px 0 0;
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

  .btn-view-more-vertical {
    border: none;
    background-color: $white;
  }

  .description-reviews-btn {
    color: $dark-grey;
    margin-bottom: 15px;
  }

  .description-reviews-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: $black;
    // margin: 0;
  }
  .description-text {
    margin-top: 0;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .similar-items-title {
    margin: 21px 0 13px 0;
  }

  .continue-shopping {
    margin: 39px 0 72px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .continue-shopping-text {
      color: $accent;
    }

    .btn-continue-shopping {
      border: none;
      background-color: $white;
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
