<template>
  <main class="my-account">
    <h1 class="my-account-title">My account</h1>
    <div class="wrapper">
      <tabs>
        <tab title="Dashboard">
          <Dashboard />
        </tab>
        <tab title="AccountDetails">
          <AccountDetails class="account-details-component" />
        </tab>
      </tabs>
    </div>
  </main>
</template>

<script>
import AccountDetails from "@/components/AccountDetails.vue";
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/Tabs.vue";
import Dashboard from "@/components/Dashboard.vue";
import Downloads from "../components/Downloads.vue";
export default {
  name: "MyAccount",
  data() {
    return {};
  },
  components: { AccountDetails, Tab, Tabs, Dashboard, Downloads },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

.my-account {
  margin: 0;
  padding: 0;
}

.account-details-component {
  width: 100%;
}

.my-account-tab {
}
</style>
