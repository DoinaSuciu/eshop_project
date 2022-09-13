<template>
  <footer>
    <div class="group-navs-newsletter">
      <div>
        <div class="ask-for-newsletter">
          <span> Give an email, get the newsletter. </span>
          <img class="arrow" src="../assets/footer/Icon arrow.png" />
        </div>
        <span class="line"></span>
      </div>

      <!-- <form class="agree-conditions" @submit.prevent="handleSubmit">
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">
          I agree to the website's terms and conditions
        </label>
      </form> -->
      <div class="navs-footer">
        <router-link class="nav-footer" to="/contact">CONTACT </router-link>
        <router-link class="nav-footer" to="/contact"
          >TERMS OF SERVICES
        </router-link>
        <router-link class="nav-footer" to="/contact"
          >SHIPPING AND RETURNS
        </router-link>
      </div>
    </div>
    <div class="follow-us-group">
      <div class="follow-us">
        <span class="follow-items hidden-web">Follow us</span>
        <span class="follow-items short-line hidden-web"></span>
        <img
          class="follow-items icon hidden-mobile"
          src="../assets/footer/Icon linkedIn.png"
        />
        <img
          class="follow-items icon"
          src="../assets/footer/Icon facebook.png"
        />
        <img class="follow-items icon" src="../assets/footer/Icon insta.png" />
        <img
          class="follow-items icon"
          src="../assets/footer/Icon twitter.png"
        />
      </div>
      <span class="terms">© 2022 SHOPPE. Terms of use and privacy policy.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      checked: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("send details to server");
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";

@media only screen and (min-width: 0) {
  footer {
    margin-top: 80px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    padding: 0;

    .ask-for-newsletter {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
      margin-top: 20px;
      color: $dark-grey;
    }

    .line {
      display: block;
      border-bottom: 0.05px solid black;
      width: 288px;
    }

    .agree-conditions {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: -3px;
      margin-top: 11px;
      margin-bottom: 40px;
    }

    .navs-footer {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
    }

    .nav-footer {
      color: $dark-grey;
      margin-bottom: 5px;
      text-decoration: none;
    }

    .follow-us {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 32px;
      margin-bottom: 49px;
    }
    .short-line {
      display: block;
      border-bottom: 0.05px solid black;
      width: 47px;
      margin-top: 7px;
    }

    .follow-items {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }

    .icon {
      width: 12px;
      height: 12px;
      // object-fit: cover;
      display: flex;
    }

    .arrow {
      width: 5%;
      height: 5%;
    }
    .hidden-mobile {
      display: none;
    }

    .terms {
      color: $dark-grey;
    }
  }
}

@media only screen and (min-width: 768px) {
  footer {
    margin-top: 170px;
    margin-bottom: 90px;
    font-size: 16px;
    border-top: 1px solid $gray;

    .ask-for-newsletter {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }

    .navs-footer {
      display: flex;
      flex-direction: row;
    }

    .nav-footer {
      margin-right: 41px;
    }

    .group-navs-newsletter {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
    }

    .follow-us-group {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
      margin-top: 57px;
    }

    .follow-us {
      margin: 0;
    }

    .hidden-web {
      display: none;
    }

    .hidden-mobile {
      display: flex;
    }

    .icon {
      width: auto;
      height: auto;
    }

    .arrow {
      width: auto;
      height: auto;
    }
  }
}
</style>
