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

        <!-- Props -->
        <div class="col-md-12 mt-4">
          <props-table>
            <props-table-row
              prop="visible"
              type="Boolean"
              :required="false"
              default-val="false"
              description="<code>true</code> displays the modal, <code>false</code> will hide it. The modal is hidden by default."
            />
            <props-table-row
              prop="closeLabel"
              type="String"
              :required="false"
              default-val='"Close"'
              description="The label for the close button."
            />
            <props-table-row
              prop="submitLabel"
              type="String"
              :required="false"
              default-val='"Submit"'
              description="The label for the submit button."
            />
            <props-table-row
              prop="disableSubmit"
              type="Boolean"
              :required="false"
              default-val="false"
              description="<code>true</code> disables the submit button, <code>false</code> enables it."
            />
          </props-table>
        </div>

        <!-- Events -->
        <div class="col-md-12 mt-4">
          <events-table>
            <events-table-row
              event="close"
              description="Accepts a callback to perform when a close button is clicked."
            />
            <events-table-row
              event="submit"
              description="Accepts a callback to perform when the submit button is clicked. Does not work when providing a custom footer."
            />
          </events-table>
        </div>

        <div class="col-12 my-5" id="how-to-use">
          <h3>Basic Example</h3>
          <!-- Live Example container -->
          <div class="live-example-ct border mt-3 p-3 rounded-top">
            <sl-button @click="showModal = true">
              Launch Modal
            </sl-button>

            <modal :visible="showModal" @close="showModal = false" @submit="handleSubmit">
              <h2 slot="header">This is a modal title.</h2>
              <div>This is modal content.</div>
            </modal>
          </div>
          <!-- / Live Example container -->

          <!-- Code Example container -->
          <div v-highlight>
            <pre>
              <code class="html">
                {{ codeBasic }}
              </code>
              <code class="js">
                {{ vueBasic }}
              </code>
            </pre>
          </div>
          <!-- / Code Example container -->

          <h3>Custom Modal Footer</h3>
          <p>Add <code>slot="footer"</code> to an HTML element within a modal component to provide your own custom footer.</p>
          <!-- Live Example container -->
          <div class="live-example-ct border mt-3 p-3 rounded-top">
            <sl-button @click="showCustomFooterModal = true">
              Launch Modal w/ Custom Footer
            </sl-button>

            <modal :visible="showCustomFooterModal" @close="showCustomFooterModal = false">
              <h2 slot="header">This is a much longer modal title.</h2>
              <div>This is modal content.</div>
              <div slot="footer">
                <p>This is a custom footer.</p>
                <sl-button @click="showCustomFooterModal = false" variant="link">My Own Option 1</sl-button>
                <sl-button @click="handleCustomSubmit" variant="primary">My Own Option 2</sl-button>
              </div>
            </modal>
          </div>
          <!-- / Live Example container -->

          <!-- Code Example container -->
          <div v-highlight>
            <pre>
              <code class="html">
                {{ codeCustomFooter }}
              </code>
              <code class="js">
                {{ vueCustomFooter }}
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
import EventsTable from '@/components/EventsTable.vue'
import EventsTableRow from '@/components/EventsTableRow.vue'
import PropsTable from '@/components/PropsTable.vue'
import PropsTableRow from '@/components/PropsTableRow.vue'
import Button from '@/elements/Button.vue'
import Modal from '@/elements/Modal.vue'

export default {
  components: {
    EventsTable,
    EventsTableRow,
    PropsTable,
    PropsTableRow,
    'sl-button': Button,
    Modal
  },

  data () {
    return {
      showModal: false,
      showCustomFooterModal: false,
      codeBasic: `
        <sl-button @click="showModal = true">
          Launch Modal
        </sl-button>

        <modal :visible="showModal" @close="showModal = false" @submit="handleSubmit">
          <h2 slot="header">This is a modal title.</h2>
          <div>This is modal content.</div>
        </modal>
      `,
      vueBasic: `
        import Button from '@sproutloud/macaw/src/elements/Button.vue'
        import Modal from '@sproutloud/macaw/src/elements/Modal.vue'

        export default {
          ...
          components: {
            'sl-button': Button,  // needs custom name to avoid HTML conflict with <button>
            Modal
          },
          data () {
            return {
              showModal: false
            }
          },
          methods: {
            handleSubmit () {
              alert('Submit button clicked!')
            }
          }
          ...
        }
      `,
      codeCustomFooter: `
        <sl-button @click="showCustomFooterModal = true">
          Launch Modal w/ Custom Footer
        </sl-button>

        <modal :visible="showCustomFooterModal" @close="showCustomFooterModal = false">
          <h2 slot="header">This is a much longer modal title.</h2>
          <div>This is modal content.</div>
          <div slot="footer">
            <p>This is a custom footer.</p>
            <sl-button @click="showCustomFooterModal = false" variant="link">My Own Option 1</sl-button>
            <sl-button @click="handleSubmit" variant="primary">My Own Option 2</sl-button>
          </div>
        </modal>
      `,
      vueCustomFooter: `
        import Button from '@sproutloud/macaw/src/elements/Button.vue'
        import Modal from '@sproutloud/macaw/src/elements/Modal.vue'

        export default {
          ...
          components: {
            'sl-button': Button,  // needs custom name to avoid HTML conflict with <button>
            Modal
          },
          data () {
            return {
              showCustomFooterModal: false
            }
          },
          methods: {
            handleCustomSubmit () {
              alert('Custom submit button clicked!')
            }
          }
          ...
        }
      `
    }
  },

  methods: {
    handleSubmit () {
      alert('Submit button clicked!')
    },
    handleCustomSubmit () {
      alert('Custom submit button clicked!')
    }
  }
}
</script>