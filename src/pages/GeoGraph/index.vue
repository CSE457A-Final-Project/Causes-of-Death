<script setup>
import Graph from './components/Graph.vue';
import useWorldStore from '../../stores/world';
import YearSelector from '../../components/YearSelector.vue';
import formatNum from '../../util/formatNum';

const world = useWorldStore();

const format = (key, value) => {
  if (key === 'sum') {
    key = 'Total Death';
  } else if (key === 'percent') {
    key = 'Total Death / Population';
    value = `${(value * 100).toFixed(2)}%`;
  }
  if (key !== 'name' && key !== 'percent') {
    value = formatNum(value);
  }
  return `${key}: ${value}`;
};

const onClose = () => {
  world.click = null;
};

</script>

<template>
  <main>
    <YearSelector :default="world.year" @change="world.setYear"/>
    <section>
      <div class="selector-wrapper">
        <h1 class="title">{{world.year}}</h1>
        <div class="selector">
          <p v-for="type in ['3D', '2D']"
            :key="type"
            :class="type === world.type ? 'active-type' : ''"
            @click="world.setType(type)">
            {{type}}
          </p>
        </div>
      </div>
      <Graph />
    </section>
    <Transition name="bounce">
      <div v-show="world.click" class="detail">
        <div class="close-wrapper">
          <icon name="close" class="close" fill="white" :click="onClose"/>
        </div>
        <div class="content-wrapper">
          <p
            v-for="(item, i) in world.data[world.click]"
            :key="i"
          >
            {{format(world.meta[i], item)}}
          </p>
        </div>
      </div>
    </Transition>
  </main>
</template>

<style scoped lang="scss">
main {
  flex: 1;
  display: flex;
  overflow: hidden;
}

section {
  flex: 1;
}

.selector-wrapper {
  display: flex;
  justify-content: center;
  user-select: none;
  position: relative;

  .title {
    position: absolute;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
    left: 3rem;
    font-size: 3rem;
  }

  .selector {
    display: flex;
    margin: 20px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, .25);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  }

  p {
    margin: 0;
    padding: 1rem;
  }

  .active-type {
    color: white;
    background-color: #409EFF;
  }
}

.detail {
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, .8);
  color: white;
  text-transform: capitalize;
  width: 30rem;
  overflow: hidden;
  transform-origin: top right;

  p {
    margin: 0;
  }

  .close-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 1rem 0 0;

    .close {
      cursor: pointer;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    height: 20rem;
    padding: 0 2rem 2rem;

    &::-webkit-scrollbar-track {
      &:hover {
        background-color: transparent;
        border-color: transparent;
      }
    }
  }
}

.bounce-enter-active {
  animation: bounce-in 0.2s;
}

.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
