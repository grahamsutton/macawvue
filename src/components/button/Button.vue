<template>
  <b-btn v-b-modal="modal" :variant="variant">
    <slot></slot>
  </b-btn>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'secondary'
    },
    modal: {
      type: String,
      default: null
    }
  }
}
</script>