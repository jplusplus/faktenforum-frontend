<template>
  <div
    :data-active="active"
    @dragenter.prevent="setActive"
    @dragover.prevent="setActive"
    @dragleave.prevent="setInactive"
    @drop.prevent="onDrop"
  >
    <slot :dropZoneActive="active"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

// Define event type
interface FileDroppedEvent {
  (event: "files-dropped", files: File[]): void;
}

const emit = defineEmits<FileDroppedEvent>();

const active = ref(false);

function setActive(): void {
  active.value = true;
}

function setInactive(): void {
  active.value = false;
}

function onDrop(e: DragEvent): void {
  setInactive();
  if (e.dataTransfer) {
    emit("files-dropped", Array.from(e.dataTransfer.files));
  }
}
</script>
