<template>
  <v-list lines="two">
    <v-list-item title="Title des der DAtao" :subtitle="120 kb">
      <template v-slot:prepend>
        <v-avatar color="grey-lighten-1">
          <v-icon color="white">mdi-folder</v-icon>
        </v-avatar>
      </template>

      <template v-slot:append>
        <v-btn color="grey-lighten-1" icon="mdi-close" variant="icon"></v-btn>
      </template>
    </v-list-item>
  </v-list>
  <v-row>
    <v-col>
      Source
      <v-text-field></v-text-field>
    </v-col>
    <v-col>
      type
      <v-text-field></v-text-field>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
const { file, sourceUrl, sourceType } = ref<{ file: File; sourceType: String; sourceUrl: String }>(
  {}
);
</script>
