<template>
  <div>
    <div class="row">
      <!-- main container block -->
      <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
        <div class="content-aux-nav multiple-items">
          <b-list-group v-b-scrollspy:nav-scroller>
            <h5>Contents</h5>
            <b-list-group-item @click="scrollIntoView" href="#item-1">Color Theory</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#item-2">Palette</b-list-group-item>
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
            <h2>Variables are the atoms of Macaw — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values in order to maintain a scalable and consistent visual system for UI development.</h2>
          </div>

          <!-- / Title Container-->
          <div class="col-12">
            <hr>
          </div> 

          <!-- Page description text -->   
          <div class="col-12">
            <p id="item-1">Our primary action color is <span class="code-style"><span class="rounded-square bg-primary"></span><code>$color-primary</code></span>. It is used strategically to call attention to an element, therefore we only use it once on a page. It should only be used for <em>positive, progressive actions</em>. The primary button guides users on what action they should take next, e.g. "Submit", "Yes, I agree".</p>

            <p>The secondary color is <span class="code-style"><span class="rounded-square bg-secondary"></span><code>$color-secondary</code></span>. The secondary button supports discovery and exploration but should not be directly associated with a key action. In other words, users won't need to click that button to move forward, but <em>it is an optional action</em>.</p>
          
            <p>The tertiary color is <span class="code-style"><span class="rounded-square bg-tertiary"></span><code>$color-outline</code></span>, white with a border. It can be used at the discretion of the designer as an alternative to the secondary button. For example Go Back buttons use the tertiary button color.</p>

            <p>The destructive color is <span class="code-style"><span class="rounded-square bg-danger"></span><code>$color-danger</code></span>. This is only used when an action is going to delete, remove, or confirm deletion. It assures the user that this action is destructive and can't be undone.</p>
            
            <p>A disabled color should not be used without a clear call to action to the next state. It should be used to reinforce the importance of missing information or as a way of reiterating that the next progression in the customer's journey is unattainable. We also use tooltips when hovering over a disabled button to provide more information on why this is disabled and what they can do to progress. It's important that the user has a clear way to continue.</p>
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
            <div class="black-palette">
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
        </div>
      </div>
    </div>
  </div>
</template>