<template>
  <div>
    <div class="row">
      <!-- inner navigation -->
      <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
        <div class="content-aux-nav multiple-items">
          <b-list-group v-b-scrollspy:nav-scroller>
            <h5>Contents</h5>           
              <b-list-group-item @click="scrollIntoView" href="#item-0">Abbreviations</b-list-group-item>
              <b-list-group-item @click="scrollIntoView" href="#item-1">Active voice</b-list-group-item>
              <b-list-group-item @click="scrollIntoView" href="#item-2">Buttons</b-list-group-item>
            </b-list-group>
        </div>
      </div>
      <!-- / inner navigation -->
      <!-- main container block -->
      <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" id="nav-scroller" ref="content">
        <!-- Here goes the content of the page -->
        <div class="row">
          <!-- Title Container-->
          <div class="col-12 col-lg-12 titles-ct mt-0">
            <h1>Typography</h1>
            <h2>Typography can help create clear hierarchies, organize information, and guide users through our app.</h2>
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
          <div class="col-12 mt-3" id="item-0">
            <h2>Font Stack</h2>
            
            <p>We use sans-serif fonts for most of our type, the exception being when you want to display code then you should defer to monospace fonts.</p>

            <p>Currently, our app uses <code>Arial, sans-serif</code> as our font stack. With Macaw we are working on updating this to Roboto, which is considered a more legible, crisp font.</p>

            <pre><code>font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;</code></pre>           
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-3" id="item-1">
            <h2>Usage</h2>
            
            <p>Keeping consist and sticking to logical hierarchies ensures that elements in the UI are clear and easily recognizable when scanning the page. Text sizes, styles, and layouts were selected to balance content and UI and to foster familiarity.</p>

 			<table class="table table-striped b-table-fixed">
 				<thead>
 					<tr>
 						<th scope="col">Header</th>
 						<th scope="col">Basic Properties</th>
 						<th scope="col">Usage</th>
 					</tr>
 				</thead>
 				<tbody>
 					<tr>
 						<td><h1>h1 Heading</h1></td>
 						<td>
 							<ul class="list-unstyled">
 								<li>Font size: 35px</li>
								<li>Font weight: 400 / Regular</li>
								<li>Color: $color-black-87</li>
							</ul>
 						</td>
 						<td>For oversized screen titles. Use in moderation.</td>
 					</tr>
 					<tr>
 						<td><h2>h2 Heading</h2></td>
 						<td>
 							<ul class="list-unstyled">
 								<li>Font size: 30px</li>
								<li>Font weight: 400 / Regular</li>
								<li>Color: $color-black-87</li>
							</ul>
 						</td>
 						<td>Main titles, use only once per page.</td>
 					</tr>
 					<tr>
 						<td><h3>h3 Heading</h3></td>
 						<td>
 							<ul class="list-unstyled">
 								<li>Font size: 25px</li>
								<li>Font weight: 400 / Regular</li>
								<li>Color: $color-black-87</li>
							</ul>
 						</td>
 						<td>Headings that identify key functionality.</td>
 					</tr>
 					<tr>
 						<td><h4>h4 Heading</h4></td>
 						<td>
 							<ul class="list-unstyled">
 								<li>Font size: 20px</li>
								<li>Font weight: 400 / Regular</li>
								<li>Color: $color-black-87</li>
							</ul>
 						</td>
 						<td>Sub-section and field group headings.</td>
 					</tr>
 					<tr>
 						<td><p>Paragraph</p></td>
 						<td>
 							<ul class="list-unstyled">
 								<li>Font size: 16px</li>
								<li>Font weight: 300 / Light</li>
								<li>Color: $color-black-87</li>
							</ul>
 						</td>
 						<td>Anything from a couple of words to long description fields.</td>
 					</tr>
 					<tr>
 						<td><label>Form Label</label></td>
 						<td>
 							<ul class="list-unstyled">
 								<li>Font size: 12px</li>
								<li>Font weight: 400 / Regular</li>
								<li>Color: $color-black-87</li>
							</ul>
 						</td>
 						<td>In forms as the label.</td>
 					</tr>
 					<tr>
 						<td><small class="form-text text-muted">Help text for forms</small></td>
 						<td>
 							<ul class="list-unstyled">
 								<li>Font size: 35px</li>
								<li>Font weight: 400 / Regular</li>
								<li>Color: $color-black-54</li>
							</ul>
 						</td>
 						<td>Beneath the form element to give additional information.</td>
 					</tr>
 					<tr>
 						<td><small class="form-text text-danger">Error help text</small></td>
 						<td>
 							<ul class="list-unstyled">
 								<li>Font size: 35px</li>
								<li>Font weight: 400 / Regular</li>
								<li>Color: $color-danger</li>
							</ul>
 						</td>
 						<td>Beneath the form element, to show when there is an error with the field.</td>
 					</tr>
 				</tbody>
 			</table>    
          </div>
        </div>
        
        
        </div>
      </div>
      <!-- / main container block -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
</style>