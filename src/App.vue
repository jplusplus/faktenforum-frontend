<template>
  <Header></Header>
  <p>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </p>
  <router-view></router-view>
  <a href="http://localhost:3000/auth/login?next=/localhost:8080">LOGIN</a>
</template>

<script lang="ts" setup>
import Header from "./components/Header.vue";
</script>