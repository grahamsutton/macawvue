<template>
  <div>

    <!-- inner navigation -->
    <div class="col order-md-2 col-lg-4 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
      <div class="content-aux-nav multiple-items"></div>
    </div>
    <!-- / inner navigation -->

    <!-- main container block -->
    <div class="col-12 col-md-8 order-md-1 col-lg-9 offset-lg-1 py-5" id="nav-scroller" ref="content">

      <!-- Here goes the content of the page -->
      <div class="row">

        <!-- Title Container-->
        <div class="col-12 col-lg-10 titles-ct mt-0">
          <h1>Icons</h1>
          <h2>Use icons to create symbolic or shorthand visual references to other elements in the application.</h2>
        </div>
        <!-- / Title Container-->

        <div class="col-12">
          <hr>
        </div>

        <!-- Page description text -->
        <div class="col-12 text-justify">
          <p>Icons are used to visually communicate core parts of the product and available actions. They can act as wayfinding tools to help users more easily understand where they are in the product.</p>
        </div>
        <!-- / Page description text -->

      </div>
      <div class="row">
        <!-- Props -->
        <div class="col-md-12 mt-4">
          <props-table>
            <props-table-row
              prop="name"
              type="String"
              :required="true"
              default-val=""
              description="Valid options are listed in the Available Icons section below."
            />
            <props-table-row
              prop="fill"
              type="String"
              :required="false"
              default-val="currentColor"
              description="Any CSS <code>rgb</code>, <code>rgba</code>, or hex color value (e.g. <code>#FFFFFF</code>)."
            />
            <props-table-row
              prop="ariaLabel"
              type="String"
              :required="false"
              default-val="icon"
              description="Descriptive text for screen readers."
            />
            <props-table-row
              prop="type"
              type="String"
              :required="false"
              default-val="span"
              description="HTML tag that the SVG should be rendered in. Will wrap the icon component in this HTML tag."
            />
            <props-table-row
              prop="size"
              type="String"
              :required="false"
              default-val="medium"
              description="Valid options are <code>small</code>, <code>medium</code>, and <code>large</code>."
            />
          </props-table>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-12">
          <h3>Available Icons</h3>
        </div>
      </div>
      <div class="row">
        <div v-for="icon in icons" :key="icon" class="col-md-2">
          <div class="card icon-card">
            <div class="card-body text-center">
              <icon :name="icon"></icon>
              <span class="icon-name">{{ icon }}</span>
            </div>
          </div>
        </div>        
      </div>

      <div class="row mt-4">
        <div class="col-md-12">
          <h3>How to Use</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-12" id="how-to-use">
          <!-- Code Example container -->
          <div v-highlight>
            <pre>
              <code class="html">
                {{ code }}
              </code>
              <code class="js">
                {{ vue }}
              </code>
            </pre>
          </div>
          <!-- / Code Example container -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PropsTable from '@/components/PropsTable.vue'
import PropsTableRow from '@/components/PropsTableRow.vue'
import Icon from '@/elements/Icon.vue'
import path from 'path'

export default {
  components: {
    PropsTable,
    PropsTableRow,
    Icon
  },

  computed: {
    icons () {
      let icons = require.context('@/assets/icons/', true, /^\.\/.*\.svg$/)
      return icons.keys().map(iconFile => path.basename(iconFile, '.svg'))
    }
  },

  data () {
    return {
      code: `
        <icon name="check" fill="rgb(250, 250, 250)"></icon>
      `,
      vue: `
        import Icon from '@sproutloud/macaw/src/elements/Icon.vue'

        export default {
          ...
          components: {
            Icon
          }
          ...
        }
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-card {
  margin-bottom: 10px;

  svg {
    display: block;
  }

  .icon-name {
    margin-top: 5px;
    display: block;
    font-size: 12px;
  }
}
</style>