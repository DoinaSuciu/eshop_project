<template>
  <main>
    <h5 class="shopping-cart-title">Shopping Cart</h5>

    <ul class="shopping-cards">
      <li class="shopping-card" v-for="(product, index) in cart" :key="index">
        <ShoppingCartProduct class="shopping-card-cart" :product="product" />
      </li>
    </ul>

    <form class="form-coupon-apply" @submit.prevent="handleSubmit">
      <input
        class="body-small"
        type="text"
        id="coupon-code"
        placeholder="Coupon Code"
        v-model="coupon"
      />
      <button class="aplly-coupon-btn">APPLY COUPON</button>
    </form>

    <div class="cart-total">
      <h5>Cart totals</h5>
      <div class="group-cart-total">
        <span class="body-small left-text"> SUBTOTAL: </span>
      </div>
      <div class="group-cart-total">
        <span class="body-small left-text">SHIPPING</span>
        <div class="group-cart-total">
          <span class="body-small"
            >Shipping costs will be calculated once you have provided
            adress.</span
          >
          <span class="body-small">Calculate Shipping</span>
          <span class="body-small">Select a Country</span>
          <span class="body-small">City</span>
          <span class="body-small">Post code/zip</span>
          <button class="body-small">UPDATE TOTALS</button>
        </div>
      </div>
      <div class="group-cart-total">
        <span class="body-small left-text">TOTAL</span>
      </div>
    </div>
  </main>
</template>

<script>
import ShoppingCartProduct from "@/components/ShoppingCartProduct.vue";
export default {
  name: "ShoppingCart",
  data() {
    return {
      // count: "",
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.cart.reduce((acc, curr) => acc + curr.count, 0);
    },
  },
  methods: {
    handleSubmit() {
      console.log("submit prevent");
    },
    // addToCart(product) {
    //   this.$store.commit("ADD_TO_CART", product);
    // },
    // increment(id) {
    //   this.$store.commit("INCREMENT_PRODUCT_COUNT", id);
    // },
    // decrement(id) {
    //   this.$store.commit("DECREMENT_PRODUCT_COUNT", id);
    // },
  },
  components: { ShoppingCartProduct },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }

  .shopping-cart-title {
    // align-self: flex-start;
  }

  .shopping-cards {
    padding: 0;
    width: 100%;
  }
  .shopping-card {
    margin-bottom: 22px;
  }

  .form-coupon-apply {
    width: 100%;
    margin: 0;
  }

  #coupon-code {
    margin-top: 46px;
    padding: 13px 0;
    width: 100%;
    max-width: 320px;
    border: none;
    border-bottom: 1px solid $gray;
  }

  .aplly-coupon-btn {
    left: 8px;
    height: 32px;
    max-width: 320px;
    width: 100%;
    padding: 6px 100px 6px 100px;
    line-height: 20px;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    color: $white;
    background-color: $black;
    border-radius: 4px;
    border: 1px solid $black;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 24px auto;
  }
  .cart-total {
    display: flex;
    flex-direction: column;
    background-color: $light-gray;
  }

  .group-cart-total {
    margin-top: 22px;
  }
}
</style>
