<script setup lang="ts">
import TabContent from "../TabContent.vue";
import TabNav from "../TabNav.vue";
</script>

<template>
  <TabNav>
    <TabContent title="First Title"><div>"A"</div></TabContent>
    <TabContent title="Second Title"><div>"B"</div></TabContent>
    <TabContent title="Third Title"><div>C</div></TabContent>
  </TabNav>
</template>
