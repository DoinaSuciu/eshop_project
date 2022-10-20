<template>
  <div class="favorites-container">
    <SearchBar />

    <h1>Wishlist</h1>
    <h5>Usern.name this is the selection of items you like most</h5>

    <!-- <div class="filtered-products">
      <ul class="product-cards">
        <li class="product-card" v-for="product in products" :key="product.id">
          <ProductCard :product="product" class="product-card" />
          <button @click="addToCart(product)" class="add-to-cart body-small">
            ADD TO CART
          </button>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Favorites",
  data() {
    return {};
  },
  computed: {
    favoritesProducts() {
      return this.$store.state.products.filter((item) => item.favorite);
    },
  },
  components: { ProductCard, SearchBar },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography";

@media only screen and (min-width: 0) {
  h1 {
    margin-top: 24px;
    margin-bottom: 15px;
  }
  .add-to-cart {
    left: 8px;
    height: 32px;
    max-width: 320px;
    padding: 6px 100px 6px 100px;
    color: $black;
    background-color: $white;
    border-radius: 4px;
    border: 1px solid $black;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
  }
}

@media only screen and (min-width: 768px) {
  h1 {
    margin-top: 40px;
    margin-bottom: 60px;
  }
  .add-to-cart {
    height: 53px;
    margin: 0 auto;
    min-width: 100%;
    font-weight: 900;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: $black;
      color: $white;
    }
  }

  .product-card {
    margin-bottom: 0;
  }
}
</style>
