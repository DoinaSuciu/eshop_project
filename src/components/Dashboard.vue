<template>
  <section class="dashboard-container">
    <span class="body-small">
      Hello <span class="bold">{{ getUsername }}</span> (not
      {{ getUsername }}?<button
        class="btn-dashboard-logout body-small"
        @click="logout"
      >
        Log out</button
      >)</span
    >
    <p class="body-small">
      From your account dashboard you can view your recent
      <span @click="onSelectTab('Orders')" class="body-small-accent"
        >orders</span
      >, manage your
      <span @click="onSelectTab('Address')" class="body-small-accent"
        >shipping and billing adresses</span
      >, and edit your your
      <span @click="onSelectTab('Account Details')" class="body-small-accent"
        >password and account details</span
      >.
    </p>
  </section>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  computed: {
    getUsername() {
      return this.$store.state.auth.profileUsername;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      if (this.$router.currentRoute.name !== "home") {
        this.$router.push("/");
      }
    },
    onSelectTab(name) {
      this.$emit("action", name);
    },
    // goToOrders() {
    //   this.$router.push({ name: "home" });
    // }
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  .dashboard-container {
    padding-top: 39px;
  }

  .btn-dashboard-logout {
    border: none;
    background-color: $white;
    color: $accent;
  }
}
</style>
