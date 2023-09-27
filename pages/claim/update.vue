<template>
  <v-container class="pa-0 my-0 fluid d-flex flex-column" fluid>
    <v-sheet class="px-10 pt-16 h-100 flex-grow-1">
      <h1 class="text-h5 text-color-primary pb-4">{{ $t("submitPage.title") }}</h1>
      <div class="text-caption pb-2">{{ $t("submitPage.text") }}</div>
      <div class="pa-6 fluid d-flex flex-column background-color-primary solid-primary-outline">
        <div>{{ $t("submitPage.acknowledgement") }}</div>
        <div class="pb-6">{{ $t("submitPage.request") }}</div>
        <div class="pa-1">{{ $t("submitPage.info.title") }}</div>
        <v-text-field
          style="max-width: 361px"
          class=""
          variant="solo"
          density="compact"
          single-line
          :label="$t('submitPage.claim.label.title')"
        ></v-text-field>
        <div class="pa-1">{{ $t("submitPage.info.description") }}</div>
        <v-textarea
          class=""
          variant="solo"
          density="compact"
          rows="3"
          :label="$t('submitPage.claim.label.description')"
        ></v-textarea>
        <claim-source-list v-model="(claim as any)" />

        <v-tabs v-model="tab" color="primary">
          <v-tab value="file">{{ $t("submitPage.tab.file") }}</v-tab>
          <v-tab value="link">{{ $t("submitPage.tab.link") }}</v-tab>
        </v-tabs>
        <v-window v-model="tab" class="py-6">
          <v-window-item value="file">
            <v-card class="dashed-primary-outline d-flex flex-column" variant="outlined">
              <!-- Hidden file input -->
              <input
                type="file"
                ref="fileInput"
                style="display: none"
                @change="handleFileDialogChange"
              />

              <common-file-drop-zone
                class="d-flex flex-column flex-grow-1"
                @files-dropped="handleFiles"
                v-slot="{ dropZoneActive }"
                ><div
                  class="flex-grow-1"
                  :style="{
                    'background-color': dropZoneActive
                      ? 'rgb(var(--v-theme-primary-darken-3'
                      : 'transparent'
                  }"
                >
                  <div class="d-flex justify-center pt-14">
                    <v-btn
                      variant="text"
                      color="primary"
                      size="xlarge"
                      @click="openFileDialog()"
                      prepend-icon="mdi-plus-circle"
                    >
                      <template v-slot:prepend>
                        <v-icon color="primary" size="48"></v-icon>
                      </template>
                      {{ $t("submitPage.dropzone.file.select") }}</v-btn
                    >
                  </div>
                  <div class="d-flex justify-center pt-2 text-color-primary">
                    {{ $t("submitPage.dropzone.file.drop") }}
                  </div>
                </div>
              </common-file-drop-zone>
            </v-card>
            <div class="d-flex justify-center pt-6">
              <v-btn color="primary" variant="outlined" size="large" class="unfilled-button">
                {{ $t("common.upload") }}</v-btn
              >
            </div>
          </v-window-item>
          <v-window-item value="link">
            <v-card class="dashed-primary-outline d-flex flex-column" variant="outlined">
              <div class="d-flex justify-center align-center pt-14 pb-4">
                <v-icon color="primary" size="48">mdi-link</v-icon>
                <span class="text-subtitle text-color-primary">
                  {{ $t("submitPage.dropzone.link.title") }}
                </span>
              </div>
              <div class="d-flex justify-center">
                <v-text-field
                  style="max-width: 361px"
                  class=""
                  variant="outlined"
                  density="compact"
                  single-line
                  :label="$t('submitPage.dropzone.link.label')"
                ></v-text-field>
              </div>
            </v-card>
            <div class="d-flex justify-center pt-6">
              <v-btn color="primary" variant="outlined" size="large" class="unfilled-button">
                {{ $t("common.upload") }}</v-btn
              >
            </div>
          </v-window-item>
        </v-window>
      </div>
      <div class="d-flex justify-center py-12">
        <v-btn color="primary" size="large" class="unfilled-button" @click="submit()">
          {{ $t("common.submit") }}
        </v-btn>
      </div>
    </v-sheet>
    <div style="height: 120px"></div>
  </v-container>
</template>
<script lang="ts" setup>
import { nanoid } from "nanoid";
import { Claim, SourceInfo } from "@/components/claim/types";
const claim = ref<Claim>({
  title: "",
  description: "",
  sources: []
});

const tab = ref("file");
const fileInput = ref<HTMLInputElement | null>(null);

const openFileDialog = () => {
  fileInput.value?.click();
};

function handleFileDialogChange(event: Event) {
  const target = event.target as HTMLInputElement;
  handleFiles(target.files);
}
function handleFiles(files: FileList | File[] | null) {
  if (files) {
    for (let file of files) {
      console.log("Selected file:", file);
      claim.value.sources.push({
        key: nanoid(10),
        file,
        sourceType: "",
        sourceUrl: ""
      });
    }
  }
}

function submit() {
  console.log("submit", JSON.parse(JSON.stringify(claim.value)));
}
</script>
<style scoped>
.v-container {
  max-width: 800px;
  min-height: 600px;
}
.v-card {
  min-height: 222px;
}
.unfilled-button {
  max-width: 361px;
  width: 100%;
}
.filled-button {
  max-width: 460px;
  width: 100%;
}
</style>
