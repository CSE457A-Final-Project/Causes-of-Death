<script setup>
import { ref, onMounted } from 'vue';
import useDeathStore from '../../stores/death'

const {
    getDataByYear
} = useDeathStore();

const wrapper = ref();

onMounted(async () => {
    wrapper.value.append(getDataByYear(2010).map(e => e['Country/Territory']));
})
</script>

<template>
  <div ref="wrapper">

  </div>
</template>

<style>

</style>