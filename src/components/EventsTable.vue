<template>
  <div>
    <h3>Events</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'events-table'
}
</script>