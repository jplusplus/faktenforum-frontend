<template>
  <div>
    <Header></Header>
    <div class="grid grid-col-2">
      <Menu></Menu>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue";
import Menu from "../components/menu/Menu.vue";
</script>
