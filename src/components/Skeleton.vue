<template>
  <div class="skeleton"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.skeleton {
  aspect-ratio: 1;
  background: #e7e7e7;
  display: flex;
  border-radius: 5px;

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