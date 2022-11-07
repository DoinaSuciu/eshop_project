<template>
  <div class="modal">
    <div class="modal-content">
      <p v-html="this.modalMessage" class="body-small"></p>
      <button
        class="btn-small-read-more body-small btn-modal"
        @click="closeModal"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
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
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1004;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);

    .modal-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 8px;
      // width: 300px;
      max-width: 500px;
      padding: 40px 15px;
      background-color: #fff;
      margin: 0 15px;
    }

    p {
      text-align: center;
    }

    button {
      align-self: center;
    }
  }
}
@media only screen and (min-width: 768px) {
  .modal-content {
    width: 500px;
    font-size: 26px;
  }
  .btn-modal {
    height: 40px;
    border-radius: 5px;
  }
}
</style>
