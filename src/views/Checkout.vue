<template>
  <div>
    <div class="checkout-title-group">
      <router-link id="back-redirect" to="/shopping-cart">
        <img id="back-redirect" src="../assets/Icon-go-back.png" />
      </router-link>

      <h1 class="checkout-title">Checkout</h1>
    </div>

    <div class="checkout-first-questions-group">
      <div class="checkout-first-questions">
        <span class="body-small-dark-gray">Returning customers?</span>
        <router-link class="body-small click-here" to="/account"
          >Click here to login</router-link
        >
      </div>

      <div class="checkout-first-questions">
        <span class="body-small-dark-gray">Have a coupon?</span>
        <router-link class="body-small click-here" to="/shopping-cart"
          >Click here to enter your code</router-link
        >
      </div>
    </div>

    <form class="body-small checkout-form" @submit.prevent="submitForm">
      <div class="billing-details-web">
        <h5 class="checkout-title">Billing Details</h5>

        <input
          class="body-small input-check"
          type="text"
          id="firstName"
          placeholder="First name *"
        />

        <input
          class="body-small input-check"
          type="text"
          id="lastName"
          placeholder="Last name *"
        />

        <select
          id="country"
          name="country"
          v-model="country"
          class="body-small-dark-gray"
        >
          <option value="Franta">Franta</option>
          <option value="Germania">Germania</option>
          <option value="Republica Moldova">Republica Moldova</option>
          <option value="Romania">Romania</option>
          <option value="UK">UK</option>
          <option value="Spania">Spania</option>
        </select>

        <input
          class="body-small input-check"
          type="text"
          id="streetAddress"
          placeholder="Street Address *"
        />

        <input
          class="body-small input-check"
          type="text"
          id="postCode"
          placeholder="Postcode/ ZIP *"
        />

        <input
          class="body-small input-check"
          type="text"
          id="town"
          placeholder="Town/ City *"
        />

        <input
          class="body-small input-check"
          type="number"
          id="phone"
          placeholder="Phone *"
        />

        <input
          class="body-small input-check"
          type="text"
          id="email"
          placeholder="Email *"
        />

        <div class="checkbox-group">
          <label id="create-account-checkbox">
            <input
              class="checkbox-checkout"
              type="checkbox"
              value="Create an account"
            />Create an account?</label
          >

          <label id="different-address-checkbox">
            <input
              class="checkbox-checkout"
              type="checkbox"
              value="different address"
            />Ship to a different address?</label
          >
        </div>
        <!-- v-model="checked" -->

        <input
          class="body-small input-check"
          type="text"
          id="notes"
          placeholder="Order notes"
        />
      </div>

      <div class="order-details-web">
        <h5 class="checkout-title">Your Order</h5>
        <div class="order-details">
          <div class="order-details-header group-checkout">
            <span class="body-small">PRODUCT</span>
            <span class="body-small right-side">TOTAL</span>
          </div>
          <ul class="list-products-group">
            <li
              class="body-small-dark-gray list-products-total"
              v-for="(product, index) in cart"
              :key="index"
            >
              <span class="">{{ product.name }}</span>
              <span class="">{{
                (product.price * product.count) | currency
              }}</span>
            </li>
          </ul>

          <div class="group-checkout">
            <span class="body-small left-element"> SUBTOTAL </span>
            <span class="body-small-dark-gray right-side"
              >{{ calcSubtotal | currency }}
            </span>
          </div>
          <div class="group-checkout">
            <span class="body-small left-element"> SHIPPING </span>
            <span class="body-small-dark-gray right-side">
              {{ totalShippingCost | currency }}</span
            >
          </div>

          <div class="group-checkout discount">
            <span class="body-small left-element discount"> DISCOUNT</span>
            <span class="body-small-dark-gray right-side discount">
              -{{ appliedDiscount | currency }}
            </span>
          </div>
          <div class="group-checkout">
            <span class="body-small left-element"> TOTAL</span>
            <span class="body-small-dark-gray right-side">
              {{ finalTotalCost | currency }}</span
            >
          </div>

          <div class="radio-group">
            <label class="radio-boxes">
              <input
                class="radio"
                type="radio"
                value="direct bank transfer"
                v-model="payment"
              /><img
                id="payment-methods-img"
                src="../assets/payment-methods/visa.png"
              />
              <img
                id="payment-methods-img"
                src="../assets/payment-methods/mastercard.png"
              />
              <img
                id="payment-methods-img"
                src="../assets/payment-methods/amexco.png"
              />Debit or Credit Card</label
            >

            <label class="radio-boxes">
              <input
                class="radio"
                type="radio"
                value="payPal"
                v-model="payment"
              /><img
                id="payment-methods-img"
                src="../assets/payment-methods/paypal.png"
              />PayPal</label
            >

            <label class="radio-boxes">
              <input
                class="radio"
                type="radio"
                value="cash"
                v-model="payment"
              />Cash on delivery</label
            >
          </div>

          <button
            class="btn-black-normal-long body-small btn-place-order"
            @click=""
          >
            PLACE YOUR ORDER
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      country: "Romania",
      payment: "",
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
    cart() {
      return this.$store.state.cart;
    },
    appliedCoupon() {
      return this.$store.state.appliedCoupon;
    },
    appliedDiscount() {
      return (this.appliedCoupon * this.calcSubtotal) / 100;
    },
    totalShippingCost() {
      const shippingCountrySelected = this.$store.state.shippingCountry;
      return this.$store.state.shipping.filter(
        (item) => item.country === shippingCountrySelected
      )[0].cost;
    },
    finalTotalCost() {
      return this.calcSubtotal - this.appliedDiscount + this.totalShippingCost;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";
@import "../styles/btn-syles.scss";

@media only screen and (min-width: 0) {
  .checkout-title-group {
    display: flex;
    flex-direction: row;
    margin: 17px 0 24px 0;
    padding: 0;
    align-items: center;
    width: 100%;

    #back-redirect-link {
      text-decoration: none;
    }

    #back-redirect {
      height: 16px;
    }

    .checkout-title {
      margin: 0 auto;
    }
  }

  .click-here {
    margin-left: 5px;
    color: $black;
  }

  .checkout-first-questions-group {
    margin-bottom: 35px;
  }

  .checkout-first-questions {
    margin-bottom: 8px;
  }

  .checkout-form {
    margin-top: 0;
    width: 100%;
    // width: 288px;
    padding: 0;
    #email,
    #firstName,
    #lastName,
    #streetAddress,
    #town,
    #phone,
    #postCode,
    #country,
    #notes {
      width: 100%;
      height: 25px;
      padding: 0;
      margin-top: 23px;
      margin-bottom: 0;
      border: none;
      border-bottom: 1px solid $gray;
    }

    #firstName {
      margin-top: 0;
    }

    #notes {
      margin-bottom: 22px;
      padding-bottom: 13px;
    }

    .checkbox-group {
      display: flex;
      flex-direction: column;
      margin: 37px 0 14px 0;
    }

    #create-account-checkbox {
      margin-bottom: 12px;
    }
    .list-products-group {
      padding: 0;
      border-bottom: 1px solid $gray;
    }
    .list-products-total {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 23px 0;
      margin: 0 16px;
    }

    #payment-methods-img {
      height: 20px;
      margin: 0 5px 0 5px;
    }
    .radio {
      margin: 0 5px 0 0;
    }

    .radio-boxes {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    .radio-group {
      margin: 41px 0 37px 16px;
      display: flex;
      flex-direction: column;
    }

    .right-side {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .order-details {
      background-color: $light-gray;
      border-radius: 4px;
      padding-bottom: 24px;
      margin-bottom: 96px;
    }

    .group-checkout {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 23px 0;
      margin: 0 16px;
      border-bottom: 1px solid $gray;
    }

    .btn-place-order {
      padding: 6px 30px 6px 30px;
      width: 90%;
      margin: 0 auto;
      justify-content: center;
    }

    .input-check,
    #country {
      outline: none;
    }

    .discount {
      color: $green;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .checkout-title-group {
    margin-bottom: 64px;
  }
  .checkout-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #email,
    #firstName,
    #lastName,
    #streetAddress,
    #town,
    #phone,
    #postCode,
    #country,
    #notes {
      margin-top: 37px;
    }
  }

  .billing-details-web {
    max-width: 46%;
  }

  .order-details-web {
    min-width: 46%;
  }

  .btn-place-order {
    height: 53px;
    font-size: 16px;
  }
}
</style>
