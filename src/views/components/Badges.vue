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
	            <h1>Badges</h1>
	            <h2>Small and adaptive tag for adding context to just about any content.</h2>
	        </div>
	        <!-- / Title Container-->
	        <div class="col-12">
	            <hr>
	        </div>
	        <!-- Page description text -->
       		<div class="col-12 text-justify">
            	<p>Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>
          	</div>
          	<!-- / Page description text -->
	    </div>
	    <div class="row">
	    	<div class="col-12">
	    		<h2>Example heading <b-badge>New</b-badge></h2>
  				<h3>Example heading <b-badge>New</b-badge></h3>
			  <h4>Example heading <b-badge>New</b-badge></h4>
			  <h5>Example heading <b-badge>New</b-badge></h5>
			  <h6>Example heading <b-badge>New</b-badge></h6>
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