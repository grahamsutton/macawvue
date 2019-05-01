<template>
  <div>
    <div class="row">
        <!-- inner navigation -->
        <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
            <div class="content-aux-nav multiple-items">
                <b-list-group v-b-scrollspy:nav-scroller>
                    <h5>Contents</h5>           
                    <b-list-group-item @click="scrollIntoView" href="#item-0">Font Stack</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#item-1">Usage</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#item-2">Line-Height</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#item-3">Formatting</b-list-group-item>
                </b-list-group>
            </div>
        </div>
        <!-- / inner navigation -->

        <!-- main container block -->
        <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" id="nav-scroller" ref="content">
            <div class="row">
                <div class="col-12 col-lg-12 titles-ct mt-0">
                    <h1>Typography</h1>
                    <h2>Typography can help create clear hierarchies, organize information, and guide users through our app.</h2>
                </div>
                
                <div class="col-12">
                    <hr>
                </div>             
            </div>
            <div class="row">
              <div class="col-12 mt-3" id="item-0">
                <h3>Font Stack</h3>
                
                <p>We use sans-serif fonts for most of our type, the exception being when you want to display code then you should defer to monospace fonts.</p>

                <p>Currently, our app uses <code>Arial, sans-serif</code> as our font stack. With Macaw we are working on updating this to Roboto, which is considered a more legible, crisp font.</p>

                <pre><code>font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;</code></pre>           
              </div>
            </div>
            <div class="row">
                <div class="col-12 mt-3" id="item-1">
                    <h3>Usage</h3>
                    
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
            <div class="row">
                <div class="col-12 mt-3" id="item-2">
                    <h3>Line Height</h3>
                    <p>Macaw has two line heights for its typography: A standard line height with a 1:1.5 ratio and another one used for headings with a 1:1.25 ratio.</p>

                    <p>1:1.5 is one of the most common line height ratios used in web development right now. A body font of 16px (1rem) returns a value of 24px (1.5rem), which is the main reference measurement for the vertical organization of content in Macaw.</p>

                    <p>Using a minimum value of 1.5 for the line-height for main paragraph content also improves accessibility for people with low vision or cognitive concerns such as Dyslexia.</p>

                    <p>We perceive the space between large font sizes a bit differently. The white space between lines appears more prominent. Therefore, it is considered best practice to reduce the line height in font sizes that are 20 pixels or larger. The same is true for uppercase texts. Therefore uppercase headings in Macaw, despite only being 12px and 14px, also use a ratio of 1:1.25.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mt-3" id="item-3">
                    <h3>Formatting</h3>
                    <table class="table table-striped formatting-table">
                        <thead>
                            <tr>
                                <th scope="col" class="style-column">Style</th>
                                <th scope="col">Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Bold</strong></td>
                                <td>
                                    Use <strong>&lt;strong&gt;</strong> to emphasis text.
                                </td>
                            </tr>
                            <tr>
                                <td><em>Italics</em></td>
                                <td>
                                    Use <em>&lt;em&gt;</em> to italicize text.
                                </td>

                            </tr>
                            <tr>
                                <td><small>Small</small></td>
                                <td>
                                    <small>&lt;small&gt;</small> is used primarily as help text under form fields and as secondary supporting text in applications and should be used sparingly.
                                </td>

                            </tr>
                            <tr>
                                <td><a href="#">Link</a></td>
                                <td>
                                    When you are linking just a few words of text, or when a link is standalone. Do not use for actions, instead use a button. Links use <code>$link-color</code> and are not underlined.
                                </td>

                            </tr>
                            <tr>
                                <td>Ordered List</td>
                                <td>
                                    <ol>
                                        <li>Use ordered lists to group items in a pre-determined order.</li>
                                        <li>They have a line height of 20px.</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td>Unordered List</td>
                                <td>
                                    <ul>
                                        <li>Use unordered lists to group related items.</li>
                                        <li>They have a line height of 20px.</li>
                                        <li>Adding the class <code>list-unstyled</code> removes the default list-style and left margin on list items (immediate children only).</li>
                                        <li>This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><code>Code</code></td>
                                <td>
                                    Use <code>&lt;code&gt;</code> to display inline code blocks.
                                </td>
                            </tr>
                        </tbody>
                    </table>  
                </div>
            </div>
        </div>
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

.table td h1 { min-width: 210px; }
.table td .list-unstyled { min-width: 200px; }
.formatting-table .style-column { min-width: 150px; }
</style>