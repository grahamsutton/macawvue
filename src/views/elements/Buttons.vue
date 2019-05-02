<template>
  <div>
    <div class="row">
        <!-- inner navigation -->
        <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
            <div class="content-aux-nav multiple-items">
                <b-list-group v-b-scrollspy:nav-scroller>
                    <h5>Contents</h5>           
                    <b-list-group-item @click="scrollIntoView" href="#item-0">Item 1</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#item-1">Item 2</b-list-group-item>
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
                      <td><sl-button variant="primary" @click="handleClick">Main Action</sl-button></td>
                      <td class="button-example">
                        <code>&lt;sl-button variant="primary" @click="handleClick"&gt;Primary Button&lt;/sl-button&gt;</code>
                      </td>
                      <td>Main creation actions. To call attention to an action on a form, or highlight the strongest call to action on a page. This should appear once per screen (not including modals). Not every screen requires a primary button. <em>Create Claim</em>, <em>Save Changes</em>, <em>Submit</em>.</td>
                    </tr>
                    <tr>
                      <td><sl-button variant="secondary" @click="handleClick">Informational Action</sl-button></td>
                      <td>
                        <code>&lt;sl-button variant="secondary"&gt;Secondary Button&lt;/sl-button&gt;</code>
                      </td>
                      <td>Users won't need to click this button to move forward, it is an optional action. <em>View</em>, <em>Apply</em>, <em>Continue</em>.</td>
                    </tr>
                    <tr>
                      <td><sl-button variant="outline" @click="handleClick">Secondary Action</sl-button></td>
                      <td>
                        <code>&lt;sl-button variant="outline"&gt;Secondary Action&lt;/sl-button&gt;</code>
                      </td>
                      <td>Users won't need to click this button to move forward, it is an optional action. <em>Edit</em>, <em>Enter promo code</em>, <em>Go Back</em>, <em>Download CSV</em>, <em>Save Progress</em>.</td>
                    </tr>
                  </tbody>
              </table>             
              </div>
            </div>
            
            <div class="row">
              <div class="col-12 mt-3" id="item-1">
                <h3>Section Header</h3>
                <p>We use sans-serif fonts for most of our type, the exception being when you want to display code then you should defer to monospace fonts.</p>          
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
    'sl-button': Button
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