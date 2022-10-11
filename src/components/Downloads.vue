<template>
  <div class="container-no-downloads">
    <span class="no-download-info body-small">
      No Download has been made yet.
    </span>
    <span id="browse-product-info body-medium">BROWSE PRODUCT</span>
    <button class="btn-small-read-more">START SHOPPING</button>
  </div>
</template>

<script>
export default {
  name: "Downloads",
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
