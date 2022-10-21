<template>
  <router-link class="blog-card" :to="`/blog-post/${blog.id}`">
    <img class="img-blog-card" :src="blog.coverPhoto" />
    <h1 class="blog-title-card">{{ blog.title }}</h1>
    <p class="blog-short-intro body-small">{{ shortIntro }}</p>

    <button class="btn-small-read-more body-small">Read more</button>
  </router-link>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      required: true,
      coverPhoto: String,
      title: String,
      intro: String,
      id: Number,
    },
  },
  computed: {
    shortIntro() {
      return this.blog.intro.split(" ").splice(0, 20).join(" ") + " ...";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";
// @import "../styles/typography";

.blog-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // min-width: 136px;
  width: 100%;
  height: auto;
  margin: 10px auto;
  padding: 0 10px;

  @media only screen and (min-width: 0) {
    // margin-bottom: 30px;
    a {
      max-width: 100%;
      text-decoration: none;

      .img-blog-card {
        margin-top: 13px;
        width: 100%;
        height: 322px;
        border-radius: 5px;
        object-fit: cover;
        display: flex;
        flex-grow: 1;
      }
      .blog-title-card {
        margin: 4px 0 10px 0;
        color: $black;
      }

      .blog-short-intro {
        // font-size: 12px;
        color: $black;
        margin-top: 0;
        font-style: normal;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    a {
      margin-bottom: 40px;
      .img-blog-card {
        // margin-top: 20px;
        min-width: 260px;
        min-height: 260px;
      }
      .blog-title-card {
        // font-size: 20px;
        margin-top: 24px;
        margin-bottom: 16px;
      }

      .blog-short-intro {
        // font-size: 20px;
        margin-top: 0;
        font-style: normal;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-bottom: 40px;
    .img-blog-card {
      // margin-top: 20px;
      min-width: 377px;
      min-height: 380px;
    }
    .blog-title-card {
      // font-size: 20px;
      margin-top: 24px;
      margin-bottom: 16px;
    }

    .blog-short-intro {
      font-size: 20px;
      font-weight: 400;
      margin-top: 0;
      font-style: normal;
    }

    .img-blog-card {
      max-height: 322px;
    }
  }
}
</style>
