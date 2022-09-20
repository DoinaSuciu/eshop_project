<template>
  <div v-if="active"><slot></slot>></div>
</template>

<script>
export default {
  name: "AppDropdownContent",
  inject: ["sharedState"],
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>
