<template>
  <Header></Header>
  <div class="flex justify-center items-center">
    <div class="w-3/4 py-20">
      <Callout></Callout>
      <CallsToAction />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "../components/Header.vue";
import Callout from "../components/landingpage/Callout.vue";
import CallsToAction from "../components/landingpage/CallsToAction.vue";
</script>
