<template>
  <div id="app">
    <AppHeader @show-search-bar="displaySearchBar" />
    <SearchBar
      @hide-search-bar="hideSearchBar"
      :class="['search-bar-is-hidden', { 'search-bar-on-web': searchOnWeb }]"
    />
    <router-view />
    <AppFooter class="footer" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    SearchBar,
  },
  data() {
    return {
      searchOnWeb: false,
    };
  },
  methods: {
    displaySearchBar() {
      this.searchOnWeb = true;
    },
    hideSearchBar() {
      this.searchOnWeb = false;
    },
  },
};
</script>

<style lang="scss">
@import "./styles/base.scss";
@import "./styles/vars.scss";

@media only screen and (min-width: 0) {
  @font-face {
    font-family: "DM Sans Regular";
    src: local("DM Sans"),
      url("./styles/fonts/DMSans-Regular.woff") format("woff");
  }
  #app {
    font-family: "DM Sans Regular";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  nav {
    padding: 0px;
    font-size: 20px;

    a {
      color: $black;
      text-decoration: none;

      &.router-link-exact-active {
        color: $accent;
      }
    }

    a:active,
    a:hover,
    a.router-link-active {
      color: $accent;
      text-decoration: underline;
    }
  }

  li {
    list-style-type: none;
  }

  .footer {
    margin-top: auto;
  }
  .search-bar-is-hidden {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .search-bar-is-hidden {
    display: none;
  }

  .search-bar-on-web {
    display: flex;
    border-bottom: 1px solid $light-gray;
    margin-bottom: 20px;
  }
}
</style>
