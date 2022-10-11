<template>
  <section class="container-404-page">
    <h4>404 ERROR</h4>
    <span class="body-small info-page-404"> This page not found; </span>
    <span class="body-small info-page-404"> back to home and start again </span>
    <button class="btn-page-404" @click="goToHomePage">HOMEPAGE</button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToHomePage() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

.container-404-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 205px;
}

.info-page-404 {
  padding-bottom: 10px;
  color: $dark-grey;
}

.btn-page-404 {
  margin-top: 14px;
  width: 115px;
  height: 32px;
  text-align: center;
  border-radius: 4px;
  border: 1px $black;
  border-style: solid;
  background-color: $white;
}
</style>
