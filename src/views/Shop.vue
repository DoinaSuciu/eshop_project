<template>
  <main>
    <h1 class="shop-page-title">Shop The Latest</h1>

    <div class="shop-page-container">
      <div class="left-side-shop-web">
        <SearchBar class="search-bar-component" />
        <!-- <button class="btn-filters">
        <img src="../assets/Filter icon.png" />Filters
      </button> -->
        <select
          id="shop-filter-by-category"
          v-model="category"
          class="body-small-dark-gray"
        >
          <option value="" disabled>Shop By</option>
          <option
            class="category-option"
            v-for="category in productCategories"
            v-bind:value="category.name"
          >
            {{ category.name }}
          </option>
        </select>

        <select
          id="shop-filter-sort-by"
          v-model="sort"
          class="body-small-dark-gray"
        >
          <option value="" disabled>Sort By</option>
          <option
            class="category-option"
            v-for="sortCategory in sortBy"
            v-bind:value="sortCategory.name"
          >
            {{ sortCategory.name }}
          </option>
        </select>
      </div>

      <div class="filtered-products">
        <ul class="product-cards">
          <li
            class="product-card"
            v-for="sortedProduct in sortedProducts"
            :key="sortedProduct.id"
          >
            <ProductCard
              :product="sortedProduct"
              class="product-card-component"
            />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Shop",
  data() {
    return {
      category: "",
      sort: "",
      sortBy: [
        { id: 1111, name: "Popularity" },
        { id: 1112, name: "Price High to Low" },
        { id: 1113, name: "Price Low to High" },
      ],
    };
  },
  computed: {
    products() {
      if (this.category === "") {
        return this.$store.state.products;
      }
      console.log(this.category);
      return this.$store.state.products.filter(
        (product) => product.category === this.category
      );
    },
    productCategories() {
      return this.$store.state.categories;
    },
    sortedProducts() {
      switch (this.sort) {
        case "":
          return this.products;
        case this.sortBy[0].name:
          return this.products.sort((a, b) => b.soldProducts - a.soldProducts);
        case this.sortBy[1].name:
          return this.products.sort((a, b) => b.price - a.price);
        case this.sortBy[2].name:
          return this.products.sort((a, b) => a.price - b.price);
      }
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
  .search-bar-component {
    border: 1px solid $light-gray;
    border-radius: 5px;
    background-color: $light-gray;
  }

  #shop-filter-sort-by,
  #shop-filter-by-category {
    width: 47%;
    height: 30px;
    color: black;
    border-color: $gray;
    outline: none;
    border-radius: 4px;
  }

  #shop-filter-sort-by {
    margin-left: 15px;
  }
  .product-cards {
    padding: 0;
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

  .left-side-shop-web {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .search-bar-component {
    border: none;
    border-bottom: 1px solid $gray;
    border-radius: 0%;
    background-color: $white;
  }

  #shop-filter-sort-by,
  #shop-filter-by-category {
    min-width: 25%;
    margin-left: 15px;
    height: 30px;
    color: black;
    border-color: $gray;
    outline: none;
  }

  .product-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: space-between;
  }

  .product-card {
    max-width: 48%;
  }

  .product-card-component {
    min-width: 100%;
    height: auto;
    flex: 1;
  }
}

@media only screen and (min-width: 1024px) {
  .shop-page-title {
    margin-top: 80px;
    margin-bottom: 26px;
  }
  .shop-page-container {
    display: flex;
    flex-direction: row;
  }

  .left-side-shop-web {
    min-width: 21%;
    margin-top: 15px;
    margin-right: 36px;
    display: flex;
    flex-direction: column;
  }

  .search-bar-component {
    border-bottom: 1px solid $gray;
    border-radius: 0%;
    padding-bottom: 5px;
    margin: 13px 0 23px 0;
  }

  #shop-filter-sort-by,
  #shop-filter-by-category {
    width: 100%;
    margin: 16px 0 0 0;
    height: 50px;
    padding-left: 10px;
    color: black;
    border-color: $gray;
    outline: none;
  }

  .product-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .product-card {
    max-width: 29%;
    // margin-right: 15px;
  }

  .product-card-component {
    min-width: 100%;
    height: auto;
    flex: 1;
  }
}
</style>
