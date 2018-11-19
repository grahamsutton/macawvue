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
	    	<div class="col-md-12">
	    		<div>
  				  <b-btn v-b-modal.modal1>Launch demo modal</b-btn>
				  <!-- Modal Component -->
				  <b-modal id="modal1" title="Bootstrap-Vue">
				    <p class="my-4">Hello from modal!</p>
				  </b-modal>
				</div>
	    	</div>
	    </div>
	    <div class="row">
	    	<div class="col-md-12">
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