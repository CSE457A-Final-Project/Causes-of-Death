<script setup>
</script>

<template>
  <div class="selector-wrapper">
    <div class="selector">
      <RouterLink to="/geo-graph/3d" class="route" active-class="active-route">3D</RouterLink>
      <RouterLink to="/geo-graph/2d" class="route" active-class="active-route">2D</RouterLink>
    </div>
  </div>
  <RouterView/>
  <!-- <RouterView v-slot="{ Component, route }">
    <KeepAlive>
      <component :is="Component" :key="route.path"/>
    </KeepAlive>
  </RouterView> -->
</template>

<style scoped lang="scss">
.selector-wrapper {
  display: flex;
  justify-content: center;
}
.selector {
  display: flex;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, .25);
  border-radius: 8px;
  overflow: hidden;
}
.route {
  text-decoration: none;
  padding: 10px 20px;
  color: black;
}
.active-route {
  color: white;
  background-color: #409EFF;
}
</style>
