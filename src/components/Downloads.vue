<template>
  <main>
    <div class="container-no-downloads">
      <span class="no-download-info body-small">
        No Download has been made yet.
      </span>
      <span class="browse-product-info body-medium">BROWSE PRODUCT</span>
      <!-- <button class="btn-small-read-more">START SHOPPING</button> -->
    </div>
  </main>
</template>

<script>
export default {
  name: "Downloads",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  main {
    margin-top: 39px;
  }
  .container-no-downloads {
    border-top: 2px solid $accent;
    display: flex;
    flex-direction: column;
    background-color: $light-gray;
    width: 100%;
    padding: 9px 16px;
  }
  .browse-product-info {
    color: $accent;
    padding-top: 8px;
  }
}
</style>
