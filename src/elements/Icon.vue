<template>
  <component :is="type" :aria-label="ariaLabel" :class="['icon', size]" v-html="svg" />
</template>

<script>
// import svgLoader from '../lib/svgLoader.js'
// import { arrayIncludes } from '@/utils/array"

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product.
 */

// Valid supported sizes
const SIZES = ['small', 'medium', 'large']

export default {
  name: 'icon',

  props: {

    /**
     * The name of the icon to display.
     */
    name: {
      type: String,
      required: true
    },

    /**
     * The fill color of the SVG icon.
     */
    fill: {
      type: String,
      default: 'currentColor'
    },

    /**
     * Descriptive text to be read to screenreaders.
     */
    ariaLabel: {
      type: String,
      default: 'icon'
    },

    /**
     * The html element name used for the icon.
     */
    type: {
      type: String,
      default: 'span'
    },

    /**
     * The size of the icon. Defaults to medium.
     * `small, medium, large`
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => SIZES.includes(value)
    }
  },

  data () {
    return {
      svg: this.getIcon(this.name).replace(/^<svg /, `<svg style="fill: ${this.fill}" `)
    }
  },

  methods: {
    getIcon: iconName => {
      let icons = require.context('../assets/icons/', true, /^\.\/.*\.svg$/)
      return icons('./' + iconName + '.svg')
    }
  }
}
</script>

<style lang="scss">
@import "../styles/variables.scss";

// We don’t want to use scoped since these styles need to cascade down to SVGs.
// We also want to be able to style .icon inside buttons etc.
.icon {
  // Reset
  @mixin reset {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  &.large svg {
    width: $space-l;
    height: $space-l;
  }
  &.medium svg {
    width: $space-m;
    height: $space-m;
  }
  &.small svg {
    width: $space-s;
    height: $space-s;
  }
}
</style>
