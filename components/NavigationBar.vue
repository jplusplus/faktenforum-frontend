<template>
  <v-app-bar
    color="background"
    elevation="0"
    class="pa-2"
    density="prominent"
    scroll-behavior="hide elevate"
    height="60"
    tag="nav"
  >
    <div class="d-flex align-center h-100 pl-4">
      <v-img src="/images/logo-horizontal-red.png" height="60" width="209" alt="Faktenforum Logo" />
    </div>

    <template v-slot:append>
      <v-btn color="primary" class="px-6" variant="text">What is Faktenforum</v-btn>
      <v-btn color="primary" class="px-6" variant="text">News</v-btn>
      <v-btn color="primary" class="pe-10 mr-6" variant="text">FAQ</v-btn>
      <NuxtLink to="/join">
        <v-btn color="white" class="px-10 color-primary--text" variant="flat">Join</v-btn>
      </NuxtLink>
    </template>
  </v-app-bar>
</template>
<script lang="ts" setup></script>
<style scoped>
.color-primary--text {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
