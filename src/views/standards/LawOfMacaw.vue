<template>
  <div>
    <div class="row">
      <!-- main container block -->
      <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0"></div>
      <!-- / inner navigation -->

      <!-- main container block -->
      <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" ref="content">
        <!-- Here goes the content of the page -->
        <div class="row">

          <!-- Title Container-->
          <div class="col-12 titles-ct mt-0">
            <h1>Law of Macaw</h1>
            <h2>Every time you break a law, God will smite a kitten.</h2>
          </div>
          <!-- / Title Container-->

          <div class="col-12">
            <hr>
          </div>

          <!-- Page description text -->
          <div class="col-12">
            <ol>
              <li>
                <h3>Thou shall <em>not</em> use jQuery inside a Vue component.</h3>
                <p>jQuery selectors should never be used inside a Vue component. Instead, <a href="https://vuejs.org/v2/api/#ref"><code>ref</code> <icon name="external-link" size="xs"></icon></a> and <a href="https://vuejs.org/v2/guide/events.html#ad">event handlers <icon name="external-link" size="xs"></icon></a> must be used. Failure to obey is punishable by public humiliation.</p>
              </li>
              <li>
                <h3>Thou shall <em>not</em> use ExtJS inside a Vue component.</h3>
                <p>ExtJS should never be used inside a Vue component. You must use one or the other, but never both. Failure to obey is punishable by public humiliation.</p>
              </li>
              <li>
                <h3>Thou shall use Vue when creating brand new code.</h3>
                <p>Vue and ES6 "new" JavaScript should be used when creating brand new or completely refactored code. Failure to obey is punishable by public humiliation.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/elements/Icon.vue'

export default {
  components: {
    Icon
  },
  methods: {
    scrollIntoView (evt) {
      evt.preventDefault()

      const href = evt.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null

      if (el) {
        this.$refs.content.scrollTop = el.offsetTop
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#nav-scroller {
  position: relative; 
  height: 100vh; 
  overflow-y: scroll;
}

.nav {
  .nav-item {
    .nav-link {
      padding: .2rem 1rem;
    }
  }
}
</style>