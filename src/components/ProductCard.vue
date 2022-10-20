<template>
  <router-link class="product-card" :to="`/product-view/${product.id}`">
    <img class="img-card" :src="product.photo" />
    <span class="product-name body-medium">{{ product.name }}</span>
    <h4 class="product-price body-small">$ {{ product.price }}</h4>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
      photo: String,
      name: String,
      price: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";
// @import "../styles/typography";

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // min-width: 136px;
  width: 100%;
  height: auto;

  @media only screen and (min-width: 0) {
    // margin-bottom: 30px;
    a {
      text-decoration: none;

      .img-card {
        margin-top: 13px;
        width: 100%;
        height: auto;
        border-radius: 5px;
        object-fit: cover;
        display: flex;
        flex-grow: 1;
      }
      .product-name {
        margin: 4px 0;
        color: $black;
      }

      .product-price {
        // font-size: 12px;
        color: $accent;
        margin-top: 0;
        font-style: normal;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    a {
      margin-bottom: 40px;
      .img-card {
        // margin-top: 20px;
        min-width: 260px;
        min-height: 260px;
      }
      .product-name {
        // font-size: 20px;
        margin-top: 24px;
        margin-bottom: 16px;
      }

      .product-price {
        // font-size: 20px;
        margin-top: 0;
        font-style: normal;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-bottom: 40px;
    .img-card {
      // margin-top: 20px;
      min-width: 377px;
      min-height: 380px;
    }
    .product-name {
      // font-size: 20px;
      margin-top: 24px;
      margin-bottom: 16px;
    }

    .product-price {
      font-size: 20px;
      font-weight: 400;
      margin-top: 0;
      font-style: normal;
    }
  }
}
</style>
