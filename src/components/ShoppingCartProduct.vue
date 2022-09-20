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
        <button class="remove-btn" @click="removeFromCart(product.id)">
          x
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
          :disabled="product.count === 0"
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
    <!-- <div class="popup-remove-confirmation">
      <h2>YOU ARE ABOUT TO REMOVE AN ITEM FROM YOUR CART</h2>
      <span>Are you sure you wish to proceed?</span>
      <div>
        <button>YES</button>
        <button>NO</button>
      </div>
    </div> -->
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
    },
  },
  data() {
    return {
      // count: "",
      shouldDisplayRemoveConfirmation: false,
    };
  },
  computed: {},
  methods: {
    increment(id) {
      console.log(`shopping_increment: ${id}`);
      this.$store.commit("INCREMENT_PRODUCT_COUNT", id);
    },
    decrement(product) {
      if (product.count === 1) {
        shouldDisplayRemoveConfirmation = true;
      } else {
        this.$store.commit("DECREMENT_PRODUCT_COUNT", product.id);
      }
    },
    removeFromCart(id) {
      this.$store.commit("REMOVE_FROM_CART", id);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  .shopping-cart-product {
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
    margin-top: 4px;
    border: none;
    background-color: $white;
    font-weight: 600;
    font-size: 13px;
  }

  .increment-btn,
  .decrement-btn {
    border: none;
    background-color: $white;
  }
}

@media only screen and (min-width: 768px) {
  .img-cart-product {
    margin-right: 15px;
  }
  .product-price-cart {
    margin-top: 10px;
  }

  .remove-btn {
    font-size: 16px;
  }
}
</style>
