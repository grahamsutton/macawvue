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
	            <h1>Buttons</h1>
	            <h2>Use Bootstrap’s custom b-button component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</h2>
	        </div>
	        <!-- / Title Container-->
	        <div class="col-12">
	            <hr>
	        </div>
	        <!-- Page description text -->
       		<div class="col-12 text-justify">
            	<p>More coming soon.</p>
          	</div>
          	<!-- / Page description text -->
	    </div>
	    <div class="row">
    		<template v-for="variant in ['primary','secondary','success','outline-success','warning','danger','link']">
        		<div class="col-md-4 pb-2" v-for="size in ['sm','','lg']" :key="`${variant}_${size}`">
           	 		<b-button :size="size" :variant="variant">
                		{{variant}} {{size}}
            		</b-button>
        		</div>
    		</template>
		</div>

		<div class="row"><div class="col-12"><hr/></div></div>

		<div class="row">
	    	<div class="col-12">
	    		<h2>Button element type</h2>
				<p>The b-button component generally renders a button element. However, you can also render an a element by providing an href prop value. You man also generate vue-router router-link when providing a value for the to prop (vue-router is required).</p>

 				<div>
  					<b-button>I am a Button</b-button>
  					<b-button href="#">I am a Link</b-button>
				</div>

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
  }
}
</script>