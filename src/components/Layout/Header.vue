<template>
  <header>
    <nav class="container">
      <div class="logo">
        <router-link to="/">
          <h1>
            MAD<span>News</span>
          </h1>
        </router-link>
      </div>
      <div class="nav-wrapper">
        <ul class="nav-routes">
          <router-link to="/history">History</router-link>
        </ul>
        <ul class="nav-routes">
          <a href="https://madfariz.my.id" target="_blank">About Me</a>
        </ul>
      </div>
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
        font-weight: bold;
      }

      span {
        color: blue;
      }
    }

    .nav-wrapper {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
    }

    .nav-routes {
      display: flex;
      gap: 12px;
      list-style: none;
      font-weight: bold;
    }
  }
}
</style>