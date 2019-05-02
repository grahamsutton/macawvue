<template>
<div>
    <div class="row">
        <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
            <div class="content-aux-nav multiple-items">
                <b-list-group v-b-scrollspy:nav-scroller>
                <h5>Contents</h5>
                    <b-list-group-item @click="scrollIntoView" href="#doc-basic">Basic</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#doc-column">Set Column Width</b-list-group-item>
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
        		    	<div class="container example-row mb-3">
                    <div class="row">
                      <div class="col">
                        One of three columns
                      </div>
                      <div class="col">
                        One of three columns
                      </div>
                      <div class="col">
                        One of three columns
                      </div>
                    </div>
                  </div>

        				  <div v-highlight><pre><code class="html">{{ basicGrid }}</code></pre></div>
        			  </div>

          	    <div class="col-12">
	          	    <h3>How it works</h3>
    	          	<ul>
    	          		<li>Containers provide a means to center our contents. Use <span class="highlight">&lt;container&gt;</span> for fixed width or &lt;container fluid&gt; for full width.</li>
    	          		<li>Rows are horizontal groups of columns that ensure our columns are lined up properly. We use the negative margin method on <span class="highlight">&lt;row&gt;</span> to ensure all our content is aligned properly down the left side.</li>
    	          		<li>Content should be placed within <span class="highlight">&lt;col&gt;</span> columns, and only columns may be immediate children of <span class="highlight">&lt;row&gt;</span>.</li>
    	          		<li>Thanks to flexbox, grid columns without a set width will automatically layout with equal widths. For example, four instances of <span class="highlight">&lt;col&gt;</span> will each automatically be 25% wide for small breakpoints.</li>
    	          		<li>Column widths, internally, are set in percentages, so they're always fluid and sized relative to their parent element.</li>
    	          		<li>Columns have horizontal padding to create the gutters between individual columns, however, you can remove the margin by adding the class <span class="highlight">no-margin</span> on <span class="highlight">&lt;row&gt;</span>.</li>
    				</ul>
	           </div>
            </div>

			<div class="row">
                <div class="col-12">
                    <h3 id="doc-column"><a href="#doc-column">Setting Column Width</a></h3>
                    <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>

                    
                    <div class="container example-row mb-3">
                      <div class="row">
                        <div class="col">
                          1 of 3
                        </div>
                        <div class="col-6">
                          2 of 3 (wider)
                        </div>
                        <div class="col">
                          3 of 3
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          1 of 3
                        </div>
                        <div class="col-5">
                          2 of 3 (wider)
                        </div>
                        <div class="col">
                          3 of 3
                        </div>
                      </div>
                    </div>
        				<div v-highlight><pre><code class="html">{{ basicColumn }}</code></pre></div>
        			   
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
  data () {
    return {
      basicColumn: `
  <div class="container">
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col-6">
        2 of 3 (wider)
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col-5">
        2 of 3 (wider)
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>
      `,
      basicGrid: `
<div class="container">
  <div class="row">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
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
       background-color: rgb(238, 238, 238);
       border: 1px solid rgb(224, 224, 224);
    }

    .col-6, .col-5 {
	   padding-top: .75rem;
       padding-bottom: .75rem;
       background-color: rgb(224, 224, 224);
       border: 1px solid rgb(224, 224, 224);
    }
}
</style>