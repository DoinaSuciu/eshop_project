<template>
  <main class="my-account">
    <vue-horizontal
      responsive
      class="horizontal"
      :displacement="0.7"
      snap="center"
    >
      <div
        :class="[
          'item',
          selectedTab === item.name ? 'selected-tab' : 'not-selected-tab',
        ]"
        v-for="item in items"
        :key="item.name"
      >
        <h5
          :class="[
            'title',
            selectedTab === item.name
              ? 'selected-tab-text'
              : 'not-selected-tab-text',
          ]"
          @click="onSelect(item.name)"
        >
          {{ item.name }}
        </h5>
      </div>
    </vue-horizontal>
    <Dashboard v-if="selectedTab === 'Dashboard'" @action="onSelect" />
    <Orders v-if="selectedTab === 'Orders'" />
    <Downloads v-if="selectedTab === 'Downloads'" />
    <AccountDetails v-if="selectedTab === 'Account Details'" />
    <AccountAddress v-if="selectedTab === 'Address'" />
  </main>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import AccountDetails from "@/components/AccountDetails.vue";
import Dashboard from "@/components/Dashboard.vue";
import Downloads from "../components/Downloads.vue";
import Orders from "../components/Orders.vue";
import AccountAddress from "../components/AccountAddress.vue";
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "MyAccount",
  data() {
    return {
      selectedTab: "Dashboard",
      items: [
        { name: "Dashboard" },
        { name: "Orders" },
        { name: "Downloads" },
        { name: "Account Details" },
        { name: "Address" },
      ],
    };
  },
  components: {
    VueHorizontal,
    AccountDetails,
    Tab,
    Tabs,
    Dashboard,
    Downloads,
    Orders,
    AccountAddress,
  },
  methods: {
    onSelect(name) {
      this.selectedTab = name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

.my-account {
  margin: 57px 0 0 0;
  padding: 0;
}

.account-details-component {
  width: 100%;
}

.title {
  margin: 0;
  padding: 0;
  height: auto;
  align-self: center;
  color: $dark-grey;
  white-space: nowrap;
  cursor: pointer;
}

.selected-tab {
  border-bottom: 2px solid $black;
}

.not-selected-tab {
  border-bottom: 2px solid transparent;
}

.selected-tab-text {
  color: $black;
}

.not-selected-tab-text {
  color: $dark-grey;
}

.horizontal {
  width: 100%;
  margin: 0;
  border-bottom: 2px solid $light-gray;
  // gap: 24px;

  .v-hl-btn {
    margin-bottom: 16px;
    border: none;
    box-shadow: none;
  }
  .v-hl-btn svg {
    background: white;
    color: black;
    fill: currentColor;
    box-shadow: none;
    border-radius: 0;
  }

  .v-hl-btn-next {
    padding-right: 15px;
  }
}

.horizontal >>> .v-hl-btn svg {
  border-radius: 0;
  margin: 0;
  padding: 8px;
  height: 100%;
  box-shadow: none;
  fill: none;
}

.horizontal >>> .v-hl-btn-prev {
  background: linear-gradient(to left, #ffffff00 0, #fff 66%, #fff);
  padding-right: 16px;
}

.horizontal >>> .v-hl-btn-next {
  background: linear-gradient(to right, #ffffff00 0, #fff 66%, #fff);
  padding-left: 16px;
}

.horizontal >>> .v-hl-btn {
  top: 0;
  bottom: 0;
  transform: translateX(0);
}

.item {
  background: $white;
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  justify-content: center;
  padding-bottom: 16px;
}
</style>
