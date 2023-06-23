<template>
  <main class="max-w-5xl p-5 mx-auto my-10 text-center">
    <div>ERROR</div>
    <router-view />
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
