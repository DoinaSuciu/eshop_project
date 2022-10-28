<template>
  <main class="search-bar">
    <input
      class="input"
      :class="{ 'search-active': isActive }"
      type="text"
      v-model="search"
      placeholder="Search..."
    />
    <div class="search-results" v-if="search && filteredProducts.length > 0">
      <router-link
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-searched"
        :to="`/product-view/${product.id}`"
      >
        {{ product.name }}
      </router-link>
    </div>

    <div class="item-error" v-if="search && !filteredProducts.length">
      No results found!
    </div>
  </main>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
      isActive: false,
    };
  },
  computed: {
    filteredProducts() {
      if (this.search !== "") {
        this.isActive = true;
        return this.$store.state.products.filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase().trim())
        );
      }

      this.isActive = false;
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";

@media only screen and (min-width: 0) {
  .search-bar {
    width: 100%;
    background-color: white;
    margin: 16px 0;
    border-radius: 5px;
    justify-content: center;
    position: relative;
    // background-color: $light-gray;
  }

  .input {
    display: block;
    width: 100%;
    height: 32px;
    text-indent: 30px;
    overflow: hidden;
    background: url("../assets/Icon-search-grey.png") no-repeat 10px center;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    outline: none;
  }
  .search-active {
    background: url("../assets/Icon-close-search.png") no-repeat 10px center;
  }
  .item-error {
    font-size: 14px;
    color: $errors;
    padding: 10px 0 5px 10px;
  }
  .search-results {
    position: absolute;
    z-index: 1999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    background-color: $white;
    border-radius: 6px;
    border: 1px solid $light-gray;
  }
  .product-searched {
    font-size: 14px;
    color: $white;
    padding: 10px 0 5px 10px;
    text-decoration: none;
    background-color: $white;
    color: black;

    &:hover {
      cursor: pointer;
      background-color: $light-gray;
    }
  }
}

@media only screen and (min-width: 768px) {
}
</style>
