<template>
    <div class="row">
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
            <h1>Accordion</h1>
            <h2>Adhering to certain rules of grammar and mechanics helps us keep our writing clear and consistent.</h2>
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
        	<div class="col">
        	<div role="tablist">
			    <b-card no-body class="mb-1">
			      <b-card-header header-tag="header" class="p-1" role="tab">
			        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Accordion 1</b-btn>
			      </b-card-header>
			      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
			        <b-card-body>
			          <p class="card-text">
			            I start opened because <code>visible</code> is <code>true</code>
			          </p>
			          <p class="card-text">
			           Text
			          </p>
			        </b-card-body>
			      </b-collapse>
			    </b-card>
			    <b-card no-body class="mb-1">
			      <b-card-header header-tag="header" class="p-1" role="tab">
			        <b-btn block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-btn>
			      </b-card-header>
			      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
			        <b-card-body>
			          <p class="card-text">
			           Text
			          </p>
			        </b-card-body>
			      </b-collapse>
			    </b-card>
			    <b-card no-body class="mb-1">
			      <b-card-header header-tag="header" class="p-1" role="tab">
			        <b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>
			      </b-card-header>
			      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
			        <b-card-body>
			          <p class="card-text">
			           Text
			          </p>
			        </b-card-body>
			      </b-collapse>
			    </b-card>
			  </div>
        	</div>
        </div>
 	  </div>
      <!-- / main container block -->
    </div>
</template>