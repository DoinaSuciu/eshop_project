<template>
  <nav class="nav-bar">
    <router-link to="/">
      <img @click="hideHambMenu" class="logo" src="../assets/SHOPPE.png" />
    </router-link>

    <div class="nav-icons">
      <ul class="nav-links">
        <li v-for="item in menu">
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <span class="nav-icon mobile-hide"><img src="../assets/Line.png" /></span>
      <router-link class="nav-icon mobile-hide" to="/search">
        <img src="../assets/Icon search.png" />
      </router-link>
      <router-link class="nav-icon" to="/shopping-cart">
        <div class="bag-item">
          <img src="../assets/Bag.png" />
          <span v-if="cartTotal > 0" class="cart-total-items">{{
            cartTotal
          }}</span>
        </div>
      </router-link>
      <router-link class="nav-icon mobile-hide" to="/favorites">
        <img src="../assets/favorite.png" />
      </router-link>
      <router-link class="nav-icon mobile-hide" to="/my-account">
        <img src="../assets/Icon account.png" />
      </router-link>

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
              to="/my-account"
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
              to="/account-sign-in"
            >
              <img src="../assets/Icon logout.png" />Sign In
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
          path: "/blogs",
        },
        {
          name: "Our Story",
          path: "/about",
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
      open: false,
    };
  },

  components: { HambMenuIcon },

  methods: {
    hideHambMenu(isOpen) {
      this.handleHambIcon(!isOpen);
    },

    handleHambIcon(isOpen) {
      this.open = isOpen;
      this.$store.commit("SET_HAMB_ICON", isOpen);
      if (isOpen) {
        document.documentElement.style.overflow = "hidden";

        return;
      }
      document.documentElement.style.overflow = "auto";
    },

    logout() {
      this.$store.dispatch("logout");
      if (this.$router.currentRoute.name !== "home") {
        this.$router.push("/");
      }
    },
  },

  computed: {
    isLoggedIn() {
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

<style lang="scss" scoped>
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

    .bag-item {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      // margin: 0;
      // padding: 0;
      // top: 14px;
      // right: 50px;
      // z-index: 4;
    }

    .cart-total-items {
      border-radius: 50%;
      width: 14px;
      height: 14px;
      // padding: 10px;
      background: #fff;
      border: 1px solid #000;
      font-size: 7px;
      color: #000;
      text-align: center;
      // border-color: black;
      padding: 2px;
      text-align: center;
      // background-color: red;
      margin-bottom: 12px;
      margin-left: 17px;
      position: absolute;
    }
  }

  .nav-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hamb-menu {
    display: none;
    z-index: 1000;
    width: 0;
    background-color: $white;
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
