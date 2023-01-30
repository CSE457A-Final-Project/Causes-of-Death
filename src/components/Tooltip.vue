<script setup>
import { ref, nextTick } from 'vue';

const open = ref(false);
const wrapper = ref();

const onMouseEnter = e => {
  open.value = true;
  nextTick(() => {
    wrapper.value.style.top = `${e.clientY + 20}px`;
    wrapper.value.style.left = `${e.clientX + 20}px`;
  });
};

const onMouseLeave = () => {
  open.value = false;
};
</script>

<template>
  <slot name="target" :onMouseEnter="onMouseEnter" :onMouseLeave="onMouseLeave"></slot>
  <foreignObject>
    <Teleport to="body">
      <div ref="wrapper" v-if="open">
        <slot name="content"></slot>
      </div>
    </Teleport>
  </foreignObject>
</template>

<style scoped lang="scss">
div {
  top: 0;
  left: 0;
  background-color: white;
  border-radius: 8px;
  position: absolute;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, .25);
}
</style>
