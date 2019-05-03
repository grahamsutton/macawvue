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
@import 'src/styles/variables.scss';
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
  background-color: $color-primary;
  color: #fff;

  &:hover, &:focus {
    background-color: $color-primary-hover;
  }
}

.m-button-secondary {
  background-color: $color-secondary;
  color: #fff;

  &:hover {
    background-color: $color-secondary-hover;
  }
}

.m-button-danger {
  background-color: $color-danger;
  color: #fff;

  &:hover, &:focus {
    background-color: $color-danger-hover;
  }
}

.m-button-outline {
  background-color: $color-white;
  border-color: $color-secondary;
  color: $color-secondary;

  &:hover, &:focus {
    background-color: $color-secondary-hover;
    border-color: $color-secondary-hover;
    color: $color-white;
  }
}

.m-button-tertiary {
  background-color: $color-white;
  border-color: $color-black-54;
  color: $color-black-54;

  &:hover, &:focus {
    background-color: $color-secondary-hover;
    border-color: $color-secondary-hover;
    color: $color-white;
  }
}

.m-button-link {
  background-color: transparent;
  border-color: transparent;
  color: $color-link;

  &:hover, &:focus {
    background-color: transparent;
    border-color: transparent;
    color: $color-link-hover;
  }
}
</style>