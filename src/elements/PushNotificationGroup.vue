<template>
  <div class="m-push-notifications">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.m-push-notifications {
  width: 300px;
  position: fixed;
  bottom: 30px;
  right: 50px;
  z-index: 2;

  .m-notification {
    margin-bottom: 10px !important;
  }
}
</style>