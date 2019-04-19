<template>
  <button @click="onClick($event)" class="m-button" :class="`m-button-${variant}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'm-button',

  props: {

    /**
     * The type and style of button to use.
     */
    variant: {
      type: String,
      default: 'primary',
      validator (value) {
        return ['primary', 'link'].includes(value)
      }
    }

  },

  methods: {

    /**
     * The native event triggered by the click.
     *
     * @param {Object} event
     *
     * @return {void}
     */
    onClick (event) {
      this.$emit('click', event)
    }

  }
}
</script>

<style lang="scss">
.m-button {
  display: inline-block;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid transparent;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 6px 15px;
  color: #fff;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  margin: 0;
  will-change: transform;
}

.m-button-primary {
  background-color: #35b082;
  border-color: #35b082;
  color: #fff;
}

.m-button-primary:focus,
.m-button-primary:hover {
  color: #fff;
  background-color: #35b082;
  border-color: #35b082;
}

.m-button-link {
  background-color: transparent;
  border-color: transparent;
  color: #616161;
}
</style>