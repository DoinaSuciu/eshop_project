<template>
  <div class="product-card-container">
    <button
      v-if="isRemovable"
      class="remove-btn body-medium"
      @click="removeProduct"
    >
      +
    </button>
    <span v-if="product.pieces === 0" class="body-medium sold-out">
      Sold out
    </span>

    <router-link class="product-card" :to="`/product-view/${product.id}`">
      <img
        class="img-card"
        :class="{ 'sold-out-img': product.pieces === 0 }"
        :src="product.photo"
      />
      <span class="product-name body-medium">{{ product.name }}</span>
      <h4 class="product-price body-small">{{ product.price | currency }}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      required: true,
      photo: String,
      name: String,
      price: String,
      pieces: Number,
    },
    isRemovable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    removeProduct() {
      this.$emit("remove-product", this.product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";
// @import "../styles/typography";

@media only screen and (min-width: 0) {
  .product-card-container {
    overflow: hidden;
  }
  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // min-width: 136px;
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .product-card-container {
    position: relative;
  }
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

  .img-card {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;

    &:hover {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }

  .remove-btn {
    position: absolute;
    margin-top: 20px;
    right: 10px;
    font-size: 25px;
    border: none;
    background-color: transparent;
    color: $dark-grey;
    transform: rotate(45deg);
    // padding: 0;
    // padding-left: 10px;
    z-index: 99;
    display: flex;
  }

  .sold-out {
    position: absolute;
    top: 4px;
    margin-top: 13px;
    padding: 2px 4px;
    left: 4px;
    border: none;
    border-radius: 5px;
    background-color: $accent;
    color: $white;
    z-index: 99;
    display: flex;
    // animation: color-change 2s infinite;
  }

  // @keyframes color-change {
  //   0% {
  //     background-color: $accent;
  //   }
  //   50% {
  //     background-color: $dark-grey;
  //   }
  //   100% {
  //     background-color: $accent;
  //   }
  // }

  .sold-out-img {
    opacity: 0.4;
    filter: alpha(opacity=40);
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
  .sold-out {
    top: 10px;
    padding: 4px 8px;
    left: 8px;
  }
}

@media only screen and (min-width: 1024px) {
  .product-card {
    margin-bottom: 40px;
  }
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

  .remove-btn {
    font-size: 35px;
    margin-top: 25px;
  }

  .sold-out {
    top: 16px;
    padding: 6px 10px;
    left: 16px;
    font-size: 20px;
  }
}
</style>
