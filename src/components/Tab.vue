<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Tab",
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";
</style>
