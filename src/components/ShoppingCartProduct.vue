<template>
  <div class="shopping-cart-product">
    <img class="img-cart-product" :src="product.photo" />
    <div class="shopping-cart-product-details">
      <div class="product-name-remove-group">
        <router-link
          class="product-card-cart"
          :to="`/product-view/${product.id}`"
        >
          <span class="product-name-cart body-small">{{ product.name }}</span>
        </router-link>
        <button
          class="remove-btn body-medium"
          @click="showRemoveCartConfirmation"
        >
          +
        </button>
      </div>

      <span class="in-stock body-small" v-if="product.pieces > 0"
        >In Stock</span
      >
      <span class="body-small out-of-stock" v-if="product.pieces < 0"
        >Out of Stock</span
      >

      <span class="product-price-cart body-small">$ {{ product.price }}</span>
      <div class="cart-item-quantity">
        <button
          class="decrement-btn body-small"
          :disabled="product.count === 1"
          @click="decrement(product)"
        >
          -
        </button>
        <span class="count body-small">{{ product.count }}</span>
        <button
          class="increment-btn body-small"
          :disabled="product.pieces && product.pieces <= product.count"
          @click="increment(product.id)"
        >
          +
        </button>
      </div>
    </div>
    <div
      v-if="shouldDisplayRemoveConfirmation"
      class="popup-remove-confirmation"
    >
      <span class="info-remove-item body-small">
        YOU ARE ABOUT TO REMOVE AN ITEM FROM YOUR CART
      </span>
      <span class="body-small">Are you sure you wish to proceed?</span>
      <div class="btn-group-confirm">
        <button class="btn-black-normal" @click="removeFromCart(product.id)">
          YES
        </button>
        <button
          class="btn-black-normal btn-no-remove-item"
          @click="stayOnShoppingPage"
        >
          NO
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    product: {
      type: Object,
      required: true,
      photo: String,
      name: String,
      price: String,
      pieces: Number,
      count: Number,
    },
  },
  data() {
    return {
      // count: "",
      shouldDisplayRemoveConfirmation: false,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    showRemoveCartConfirmation() {
      this.shouldDisplayRemoveConfirmation = true;
    },
    increment(id) {
      this.$store.commit("INCREMENT_PRODUCT_COUNT", id);
    },
    decrement(product) {
      this.$store.commit("DECREMENT_PRODUCT_COUNT", product.id);
    },
    removeFromCart(id) {
      this.$store.commit("REMOVE_FROM_CART", id);
      this.stayOnShoppingPage();
    },
    stayOnShoppingPage() {
      this.shouldDisplayRemoveConfirmation = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  .shopping-cart-product {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    // height: 138px;
  }

  .in-stock {
    color: $green;
  }

  .shopping-cart-product-details {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .img-cart-product {
    margin-right: 8px;
    max-width: 40%;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
    display: flex;
    flex: 1;
  }
  .product-name-cart {
    // margin: 4px 0;
    color: $black;
    margin-right: 40px;
    font-weight: bold;
    line-height: 10px;
  }

  .product-name-remove-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: center;
  }

  .product-price-cart {
    // font-size: 12px;
    color: $accent;
    margin-top: 0;
    font-style: normal;
  }

  .cart-item-quantity {
    margin-top: auto;
  }

  a {
    text-decoration: none;
  }

  .count {
    margin: 0 8px;
  }

  .remove-btn {
    margin-top: 0;
    font-size: 25px;
    border: none;
    background-color: $white;
    color: $dark-grey;
    transform: rotate(45deg);
    padding: 0;
  }

  .increment-btn,
  .decrement-btn {
    border: none;
    background-color: $white;
  }

  .popup-remove-confirmation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    // margin: 10px auto;
    top: 0;
    left: 0;
    color: $white;
    background-color: $black;
    opacity: 0.8;
    border-radius: 5px;

    .info-remove-item {
      // display: flex;
      // flex-direction: row;
      padding: 5px 10px;
      // margin: 0 auto;
      // display: flex;
      // flex-wrap: wrap;
      // flex-direction: column;
      // align-items: center;
      // justify-content: center;
    }

    .btn-group-confirm {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      margin-top: 15px;
      margin-bottom: 10px;
    }

    .btn-no-remove-item {
      margin-left: 15px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .img-cart-product {
    margin-right: 15px;
  }
  .product-price-cart {
    margin-top: 10px;
  }
}
</style>
