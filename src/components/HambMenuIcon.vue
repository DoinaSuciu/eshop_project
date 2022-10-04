<template>
  <i class="hamb-menu-icon" @click="toggleIcon" :class="{ 'is-open': isOpen }">
    <span></span>
    <span></span>
    <span></span>
  </i>
</template>

<script>
export default {
  name: "HambMenuIcon",
  data() {
    return {};
  },
  methods: {
    toggleIcon() {
      this.$store.commit("SET_HAMB_ICON", !this.isOpen);
      this.$emit("action", this.isOpen);
    },
  },
  computed: {
    isOpen() {
      return this.$store.state.isHambIconOpen;
    },
  },
};
</script>

<style lang="scss">
@media only screen and (min-width: 0) {
  .hamb-menu-icon {
    display: inline-block;
    cursor: pointer;
    span {
      display: block;
      height: 2px;
      background-color: black;
      width: 20px;
      margin: 5px 0;
      transition: 0.4s;
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        transform: translateX(4px);
        width: 16px;
        margin-bottom: 3px;
      }
    }

    &.is-open {
      span {
        // animation: open 0.2s normal forwards easy-in-out;
        &:first-child {
          -webkit-transform: rotate(-45deg) translate(-7px, 2.5px);
          transform: rotate(-45deg) translate(-7px, 2.5px);
        }
        &:nth-child(2) {
          opacity: 0;
          transform: translateX(20px) rotate(360deg);
        }
        &:last-child {
          transform: translateX(0px);
          width: 20px;
          -webkit-transform: rotate(45deg) translate(-7px, -2.5px);
          transform: rotate(45deg) translate(-7px, -2.5px);
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .hamb-menu-icon {
    display: none;
  }
}
</style>
