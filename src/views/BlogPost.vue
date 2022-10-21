<template>
  <div class="blog-post">
    <h5 class="style-inspiration-title">Style & Inspiration</h5>

    <img :src="blogPost.coverPhoto" />
    <h1 class="blog-post-title">
      {{ blogPost.title }}
    </h1>
    <p class="body-medium blog-post-intro">{{ blogPost.intro }}</p>
    <ul class="blog-posts-list">
      <li v-for="item in blogPost.content" :key="item.id">
        <h5 class="blog-post-content-title">{{ item.title }}</h5>
        <img class="img-content-blog-post" :src="item.photo" />
        <p class="body-medium">{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  computed: {
    blogPost() {
      return this.$store.state.blogsModule.blogs.filter(
        (post) => `${post.id}` === this.$router.currentRoute.params.id
      )[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";
@import "../styles/typography";

@media only screen and (min-width: 0) {
  .blog-post {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 300px;
    width: 100%;
    height: auto;
    margin-top: 15px;
    padding: 0 10px;

    .style-inspiration-title {
      align-self: center;
      color: $accent;
      margin-top: 0;
    }

    .blog-post-title {
      align-self: center;
      font-weight: 900;
      padding: 24px 0 15px;
      margin: 0;
      border-bottom: 1px solid $black;
      // text-decoration: underline;
    }

    .blog-post-intro {
      padding-bottom: 20px;
    }
  }
  .blog-posts-list {
    min-width: 300px;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;

    .img-content-blog-post {
      margin-top: 5px;
      width: 100%;
      height: auto;
      border-radius: 10px;
      object-fit: cover;
      display: flex;
      flex-grow: 1;
    }

    .blog-post-content-title {
      margin: 0;
      font-weight: 600;
    }
  }
}
</style>
