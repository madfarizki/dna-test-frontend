<template>
  <div class="read-articles-list">
    <h1>History</h1>
    <div class="card-container" v-if="readItems.length">
      <div v-for="(item, index) in readItems" :key="index" class="card">
        <img :src="item.urlToImage" alt="Image" class="image" />
        <div class="content">
          <h2><a :href="item.url" target="_blank">{{ item.title }}</a></h2>
          <p class="count">Dibaca {{ item.count }} kali</p>
        </div>
      </div>
    </div>
    <template v-else>
      <p>No history found, please read news first!</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ReadArticlesList',
  data() {
    return {
      readItems: []
    };
  },
  mounted() {
    const storedItems = JSON.parse(localStorage.getItem('readItems')) || [];
    this.readItems = storedItems;
  }
};
</script>

<style lang="scss" scoped>
.read-articles-list {
  padding: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 12px;

  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #eee;
    border-radius: 5px 5px 0 0;
  }
}

.card {
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.content {
  padding: 15px;

  h2 {
    font-size: 18px;
  }
}

.title {
  font-size: 18px;
  margin-bottom: 10px;
}

.url {
  font-size: 14px;
  color: #333;
}

.count {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
}
</style>
