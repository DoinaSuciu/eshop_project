<template>
  <div>
    <SearchBar />

    <h1>Shop</h1>
    <button class="btn-filters">
      <img src="../assets/Filter icon.png" />Filters
    </button>

    <div class="filtered-products">
      <ul class="product-cards">
        <li class="product-card" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Shop",
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
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

  .btn-filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    background-color: $white;
    padding: 0;
    color: $accent;
    font-size: 14px;
    font-family: "DM Sans Regular", sans-serif;

    img {
      margin-right: 8px;
    }
  }
}

@media only screen and (min-width: 768px) {
  h1 {
    margin-top: 40px;
    margin-bottom: 60px;
  }

  .btn-filters {
    font-size: 20px;

    img {
      width: 25px;
    }
  }
}
</style>
