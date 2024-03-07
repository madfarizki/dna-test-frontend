<template>
  <div class="search-container">
    <input type="text" v-model="searchQuery" placeholder="Search news..." @input="filterArticles"
      class="search-input" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  emits: ['update:filteredArticles'],
  setup(props, { emit }) {
    const searchQuery = ref('');

    const filterArticles = () => {
      const filteredArticles = props.articles.filter(article => {
        return article.title.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
      emit('update:filteredArticles', filteredArticles);
    };

    return { searchQuery, filterArticles };
  }
}
</script>

<style scoped>
.search-container {
  text-align: center;
  margin-bottom: 20px;
}

.search-input {
  width: 500px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
