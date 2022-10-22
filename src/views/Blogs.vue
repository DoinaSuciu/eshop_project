<template>
  <main>
    <div class="blogs-title">
      <h2 id="the-luxe">THE LUXE</h2>
      <h1 id="journal">JOURNAL</h1>
      <span id="style-inspiration-title">Style & Inspiration</span>
    </div>

    <ul class="blog-categories">
      <li v-for="category in blogCategories" :key="category.id">
        <button
          :id="category.name"
          :class="[
            'blog-category',
            'body-medium',
            selectedCategory === category.name
              ? 'selected-category'
              : 'not-selected-category',
          ]"
          @click="onSelectCategory"
        >
          {{ category.name }}
        </button>
      </li>
    </ul>

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
    return {
      selectedCategory: null,
      // blogsByCategory: [],
    };
  },
  methods: {
    onSelectCategory(event) {
      this.selectedCategory = event.target.id;
    },
  },
  computed: {
    blogs() {
      // console.log(JSON.stringify(this.$store.state.blogs));
      if (this.selectedCategory === null) {
        return this.$store.state.blogsModule.blogs;
      }
      return this.$store.state.blogsModule.blogs.filter(
        (blog) => blog.category === this.selectedCategory
      );
    },
    blogCategories() {
      return this.$store.state.blogsModule.blogCategories;
    },
  },
  components: { BlogCard },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

.blogs-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto 15px auto;
}

@media only screen and (min-width: 0) {
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .blog-cards {
    margin: 0;
    padding: 0;
  }
  .selected-category {
    background-color: $black;
    color: $white;
  }

  .not-selected-category {
    background-color: $light-gray;
  }

  .blog-categories {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    margin: 0 auto;
  }

  .blog-category {
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius: 15px;
    border: none;
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

@media only screen and (min-width: 768px) {
  .blog-cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
  }

  .blog-card {
    min-width: 50%;
    max-width: 50%;
    flex: 1;
  }
}
</style>
