<template>
  <div>

    <!-- inner navigation -->
    <div class="col order-md-2 col-lg-4 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
      <div class="content-aux-nav multiple-items"></div>
    </div>
    <!-- / inner navigation -->

    <!-- main container block -->
    <div class="col-12 col-md-8 order-md-1 col-lg-7 offset-lg-1 py-5" id="nav-scroller" ref="content">
      <!-- Here goes the content of the page -->
      <div class="row">
        <!-- Title Container-->
        <div class="col-12 col-lg-10 titles-ct mt-0">
          <h1>Buttons</h1>
          <h2>Use the button component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</h2>
        </div>
        <!-- / Title Container-->
        <div class="col-12">
          <hr>
        </div>
        <!-- Page description text -->
        <div class="col-12 text-justify">
          <p>More variants coming soon.</p>
        </div>
        <!-- / Page description text -->
      </div>

      <div class="row">
        <div class="col-md-12">
          <notification variant="warning">
            When using the <code>Button.vue</code> component, you <strong>must</strong> provide an alias for it when registering the component. This is because Vue will attempt to translate <code>Button.vue</code> in PascalCase to <code>&lt;button&gt;</code> in kebab-case, however, <code>&lt;button&gt;</code> is already a reserved HTML element. See the Vue example below to see how to provide an alias for the component name.
          </notification>
        </div>
      </div>
        
      <!-- Props -->
      <div class="row">
        <div class="col-md-12 mt-4">
          <props-table>
            <props-table-row
              prop="variant"
              type="String"
              :required="false"
              default-val="primary"
              description="Valid options are <code>primary</code>, <code>link</code>."
            />
          </props-table>
        </div>
      </div>

      <!-- Events -->
      <div class="row">
        <div class="col-md-12 mt-4">
          <events-table>
            <events-table-row
              event="click"
              description="Accepts a callback to perform when the button is clicked."
            />
          </events-table>
        </div>
      </div>

      <div class="row">
        <div class="col-12 my-5" id="how-to-use">
          <!-- Live Example container -->
          <div class="live-example-ct rounded-top">
            <sl-button variant="primary" @click="handleClick">Primary Button</sl-button>
            <sl-button variant="link">Link Button</sl-button>
          </div>
          <!-- / Live Example container -->

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
import EventsTable from '@/components/EventsTable.vue'
import EventsTableRow from '@/components/EventsTableRow.vue'
import Button from '@/elements/Button.vue'
import Notification from '@/elements/Notification.vue'

export default {
  components: {
    PropsTable,
    PropsTableRow,
    EventsTable,
    EventsTableRow,
    Notification,
    'sl-button': Button
  },
  data () {
    return {
      code: `
        <sl-button variant="primary" @click="handleClick">Primary Button</sl-button>
        <sl-button variant="link">Link Button</sl-button>
      `,
      vue: `
        import Button from '@sproutloud/macaw/src/elements/Button.vue'

        export default {
          ...
          components: {
            'sl-button': Button  // must give alias to button to avoid naming conflicts with HTML's <button>
          },
          methods: {
            handleClick () {
              alert('Button was clicked')
            }
          }
          ...
        }
      `
    }
  },
  methods: {
    handleClick () {
      alert('Button was clicked')
    }
  }
}
</script>