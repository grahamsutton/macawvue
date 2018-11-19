<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./styles/variables.scss";

body {
  font-family: $exo2-font;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  line-height: 1.2;
  color: inherit;
}

.section-ct {
  font-weight: 300;

  .titles-ct {
    h2 {
      font-size: 1.7rem;
      font-weight: 300;
    }
  }
}
</style>
