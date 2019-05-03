<template>
  <div>
    <div class="row">
        <!-- inner navigation -->
        <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
            <div class="content-aux-nav multiple-items">
                <b-list-group v-b-scrollspy:nav-scroller>
                    <h5>Contents</h5>           
                    <b-list-group-item @click="scrollIntoView" href="#item-0">Variations</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#item-1">Patterns</b-list-group-item>
                </b-list-group>
            </div>
        </div>
        <!-- / inner navigation -->

        <!-- main container block -->
        <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" id="nav-scroller" ref="content">
            <div class="row">
                <div class="col-12 col-lg-12 titles-ct mt-0">
                    <h1>Buttons</h1>
                    <h2>Use the button component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</h2>
                </div>
                
                <div class="col-12">
                    <hr>
                </div>             
            </div>

            <div class="row">
              <div class="col-md-12">
                <notification variant="warning">
                  When using the <code>Button.vue</code> component, you <strong>must</strong> provide an alias for it when registering the component. This is because Vue will attempt to translate <code>Button.vue</code> in PascalCase to <code>&lt;button&gt;</code> in kebab-case, however, <code>&lt;button&gt;</code> is already a reserved HTML element. See the Vue example below to see how to provide an alias for the component name.
                </notification>
              </div>
            </div>
            
            <div class="row">
              <div class="col-12 mt-3" id="item-0">
                <h3>Button Variations</h3>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Button</th>
                      <th scope="col">Code</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><m-button variant="primary" @click="handleClick">Main Action</m-button></td>
                      <td class="button-example">
                        <code>&lt;m-button variant="primary" @click="handleClick"&gt;Primary Button&lt;/m-button&gt;</code>
                      </td>
                      <td>To call attention to an action on a form, or highlight the strongest call to action on a page. This should appear once per screen (not including modals). Not every screen requires a primary button. <em>Create Claim</em>, <em>Save Changes</em>, <em>Submit</em>.</td>
                    </tr>
                    <tr>
                      <td><m-button variant="secondary" @click="handleClick">Informational Action</m-button></td>
                      <td>
                        <code>&lt;m-button variant="secondary"&gt;View&lt;/m-button&gt;</code>
                      </td>
                      <td>Users won't need to click this button to move forward, it is an optional action. <em>View</em>, <em>Apply</em>, <em>Continue</em>.</td>
                    </tr>
                    <tr>
                      <td><m-button variant="danger" @click="handleClick">Destructive Action</m-button></td>
                      <td>
                        <code>&lt;m-button variant="danger"&gt;Delete&lt;/m-button&gt;</code>
                      </td>
                      <td>These are actions that delete or remove items. Since this is a destructive, most often permanent, action, we show it in. <em>Delete</em>, <em>Remove</em>, <em>Decline</em>, <em>Cancel Order</em>.</td>
                    </tr>
                    <tr>
                      <td><m-button variant="outline" @click="handleClick">Secondary Action</m-button></td>
                      <td>
                        <code>&lt;m-button variant="outline"&gt;Download PDF&lt;/m-button&gt;</code>
                      </td>
                      <td>Users won't need to click this button to move forward, it is an optional action. <em>Edit</em>, <em>Enter promo code</em>, <em>Go Back</em>, <em>Download CSV</em>, <em>Save Progress</em>.</td>
                    </tr>
                    <tr>
                      <td><m-button variant="tertiary" @click="handleClick">Tertiary Action</m-button></td>
                      <td>
                        <code>&lt;m-button variant="tertiary"&gt;Close&lt;/m-button&gt;</code>
                      </td>
                      <td>For more micro interactions that remove items from a page without causing any additional information. <em>Close</em>, <em>Clear Filters</em>.</td>
                    </tr>
                    <tr>
                      <td><m-button variant="link" @click="handleClick">Link</m-button></td>
                      <td>
                        <code>&lt;m-button variant="link"&gt;Link&lt;/m-button&gt;</code>
                      </td>
                      <td>When it's a button but you need it to look like a link.</td>
                    </tr>
                  </tbody>
              </table>             
              </div>
            </div>
            
            <div class="row">
              <div class="col-12 mt-3" id="item-1">
                <h3>Button Patterns</h3>
                <p>Here are some examples of button pairs that are already mapped out.</p>  

                <div class="row">
                  <div class="col">
                    <h4 class="mt-3 mb-2">Modal Actions</h4>
                    <div class="example-row bg-light p-3 mb-3">
                      <m-button variant="link" @click="handleClick">Cancel</m-button>
                      <m-button variant="primary" @click="handleClick">Save Changes</m-button>
                    </div>

                    <div class="example-row bg-light p-3 mb-3">
                      <m-button variant="link" @click="handleClick">Cancel</m-button>
                      <m-button variant="danger" @click="handleClick">Yes, Delete order</m-button>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <h4 class="mt-3 mb-2">Wizard Navigation</h4>
                    <div class="example-row">
                      <m-button variant="outline" @click="handleClick">Back</m-button>
                      <m-button variant="secondary" @click="handleClick">Continue</m-button>
                    </div>
                  </div>
                </div>
              </div>
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
    'm-button': Button
  },
  methods: {
    handleClick () {
      alert('Button was clicked')
    },

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
.button-example { min-width: 300px; }
</style>