<template>
  <nav class="nav-bar">
    <router-link to="/"
      ><img class="logo" src="../assets/SHOPPE.png"
    /></router-link>

    <div class="nav-icons">
      <ul class="nav-links">
        <li v-for="item in menu">
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <span class="nav-icon mobile-hide"><img src="../assets/Line.png" /></span>
      <router-link class="nav-icon mobile-hide" to="/search"
        ><img src="../assets/Icon search.png"
      /></router-link>
      <router-link class="nav-icon" to="/shopping-cart">
        <!-- <img src="../assets/Bag.png"
      /> -->
        cart: {{ cartTotal }}
      </router-link>
      <router-link class="nav-icon mobile-hide" to="/account"
        ><img src="../assets/Icon account.png"
      /></router-link>

      <HambMenuIcon
        id="hamb-menu-icon"
        class="nav-icon hamb-icon"
        @action="handleHambIcon"
      />

      <div class="hamb-menu" :class="{ 'show-menu': open }">
        <div class="hamb-menu-items">
          <ul class="hamb-menu-list">
            <li @click="hideHambMenu" v-for="item in hambMenu">
              <router-link class="hamb-menu-item" :to="item.path">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
          <div @click="hideHambMenu">
            <router-link
              v-if="isLoggedIn"
              class="hamb-menu-item-icon hamb-menu-item"
              to="/account"
            >
              <img src="../assets/Icon account.png" />My account
            </router-link>

            <button
              @click="logout"
              v-if="isLoggedIn"
              class="hamb-menu-item-icon hamb-menu-item"
            >
              <img src="../assets/Icon logout.png" />Logout
            </button>

            <router-link
              v-if="!isLoggedIn"
              class="hamb-menu-item-icon hamb-menu-item"
              to="/account"
            >
              <img src="../assets/Icon logout.png" />Register
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import HambMenuIcon from "./HambMenuIcon.vue";
// import HambMenu from "./HambMenu.vue";

export default {
  name: "Header",
  data() {
    return {
      menu: [
        {
          name: "",
          path: "/",
        },
        {
          name: "Shop",
          path: "/shop",
        },
        {
          name: "Blog",
          path: "/blog",
        },
        {
          name: "Our Story",
          path: "/our-story",
        },
      ],
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
          path: "/blog",
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
      open: false,
    };
  },

  components: { HambMenuIcon },

  methods: {
    hideHambMenu(isOpen) {
      this.handleHambIcon(!isOpen);
    },

    handleHambIcon(isOpen) {
      // console.log(this.open);
      // console.log(isOpen);
      this.open = isOpen;
      if (isOpen) {
        document.documentElement.style.overflow = "hidden";

        return;
      }
      document.documentElement.style.overflow = "auto";
      // this.isOpen = !this.isOpen;
      // console.log(isOpen);
      // this.$refs.hambMenu.style.height = "isOpen" ? "50%" : "0%";
      // console.log(this.$refs.hambMenu);
      // console.log(this.$refs.hambMenu.style);
      // console.log(this.$refs.hambMenu.style.height);
    },

    logout() {
      console.log("logout");
      return this.$store.dispatch("logout");
    },
  },

  computed: {
    isLoggedIn() {
      console.log(`isLoggedIn ${this.$store.getters.isAuthenticated}`);
      return this.$store.getters.isAuthenticated;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.cart.reduce((acc, curr) => acc + curr.count, 0);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@media only screen and (min-width: 0) {
  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    height: 18px;

    .logo {
      max-width: 99px;
    }
    .nav-links {
      display: none;
    }
  }

  .mobile-hide {
    display: none;
  }

  .nav-icon {
    margin-left: 16px;
  }

  .nav-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hamb-menu {
    display: none;
    z-index: 2;
    width: 0;
  }

  .show-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    overflow: hidden;
    flex-grow: 1;
    top: 0;
    height: 100%;
    width: 100%;
    margin-top: 50px;
    padding: 0 16px;
    left: 100vw;
    justify-content: left;
    align-items: left;
    transform: translate(-100vw);
    transition: transform 0.5s ease-in-out;
  }

  .hamb-menu-items {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    top: 0;
    max-width: 1200px;
    height: 100%;
    padding: 16px 0;
    list-style: none;
    background-color: $white;
  }

  .hamb-menu-list {
    padding: 0 0 23px 0;
    border-bottom: 1px $light-gray;
    border-style: none none solid none;
    margin-bottom: 0;
  }

  .hamb-menu-item {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 16px 16px;
    color: black;
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    transition-duration: 0.25s;
    border: none;
    background-color: $white;
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
  .logo {
    min-width: 140px;
  }
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    height: 80px;

    .nav-links {
      font-size: 16px;
      display: flex;
    }

    ul {
      display: flex;
      li {
        &:not(:last-child) {
          margin-right: 35px;
          display: inline-block;
        }
      }
    }
  }
  .nav-icons,
  .mobile-hide {
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .nav-icon {
    margin-left: 35px;
  }

  .show-menu {
    display: none;
  }
}
</style>
