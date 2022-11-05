<script setup>
import { ref, onMounted } from 'vue';
import useWorldStore from '../../../stores/world';

const {
  getRandomColor, getPathGenerator, world,
} = useWorldStore();

const wrapper = ref();
const width = ref();
const pathGenerator = ref();

onMounted(async () => {
  const { width: w } = wrapper.value.getBoundingClientRect();
  width.value = w - 50;
  pathGenerator.value = await getPathGenerator('2d', width.value, width.value);
});
</script>

<template>
  <div ref="wrapper">
    <svg v-if="pathGenerator" :width="width" :height="width">
      <path v-for="d in world"
        :key="d.id"
        :d="pathGenerator(d)"
        :fill="getRandomColor()"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  justify-content: center;
}
</style>
