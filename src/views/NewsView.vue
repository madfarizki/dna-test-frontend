<template>
  <div class="container">
    <SearchBar :articles="articles" @update:filteredArticles="updateFilteredArticles" />
    <div class="grid-container">
      <template v-if="filteredArticles.length">
        <CardItem v-for="item in filteredArticles" :key="item.id" :item="item" />
      </template>

      <template v-else>
        <p>No news found.</p>
      </template>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import CardItem from "@/components/Card/CardItem.vue";
import { useDataFetching } from '@/hooks/useDataFetching';
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: {
    CardItem,
    SearchBar
  },
  setup() {
    const { loading, error, fetchData } = useDataFetching();
    const articles = ref([]);
    const filteredArticles = ref([]);

    onMounted(async () => {
      try {
        const data = await fetchData();
        articles.value = data.articles;
        filteredArticles.value = articles.value;
      } catch (error) {
        console.error(error);
      }
    });

    const updateFilteredArticles = (filtered) => {
      filteredArticles.value = filtered;
    };

    return { loading, error, articles, filteredArticles, updateFilteredArticles };
  }
}

</script>

<style lang="scss" scoped>
.container {
  width: auto;
  height: auto;
  margin: 50px auto;
  padding: 0 20px;
}

.grid-container {
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;

  @media screen and (min-width: 40em) and (max-width: 63.99875em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 64em) {
    grid-template-columns: repeat(4, 1fr);
  }

}
</style>