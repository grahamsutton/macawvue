<template>
  <!-- section (right block)-->
  <div class="col-12 col-lg-10 offset-lg-2 section-ct bg-white">
      <div class="row">
        <!-- main container block -->
        <div class="col-12 col-md-12 order-md-1 col-lg-7 offset-lg-1 py-5">
          <slot></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
