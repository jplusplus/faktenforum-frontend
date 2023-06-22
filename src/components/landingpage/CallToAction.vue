<template>
  <div class="p-10">
    <div class="border-2 border-black shadow-md">
      <div class="p-3 text-2xl">{{ text }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{ text: string; destination: string }>();
</script>
