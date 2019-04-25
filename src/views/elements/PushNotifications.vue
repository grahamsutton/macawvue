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
          <h1>Push Notifications</h1>
          <h2>Push notifications are used to deliver feedback to an action, typically when the action is some form of data persistence.</h2>
        </div>
        <!-- / Title Container-->

        <div class="col-12">
          <hr>
        </div>

        <!-- Page description text -->
        <div class="col-12 text-justify">
          <p>Push notifications are a way to notify the user about the result of an action that was performed recently. Typically, this feedback is used when an action was performed successfully or unsuccessfully by the user or application.</p>
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

      <div class="row mt-4">
        <div class="col-md-12">
          <h3>Examples</h3>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-12" id="how-to-use">

          <!-- Live Example container -->
          <div class="live-example-ct rounded-top">

            <!-- Success Notification Example -->
            <sl-button @click="showNotification = true">Trigger Success Notification</sl-button>

            <!-- Info Notification Example -->
            <sl-button @click="showInfoNotification = true">Trigger Info Notification</sl-button>

            <!-- Warning Notification Example -->
            <sl-button @click="showWarningNotification = true">Trigger Warning Notification</sl-button>

            <!-- Danger Notification Example -->
            <sl-button @click="showDangerNotification = true">Trigger Danger Notification</sl-button>

            <push-notification-group>
              <push-notification :visible="showNotification" variant="success" @expire="showNotification = false">
                This is success push notification.
              </push-notification>
              <push-notification :visible="showInfoNotification" variant="info" @expire="showInfoNotification = false">
                This is an informative push notification.
              </push-notification>
              <push-notification :visible="showWarningNotification" variant="warning" @expire="showWarningNotification = false">
                This is a warning push notification.
              </push-notification>
              <push-notification :visible="showDangerNotification" variant="danger" @expire="showDangerNotification = false">
                This is an error push notification.
              </push-notification>
            </push-notification-group>
          </div>
          <!-- / Live Example container -->

          <div class="row mt-5">
            <div class="col-md-12">
              <h3>How to Use</h3>
              <p>Import the <code>PushNotificationGroup</code> and <code>PushNotification</code> components from the <code>@sproutloud/macaw</code> package into the <code>components</code> section of your Vue component. This will allow you to use the <code>&lt;push-notification&gt;</code> tag to render push notifications.</p>

              <p>The <code>&lt;push-notification-group&gt;</code> component wraps a group of <code>&lt;push-notification&gt;</code> components to allow multiple push notifications that are rendering simultaneously to render without stacking on top of other notifications.</p>

              <p>To change the color and style of the notification, you can pass an acceptable value (check the Props section for valid values) to the <code>variant</code> prop. Based on the variant, the icon will change automatically to match the variant. If you need a custom type of push notification, please contact your team's UI developer so that we can determine a proper solution.</p>
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
import PushNotificationGroup from '@/elements/PushNotificationGroup.vue'
import PushNotification from '@/elements/PushNotification.vue'
import Button from '@/elements/Button.vue'

export default {
  components: {
    PropsTable,
    PropsTableRow,
    PushNotificationGroup,
    PushNotification,
    'sl-button': Button
  },

  data () {
    return {
      showNotification: false,
      showInfoNotification: false,
      showWarningNotification: false,
      showDangerNotification: false,

      code: `
        <!-- Success Button -->
        <sl-button @click="showNotification = true">Trigger Success Notification</sl-button>

        <!-- Info Button -->
        <sl-button @click="showInfoNotification = true">Trigger Info Notification</sl-button>

        <!-- Warning Button -->
        <sl-button @click="showWarningNotification = true">Trigger Warning Notification</sl-button>

        <!-- Danger Button -->
        <sl-button @click="showDangerNotification = true">Trigger Danger Notification</sl-button>


        <!-- Notification Examples -->
        <push-notification-group>

          <!-- Success -->
          <push-notification :visible="showNotification" variant="success" @expire="showNotification = false">
            This is success push notification.
          </push-notification>

          <!-- Info -->
          <push-notification :visible="showInfoNotification" variant="info" @expire="showInfoNotification = false">
            This is an informative push notification.
          </push-notification>

          <!-- Warning -->
          <push-notification :visible="showWarningNotification" variant="warning" @expire="showWarningNotification = false">
            This is a warning push notification.
          </push-notification>

          <!-- Danger -->
          <push-notification :visible="showDangerNotification" variant="danger" @expire="showDangerNotification = false">
            This is an error push notification.
          </push-notification>
        </push-notification-group>
      `,
      vue: `
        import PushNotificationGroup from '@sproutloud/macaw/src/elements/PushNotificationGroup.vue'
        import PushNotification from '@sproutloud/macaw/src/elements/PushNotification.vue'

        export default {
          ...
          components: {
            PushNotificationGroup
            PushNotification
          }
          ...
        }
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.push-notifications {
  width: 300px;
  position: fixed;
  bottom: 30px;
  right: 50px;
}
</style>