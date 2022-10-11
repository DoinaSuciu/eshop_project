<template>
  <div class="container-no-order">
    <span class="no-order-info body-small"> No order has been made yet. </span>
    <span id="browse-product-info body-medium">BROWSE PRODUCT</span>
    <button class="btn-small-read-more">START SHOPPING</button>
  </div>
</template>

<script>
export default {
  name: "Orders",
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
  .container-no-order {
    background-color: $light-gray;
  }
  .browse-product-info {
    color: $accent;
  }
}
</style>
