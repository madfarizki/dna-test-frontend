<template>
  <div class="item">
    <div class="content-wrapper">
      <img :src="item.urlToImage" alt="Image" class="image" />
      <div class="content">
        <h2><a :href="item.url" target="_blank" @click="saveToLocalStorage">{{ shortText(item.title, 60) }}</a></h2>
        <p class="author">{{ item.author }} at {{ item.source.name }} - {{ formatDate(item.publishedAt) }}</p>
        <p class="description">{{ shortText(item.description, 75) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date);
      return formattedDate;
    },
    shortText(description, length = 80) {
      const maxLength = length;
      const ellipsis = "...";
      if (description.length > maxLength) {
        return description.substring(0, maxLength) + ellipsis;
      } else {
        return description;
      }
    },
    saveToLocalStorage() {
      const readItems = JSON.parse(localStorage.getItem('readItems')) || [];

      const existingItemIndex = readItems.findIndex(item => item.url === this.item.url);

      if (existingItemIndex !== -1) {
        readItems[existingItemIndex].count++;
      } else {
        readItems.push({ ...this.item, count: 1 });
      }

      localStorage.setItem('readItems', JSON.stringify(readItems));
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  aspect-ratio: 1;
  background: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  border-radius: 5px;

  .content {
    padding: 0 20px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
  }

  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #eee;
    border-radius: 5px 5px 0 0;
  }

  h2 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
  }

  .author {
    color: #7c7c7c;
    font-style: italic
  }

  .description {
    font-size: 16px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 800px) {
    grid-column: 1;
  }

  @media screen and (min-width: 1024px) {

    &:nth-child(10n + 1),
    &:nth-child(10n + 10) {
      grid-area: span 2/span 2;

      .image {
        height: 400px;
      }

      h2 {
        font-size: 28px;
      }

      p {
        font-size: 18px;
      }

    }

    &:nth-child(10n + 8) {
      grid-column: 1;
    }

    &:nth-child(10n + 9) {
      grid-column: 2;
    }
  }
}
</style>
