<template>
<div>
    <div class="row">
        <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
            <div class="content-aux-nav multiple-items">
                <b-list-group v-b-scrollspy:nav-scroller>
                <h5>Contents</h5>
                    <b-list-group-item @click="scrollIntoView" href="#doc-basic">Basic</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#doc-equal">Equal-width</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#doc-column">Setting Column Width</b-list-group-item>
                </b-list-group>
            </div>
        </div>

        <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" id="nav-scroller" ref="content">
            <div class="row">
                <div class="col-12 titles-ct mt-0">
                    <h1>Grids</h1>
                    <h2>The main structural pattern that underlies the construction and positioning of all system components.</h2>
                </div>

                <div class="col-12">
                    <hr>
                </div> 
            </div>
            <div class="row">
                <div class="col-12">
                    <h3 id="doc-basic">Basic example</h3>
                    <p>Macaw is built using Bootstrap's grid system. It uses a series of containers, rows, and columns to lay out and align content. It's built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</p>
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
                </div>

          	    <div class="col-12">
	          	    <h3>How it works</h3>
    	          	<ul>
    	          		<li>Containers provide a means to center our contents. Use <span class="highlight">&lt;b-container&gt;</span> for fixed width or &lt;b-container fluid&gt; for full width.</li>
    	          		<li>Rows are horizontal groups of columns that ensure our columns are lined up properly. We use the negative margin method on <span class="highlight">&lt;b-row&gt;</span> to ensure all our content is aligned properly down the left side.</li>
    	          		<li>Content should be placed within <span class="highlight">&lt;b-col&gt;</span> columns, and only columns may be immediate children of <span class="highlight">&lt;b-row&gt;</span>.</li>
    	          		<li>Thanks to flexbox, grid columns without a set width will automatically layout with equal widths. For example, four instances of <span class="highlight">&lt;b-col sm="auto"&gt;</span> will each automatically be 25% wide for small breakpoints.</li>
    	          		<li>Column prop cols indicates the number of columns you'd like to use out of the possible 12 per row regardless of breakpoint (starting at breakpoint xs). So, if you want three equal-width columns at any breakpoint, you can use <span class="highlight">&lt;b-col cols="4"&gt;</span>.</li>
    	          		<li>Column props sm, md, lg, xl indicate the number of columns you'd like to use out of the possible 12 per row. at the various breakpoints. So, if you want three equal-width columns at breakpoint sm, you can use <span class="highlight">&lt;b-col sm="4"&gt;</span>. the special value auto can be used to take up the remaining available column space in a row.</li>
    	          		<li>Column widths, internally, are set in percentages, so they're always fluid and sized relative to their parent element.</li>
    	          		<li>Columns have horizontal padding to create the gutters between individual columns, however, you can remove the margin from <span class="highlight">&lt;b-row&gt;</span> and padding from <span class="highlight">&lt;b-col&gt;</span> by setting the no-gutters prop on <span class="highlight">&lt;b-row&gt;</span>.</li>
    				</ul>
	           </div>
            </div>

            <div class="row">
    	        <div class="col-12">
                    <h3 id="doc-equal">Equal-width Columns</h3>

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
            </div>

			<div class="row">
                <div class="col-12">
                    <h3 id="doc-column"><a href="#doc-column">Setting Column Width</a></h3>
                    <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>

                    <div>
        		    	<b-container class="example-row mb-2">
          					<b-row class="text-center">
        						<b-col>1 of 3</b-col>
            					<b-col cols="8">2 of 3 (wider)</b-col>
            					<b-col>3 of 3</b-col>
          					</b-row>
          					<b-row class="text-center">
            					<b-col>1 of 3</b-col>
            					<b-col cols="5">2 of 3 (wider)</b-col>
            					<b-col>3 of 3</b-col>
          					</b-row>
        				</b-container>

        				<div v-highlight><pre><code class="html">{{ vueColumn }}</code></pre></div>
        			   
        			</div>
                </div>
            </div>

            <div class="row">
    	        <div class="col-12">
    	           <props-table>
    	            <props-table-row
    	              prop="col"
    	              type="Boolean"
    	              :required="false"
    	              default-val="false"
    	              description="Creates an equal width column set."
    	            />
    	            <props-table-row
    	              prop="cols"
    	              type="String"
    	              :required="false"
    	              default-val=""
    	              description="Specifies size for column."
    	            />
    	            <props-table-row
    	              prop="sm"
    	              type="Boolean or String or Number"
    	              :required="false"
    	              default-val="false"
    	              description="Adds separate column size starting on small devices."
    	            />
    	            <props-table-row
    	              prop="md"
    	              type="Boolean or String or Number"
    	              :required="false"
    	              default-val="false"
    	              description="Adds separate column size starting on medium devices."
    	            />
    	          </props-table>
                </div>
            </div>
        </div>
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
      vueColumn: `
  <b-container>
    <b-row>
      <b-col>1 of 3</b-col>
      <b-col cols="8">2 of 3 (wider)</b-col>
      <b-col>3 of 3</b-col>
    </b-row>

    <b-row class="text-center">
      <b-col>1 of 3</b-col>
      <b-col cols="5">2 of 3 (wider)</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>
      `,
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

.example-row {
	.col {
	   padding-top: .75rem;
       padding-bottom: .75rem;
       background-color: rgba(86,61,124,.15);
       border: 1px solid rgba(86,61,124,.2);
    }

    .col-8, .col-5 {
	   padding-top: .75rem;
       padding-bottom: .75rem;
       background-color: rgba(86,61,124,.25);
       border: 1px solid rgba(86,61,124,.3);
    }
}
</style>