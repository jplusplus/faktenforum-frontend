<template>
  <img :src="defaultLogo" :alt="altText" width="400" height="auto" />
</template>

<script lang="ts" setup>
import defaultLogo from "../assets/images/faktenforum-horizontal-black.png";

const altText = "Faktenforum";
</script>
