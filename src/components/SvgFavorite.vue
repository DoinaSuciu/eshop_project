<template>
  <section class="svg-component">
    <svg
      style="color: red"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        :fill="svgColor"
      ></path>
    </svg>
  </section>
</template>

<script>
export default {
  props: {
    svgColor: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.bi-heart-fill {
  width: 20px;
  height: 20px;
}
</style>
