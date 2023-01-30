<script setup>
// https://github.com/vbenjs/vite-plugin-svg-icons
import { computed } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  fill: {
    type: String,
    default: 'black',
  },
  size: {
    type: String,
    default: '2em',
  },
  class: {
    type: String,
    default: null,
  },
  click: {
    type: Function,
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg
    aria-hidden="true"
    :width="props.size"
    :height="props.size"
    :class="props.class"
    @click="props.click"
  >
    <use :xlink:href="symbolId" :fill="props.fill" />
  </svg>
</template>
