<template>
  <div>
    <ul class="tabs__header body-small">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{ tab__selected: index == selectedIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
};
</script>

<style lang="css">
/* @import "../styles/base.scss"; */
@import "../styles/vars.scss";
/* @import "../styles/typography.scss"; */

ul.tabs__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  list-style: none;
  margin: 0 auto;
  padding: 2px;
  border-radius: 5px;
  background-color: #efefef;
}
ul.tabs__header > li {
  padding: 4px 49px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
}
ul.tabs__header > li.tab__selected {
  border-radius: 5px;
  background-color: white;
}
.tab {
  display: inline-block;
  color: black;
  padding: 20px;
  width: 800px;
  border-radius: 5px;
  min-height: 100px;
}
</style>
