<script setup>
const items = [
  { path: '/geo-graph', text: 'World Death Map', icon: 'world' },
  { path: '/stacked-bar', text: 'Region Death Detail', icon: 'stack-bar' },
  { path: '/bar-chart', text: 'Death Type Detail', icon: 'stacked-bar' },
  { path: '/process-book', text: 'Process Book', icon: 'book' },
  // { path: '/about', text: 'About', icon: 'about' },
  { path: '/video', text: 'Video', icon: 'video' },
];
</script>

<template>
  <aside>
    <header>
      <div class="icon-wrapper">
        <icon name="heart-rate" fill="red"/>
      </div>
      <h1>Causes of Death</h1>
    </header>
    <hr>
    <div class="routes">
      <RouterLink
        v-for="item in items"
        :key="item.path"
        :to="item.path"
        class="route"
        activeClass="active-route"
      >
        <div class="icon-wrapper">
          <icon :name="item.icon" fill="white" size="1em"/>
        </div>
        <p>{{item.text}}</p>
      </RouterLink>
    </div>
  </aside>
  <RouterView/>
</template>

<style scoped lang="scss">
$text: white;

aside {
  width: max-content;
  height: 100%;
  background-color: #252526;
}

header {
  display: flex;
  align-items: center;
  padding: 2em;

  h1 {
    margin: 0;
    color: $text;
  }
}

hr {
  margin: 0;
  border: none;
  border-bottom: 1px solid $text;
}

.route {
  text-decoration: none;
  font-size: 1em;
  color: $text;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  transition: all .2s;

  p {
    margin: 0;
  }

  &:hover {
    background-color: #2A2D2E;
  }
}

.icon-wrapper {
  display: flex;
  margin-right: 1em;
  width: 2em;
  justify-content: flex-end;
}

.active-route {
  background-color: #37373D !important;
}
</style>
