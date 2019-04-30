<template>
  <div id="app">
    <dashboard>
      <router-view></router-view>
    </dashboard>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'App',

  components: {
    Dashboard
  }
}
</script>
