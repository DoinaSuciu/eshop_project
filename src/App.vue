<template>
  <div id="app">
    <Header />
    <!-- <SearchBar /> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import SearchBar from "./components/SearchBar.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    // SearchBar,
  },
};
</script>

<style lang="scss">
@import "./styles/base.scss";
@import "./styles/vars.scss";

@font-face {
  font-family: "DM Sans Regular";
  src: local("DM Sans"),
    url("./styles/fonts/DMSans-Regular.woff") format("woff");
}
#app {
  font-family: "DM Sans Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>
