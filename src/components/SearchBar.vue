<template>
  <main class="search-bar">
    <div class="input-container">
      <input
        class="input"
        :class="{ 'search-active': isActive }"
        type="text"
        v-model="search"
        placeholder="Search..."
      />
      <button
        @click="closeSearchBar"
        class="close-search-btn body-small"
        v-show="showCloseBtn()"
      >
        x
      </button>
    </div>

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
  methods: {
    closeSearchBar() {
      this.search = "";
      this.$emit("hide-search-bar");
    },
    showCloseBtn() {
      return this.search.length > 0;
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
    margin: 0 0 16px 0;
    border-radius: 5px;
    // justify-content: center;
    position: relative;
    background-color: $light-gray;
  }
  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .close-search-btn {
    // border: 1px solid $dark-grey;
    // border-radius: 50%;
    border: none;
    background-color: transparent;
    color: $dark-grey;
    width: 18px;
    height: 18px;
    padding: 3px;
    // margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
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
  // .search-active {
  //   background: url("../assets/Icon-close-search.png") no-repeat 10px center;
  // }
  .item-error {
    font-size: 14px;
    color: $errors;
    padding: 10px 0 5px 10px;
    top: 30px;
    width: 100%;
    position: absolute;
    z-index: 1999;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    background-color: $white;
    border-radius: 6px;
    border: 1px solid $light-gray;
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
  .search-results {
    margin-top: 32px;
  }
  .item-error {
    font-size: 14px;
    color: $errors;
    padding: 10px 0 5px 10px;
    margin-left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

@media only screen and (min-width: 1024px) {
  .input,
  .item-error,
  .product-searched {
    font-size: 16px;
  }
}
</style>
