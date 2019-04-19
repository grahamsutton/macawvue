<template>
  <tr>
    <td>{{ prop }}</td>
    <td><code>{{ type }}</code></td>
    <td>{{ requiredYesOrNo }}</td>
    <td><code>{{ defaultVal }}</code></td>
    <td v-html="description"></td>
  </tr>
</template>

<script>
export default {
  name: 'props-table-row',

  props: {
    prop: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    defaultVal: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },

  computed: {
    requiredYesOrNo () {
      return this.required ? 'Yes' : 'No'
    }
  }
}
</script>