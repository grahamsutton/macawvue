<template>
  <div id="app">
    <Top/>
    <LeftNav/>
    <Content/>
    <Bottom/>
  </div>
</template>

<script>
import Top from '@/components/Top'
import LeftNav from './components/LeftNav'
import Content from './components/Content'
import Bottom from './components/Bottom'

export default {
  name: 'App',
  components: {
    Top,
    LeftNav,
    Content,
    Bottom
  }
}
</script>

<style>

</style>
