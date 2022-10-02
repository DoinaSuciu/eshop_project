<template>
  <nav class="hamb-menu">
    <div class="hamb-menu-items">
      <ul class="hamb-menu-list">
        <li v-for="item in hambMenu">
          <router-link class="hamb-menu-item" :to="item.path">
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <div v-if="isLoggedIn">
        <router-link class="hamb-menu-item-icon hamb-menu-item" to="/account"
          ><img src="../assets/Icon account.png" />My account</router-link
        >
        <router-link
          @click="logout"
          class="hamb-menu-item-icon hamb-menu-item"
          to="/"
          ><img src="../assets/Icon logout.png" />Logout</router-link
        >
      </div>

      <router-link
        v-if="!isLoggedIn"
        class="hamb-menu-item-icon hamb-menu-item"
        to="/account"
        ><img src="../assets/Icon logout.png" />Register</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "HambMenu",
  data() {
    return {
      hambMenu: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Shop",
          path: "/shop",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Blog",
          path: "/blogs",
        },
        {
          name: "Help",
          path: "/help",
        },
        {
          name: "Contact",
          path: "/contact",
        },
        {
          name: "Search",
          path: "/search",
        },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      console.log(`isLoggedIn ${this.$store.getters.isAuthenticated}`);
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      console.log("logout");
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";

@media only screen and (min-width: 0) {
  .hamb-menu {
    position: absolute;
    top: 0;
    margin: 55px 16px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .hamb-menu-items {
    display: block;
    // position: fixed;
    top: 0;
    max-width: 1200px;
    height: 100%;
    // margin: 0;
    padding: 16px 0;
    list-style: none;
    background-color: $white;
    // box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    transition-duration: 0.25s;
  }

  .hamb-menu-list {
    padding: 0;
  }

  .hamb-menu-item {
    display: block;
    margin: 0;
    padding: 16px 16px;
    overflow: hidden;
    color: black;
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    transition-duration: 0.25s;
    background-color: $white;
    border: none;
  }
  .hamb-menu-item-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
}

@media only screen and (min-width: 768px) {
}
</style>
