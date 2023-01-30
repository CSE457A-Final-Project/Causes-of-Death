<script setup>
import { ref } from 'vue';

const expand = ref(false);
</script>

<template>
  <div
    :class="[
      'wrapper',
      {
        expand
      }
    ]"
    @click="expand = !expand"
  >
    <icon
      name="arrow-down"
      fill="#3e8639"
      :class="[
        'arrow',
        {
          'arrow-up': expand
        }
      ]"
    />
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="c">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  background-color:#b9eab5;
  color: #3e8639;
  border-radius: 8px;
  max-height: 3rem;
  transition: all .5s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  padding: 0 1rem 1rem;
}

.title {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 3rem;
}

.expand {
  max-height: 100vh;
}

.arrow {
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  transform: translateY(-50%) rotate(0);
  transition: all .5s;
  z-index: 99999;
}

.arrow-up {
  transform: translateY(-50%) rotate(180deg);
}
</style>
