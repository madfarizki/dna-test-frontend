<template>
  <div class="search-container">
    <input type="text" v-model="searchQuery" placeholder="Search news..." @input="filterArticles"
      class="search-input" />
    <span class="reset-icon" @click="resetSearch">
      X
    </span>
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

    const resetSearch = () => {
      searchQuery.value = '';
      filterArticles();
    };

    return { searchQuery, filterArticles, resetSearch };
  }
}
</script>

<style scoped>
.search-container {
  text-align: center;
  margin-bottom: 20px;
}

.search-input {
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
}

.reset-icon {
  font-weight: bold;
  cursor: pointer;
}
</style>
