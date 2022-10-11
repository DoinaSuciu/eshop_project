<template>
  <div>
    <span>
      The following addresses will be used on the checkout page by default.
    </span>
    <div class="billing-address-container">
      <h5>Billing address</h5>
      <button>ADD</button>
      <span> You have not set up this type of address yet. </span>
    </div>

    <div class="bshipping-address-container">
      <h5>Shipping address</h5>
      <button>ADD</button>
      <span> You have not set up this type of address yet. </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Address",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  .container-no-downloads {
    background-color: $light-gray;
  }
  .browse-product-info {
    color: $accent;
  }
}
</style>
