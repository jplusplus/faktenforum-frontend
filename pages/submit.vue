<template>
  <v-container class="pa-0 my-0 fluid d-flex flex-column">
    <v-sheet class="px-10 pt-16 h-100 flex-grow-1">
      <h1 class="text-h5 text-color-primary pb-4">{{ $t("submitPage.claim.title") }}</h1>
      <div class="text-caption pb-2">{{ $t("submitPage.claim.text") }}</div>
      <v-tabs v-model="tab" color="primary">
        <v-tab value="file">{{ $t("submitPage.claim.tab.file") }}</v-tab>
        <v-tab value="link">{{ $t("submitPage.claim.tab.link") }}</v-tab>
        <v-tab value="description">{{ $t("submitPage.claim.tab.claim") }}</v-tab>
      </v-tabs>
      <v-window v-model="tab" class="py-6">
        <v-window-item value="file">
          <v-card class="dashed-primary-outline d-flex flex-column" variant="outlined">
            <!-- Hidden file input -->
            <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />

            <file-drop-zone
              class="d-flex flex-column flex-grow-1"
              @files-dropped="handleFileChange"
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
                    {{ $t("submitPage.claim.dropzone.file.select") }}</v-btn
                  >
                </div>
                <div class="d-flex justify-center pt-2 text-color-primary">
                  {{ $t("submitPage.claim.dropzone.file.drop") }}
                </div>
              </div>
            </file-drop-zone>
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
                {{ $t("submitPage.claim.dropzone.link.title") }}
              </span>
            </div>
            <div class="d-flex justify-center">
              <v-text-field
                style="max-width: 361px"
                class=""
                variant="outlined"
                density="compact"
                single-line
                :label="$t('submitPage.claim.dropzone.link.label')"
              ></v-text-field>
            </div>
          </v-card>
          <div class="d-flex justify-center pt-6">
            <v-btn color="primary" variant="outlined" size="large" class="unfilled-button">
              {{ $t("common.upload") }}</v-btn
            >
          </div>
        </v-window-item>
        <v-window-item value="description">
          <v-card class="dashed-primary-outline" variant="outlined">
            <div class="d-flex justify-center pt-14"></div>
          </v-card>
          <div class="d-flex justify-center pt-6">
            <v-btn color="primary" variant="outlined" size="large" class="unfilled-button">
              {{ $t("common.upload") }}</v-btn
            >
          </div>
        </v-window-item>
      </v-window>
    </v-sheet>
  </v-container>
</template>
<script lang="ts" setup>
const tab = ref("file");

const fileInput = ref<HTMLInputElement | null>(null);

const openFileDialog = () => {
  fileInput.value?.click();
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const selectedFile = target.files?.[0];
  if (selectedFile) {
    console.log("Selected file:", selectedFile.name);
    // Handle the file here (e.g., read its content, upload to server, etc.)
  }
  console.log("Selected Files ", event);
};
</script>
<style scoped>
.dashed-primary-outline {
  border: 2px dashed rgb(var(--v-theme-primary));
  border-radius: 0px;
}
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
