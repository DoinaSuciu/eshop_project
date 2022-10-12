<template>
  <main>
    <div class="container-no-order">
      <span class="no-order-info body-small">
        No order has been made yet.
      </span>
      <span @click="redirectToShop" class="body-medium browse-product-info"
        >BROWSE PRODUCT</span
      >
    </div>
  </main>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {};
  },
  methods: {
    redirectToShop() {
      this.$router.push({ name: "shop" });
    },
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
  .container-no-order {
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
