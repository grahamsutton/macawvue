<template>
  <div>
    <div class="row">
      <!-- main container block -->
      <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
        <div class="content-aux-nav multiple-items">
          <b-list-group v-b-scrollspy:nav-scroller>
            <h5>Contents</h5>
            <b-list-group-item @click="scrollIntoView" href="#item-1">What is a Design System?</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#item-2">How do I use Macaw?</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#item-3">What if I'm not implementing a component using Vue?</b-list-group-item>
          </b-list-group>
        </div>
      </div>
      <!-- / inner navigation -->
      <!-- main container block -->
      <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" id="nav-scroller" ref="content">
        <!-- Here goes the content of the page -->
        <div class="row">

          <!-- Title Container-->
          <div class="col-12 col-lg-10 titles-ct mt-0">
            <h1>Questions about Macaw</h1>
            <h2></h2>
          </div>

          <!-- / Title Container-->
          <div class="col-12">
            <hr>
          </div> 

          <!-- Page description text -->   
          <div class="col-12">
            <h3 id="item-1">What is a Design System?</h3>
 			<p>In short, a design system combines information about a front-end component stack and it's equivalent, a component library; accompanied by UX rationals, technical documentation and the most common proven solutions… But it can be so much more.</p>

			<p>It is key to understand that, other than the name 'design system' suggests, it's not just a fancy name to describe a UI kit. It's a great platform to inform, inspire, promote and be the single source of truth for everybody within a company working on different digital channels.</p>

			<p>In this age of digitalism a smart company needs to be prepared to move and make changes to the product when the customer demands it. The faster they can make these changes the better.</p>

			<p>This becomes very tricky when there are different teams working on different projects or products at the same time. So creating a solid but flexible base on which the company can build, optimize and extend is a must and a good design system is one of the tools that gives you a head start.</p>

			<h3 id="item-2">How do I use Macaw?</h3>
			<p>Macaw is easy to use. When working on incorportating a component into the app or revising an existing one, you can use the tools within Macaw to ensure what you're building is inline with the principles of SproutLoud.</p>

			<p><strong>Are you building a translation?</strong> Check out the Common Translations section to get information on how to craft the right message.</p>

			<p><strong>Adding a notification to an existing page?</strong> Check out the notification page to grab the markup needed.</p>

			<h3 id="item-3">What if I'm not implementing a component using Vue?</h3>
			<p><strong>Short answer:</strong> No problem. There are 2 tabs for the code, Vue and HTML. Simply grab the HTML code to use within the app. You'll also need to add the class "macaw" to a parent div to grab the styles.</p>

			<p><strong>Long(er) answer:</strong> Macaw will be implemented incrementally to ensure it's success and the success of the teams. In a perfect world, we'd be able to stop time and implement Macaw everywhere on our app, but unfortunately that's not an option yet. So, all of our styles for components are available to use within the app, as long as the parent div contains "macaw". This allows us to have the Macaw styles ready on-demand, without interferring with exisiting patterns.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>