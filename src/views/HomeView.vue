<template>
  <main class="home-page">
    <SearchBar />

    <div class="banner">
      <figure class="banner-figure">
        <img class="banner-image" src="../assets/products/01/01-1.jpg" />
      </figure>

      <div class="banner-details">
        <h4 class="banner-title">{{ bannerProduct.name }}</h4>
        <span class="banner-product-price">{{
          bannerProduct.price | currency
        }}</span>
        <button @click="viewBannerProduct" class="banner-button">
          View Product
        </button>
      </div>
    </div>

    <section class="shop-the-latest">
      <div class="second-banner-text">
        <h5 v-switching-color="['#a18a68', 'black']" class="latest">
          LAST DAYS: 10% off EVERYTHING
        </h5>
        <span>
          <router-link class="view-all" to="/shop">View All</router-link></span
        >
      </div>
      <ul class="product-cards">
        <li class="product-card" v-for="product in products" :key="product.id">
          <ProductCard
            v-if="product.category === 'earrings'"
            class="product-card-test"
            :product="product"
          />
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "HomeView",
  components: {
    ProductCard,
    SearchBar,
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    products() {
      return this.$store.state.products;
    },
    bannerProduct() {
      return this.$store.state.products.filter(
        (product) => product.id === 1
      )[0];
    },
  },
  methods: {
    viewBannerProduct() {
      this.$router.push(`/product-view/${this.bannerProduct.id}`);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";

@media only screen and (min-width: 0) {
  .banner {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .banner-details {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    left: 8px;
    top: 65%;
    text-align: left;
    gap: 3px;
    color: $white;
  }

  .banner-figure {
    width: 100%;
    max-height: 354px;
    min-height: 354px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 8px;
  }

  .banner-image {
    width: 100%;
    min-height: 420px;
    object-fit: cover;
    object-position: 100% 0%;
  }

  .banner-title {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    text-transform: capitalize;
    margin: 0;
  }

  .banner-product-price {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
  }

  .banner-button {
    left: 8px;
    margin-top: 7px;
    line-height: 20px;
    font-size: 13px;
    font-style: normal;
    font-weight: 200;
    color: $white;
    background-color: rgb(255, 255, 255, 0.1);
    border-radius: 4px;
    border-color: $white;
    border: 1px solid $white;
    padding: 6px 9px 6px 9px;
    cursor: pointer;
  }

  .banner-button:active {
    background-color: rgb(255, 255, 255, 0.5);
  }

  .second-banner-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  }
  .latest {
    margin: 21px 0 13px;
  }

  .view-all {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: $accent;
    text-decoration: none;
    cursor: pointer;
  }

  .product-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    align-items: stretch;
    padding: 0;
    margin: 0;
  }

  .product-card {
    flex: 1;
    min-width: 47%;
    height: auto;
    justify-content: center;
  }

  .product-card-test {
    min-width: 100%;
    height: auto;
    flex: 1;
  }

  .shop-the-latest {
    padding: 0;
  }
}

@media only screen and (min-width: 768px) {
  .banner-details {
    position: absolute;
    left: 39px;
    top: 50%;
    text-align: left;
    color: $white;
  }
  .banner-figure {
    width: 100%;
    max-height: 646px;
    min-height: 646px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 16px;
  }

  .banner-image {
    min-height: 800px;
  }

  .banner-title {
    font-size: 33px;
    margin: 16px 0;
  }

  .banner-product-price {
    font-size: 26px;
    margin: 0;
    margin-bottom: 48px;
  }

  .banner-button {
    left: 35px;
    font-size: 20px;
    padding: 13px 31px 13px 31px;
    border-radius: 6px;
    border: 2px solid $white;
  }

  .second-banner-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 37px;
    margin-bottom: 12px;
  }
  .latest {
    font-size: 33px;
  }

  .view-all {
    font-size: 20px;
    color: $accent;
  }
}

@media only screen and (min-width: 1024px) {
  .banner-details {
    position: absolute;
    left: 39px;
    top: 41%;
    text-align: left;
    color: $white;
  }
  .banner-figure {
    width: 100%;
    max-height: 646px;
    min-height: 646px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 16px;
  }

  .banner-image {
    min-height: 800px;
  }

  .banner-title {
    font-size: 33px;
    margin: 16px 0;
  }

  .banner-product-price {
    font-size: 26px;
    margin: 0;
    margin-bottom: 48px;
  }

  .banner-button {
    left: 35px;
    font-size: 20px;
    padding: 13px 31px 13px 31px;
    border-radius: 6px;
    border: 2px solid $white;
  }

  .second-banner-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 37px;
    margin-bottom: 12px;
  }
  .latest {
    font-size: 33px;
  }

  .view-all {
    font-size: 20px;
    color: $accent;
  }

  .product-cards {
  }

  .product-card {
  }

  .shop-the-latest {
  }
}
</style>
