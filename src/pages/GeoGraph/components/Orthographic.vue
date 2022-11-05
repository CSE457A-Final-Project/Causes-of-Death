<script setup>
import { ref, onMounted } from 'vue';
import useWorldStore from '../../../stores/world';

const wrapper = ref();
const radius = ref();
const {
  getRandomColor, getPathGenerator, world,
} = useWorldStore();
const pathGenerator = ref();

onMounted(async () => {
  const { width } = wrapper.value.getBoundingClientRect();
  radius.value = width - 50;
  pathGenerator.value = await getPathGenerator('3d', radius.value, radius.value);
});
</script>

<template>
  <div ref="wrapper">
    <svg v-if="pathGenerator" :width="radius" :height="radius">
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
