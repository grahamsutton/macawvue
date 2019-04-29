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
          <h1>Tooltips</h1>
          <h2>Use tooltips to add a brief description to elements in the application.</h2>
        </div>
        <!-- / Title Container-->

        <div class="col-12">
          <hr>
        </div>

        <!-- Page description text -->
        <div class="col-12 text-justify">
          <p>Tooltips are helpful for adding a brief way to clarify the meaning or purpose to an element in the application when there is limited space to offer an explanation.</p>
        </div>
        <!-- / Page description text -->

      </div>
      <div class="row">
        <!-- Props -->
        <div class="col-md-12 mt-4">
          <props-table>
            <props-table-row
              prop="text"
              type="String"
              :required="false"
              default-val='""'
              description="The text to render in the popup window when hovering over the tooltip anchor."
            />
            <props-table-row
              prop="dir"
              type="String"
              :required="false"
              default-val="up"
              description="The direction the tooltip should render the popup window. Available options are <code>up</code>, <code>down</code>, <code>left</code>, or <code>right</code>."
            />
          </props-table>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-12">
          <h3>Examples</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-12" id="how-to-use">
          <!-- Live Example container -->
          <div class="live-example-ct rounded-top">
            <ul class="list-unstyled">
              <li class="mb-2">
                <tooltip text="This goes up by default">Up</tooltip>    
              </li>
              <li class="mb-2">
                <tooltip text="This goes down." dir="down">Down</tooltip>
              </li>
              <li class="mb-2">
                <tooltip text="This goes left." dir="left">Left</tooltip>
              </li>
              <li class="mb-2">
                <tooltip text="This goes right." dir="right">Right</tooltip>
              </li>
            </ul>
          </div>
          <!-- / Live Example container -->

          <div class="row mt-4">
            <div class="col-md-12">
              <h3>How to Use</h3>
              <p>Import the <code>Tooltip</code> component from the <code>@sproutloud/macaw</code> package into the <code>components</code> section of your Vue component. This will allow you to use the <code>&lt;tooltip&gt;</code> tag to render a tooltip.</p>

              <p>Insert the default content to display between the <code>&lt;tooltip&gt;&lt;/tooltip&gt;</code> tags. This is the content that you can hover over to enable the tooltip to display. This can take any HTML content, but be mindful that the content will be underlined with a dotted line and may look a little odd for non-text content, so try to limit content in here to plain text rendering.</p>

              <p>Use the <code>text</code> prop to pass in the text that you want the tooltip to render in the popup container.</p>

              <p>You can also change the direction the tooltip should render by providing a valid option to the <code>dir</code> prop.</p>
            </div>
          </div>

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
import Tooltip from '@/elements/Tooltip.vue'

export default {
  components: {
    PropsTable,
    PropsTableRow,
    Tooltip
  },

  data () {
    return {
      code: `
        <tooltip text="This goes up by default">Up</tooltip>
        <tooltip text="This goes down." dir="down">Down</tooltip>
        <tooltip text="This goes left." dir="left">Left</tooltip>
        <tooltip text="This goes right." dir="right">Right</tooltip>
      `,
      vue: `
        import Tooltip from '@sproutloud/macaw/src/elements/Tooltip.vue'

        export default {
          ...
          components: {
            Tooltip
          }
          ...
        }
      `
    }
  }
}
</script>