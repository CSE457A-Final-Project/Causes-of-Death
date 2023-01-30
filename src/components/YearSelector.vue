<script setup>
import { defineEmits, defineProps, ref } from 'vue';

const years = [];

for (let i = 1990; i < 2020; i++) {
  years.push(i);
}

const emit = defineEmits(['change']);

const props = defineProps({
  default: Number,
});

const selectedYear = ref(props.default || 1990);

const onChange = year => {
  selectedYear.value = year;
  emit('change', year);
};

const gap = 40;

</script>

<template>
  <div>
    <svg :height="gap * (years.length + 1)">
      <path :d="`M30 ${gap} V${years.length * gap}`"/>
      <g
        v-for="(year, i) in years"
        :key="year"
        :transform="`translate(30, ${(i + 1) * gap})`"
        :class="selectedYear === year && 'selected'"
        @click="onChange(year)"
      >
        <circle r="6" />
        <text x="20" dominant-baseline="central">
          {{year}}
        </text>
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
div {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

svg {
  width: 8rem;
}

circle, text {
  transition: all .2s;
}

path {
  stroke: gray;
  stroke-width: 2px;
}

g {
  cursor: pointer;

  circle {
    fill: gray;
  }

  text {
    fill: gray;
  }
}

g:hover, .selected {
  circle {
    fill: #E6A23C;
  }

  text {
    fill: black;
  }
}
</style>
