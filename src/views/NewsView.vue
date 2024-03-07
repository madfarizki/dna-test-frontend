<template>
  <div class="container">
    <div class="grid-container">
      <CardItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";

export default {
  components: {
    CardItem
  },
  data() {
    return {
      items: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: auto;
  height: auto;
  margin: 50px auto;
  padding: 0 5%;

  @media screen and (min-width: 768px) {
    padding: 0 80px;
  }
}

.grid-container {
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  counter-reset: albumList;

  @media screen and (min-width: 40em) and (max-width: 63.99875em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 64em) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>