<template>
  <v-app-bar
    color="background"
    elevation="0"
    class="pa-2 pt-6 mb-4"
    density="compact"
    scroll-behavior="hide elevate"
    height="60"
    tag="nav"
  >
    <v-app-bar-title>
      <div class="h-100">
        <v-img
          src="/images/logo-horizontal-black.png"
          height="60"
          width="209"
          alt="Faktenforum Logo"
        />
      </div>
    </v-app-bar-title>
    <template v-slot:append>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="text-color" class="px-6 text-uppercase" v-bind="props" variant="text">
            {{ locale }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="lang in availableLocales" :key="lang" @click="locale = lang">
            <v-list-item-title>{{ lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn color="text-color" class="px-4" variant="text">What is Faktenforum</v-btn>
      <v-btn color="text-color" class="px-4" variant="text">News</v-btn>
      <v-btn color="text-color" class="px-4" variant="text">FAQ</v-btn>
      <NuxtLink to="/join">
        <v-btn color="primary" class="px-10 text-color-secondary" variant="flat">Join</v-btn>
      </NuxtLink>
    </template>
  </v-app-bar>
</template>
<script lang="ts" setup>
const { locale, availableLocales } = useI18n({ useScope: "global" });
</script>
<style scoped>
.color-primary--text {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
