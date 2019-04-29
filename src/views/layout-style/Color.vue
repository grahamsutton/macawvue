<template>
  <div>
    <div class="row">
      <!-- main container block -->
      <div class="col order-md-2 col-lg-3 offset-lg-1 px-0 ml-0 auxiliar-nav-ct">
        <div class="content-aux-nav multiple-items">
          <b-list-group v-b-scrollspy:nav-scroller>
            <h5>Contents</h5>
            <b-list-group-item @click="scrollIntoView" href="#item-1">Color Theory</b-list-group-item>
            <b-list-group-item @click="scrollIntoView" href="#item-1">Palette</b-list-group-item>
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
            <h1>Color</h1>
            <h2>Variables are the atoms of Macaw — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.</h2>
          </div>

          <!-- / Title Container-->
          <div class="col-12">
            <hr>
          </div> 

          <!-- Page description text -->   
          <div class="col-12">
            <p id="item-1">Our primary action color is <span class="rounded-square bg-primary"></span><code>$color-primary</code>. It is used strategically to call attention to an element, therefore we only use it once on a page. It should only be used for <code>positive, progressive actions</code>. The primary button guides users on what action they should take next, e.g. "Submit", "Yes, I agree".</p>

            <p>The secondary color is <span class="rounded-square bg-secondary"></span><code>$color-secondary</code>. The secondary button supports discovery and exploration but should not be directly associated with a key action. In other words, users won't need to click that button to move forward, but <code>it is an optional action</code>.</p>
          
            <p>The tertiary color is <code>$color-outline</code>, white with a border. It can be used at the discretion of the designer as an alternative to the secondary button. For example Go Back buttons use the tertiary button color.</p>

            <p>The destructive color is <span class="rounded-square bg-danger"></span><code>$color-danger</code>. This is only used when an action is going to delete, remove, or confirm deletion. It assures the user that this action is destructive and can't be undone.</p>
            
            <p>A disabled color should not be used without a clear call to action to the next state. It should be used to reinforce the importance of missing information or as a way of reiterating that the next progression in the customer's journey is unattainable. We also use tooltips when hovering over a disabled button to provide more information on why this is disabled and what they can do to progress. It's important that the user has a clear way to continue.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>