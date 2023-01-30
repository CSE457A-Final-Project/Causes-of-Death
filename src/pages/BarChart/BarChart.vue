<script setup>
import { select, axisLeft } from 'd3';
import {
  ref, onMounted, reactive, watch,
} from 'vue';
import barChart from '../../stores/barChart';
import YearSelector from '../../components/YearSelector.vue';
import Tooltip from '../../components/Tooltip.vue';
import Legend from '../../components/Legend.vue';
import Story from '../../components/Story.vue';
import formatNum from '../../util/formatNum';

const bar = barChart();
const wrapper = ref();
const axisGroup = ref();

const size = reactive({
  width: 0,
  height: bar.base * bar.getCausesCount(),
});

onMounted(() => {
  const { width } = wrapper.value.getBoundingClientRect();
  size.width = width;
  bar.setXScale(width);

  const yAxis = axisLeft(bar.y);
  const axisSelection = select(axisGroup.value);

  const updateAxis = () => {
    axisSelection
      .transition()
      .duration(500)
      .call(yAxis);
  };

  updateAxis();

  watch(
    () => bar.order,
    () => bar.orderData(),
  );
  watch(
    () => bar.data,
    () => updateAxis(),
  );
});
</script>

<template>
  <main>
    <YearSelector
      :default="bar.year"
      @change="bar.setYear"
    />
    <section>
      <header>
        <Story>
          <template #title>
            This visualization shows the severity of different death types throughout the whole world.
          </template>
          <template #content>
            Overall, the total number of deaths in most countries/regions shows an upward trend with each year. This roughly stems from the rise in world population, which is predictable. Each country/region shows different percentages of death reasons while Cardiovascular Diseases and Neoplasms remain the leading causes of death in the majority of countries/regions. Some countries/regions do not have very high threat level death reasons, only some relatively high threat death reasons, while some countries/regions have much more serious death reasons. This may be closely related to each country/region's situation, people's diet, climate, and other factors.
          </template>
        </Story>
        <div class="legend-order-wrapper">
          <Legend/>
          <div class="order-wrapper">
            <template
              v-for="order in ['unordered', 'descending', 'ascending']"
              :key="order"
            >
              <input
                type="radio"
                name="order"
                :value="order"
                v-model="bar.order"
                :id="order"
              >
              <label :for="order">{{order}}</label>
            </template>
          </div>
        </div>
      </header>
      <div ref="wrapper">
        <svg
          :width="size.width"
          :height="size.height"
        >
          <g ref="axisGroup" transform="translate(170,0)"></g>
          <g transform="translate(170,0)">
            <Tooltip
              v-for="d in bar.data"
              :key="d[1]"
            >
              <template #target="{onMouseEnter, onMouseLeave}">
                <rect
                  x="0"
                  :y="bar.y(d[1])"
                  :width="bar.x?.(d[0]) ?? 0"
                  :height="bar.y.bandwidth()"
                  :fill="bar.scaleColor(d[0])"
                  @mouseenter="onMouseEnter"
                  @mouseleave="onMouseLeave"
                />
              </template>
              <template #content>
                <div class="tooltip-content">
                  <h4>{{d[1]}}</h4>
                  <p>Year: {{bar.year}}</p>
                  <p>Total Death: {{formatNum(d[0])}} ({{d[2].toFixed(2)}}%)</p>
                </div>
              </template>
            </Tooltip>
          </g>
        </svg>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  flex: 1;
  overflow: auto;
  display: flex;
}

section {
  flex: 1;
  padding: 0 2rem;
}

header {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
}

.legend-order-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-wrapper {
  display: flex;
  gap: 1rem;

  label {
    cursor: pointer;
    color: #5F6368;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 8px;
  }

  input {
    display: none;

    &:checked + label {
      background-color: #E8F0FE;
      color: #1967D2;
    }
  }
}

rect {
  transition: all .5s;
  cursor: pointer;
}
</style>
