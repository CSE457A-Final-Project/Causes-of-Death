<template>
  <div class="wrapper">
    <template
      v-for="type in ['Low', 'Middle', 'High', 'Super High']"
      :key="type"
    >
      <div :data-type="type"/>
      {{type}}
    </template>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    width: 1.5rem;
    height: 1.5rem;

    &[data-type=Low] {
      background-color: #99D594;
    }

    &[data-type=Middle] {
      background-color: #FEE08B;
    }

    &[data-type=High] {
      background-color: #FC8D59;
    }

    &[data-type="Super High"] {
      background-color: #D53E4F;
    }
  }
}
</style>
