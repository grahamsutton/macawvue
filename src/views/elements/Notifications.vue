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
          <h1>Notifications</h1>
          <h2>Notifications deliver brief and noteworthy information to a user.</h2>
        </div>
        <!-- / Title Container-->

        <div class="col-12">
          <hr>
        </div>

        <!-- Page description text -->
        <div class="col-12 text-justify">
          <p>Notifications are a way to notify the user of the result of some type of action or to pass along brief information that may be important to understanding the consequence of performing an action.</p>
        </div>
        <!-- / Page description text -->

      </div>
      <div class="row">
        <!-- Props -->
        <div class="col-md-12 mt-4">
          <props-table>
            <props-table-row
              prop="variant"
              type="String"
              :required="false"
              default-val="success"
              description="Valid options are <code>success</code>, <code>info</code>, <code>warning</code>, <code>danger</code>."
            />
          </props-table>
        </div>
      </div>
      <div class="row">
        <div class="col-12" id="how-to-use">
          <!-- Live Example container -->
          <div class="live-example-ct rounded-top">
            <notification variant="success">This is a success notification.</notification>
            <notification variant="info">This is an informative notification.</notification>
            <notification variant="warning">This is a warning notification.</notification>
            <notification variant="danger">This is an error notification.</notification>
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
import Notification from '@/elements/Notification.vue'

export default {
  components: {
    PropsTable,
    PropsTableRow,
    Notification
  },

  data () {
    return {
      code: `
        <notification variant="success">This is a success notification.</notification>
        <notification variant="info">This is an informative notification.</notification>
        <notification variant="warning">This is a warning notification.</notification>
        <notification variant="danger">This is an error notification.</notification>
      `,
      vue: `
        import Notification from '@sproutloud/macaw/src/elements/Notification.vue'

        export default {
          ...
          components: {
            Notification
          }
          ...
        }
      `
    }
  }
}
</script>