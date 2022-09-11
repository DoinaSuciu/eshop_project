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
      <router-link class="nav-icon" to="/bag"
        ><img src="../assets/Bag.png"
      /></router-link>
      <router-link class="nav-icon mobile-hide" to="/account"
        ><img src="../assets/Icon account.png"
      /></router-link>

      <HambMenuIcon class="nav-icon hamb-icon" @action="handleHambIcon" />

      <!-- <HambMenu class="hamb-menu" :class="{ 'show-menu': open }" /> -->
      <div class="hamb-menu" :class="{ 'show-menu': open }">
        <div class="hamb-menu-test">
          <div class="hamb-menu-items">
            <ul class="hamb-menu-list">
              <li v-for="item in hambMenu">
                <router-link class="hamb-menu-item" :to="item.path">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
            <router-link
              class="hamb-menu-item-icon hamb-menu-item"
              to="/account"
              ><img src="../assets/Icon account.png" />My account</router-link
            >
            <router-link class="hamb-menu-item-icon hamb-menu-item" to="/"
              ><img src="../assets/Icon logout.png" />Logout</router-link
            >
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
    handleHambIcon(isOpen) {
      console.log(this.open);
      console.log(isOpen);
      this.open = isOpen;
      // this.isOpen = !this.isOpen;
      // console.log(isOpen);
      // this.$refs.hambMenu.style.height = "isOpen" ? "50%" : "0%";
      // console.log(this.$refs.hambMenu);
      // console.log(this.$refs.hambMenu.style);
      // console.log(this.$refs.hambMenu.style.height);
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
    // width: 28px;
    // height: 28px;
    // padding-top: 12px;
  }

  .nav-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hamb-menu {
    display: none;
    position: absolute;
    z-index: 5;
  }

  .show-menu {
    display: block;
    position: fixed;
    top: 36px;
    right: -50%;
    // // left: -100%;
    // width: 400px;
    height: 100%;

    position: fixed;
    top: 0;
    margin: 50px 16px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;
    overflow-x: hidden;
  }

  .hamb-menu-items {
    display: block;
    position: relative;
    top: 0;
    max-width: 1200px;
    height: 100%;
    // margin: 0;
    padding: 16px 0;
    list-style: none;
    background-color: $white;
    // box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    // transition-duration: 0.25s;
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
  }
  .hamb-menu-item-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }

  .web-hide {
  }
}
@media only screen and (min-width: 768px) {
  .logo {
    min-width: 140px;
    // min-height: 40px;
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
