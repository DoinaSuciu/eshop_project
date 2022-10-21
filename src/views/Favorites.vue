<template>
  <div class="favorites-container">
    <SearchBar />

    <h1 class="wishlist-title">Wishlist</h1>
    <span v-if="getUserName !== null" class="body-medium">
      {{ getUserName }} this is the selection of items you like most
    </span>
    <div v-else="getUserName === null" class="not-user-info-to-login">
      <span class="body-medium keep-items-favorite"
        >Don't lose your Wishlist items!</span
      >
      <span class="body-medium keep-items-favorite">
        Create a SHOPPE account or log in to save them on all your devices.
      </span>
      <div class="redirect-to-login-in">
        <router-link
          class="create-account-redirect btn-black-normal-long"
          to="/my-account"
          >Create account / Sign in</router-link
        >

        <img
          class="img-on-all-devices"
          src="../assets/icon-devices-favorites.png"
        />
      </div>
    </div>

    <div class="filtered-products">
      <ul class="product-cards">
        <li
          class="product-card"
          v-for="product in favoritesProducts"
          :key="product.id"
        >
          <ProductCard :product="product" class="product-card" />
          <button @click="addToCart(product)" class="add-to-cart body-small">
            ADD TO CART
          </button>
        </li>
      </ul>
    </div>
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
      return this.$store.getters.getFavorites;
    },
    getUserName() {
      return this.$store.state.auth.profileUsername;
    },
  },
  components: { ProductCard, SearchBar },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography";
@import "../styles/btn-syles.scss";

@media only screen and (min-width: 0) {
  .favorites-container {
    margin-bottom: 53px;
  }
  .wishlist-title {
    margin: 24px auto 15px auto;
    padding-bottom: 30px;
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

  .not-user-info-to-login {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .redirect-to-login-in {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .create-account-redirect {
    text-decoration: none;
    font-size: 14px;
  }

  .keep-items-favorite {
    padding-bottom: 10px;
  }

  .img-on-all-devices {
    margin-top: 50px;
    width: 50%;
  }

  .product-cards {
    padding: 0;
    // display: flex;
    // flex-wrap: wrap;
    // align-items: center;
    // margin: 0 auto;
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
