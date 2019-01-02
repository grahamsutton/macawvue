<template>
  <b-modal 
    :id="id" 
    :title="title" 
    :ok-title="okTitle"
    :ok-disabled="okDisabled"
    :cancel-title="cancelTitle"
    :cancel-disabled="cancelDisabled"
  >
    <slot></slot>
  </b-modal>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    okTitle: {
      type: String,
      default: 'OK'
    },
    okDisabled: {
      type: Boolean,
      default: false
    },
    cancelTitle: {
      type: String,
      default: 'Cancel'
    },
    cancelDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>