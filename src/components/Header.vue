<template>
  <header>
    <nav class="container">
      <div class="logo">
        <h1>MAD<span>News</span></h1>
      </div>
      <ul class="nav-routes">
        <a href="https://madfariz.my.id" target="_blank">About Me</a>
      </ul>
    </nav>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header {
  background-color: #f1f1f1;

  nav {
    display: flex;
    align-items: center;
    padding: 25px 56px;

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
      }

      span {
        color: blue;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>