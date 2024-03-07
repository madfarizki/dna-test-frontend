<template>
  <div class="skeleton"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.skeleton {
  aspect-ratio: 1;
  background: linear-gradient(90deg, rgba(231, 231, 231, 1) 0%, rgb(218, 218, 218) 50%, rgb(243, 243, 243) 100%);
  background-size: 200% 100%;
  border-radius: 5px;
  animation: shine 2s infinite linear;

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

  @keyframes shine {
    0% {
      background-position: 200% 0;
      /* Start with the gradient fully shifted */
    }

    100% {
      background-position: -200% 0;
      /* Shift the gradient fully to the left */
    }
  }
}
</style>