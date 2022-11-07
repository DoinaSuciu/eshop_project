<template>
  <div class="product-view-container">
    <div v-if="addedToCart" class="pop-up-added-to-cart">
      <div class="pop-up-text-icon body-small">
        <img src="../assets/icon-checked-pop-up.png" />
        <span class="pop-up-text">The item added to your Shopping bag.</span>
      </div>
      <div class="go-to-cart-pop-up_button">
        <router-link class="go-to-cart-pop-up body-small" to="/shopping-cart">
          VIEW CART
        </router-link>
        <button class="remove-btn body-medium" @click="closePopUp">+</button>
      </div>
    </div>

    <div class="product-view" :key="product.id">
      <div class="product-view-photo-info-web">
        <SlideShow class="slide-show-photos" :images="images" />
        <div class="product-view-info-web">
          <h1 class="product-name">{{ product.name }}</h1>
          <div class="product-share">
            <h5 class="product-price">{{ product.price | currency }}</h5>
            <img class="share-image" src="../assets/share.png" />
          </div>

          <p class="about-product-web body-small">
            {{ product.aboutProducts }}
          </p>

          <div class="display-count-items-cart-web">
            <div class="cart-item-quantity">
              <button
                class="decrement-btn body-small"
                :disabled="product.count === 1"
                @click="decrementProductCount"
              >
                -
              </button>
              <span class="count body-small">{{ productCount }}</span>
              <button
                class="increment-btn body-small"
                :disabled="product.pieces && product.pieces <= product.count"
                @click="incrementProductCount"
              >
                +
              </button>
            </div>

            <button
              @click="addToCart(product)"
              class="add-to-cart body-small"
              :disabled="!canAddToCart"
            >
              ADD TO CART
            </button>
          </div>
          <div class="web-icons">
            <button @click="toggleFavs" class="favorite-btn">
              <SvgFavorite :svgColor="getFavoriteIndicatorColor" />
            </button>

            <div class="social-media-icons">
              <img
                class="social-media"
                src="../assets/product-view-page-icons/message.png"
              />
              <img
                class="social-media"
                src="../assets/product-view-page-icons/facebook.png"
              />
              <img
                class="social-media"
                src="../assets/product-view-page-icons/instagram.png"
              />
              <img
                class="social-media"
                src="../assets/product-view-page-icons/twitter.png"
              />
            </div>
          </div>
          <div class="in-stock-check">
            <span class="in-stock body-small" v-if="product.pieces > 0"
              >In Stock</span
            >
            <span class="body-small out-of-stock" v-if="product.pieces === 0"
              >Out of Stock</span
            >
          </div>
          <span class="body-small category-style"
            >Category: {{ product.styleCategory }}</span
          >
        </div>
      </div>

      <div class="view-more-product-description">
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
  </div>
</template>

<script>
import SlideShow from "../components/SlideShow.vue";
import SimilarItemsSlides from "@/components/SimilarItemsSlides.vue";
import SvgFavorite from "@/components/SvgFavorite.vue";

//import { setTimeout } from "timers";
export default {
  name: "ProductView",
  components: {
    SlideShow,
    SimilarItemsSlides,
    SvgFavorite,
  },
  data() {
    return {
      // images: [],
      readMore: false,
      isHiddenDescription: false,
      isHiddenAddInfo: false,
      isHiddenReviews: false,
      isFavorite: false,
      addedToCart: false,
      productCount: 1,
    };
  },
  created() {
    // console.log(`created`);
    this.updateIsFavorite;
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
    productCountInCart() {
      const productsInCart = this.$store.state.cart.filter(
        (product) => `${product.id}` === this.$route.params.productId
      );

      if (productsInCart.length === 0) {
        return 0;
      }
      return productsInCart[0].count;
    },
    canAddToCart() {
      if (this.product.pieces === 0) {
        return false;
      }
      return this.product.pieces >= this.productCountInCart + this.productCount;
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
    updateIsFavorite() {
      this.$store.dispatch("isFavorite", this.product.id).then((value) => {
        this.isFavorite = value;
      });
    },
    getIsFavorite() {
      this.updateIsFavorite;
      return this.isFavorite;
    },
    getFavoriteIndicatorColor() {
      return this.getIsFavorite ? "red" : "grey";
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
    addToCart(product) {
      console.log(this.productCount);
      this.$store.dispatch("addToCart", {
        id: product.id,
        productCount: this.productCount,
      });
      this.addedToCart = true;
    },
    toggleFavs() {
      console.log(`TOGGLE_FAV ${this.product.id}`);
      this.$store.commit("TOGGLE_FAV", this.product.id);
      this.updateIsFavorite;
    },
    closePopUp() {
      this.addedToCart = false;
    },
    incrementProductCount() {
      if (this.productCountInCart + this.productCount < this.product.pieces)
        this.productCount++;
    },
    decrementProductCount() {
      if (this.productCount > 1) {
        this.productCount--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography";

@media only screen and (min-width: 0) {
  .product-view-container {
    margin: 0;
  }
  .pop-up-added-to-cart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 0;
    margin-bottom: 15px;
    padding: 20px 0;
    background-color: $light-gray;
    border-top: 2px solid $accent;
    animation: right_to_left 1s ease-in-out;
  }

  .pop-up-text-icon {
    margin-left: 39px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .pop-up-text {
    margin-left: 16px;
    color: black;
  }
  .go-to-cart-pop-up_button {
    margin-right: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .go-to-cart-pop-up {
    color: $accent;
    margin-right: 10px;
    text-decoration: none;
  }

  @keyframes right_to_left {
    from {
      margin-left: 100%;
    }
    to {
      margin-left: 0;
    }
  }

  .remove-btn {
    font-size: 25px;
    border: none;
    background-color: transparent;
    color: $dark-grey;
    transform: rotate(45deg);
  }

  .product-view {
    display: flex;
    flex-direction: column;
  }

  .cart-item-quantity {
    display: none;
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

  .add-to-cart {
    left: 8px;
    height: 32px;
    max-width: 320px;
    padding: 6px 100px 6px 100px;
    margin: 0 auto;
    color: $black;
    background-color: $white;
    border-radius: 4px;
    border: 1px solid $black;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
  .web-icons {
    display: none;
  }
  .about-product-web {
    display: none;
  }
  .in-stock-check {
    margin-top: 20px;
  }

  .in-stock {
    color: $green;
  }

  .out-of-stock {
    color: $errors;
  }
}

@media only screen and (min-width: 768px) {
  .continue-shopping {
    display: none;
  }
}

@media only screen and (min-width: 1024px) {
  .product-view {
    margin-top: 60px;
  }
  .slide-show-photos {
    flex-grow: 1;
    max-width: 60%;
    height: 700px;
  }
  .product-name {
    margin-top: 0;
  }

  .product-price {
    margin-top: 23px;
  }

  .share-image {
    display: none;
  }

  .product-view-photo-info-web {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  .product-view-info-web {
    margin-left: 62px;
    // min-width: 35%;
    max-width: 35%;
  }

  .about-product-web {
    display: flex;
    color: $dark-grey;
    margin: 60px 0 48px 0;
  }

  .display-count-items-cart-web {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .cart-item-quantity {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: $light-gray;
    height: 53px;
    width: 20%;
    border-radius: 5px;
  }

  .count {
    margin: 0 auto;
    color: $dark-grey;
    padding: 0;
  }

  .increment-btn,
  .decrement-btn {
    border: none;
    flex: 1;
    color: $dark-grey;
    width: 40%;
    padding: 0;
    border-radius: 5px;
    cursor: pointer;
  }

  .add-to-cart {
    height: 53px;
    margin: 0 auto;
    width: 77%;
    font-weight: 900;
    padding: 0;

    &:hover {
      background-color: $black;
      color: $white;
    }

    &:disabled {
      background-color: $dark-grey;
      color: $white;
      border: 1px solid $dark-grey;
      pointer-events: none;
    }
  }

  .view-more-product-description {
    display: none;
  }

  .web-icons {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    margin-top: 250px;
    margin-bottom: 40px;
    height: 18px;
  }
  .social-media-icons {
    border-left: 1px solid $dark-grey;
  }
  .favorite-btn {
    margin-right: 40px;
    border: none;
    background-color: $white;
    &:hover {
      transform: scale(1.2);
    }
  }
  .social-media {
    margin-right: 25px;
    &:hover {
      transform: scale(1.2);
    }
  }
  .social-media:first-child {
    padding-left: 39px;
  }
  .description-reviews-container {
    margin-top: 99px;
  }
  .in-stock-check {
    margin-bottom: 10px;
    margin-top: 0;
  }
}
</style>
