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
            <b-list-group-item @click="scrollIntoView" href="#item-3">When should I use Vue?</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#item-4">Can I use Vue with ExtJS and jQuery?</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#item-5">What if I'm not implementing a component using Vue?</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#item-6">Why Vue? Why not Angular or React?</b-list-group-item>
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

      <h3 id="item-3">When should I use Vue?</h3>
      <p><strong>Short answer:</strong> Only use Vue for <strong><u>brand new code</u></strong>.</p>

      <p><strong>Long(er) answer:</strong> Macaw brings in a lot of new styles that fit our more current and modern theme. In addition, a lot of code in the main SproutLoud application uses older libraries such as ExtJS and jQuery. These older styles and JavaScript libraries can create complications when working with Vue, so we recommend that using Vue should be reserved only for brand new or completely refactored code.</p>

      <h3 id="item-4">Can I use Vue with ExtJS and jQuery?</h3>
      <p><strong>Short answer:</strong>  Try to avoid mixing Vue with ExtJS at all costs. Don't use jQuery in Vue at all (it is not necessary).</p>

      <p><strong>Long(er) answer:</strong> Although ExtJS and Vue can work together in many cases, using ExtJS with Vue can create unnecessary dependencies. Vue components are intended to be reusable throughout other parts of the application. ExtJS components often are very specific to one part of the application once they are defined. In addition, ExtJS provides it's only styling that does not match the our newer and more modern theme.</p>

			<h3 id="item-5">What if I'm not implementing a component using Vue?</h3>
			<p><strong>Short answer:</strong> No problem. There are 2 tabs for the code, Vue and HTML. Simply grab the HTML code to use within the app. You'll also need to add the class "macaw" to a parent div to grab the styles.</p>

			<p><strong>Long(er) answer:</strong> Macaw will be implemented incrementally to ensure it's success and the success of the teams. In a perfect world, we'd be able to stop time and implement Macaw everywhere on our app, but unfortunately that's not an option yet. So, all of our styles for components are available to use within the app, as long as the parent div contains "macaw". This allows us to have the Macaw styles ready on-demand, without interferring with exisiting patterns.</p>

      <h3 id="item-6">Why Vue? Why not Angular or React?</h3>
      <p>The reason we chose Vue is because it is incrementally adoptable and has a much simpler learning curve. Although Angular and React are certainly great frameworks, they both have their limitations for SproutLoud: </p>
      <ul>
        <li>Angular cannot be used in the app sparingly (either everything is Angular or nothing is Angular).</li>
        <li>React <em>can</em> be adopted incrementally, but does not offer the flexibility of <a href="https://vuejs.org/v2/guide/single-file-components.html" target="_blank">Single File Components <icon name="external-link" size="xs"></icon></a> like Vue, has a slightly more challenging learning curve, and would make directory organization more complicated. It would also require us to download more dependencies to support JSX.</li>
      </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/elements/Icon.vue'

export default {
  components: {
    Icon
  }
}
</script>