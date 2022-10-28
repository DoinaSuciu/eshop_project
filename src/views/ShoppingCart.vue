<template>
  <main>
    <div v-if="calcTotalCount === 0" class="empty-shopping-cart-info">
      <h5>Your Shopping cart is empty</h5>
      <button
        @click="continueShopping"
        class="btn-black-normal-long btn-continue-shopping"
      >
        CONTINUE SHOPPING
      </button>
    </div>
    <section v-if="calcTotalCount !== 0">
      <div class="shopping-cart-title-group">
        <router-link id="back-redirect" to="/shop">
          <img id="back-redirect" src="../assets/Icon-go-back.png" />
        </router-link>
        <h1 class="shopping-cart-title">Shopping Cart</h1>
      </div>

      <div class="shopping-cart-web">
        <div class="shopping-cards-web">
          <span class="body-small-dark-gray total-count-items"
            >{{ calcTotalCount }} items</span
          >

          <ul class="shopping-cards">
            <li
              class="shopping-card"
              v-for="(product, index) in cart"
              :key="index"
            >
              <ShoppingCartProduct
                class="shopping-card-cart"
                :product="product"
              />
            </li>
          </ul>

          <form class="form-coupon-apply" @submit.prevent="handleSubmit">
            <div class="input-coupon-web">
              <input
                class="body-small"
                type="text"
                id="coupon-code"
                placeholder="Coupon Code"
                v-model="couponCode"
              />
              <!-- v-model="coupon" -->
              <div class="body-small" v-if="showCouponValidation">
                <span class="is-valid-coupon" v-if="isValidCoupon"
                  >{{ this.couponValue }}% discount has been applied</span
                >
                <span class="not-valid-coupon" v-if="!isValidCoupon"
                  >Invalid coupon.</span
                >
              </div>
            </div>

            <button
              @click="applyCoupon"
              class="aplly-coupon-btn btn-black-normal-long"
            >
              APPLY COUPON
            </button>
          </form>
        </div>

        <div class="cart-total">
          <h5 class="cart-totals-title">Cart totals</h5>
          <div class="group-cart-total">
            <span class="body-small left-element"> SUBTOTAL: </span>
            <span class="body-small-dark-gray right-element group-cart-items">{{
              calcSubtotalWithCoupon | currency
            }}</span>
          </div>

          <div v-if="isValidCoupon" class="group-discount">
            <span class="body-small left-element"> You saved: </span>
            <span class="body-small right-element group-cart-items">{{
              calcDiscount | currency
            }}</span>
          </div>

          <div class="group-cart-total">
            <span class="body-small left-element">SHIPPING</span>
            <div class="group-cart-items">
              <span class="body-small-dark-gray right-element"
                >Shipping costs will be calculated once you have provided
                adress.</span
              >
              <span class="body-small right-element">Calculate Shipping</span>
              <select
                @change="selectShippingCountry($event)"
                id="country"
                name="country"
                v-model="country"
                class="body-small right-element select-shipping"
              >
                <option value="" disabled>Select a country</option>
                <option
                  id="country-option"
                  v-for="cost in shippingCosts"
                  v-bind:value="cost.country"
                >
                  {{ cost.country }}
                </option>
              </select>
              <button
                @click="calculatedTotalCost()"
                class="body-small right-element btn-update-totals"
              >
                UPDATE TOTALS
              </button>
              <span
                class="body-small check-shipping-selection"
                v-if="isTotalUpdated && country === defaultCountry"
                >Please select a country</span
              >
            </div>
          </div>
          <div class="group-cart-total-calculation">
            <span class="body-small left-text">TOTAL</span>
            <span
              v-if="isTotalUpdated && country !== defaultCountry"
              class="body-small right-element group-cart-items"
            >
              {{ totalCost | currency }}</span
            >
          </div>
          <button
            @click="goToCheckout()"
            class="btn-black-normal-long btn-continue-delivery"
          >
            PROCEED TO CHECKOUT
          </button>
          <span
            v-if="!isReadyForDelivery"
            class="body-small ready-to-delivery-check"
            >Please select a country and update totals.</span
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ShoppingCartProduct from "@/components/ShoppingCartProduct.vue";
export default {
  name: "ShoppingCart",
  data() {
    return {
      // count: "",
      country: "",
      // defaultCountry: "Select a Country",
      shippingCost: 0,
      totalCost: 0,
      couponCode: null,
      couponValue: 0,
      isValidCoupon: false,
      showCouponValidation: false,
      isTotalUpdated: false,
      isReadyForDelivery: true,
    };
  },
  computed: {
    calcSubtotal() {
      let subtotal = 0;
      this.$store.state.cart.forEach((element, i) => {
        subtotal += element.price * element.count;
      });
      return subtotal;
    },
    calcSubtotalWithCoupon() {
      let subtotal = this.calcSubtotal;
      if (this.isValidCoupon) {
        subtotal *= 1 - this.couponValue / 100;
      }
      return subtotal;
    },
    calcDiscount() {
      if (this.isValidCoupon) {
        return (this.calcSubtotal * this.couponValue) / 100;
      }
      return 0;
    },
    calcTotalCount() {
      let totalCount = 0;
      this.$store.state.cart.forEach((element, i) => {
        totalCount += element.count;
      });
      return totalCount;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.cart.reduce((acc, curr) => acc + curr.count, 0);
    },
    shippingCosts() {
      return this.$store.state.shipping;
    },
    coupons() {
      return this.$store.state.coupons;
    },
  },
  methods: {
    handleSubmit() {
      console.log("submit prevent");
    },
    continueShopping() {
      this.$router.push("/shop");
    },
    goToCheckout() {
      if (this.isTotalUpdated && this.country !== this.defaultCountry) {
        this.$router.push("/checkout");
      } else {
        this.isReadyForDelivery = false;
      }
    },
    selectShippingCountry(event) {
      this.isTotalUpdated = false;
      const selectedCountry = event.target.value;
      this.shippingCost = this.$store.state.shipping.filter(
        (item) => item.country === selectedCountry
      )[0].cost;

      this.$store.commit("SET_SHIPPING_COUNTRY", selectedCountry);
    },
    calculatedTotalCost() {
      this.isTotalUpdated = true;
      if (this.country !== this.defaultCountry) {
        this.totalCost = this.shippingCost + this.calcSubtotal;
        this.isReadyForDelivery = true;
      }
    },
    applyCoupon() {
      const coupons = this.$store.state.coupons.filter(
        (item) => item.name === this.couponCode
      );

      this.showCouponValidation = true;

      if (coupons.length > 0) {
        this.isValidCoupon = true;
        this.couponValue = coupons[0].value;
        this.$store.commit("SET_COUPON", this.couponValue);
        // console.log(this.$store.state.appliedCoupon);
      } else {
        this.isValidCoupon = false;
        this.couponValue = 0;
        this.$store.commit("SET_COUPON", 0);
      }
    },
  },
  components: { ShoppingCartProduct },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";
@import "../styles/btn-syles.scss";

@media only screen and (min-width: 0) {
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }
  .shopping-cart-title-group {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    padding: 0;
    align-items: center;
    width: 100%;

    .shopping-cart-title {
      margin: 0 auto;
    }

    #back-redirect {
      height: 16px;
    }
  }
  .empty-shopping-cart-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .total-count-items {
    width: 100%;
    margin: 25px 0 3px 0;
  }

  .cart-totals-title {
    padding-left: 16px;
    margin: 15px 0;
  }

  .shopping-cards {
    padding: 0;
    width: 100%;
    margin-top: 0;
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
    max-width: 336px;
    border: none;
    border-bottom: 1px solid $gray;
  }

  .aplly-coupon-btn {
    margin: 24px auto 24px 0;
  }

  .cart-total {
    display: flex;
    flex-direction: column;
    background-color: $light-gray;
    padding-bottom: 24px;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 96px;
  }
  .group-cart-total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
  }

  .group-discount {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 16px 16px 0;
    color: $green;
  }
  .group-cart-items {
    // margin-top: 22px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 150px;
  }

  .right-element {
    margin: 0 0 24px 0;
  }

  .btn-update-totals {
    border-radius: 4px;
    border: 1px solid $black;
    background-color: $white;
    height: 32px;
    margin: 10px 0 0 0;
  }

  .select-shipping {
    background-color: $light-gray;
    color: $dark-grey;
    border: none;
    border-bottom: 1px solid $gray;
    padding: 5px 0;
    margin: 0 0 16px 0;
  }

  .group-cart-total-calculation {
    border-top: 1px solid $gray;
    margin: 16px 16px 32px 16px;
    padding-top: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .btn-continue-delivery {
    margin: 0 auto;
  }

  #city,
  #country,
  #coupon-code {
    outline: none;
    // padding-left: 0;
    // margin-left: 0;
  }

  #country-option {
    margin: 0;
    padding: 0;
  }

  .is-valid-coupon {
    color: $green;
  }

  .not-valid-coupon {
    color: $errors;
  }

  .check-shipping-selection {
    color: $errors;
  }

  .ready-to-delivery-check {
    color: $errors;
    margin-left: 16px;
  }
}

@media only screen and (min-width: 1024px) {
  main {
    margin-bottom: 197px;
  }
  .shopping-cart-web {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 64px;
  }
  .shopping-cards-web {
    max-width: 46%;
  }

  .shopping-cards {
    margin-top: 10px;
  }
  .cart-total {
    max-width: 40%;
    margin-left: 43px;
    background-color: $white;
    // margin-bottom: 0;
  }

  .group-cart-items {
    min-width: 50%;
  }
  .group-cart-total {
    padding-left: 0;
  }

  .group-cart-total-calculation {
    margin-left: 0;
  }

  .form-coupon-apply {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .aplly-coupon-btn {
    margin: 13px 0;
    max-width: 35%;
    height: 53px;
    font-size: 16px;
  }

  #coupon-code {
    margin-top: 0;
    height: 53px;
  }
  .input-coupon-web {
    width: 58%;
  }
  .btn-continue-delivery {
    min-width: 100%;
    height: 53px;
    font-size: 16px;
  }

  .select-shipping {
    background-color: $white;
  }

  .cart-totals-title {
    font-weight: 700;
    padding-left: 0;
  }

  .btn-continue-shopping {
    height: 53px;
    font-size: 16px;

    &:hover {
      background-color: white;
      color: $black;
    }
  }
}
</style>
