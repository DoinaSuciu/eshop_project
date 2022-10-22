<template>
  <div class="profile">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      @close-modal="closeModal"
    />
    <div class="container">
      <!-- <h1 class="text-align-center">Account details</h1> -->
      <div class="profile-info">
        <div class="initials">{{ profileInitials }}</div>
        <!-- <div class="admin-badge">
          <span class="body-medium">admin</span>
        </div> -->
        <div class="input body-small">
          <label class="body-medium" for="firstName">First Name*</label>
          <input
            type="text"
            class="body-medium"
            id="firstName"
            v-model="firstName"
            placeholder="First name*"
          />
        </div>
        <div class="input">
          <label class="body-medium" for="lastName">Last Name*</label>
          <input
            class="body-medium"
            type="text"
            id="lastName"
            v-model="lastName"
            placeholder="Last name*"
          />
        </div>
        <div class="input username">
          <label class="body-medium" for="username">Username*</label>
          <input
            class="body-medium"
            type="text"
            id="username"
            v-model="username"
            placeholder="Username*"
          />
        </div>

        <p class="body-small username-details">
          This will be how your name will be displayed in the account section
          and in reviews.
        </p>
        <div class="input">
          <label class="body-medium" for="email">Email*</label>
          <input
            class="body-medium"
            disabled
            type="text"
            id="email"
            v-model="email"
            placeholder="Email address*"
          />
        </div>
        <button
          class="btn-small-read-more save-changes-btn"
          @click="updateProfile"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "AccountDetails",
  components: { Modal },
  data() {
    return {
      modalMessage: "Changes were saved!",
      modalActive: null,
    };
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("updateUserSettings");
      this.modalActive = !this.modalActive;
    },
    closeModal() {
      this.modalActive = !this.modalActive;
    },
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.auth.profileFirstName;
      },
      set(payload) {
        this.$store.commit("CHANGE_FIRST_NAME", payload);
      },
    },
    lastName: {
      get() {
        return this.$store.state.auth.profileLastName;
      },
      set(payload) {
        this.$store.commit("CHANGE_LAST_NAME", payload);
      },
    },
    username: {
      get() {
        return this.$store.state.auth.profileUsername;
      },
      set(payload) {
        this.$store.commit("CHANGE_USER_NAME", payload);
      },
    },
    email() {
      return this.$store.state.auth.profileEmail;
    },
    profileInitials() {
      return this.$store.state.auth.profileInitials;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";
@import "../styles/btn-syles.scss";

@media only screen and (min-width: 0) {
  .profile {
    margin: 0;
    padding: 0;
    .container {
      max-width: 1000px;
      padding: 39px 25px;
      margin: 0 auto;
      h2 {
        text-align: center;
        margin-bottom: 16px;
        font-weight: 300;
        font-size: 32px;
      }
      .profile-info {
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        padding: 32px;
        background-color: $light-gray;
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        margin: 32px auto;

        .username-details {
          background-color: $light-gray;
          margin: 0 0 20px 0;
        }
        .initials {
          position: initial;
          width: 80px;
          height: 80px;
          font-size: 32px;
          background-color: $dark-grey;
          color: $white;
          display: flex;
          align-self: center;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-bottom: 15px;
        }
        .admin-badge {
          display: flex;
          align-self: center;
          color: $white;
          font-size: 14px;
          padding: 8px 24px;
          border-radius: 8px;
          background-color: $dark-grey;
          margin: 16px 0;
          text-align: center;
          text-transform: capitalize;
          .icon {
            width: 14px;
            height: auto;
            margin-right: 8px;
          }
        }
        .input {
          margin: 16px 0;
          label {
            display: flex;
            padding-bottom: 6px;
            color: $dark-grey;
          }
          input {
            width: 100%;
            border: none;
            background-color: #f2f7f6;
            padding: 0 0 0 8px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:focus {
              outline: none;
            }
          }
        }
        .save-changes-btn {
          align-self: center;
          margin-top: 15px;
          width: 60%;
        }
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .save-changes-btn {
    height: 53px;
    font-size: 16px;
  }
}
</style>
