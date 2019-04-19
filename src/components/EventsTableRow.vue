<template>
  <tr>
    <td>{{ event }}</td>
    <td>{{ description }}</td>
  </tr>
</template>

<script>
export default {
  name: 'events-table-row',

  props: {
    event: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>