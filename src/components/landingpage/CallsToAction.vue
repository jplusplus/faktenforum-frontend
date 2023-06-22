<template>
  <div class="flex justify-between">
    <CallToAction v-for="callToAction in callsToAction" :text="callToAction.text" :destination="callToAction.destination" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import CallToAction from "./CallToAction.vue";

const callsToAction = ref([
  { text: "Join Faktenforum", destination: "/join" },
  { text: "Submit a Claim", destination: "/submit" },
  { text: "Learn about Fact-Checking", destination: "/about" }
]);
</script>
