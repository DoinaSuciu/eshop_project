<template>
  <div class="about">
    <h1>OUR MISSION</h1>
    <p class="body-small">
      We believe in jewelry as an expression of self: that it can mean whatever
      you want; that you can wear it when you want, buy it when you want, gift
      it, celebrate with it, reward yourself with it and keep it forever.
    </p>
    <h5>INSPIRED BY YOU</h5>
    <img src="../assets/about-page/about-photo-1.jpg" />
    <p class="body-small">
      Since our first Monday Drop in 2015, you have embraced fine jewelry for
      yourself. It's you—your daily style signatures, your decisions to buy
      yourself the damn diamond—that has inspired us the whole time. You're
      living our mission right alongside us.
    </p>

    <h5>PRODUCED WITH CARE</h5>
    <img
      class="img-produced-with-care"
      src="../assets/about-page/about-photo-2.jpg"
    />
    <span class="text-align-center body-medium"> #WeLoveEarth </span>
    <p class="body-small">
      01. We've adopted processes from the aerospace industry to make jewelry
      that is eco-friendly and ethical. Our coating procedure uses no water and
      chemicals, releases no fumes, and leaves behind no residues. By
      eliminating mined gold and gemstones, we can be less destructive to the
      environment and not harm vulnerable communities.
    </p>
    <span class="text-align-center body-medium"> #NoGreenSkin </span>
    <p class="body-small">
      02. Through advanced technology and nontraditional materials, we're able
      to create affordable pieces that not only are more durable (we're
      waterproof and chemical resistant) than gold plated and vermeil jewelry,
      but are also hypoallergenic. We achieve our gold and rose tones using a
      strong, biocompatible ceramic (found on asteroids and used on rockets)
      that doesn't harm living tissue.
    </p>
    <span class="text-align-center body-medium"> #WeComeInPeace </span>
    <p class="body-small">
      03. There has been too little change in the jewelry industry, and we no
      longer should only be able pick between two ends of the commonly accepted
      jewelry spectrum (fashion vs. fine). As a jewelry alternative, we offer
      something that looks and feels high-end — all at a more universal price
      point. Will you join us on our journey?
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography";

.about {
  display: flex;
  flex-direction: column;
  justify-content: left;
}

img {
  border-radius: 6px;
}

.img-produced-with-care {
  margin-bottom: 15px;
}
</style>
