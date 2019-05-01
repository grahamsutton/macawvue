<template>
  <div>
    <div class="row">
      <!-- main container block -->
      <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
        <div class="content-aux-nav multiple-items">
          <b-list-group v-b-scrollspy:nav-scroller>
            <h5>Contents</h5>
            <b-list-group-item @click="scrollIntoView" href="#item-1">Basic</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#item-2">Equal-width</b-list-group-item>
          </b-list-group>
        </div>
      </div>
      
      <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" id="nav-scroller" ref="content">
        <div class="row">

          <div class="col-12 titles-ct mt-0">
            <h1>Layout</h1>
            <h2>The main structural pattern that underlies the construction and positioning of all system components.</h2>
          </div>

          <div class="col-12">
             <hr>
          </div> 

          <div class="col-12">
            <h3 id="item-1">Columns</h3>
            <p>The column system is the main structural pattern for organizing and arranging elements on the page horizontally. It is not used to establish the distance between small elements, such as the icons or buttons in a toolbar, but rather it is a layout framework used to organize and establish divisions between medium and large blocks of content.</p>
            <div>
		    	<b-container class="example-row mb-2">
				  <b-row>
				    <b-col>1 of 3</b-col>
				    <b-col>2 of 3</b-col>
				    <b-col>3 of 3</b-col>
				  </b-row>
				</b-container>

				<div v-highlight><pre><code class="html">{{ vueBasic }}</code></pre></div>
			</div>

          	<div class="col-12">
	          	<h3>How it works</h3>
	          	<ul>
	          		<li>Containers provide a means to center your site's contents. Use <span class="highlight">&lt;b-container&gt;</span> for fixed width or &lt;b-container fluid&gt; for full width.</li>
	          		<li>Rows are horizontal groups of columns that ensure your columns are lined up properly. We use the negative margin method on <span class="highlight">&lt;b-row&gt;</span> to ensure all your content is aligned properly down the left side.</li>
	          		<li>Content should be placed within <span class="highlight">&lt;b-col&gt;</span> columns, and only columns may be immediate children of <span class="highlight">&lt;b-row&gt;</span>.</li>
	          		<li>Thanks to flexbox, grid columns without a set width will automatically layout with equal widths. For example, four instances of <span class="highlight">&lt;b-col sm="auto"&gt;</span> will each automatically be 25% wide for small breakpoints.</li>
	          		<li>Column prop cols indicates the number of columns you'd like to use out of the possible 12 per row regardless of breakpoint (starting at breakpoint xs). So, if you want three equal-width columns at any breakpoint, you can use <span class="highlight">&lt;b-col cols="4"&gt;</span>.</li>
	          		<li>Column props sm, md, lg, xl indicate the number of columns you'd like to use out of the possible 12 per row. at the various breakpoints. So, if you want three equal-width columns at breakpoint sm, you can use <span class="highlight">&lt;b-col sm="4"&gt;</span>. the special value auto can be used to take up the remaining available column space in a row.</li>
	          		<li>Column widths, internally, are set in percentages, so they're always fluid and sized relative to their parent element.</li>
	          		<li>Columns have horizontal padding to create the gutters between individual columns, however, you can remove the margin from <span class="highlight">&lt;b-row&gt;</span> and padding from <span class="highlight">&lt;b-col&gt;</span> by setting the no-gutters prop on <span class="highlight">&lt;b-row&gt;</span>.</li>
	          		<li>There are five grid tiers, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.</li>
					<li>Grid tiers are based on minimum widths, meaning they apply to that one tier and all those above it (e.g., <span class="highlight">&lt;b-col sm="4"&gt;</span> applies to small, medium, large, and extra large devices).
	You can use predefined grid classes or Sass mixins for more semantic markup.</li>
				</ul>
	        </div>

	        <div class="col-12">
             <h3 id="item-2">Equal-width Columns</h3>

             <div>
		    	<b-container class="example-row mb-2">
				  <b-row>
				    <b-col>1 of 2</b-col>
				    <b-col>2 of 2</b-col>
				  </b-row>

				  <b-row>
				    <b-col>1 of 3</b-col>
				    <b-col>2 of 3</b-col>
				    <b-col>3 of 3</b-col>
				  </b-row>
				</b-container>

				<div v-highlight><pre><code class="html">{{ vueEqual }}</code></pre></div>
			   
			</div>
          </div>
	           
	        <div class="col-12">
	           <props-table>
	            <props-table-row
	              prop="visible"
	              type="Boolean"
	              :required="false"
	              default-val="false"
	              description="<code>true</code> displays the modal, <code>false</code> will hide it. The modal is hidden by default."
	            />
	            <props-table-row
	              prop="closeLabel"
	              type="String"
	              :required="false"
	              default-val='"Close"'
	              description="The label for the close button."
	            />
	            <props-table-row
	              prop="submitLabel"
	              type="String"
	              :required="false"
	              default-val='"Submit"'
	              description="The label for the submit button."
	            />
	            <props-table-row
	              prop="disableSubmit"
	              type="Boolean"
	              :required="false"
	              default-val="false"
	              description="<code>true</code> disables the submit button, <code>false</code> enables it."
	            />
	          </props-table>
            </div>
        </div>
      </div></div></div>
    </div>
  </div>
</template>
<script>
import PropsTable from '@/components/PropsTable.vue'
import PropsTableRow from '@/components/PropsTableRow.vue'

export default {
  components: {
    PropsTable,
    PropsTableRow
  },
  data () {
    return {
      vueEqual: `
  <b-container>
    <b-row>
      <b-col>1 of 2</b-col>
      <b-col>2 of 2</b-col>
    </b-row>

    <b-row>
      <b-col>1 of 3</b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
      `,
      vueBasic: `
  <b-container>
    <b-row>
      <b-col>1 of 3</b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
      `
    }
  },
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

.example-row .col {
	padding-top: .75rem;
    padding-bottom: .75rem;
    background-color: rgba(86,61,124,.15);
    border: 1px solid rgba(86,61,124,.2);
}
</style>