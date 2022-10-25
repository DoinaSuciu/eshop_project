<template>
  <div class="favorites-container">
    <h1 class="wishlist-title">Wishlist</h1>

    <div
      v-if="favoritesProductsLength === 0"
      class="body-medium empty-favorites-list"
    >
      <span class="empty-wishlist-info"> Your wishlist is empty.</span>
      <span>
        Save the items you like most so you don't lose sight of them.</span
      >
      <button @click="goToShop" class="btn-black-normal-long get-inspired-btn">
        GET INSPIRED
      </button>
    </div>

    <div
      v-if="getUserName !== null && favoritesProductsLength > 0"
      class="body-medium selected-itemes-info"
    >
      <span class="client-name">{{ getUserName }}</span>
      <span> this is the selection of items you like most</span>
    </div>
    <div
      v-if="getUserName === null && favoritesProductsLength > 0"
      class="not-user-info-to-login"
    >
      <span class="body-medium keep-items-favorite"
        >Don't lose your Wishlist items!</span
      >
      <span class="body-medium keep-items-favorite">
        Create a SHOPPE account or log in to save them on all your devices.
      </span>
      <div class="redirect-to-login-in">
        <router-link
          class="btn-black-normal-long create-account-redirect"
          to="/my-account"
          >Create account / Sign in</router-link
        >

        <img
          class="img-on-all-devices"
          src="../assets/icon-devices-favorites.png"
        />
      </div>
    </div>

    <ul class="product-cards">
      <li
        class="product-card"
        v-for="product in favoritesProducts"
        :key="product.id"
      >
        <ProductCard :product="product" class="product-card-component" />
        <button @click="addToCart(product)" class="add-to-cart body-small">
          ADD TO CART
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "Favorites",
  data() {
    return {};
  },
  computed: {
    favoritesProducts() {
      return this.$store.getters.getFavorites;
    },
    favoritesProductsLength() {
      return this.$store.getters.getFavorites.length;
    },
    removeFromFavorite(id) {
      this.favoritesProducts = this.favoritesProducts.filter(
        (item) => item.id !== id
      );
    },
    getUserName() {
      return this.$store.state.auth.profileUsername;
    },
  },
  components: { ProductCard },

  methods: {
    goToShop() {
      this.$router.push("/shop");
    },
  },
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
    display: flex;
    flex-direction: row;
    justify-content: center;
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
  .client-name {
    color: $accent;
    margin-right: 5px;
  }

  .selected-itemes-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  h1 {
    margin-top: 40px;
    margin-bottom: 60px;
  }
  .add-to-cart {
    height: 53px;
    font-size: 16px;
    margin: 0 auto;
    font-weight: 900;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: $black;
      color: $white;
    }
  }

  .create-account-redirect {
    height: 53px;
    font-size: 16px;

    &:hover {
      background-color: $white;
      color: $black;
    }
  }

  .product-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 50px;
  }

  .product-card {
    max-width: 40%;
    margin-bottom: 0;

    // margin-right: 15px;
  }

  .product-card-component {
    min-width: 100%;
    height: auto;
    flex: 1;
  }

  .empty-favorites-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .empty-wishlist-info {
    margin-bottom: 15px;
  }

  .get-inspired-btn {
    height: 53px;
    margin-top: 150px;
    font-size: 16px;
  }
}
</style>
