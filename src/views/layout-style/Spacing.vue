<template>
  <div>
    <div class="row">
        <!-- inner navigation -->
        <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
            <div class="content-aux-nav multiple-items">
                <b-list-group v-b-scrollspy:nav-scroller>
                    <h5>Contents</h5>           
                    <b-list-group-item @click="scrollIntoView" href="#item-0">Overview</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#item-1">Usage</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#item-2">Horizontal Centering</b-list-group-item>
                    <b-list-group-item @click="scrollIntoView" href="#item-3">Negative Margins</b-list-group-item>
                </b-list-group>
            </div>
        </div>
        <!-- / inner navigation -->

        <!-- main container block -->
        <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" id="nav-scroller" ref="content">
            <div class="row">
                <div class="col-12 col-lg-12 titles-ct mt-0">
                    <h1>Spacing</h1>
                    <h2>Spacing is an important — and often overlooked — part of visual design. Macaw takes a lot of the guesswork out of spacing to help designers deliver clear, functional layouts.</h2>
                </div>
                
                <div class="col-12">
                    <hr>
                </div>             
            </div>
            <div class="row">
              <div class="col-12 mt-3" id="item-0">
                <h3>Overview</h3>
                
                <p>Spacing utilities that apply to all breakpoints, from <code>xs</code> to <code>xl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code>min-width: 0</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>

                <p>The classes are named using the format <code>{property}{sides}-{size}</code> for <code>xs</code> and <code>{property}{sides}-{breakpoint}-{size}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</p>          
              </div>
            </div>
            <div class="row">
                <div class="col-12 mt-3" id="item-1">
                    <h3>Usage</h3>
                    
                    <ul>
                      <li><code>m</code> - for classes that set <code>margin</code></li>
                      <li><code>p</code> - for classes that set <code>padding</code></li>
                    </ul>

                    <p>Where <em>sides</em> is one of:</p>

                    <ul>
                      <li><code>t</code> - for classes that set <code>margin-top</code> or <code>padding-top</code></li>
                      <li><code>b</code> - for classes that set <code>margin-bottom</code> or <code>padding-bottom</code></li>
                      <li><code>l</code> - for classes that set <code>margin-left</code> or <code>padding-left</code></li>
                      <li><code>r</code> - for classes that set <code>margin-right</code> or <code>padding-right</code></li>
                      <li><code>x</code> - for classes that set both <code>*-left</code> and <code>*-right</code></li>
                      <li><code>y</code> - for classes that set both <code>*-top</code> and <code>*-bottom</code></li>
                      <li>blank - for classes that set a <code>margin</code> or <code>padding</code> on all 4 sides of the element</li>
                    </ul>

                    <p>Where <em>size</em> is one of:</p>

                    <ul>
                      <li><code>0</code> - for classes that eliminate the <code>margin</code> or <code>padding</code> by setting it to <code>0</code></li>
                      <li><code>1</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * .25</code></li>
                      <li><code>2</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * .5</code></li>
                      <li><code>3</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer</code></li>
                      <li><code>4</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * 1.5</code></li>
                      <li><code>5</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * 3</code></li>
                      <li><code>auto</code> - for classes that set the <code>margin</code> to auto</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mt-3" id="item-2">
                    <h3>Horizontally Centered</h3>
                    
                    <p>Additionally, Bootstrap also includes an <code>.mx-auto</code> class for horizontally centering fixed-width block level content—that is, content that has <code>display: block</code> and a <code>width</code> set—by setting the horizontal margins to <code>auto</code>.</p>

                    <div class="example-wrap">
                      <div class="mx-auto p-3 border bg-light" style="width: 200px;">
                        Centered element
                      </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mt-3" id="item-3">
                    <h3>Negative Margins</h3>
                    
                    <p>In CSS, <code>margin</code> properties can utilize negative values (<code>padding</code> cannot). As of 4.2, Bootstrap added negative margin utilities for every non-zero integer size listed above (e.g., <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>). These utilities are ideal for customizing grid column gutters across breakpoints.</p>

                    <p>The syntax is nearly the same as the default, positive margin utilities, but with the addition of <code>n</code> before the requested size. For example, <code>.mt-1</code> has positive margins and <code>.mt-n1</code> is the opposite, having negative margins.</p>

                    <p>Here's an example of customizing the Bootstrap grid at the medium (<code>md</code>) breakpoint and above. We’ve increased the <code>.col</code> padding with <code>.px-md-5</code> and then counteracted that with <code>.mx-md-n5</code> on the parent <code>.row</code>.</p>

                    <div class="example-wrap">
                        <div class="row mx-md-n5">
                          <div class="col px-md-5"><div class="p-3 border bg-light">Custom column padding</div></div>
                          <div class="col px-md-5"><div class="p-3 border bg-light">Custom column padding</div></div>
                        </div>
                    </div>

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