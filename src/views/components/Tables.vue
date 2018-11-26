<template>
  <dashboard>
    
    <!-- inner navigation -->
	<div class="col order-md-2 col-lg-4 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
	    <div class="content-aux-nav multiple-items">
	    </div>
	</div>
	<!-- / inner navigation -->

	<!-- main container block -->
	<div class="col-12 col-md-8 order-md-1 col-lg-7 offset-lg-1 py-5" id="nav-scroller" ref="content">
	    <!-- Here goes the content of the page -->
	    <div class="row">
	        <!-- Title Container-->
	        <div class="col-12 col-lg-10 titles-ct mt-0">
	            <h1>Tables</h1>
	            <h2>For displaying tabular data. Supports pagination, filtering, sorting, custom rendering, events, and asynchronous data.</h2>
	        </div>
	        <!-- / Title Container-->
	        <div class="col-12">
	            <hr>
	        </div>
	        <!-- Page description text -->
       		<div class="col-12 text-justify">
            	<p></p>
          	</div>
          	<!-- / Page description text -->
	    </div>
	    <div class="row">
	    	<div class="col-12">
  <b-table striped hover :items="items" :fields="fields"></b-table>
	    	</div>
	   	</div>
	</div>
  </dashboard>
</template>

<script>
import Dashboard from '@/components/dashboard/Dashboard.vue'

export default {
  components: {
    Dashboard
  },
  data () {
    return {
      fields: {
        last_name: {
          label: 'Person last name',
          sortable: true
        },
        first_name: {
          label: 'Person first name',
          sortable: false
        },
        foo: {
          // This key overrides `foo`!
          key: 'age',
          label: 'Person age',
          sortable: true
        }
      },
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>