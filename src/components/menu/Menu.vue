<template>
  <MenuItem v-for="menuItem in menuItems" :text="menuItem.text" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

import MenuItem from "./MenuItem.vue";

const menuItems = ref([{ text: "Claims" }, { text: "Tasks" }]);
</script>
