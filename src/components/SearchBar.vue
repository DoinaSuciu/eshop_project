<template>
  <main class="search-bar">
    <input class="input" type="text" v-model="search" placeholder="Search..." />
    <div
      class="item-category"
      v-for="category in filteredCategories"
      :key="category.id"
    >
      <p>{{ category.name }}</p>
    </div>
    <div class="item-error" v-if="search && !filteredCategories.length">
      <p>No results found!</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filteredCategories() {
      if (this.search !== "") {
        return this.$store.state.categories.filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
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
  }

  .input {
    display: block;
    width: 100%;
    height: 32px;
    text-indent: 30px;
    overflow: hidden;
    background: $light-gray url("../assets/Icon-search-grey.png") no-repeat 10px
      center;
    font-size: 14px;
    border: none;
    border-radius: 5px;
  }

  .item-error {
    font-size: 14px;
    color: $errors;
  }

  .item-category .item-error {
    font-size: 14px;
    color: $dark-grey;
  }

  p {
    background-color: $white;
  }
}

@media only screen and (min-width: 768px) {
  .search-bar {
    display: none;
  }
}
</style>
