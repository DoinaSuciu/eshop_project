<template>
  <main>
    <span class="adress-header body-small">
      The following addresses will be used on the checkout page by default.
    </span>
    <div class="address-container">
      <h5 class="title-type-of-adress">Billing address</h5>
      <span class="add-adress body-medium">ADD</span>
      <span class="body-small-dark-gray">
        You have not set up this type of address yet.
      </span>
    </div>

    <div class="address-container">
      <h5 class="title-type-of-adress">Shipping address</h5>
      <span class="add-adress body-medium">ADD</span>
      <span class="body-small-dark-gray">
        You have not set up this type of address yet.
      </span>
    </div>
  </main>
</template>

<script>
export default {
  name: "Address",
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
    margin: 39px 0 0 0;
    padding: 0;
  }
  .address-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .container-no-downloads {
    background-color: $light-gray;
    // width: 100%;
  }

  .title-type-of-adress {
    margin-bottom: 18px;
  }
  .add-adress {
    color: $accent;
    margin-bottom: 16px;
  }
  .btn-add-adress {
  }
}
</style>
