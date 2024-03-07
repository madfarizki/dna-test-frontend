<template>
  <div class="item"></div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.item {
  aspect-ratio: 1;
  background: #ccc;
  display: flex;

  @media screen and (min-width: 40em) and (max-width: 63.99875em) {

    &:nth-child(6n + 1),
    &:nth-child(6n + 6) {
      grid-area: span 2/span 2;
    }

    &:nth-child(6n + 5) {
      grid-column: 1;
    }
  }

  @media screen and (min-width: 64em) {

    &:nth-child(10n + 1),
    &:nth-child(10n + 10) {
      grid-area: span 2/span 2;
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