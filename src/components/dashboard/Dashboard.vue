<template>
  <div>
    <LeftNav />
    <!-- section (right block)-->
    <div class="col-12 col-lg-10 offset-lg-2 section-ct bg-white">
      <div class="row">
        <!-- main container block -->
        <div class="col-12 col-md-12 order-md-1 col-lg-7 offset-lg-1 py-5">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './LeftNav'

export default {
  components: {
    LeftNav
  }
}
</script>