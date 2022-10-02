<template>
  <main>
    <div class="blogs-title">
      <h2 id="the-luxe">THE LUXE</h2>
      <h1 id="journal">JOURNAL</h1>
      <span id="style-inspiration-title">Style & Inspiration</span>
    </div>
    <div>
      <ul class="blog-cards">
        <li class="blog-card" v-for="blog in blogs" :key="blog.id">
          <BlogCard :blog="blog" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";
export default {
  name: "Blogs",
  data() {
    return {};
  },
  computed: {
    blogs() {
      console.log(JSON.stringify(this.$store.state.blogs));
      return this.$store.state.blogsModule.blogs;
    },
  },
  components: { BlogCard },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";
@import "../styles/typography";

.blogs-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto 15px auto;
}

@media only screen and (min-width: 0) {
  .blog-cards {
    margin: 0;
    padding: 0;
  }

  #the-luxe {
    margin: 0;
    font-weight: 100;
    color: $accent;
  }
  .blog-card {
    margin: 10px auto;
    padding: 0 10px;
  }

  #journal {
    font-weight: 900;
    margin: 10px 0;
    padding: 5px 90px;
    background-color: $light-gray;
  }

  #style-inspiration-title {
    margin: 20px 0;
    color: $accent;
  }
}
</style>
