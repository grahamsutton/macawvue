<template>
  <div>
    <Sidebar />
    <!-- section (right block)-->
    <div class="col-12 col-lg-10 offset-lg-2 section-ct bg-white">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>