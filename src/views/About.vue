<template>
  <div class="about">
    <h1>OUR MISSION</h1>
    <p class="body-small">
      We believe in jewelry as an expression of self: that it can mean whatever
      you want; that you can wear it when you want, buy it when you want, gift
      it, celebrate with it, reward yourself with it and keep it forever.
    </p>
    <h5>INSPIRED BY YOU</h5>
    <img src="../assets/Img 01-about.png" />
    <p class="body-small">
      " Since our first Monday Drop in 2015, you have embraced fine jewelry for
      yourself. It’s you—your daily style signatures, your decisions to buy
      yourself the damn diamond—that has inspired us the whole time. You’re
      living our mission right alongside us. "
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography";

.about {
  display: flex;
  flex-direction: column;
  justify-content: left;
}
</style>
