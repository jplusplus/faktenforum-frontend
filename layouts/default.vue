<script lang="ts" setup></script>

<template>
  <div>
    <Header></Header>
    <div class="grid grid-col-2">
      <Menu></Menu>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
