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
          <h1>Modal</h1>
          <h2>A modal window is an element that sits on top of our application's main window.</h2>
        </div>
        <!-- / Title Container-->

        <div class="col-12">
          <hr>
        </div>

        <!-- Page description text -->
        <div class="col-12 text-justify">
          <p>It creates a mode that disables the main window but keeps it visible with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. It will be shown fullscreen and positioned in the center of the viewport.</p>
        </div>
        <!-- / Page description text -->

      </div>
      <div class="row">
        <div class="col-12 my-5" id="how-to-use">
          <b-tabs>
            <b-tab title="Code" active>

              <!-- Live Example container -->
              <div class="live-example-ct border mt-5 p-3 rounded-top">
                <sl-button modal="modal1">
                  Launch
                </sl-button>

                <sl-modal id="modal1" title="Bootstrap Modal Title">
                  Modal content goes here.
                </sl-modal>
              </div>
              <!-- / Live Example container -->

              <!-- Code Example container -->
              <div v-highlight>
                <pre>
                  <code class="html">
                    {{ code }}
                  </code>
                </pre>
              </div>
              <!-- / Code Example container -->

            </b-tab>
            <b-tab title="Useful Classes" >
              <div class="py-5">
                <p>Modal have specific classes for their structure:</p>
                <ul>
                  <li><strong>.modal</strong> (this is the main class for the modals)</li>
                  <li><strong>.modal-dialog</strong></li>
                  <li><strong>.modal-content</strong></li>
                  <li><strong>.modal-header</strong> (This is the class to group the modal title and close icon)</li>
                  <li><strong>.modal-title</strong></li>
                  <li><strong>.modal-body</strong></li>
                  <li><strong>.modal-footer</strong></li>
                </ul>
              </div>
            </b-tab>
            <b-tab title="On the App">
              <div class="py-5">
                <p>These are some places where you can find some examples:</p>
                <ul>
                  <li>master: <a href="" target="_blank">Social Accounts</a> and click on an account – <a href="" target="_blank">Screenshot</a></li>
                  <li>Admin: <a href="" target="_blank">Production tools</a> and click on an account</li>
                </ul>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button/Button.vue'
import Modal from '@/components/modal/Modal.vue'

export default {
  components: {
    'sl-button': Button,
    'sl-modal': Modal
  },

  data () {
    return {
      code: `
        <sl-button modal="modal1">
          Launch
        </sl-button>

        <sl-modal id="modal1" title="Bootstrap Modal Title">
          Modal content goes here.
        </sl-modal>
      `
    }
  }
}
</script>