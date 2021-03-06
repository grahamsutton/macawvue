<template>
  <div>
    <div class="row">
      <!-- main container block -->
      <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
        <div class="content-aux-nav multiple-items">
          <b-list-group v-b-scrollspy:nav-scroller>
            <h5>Contents</h5>
            <b-list-group-item @click="scrollIntoView" href="#item-1">Color Theory</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#item-2">Color Palette</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#black-palette">Black Palette</b-list-group-item>
          </b-list-group>
        </div>
      </div>
      <!-- / inner navigation -->
      <!-- main container block -->
      <div class="col-12 col-md-8 order-md-1 col-lg-8 offset-lg-1 py-5 pr-5" id="nav-scroller" ref="content">
        <!-- Here goes the content of the page -->
        <div class="row">

          <!-- Title Container-->
          <div class="col-12 titles-ct mt-0">
            <h1>Color</h1>
            <h2>A consistent color palette is an essential asset in the communication resources of any design system. Colors have a huge impact in a system. They define the visual identity, bring harmony, communicate, etc.</h2>
          </div>

          <!-- / Title Container-->
          <div class="col-12">
            <hr>
          </div> 

          <!-- Page description text -->   
          <div id="item-1" class="col-12">
            <p>Our primary action color is <span class="code-style"><span class="rounded-square bg-primary"></span><code>$color-primary</code></span>. It is used strategically to call attention to an element, therefore we only use it once on a page. It should only be used for <em>positive, progressive actions</em>. The primary button guides users on what action they should take next, e.g. "Submit", "Yes, I agree".</p>

            <p>The secondary color is <span class="code-style"><span class="rounded-square bg-secondary"></span><code>$color-secondary</code></span>. The secondary button supports discovery and exploration but should not be directly associated with a key action. In other words, users won't need to click that button to move forward, but <em>it is an optional action</em>.</p>
          
            <p>The tertiary color is <span class="code-style"><span class="rounded-square bg-tertiary"></span><code>$color-outline</code></span>, white with a border. It can be used at the discretion of the designer as an alternative to the secondary button. For example Go Back buttons use the tertiary button color.</p>

            <p>The destructive color is <span class="code-style"><span class="rounded-square bg-danger"></span><code>$color-danger</code></span>. This is only used when an action is going to delete, remove, or confirm deletion. It assures the user that this action is destructive and can't be undone.</p>
            
            <p>A disabled color should not be used without a clear call to action to the next state. It should be used to reinforce the importance of missing information or as a way of reiterating that the next progression in the customer's journey is unattainable. We also use tooltips when hovering over a disabled button to provide more information on why this is disabled and what they can do to progress. It's important that the user has a clear way to continue.</p>
          </div>
          
          <div class="col-12">
            <hr>
          </div> 

          <div class="col-12">
            <h2 id="item-2" class="mb-3">Color Palette</h2>
            <ul class="list-palette row">
                <li class="col-md-4 palette primary">
                    <div class="palette-color">
                        <div class="palette-main"></div>
                        <div class="palette-hover"></div>
                    </div>
                    <div class="palette-name-wrap">
                        <div class="palette-name">Primary</div>
                        <span>$color-primary</span>
                        <span>$color-primary-hover</span>
                    </div>
                </li>
                <li class="col-md-4 palette secondary">
                    <div class="palette-color">
                        <div class="palette-main"></div>
                        <div class="palette-hover"></div>
                    </div>
                    <div class="palette-name-wrap">
                        <div class="palette-name">Secondary</div>
                        <span>$color-secondary</span>
                        <span>$color-secondary-hover</span>
                    </div>
                </li>
                <li class="col-md-4 palette tertiary">
                    <div class="palette-color">
                        <div class="palette-main"></div>
                        <div class="palette-hover"></div>
                    </div>
                    <div class="palette-name-wrap">
                        <div class="palette-name">Tertiary</div>
                        <span>$color-tertiary</span>
                        <span>$color-tertiary-hover</span>
                    </div>
                </li>
                <li class="col-md-4 palette danger">
                    <div class="palette-color">
                        <div class="palette-main"></div>
                        <div class="palette-hover"></div>
                    </div>
                    <div class="palette-name-wrap">
                        <div class="palette-name">Danger</div>
                        <span>$color-danger</span>
                        <span>$color-danger-hover</span>
                    </div>
                </li>
                <li class="col-md-4 palette success">
                    <div class="palette-color">
                        <div class="palette-main"></div>
                        <div class="palette-hover"></div>
                    </div>
                    <div class="palette-name-wrap">
                        <div class="palette-name">Success</div>
                        <span>$color-success</span>
                        <span>$color-success-hover</span>
                    </div>
                </li>
                <li class="col-md-4 palette info">
                    <div class="palette-color">
                        <div class="palette-main"></div>
                        <div class="palette-hover"></div>
                    </div>
                    <div class="palette-name-wrap">
                        <div class="palette-name">Info</div>
                        <span>$color-info</span>
                        <span>$color-info-hover</span>
                    </div>
                </li>
                <li class="col-md-4 palette warning">
                    <div class="palette-color">
                        <div class="palette-main"></div>
                        <div class="palette-hover"></div>
                    </div>
                    <div class="palette-name-wrap">
                        <div class="palette-name">Warning</div>
                        <span>$color-warning</span>
                        <span>$color-warning-hover</span>
                    </div>
                </li>
            </ul>
          </div>
          
          <div class="col-12">
             <hr>
          </div> 

          <div id="black-palette" class="col-12 black-palette">
              <h2>Black Palette</h2>
              <b-list-group>
                <b-list-group-item class="d-flex justify-content-between align-items-center color-black">
                  Black
                  <b-badge variant="light" pill>$color-black</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-87">
                  Black 87%
                  <b-badge variant="light" pill>$color-black-87</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-74">
                  Black 74%
                  <b-badge variant="light" pill>$color-black-74</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-62">
                  Black 62%
                  <b-badge variant="light" pill>$color-black-62</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-54">
                  Black 54%
                  <b-badge variant="light" pill>$color-black-54</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-38">
                  Black 38%
                  <b-badge variant="light" pill>$color-black-38</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-26">
                  Black 26%
                  <b-badge variant="light" pill>$color-black-26</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-12">
                  Black 12%
                  <b-badge variant="light" pill>$color-black-12</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-7">
                  Black 7%
                  <b-badge variant="light" pill>$color-black-7</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-4">
                  Black 4%
                  <b-badge variant="light" pill>$color-black-4</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-black-2">
                  Black 2%
                  <b-badge variant="light" pill>$color-black-2</b-badge>
                </b-list-group-item>

                <b-list-group-item class="d-flex justify-content-between align-items-center color-white">
                  White
                  <b-badge variant="light" pill>$color-white</b-badge>
                </b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </div></div>
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
@import 'src/styles/variables.scss';
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
.badge-light { color: #333; }
.list-palette {
  list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 15px;

  .palette {
    border-radius: 5px;
      background-color: #fff;
      padding-left: 0;
      margin-bottom: 2em;
    
    .palette-color {
      height: 75px;
      position: relative;
    }
    
    .palette-main {
      height: 75px;
      width: 50%;
      float: left;
      -webkit-border-top-left-radius: 5px;
        -moz-border-radius-topleft: 5px;
        border-top-left-radius: 5px;
    }

    .palette-hover {
      float: right;
      height: 75px;
      width: 50%;
        -webkit-border-top-right-radius: 5px;
        -moz-border-radius-topright: 5px;
        border-top-right-radius: 5px;
    }

    .palette-name-wrap {
      border: 1px solid #ccc;
        border-top: 0;
        padding: 6px;
        -webkit-border-bottom-right-radius: 5px;
        -moz-border-radius-bottomright: 5px;
        border-bottom-right-radius: 5px;
        -webkit-border-bottom-left-radius: 5px;
        -moz-border-radius-bottomleft: 5px;
        border-bottom-left-radius: 5px;

      .palette-name {
        font-weight: bold;
      }

      span {
        color: $color-black-54;
        display: block;
      }
    }

    &.primary {
      .palette-main { background-color: $color-primary; }
      .palette-hover { background-color: $color-primary-hover; }
    }

    &.secondary {
      .palette-main { background-color: $color-secondary; }
      .palette-hover { background-color: $color-secondary-hover; }
    }

    &.tertiary {
      .palette-main { background-color: $color-white; }
      .palette-hover { background-color: $color-white; }
    }

    &.danger {
      .palette-main { background-color: $color-danger; }
      .palette-hover { background-color: $color-danger-hover; }
    }
    
    &.success {
      .palette-main { background-color: $color-success; }
      .palette-hover { background-color: $color-success-hover; }
    }
    
    &.info {
      .palette-main { background-color: $color-info; }
      .palette-hover { background-color: $color-info-hover; }
    }
    
    &.warning {
      .palette-main { background-color: $color-warning; }
      .palette-hover { background-color: $color-warning-hover; }
    }
    &.tertiary {
      .palette-main { border: 1px solid $color-secondary; }
      .palette-hover {  
        border: 1px solid $color-secondary-hover; 
        border-left: 0;
      }
    }
  }
}

.black-palette {
  .color-black { background: $color-black; color: $color-white; }
  .color-black-87 { background: $color-black-87; color: $color-white; }
  .color-black-74 { background: $color-black-74; color: $color-white; }
  .color-black-62 { background: $color-black-62; color: $color-white; } 
  .color-black-54 { background: $color-black-54; color: $color-white; }
  .color-black-38 { background: $color-black-38; color: $color-white; }
  .color-black-26 { background: $color-black-26; color: $color-white; }
  .color-black-12 { background: $color-black-12; color: $color-black-62; }
  .color-black-7 { background: $color-black-7; color: $color-black-62; }
  .color-black-4 { background: $color-black-4; color: $color-black-62; }
  .color-black-2 { background: $color-black-2; color: $color-black-62; }
  .color-white { background: $color-white; color: $color-black-62; }
}

</style>