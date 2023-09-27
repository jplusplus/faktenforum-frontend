<template>
  <div
    class="solid-primary-outline background-color-surface pa-4 mb-4"
    v-for="source of value.sources"
    :key="source.key"
  >
    <v-list lines="two">
      <v-list-item :title="source.file.name" :subtitle="fileSizeToString(source.file)">
        <template v-slot:prepend>
          <v-container fluid class="pa-0 pr-2 ma-0">
            <v-img :width="70" aspect-ratio="4/3" cover :src="fileToUrl(source.file)" />
          </v-container>
        </template>

        <template v-slot:append>
          <v-btn
            color="background"
            @click="removeSource(source.key)"
            size="small"
            icon="mdi-close"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
    <v-row>
      <v-col>
        <div class="pa-1">{{ $t("common.source") }}</div>
        <v-text-field
          class=""
          variant="solo"
          density="compact"
          single-line
          label="https://url.com"
          v-model="source.sourceUrl"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { Claim } from "./types";

// Component Properties Types

type SourceListProps = {
  modelValue: Claim;
};

const props = defineProps<SourceListProps>();
const emit = defineEmits(["update:value"]);
const value = useVModel(props, "modelValue", emit);

function fileToUrl(file: File) {
  return URL.createObjectURL(file);
}
function fileSizeToString(file: File) {
  return `${Math.round(file.size / 1000)} kb`;
}

function removeSource(sourceKey: string) {
  value.value.sources = value.value.sources.filter((source) => source.key !== sourceKey);
}
</script>
