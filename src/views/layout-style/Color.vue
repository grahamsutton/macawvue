<template>
  <dashboard>
    <div class="col-12 col-md-12 order-md-1 col-lg-7 offset-lg-1 py-5">
      <!-- Here goes the content of the Color page -->
      <div class="row">
        <div class="col-12 col-lg-10 titles-ct mt-0">
          <h1>Color</h1>
          <h2>Our color should be consistent across our application. By referring to these guidelines we'll work more efficiently by eliminating guesswork.</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-justify mb-4">
          <p>Our primary button color is green. It is used strategically to call attention to an element, therefore we only use it once on a page. It should only be used for positive, progressive actions. The primary button guides users on what action they should take next, e.g. "Submit", "Yes, I agree".</p>
          <p>The secondary button color is blue. The secondary button supports discovery and exploration but should not be directly associated with a key action. In other words, users won't need to click that button to move forward, but it is an optional action.</p>
          <p>The tertiary button color is white with a border. It can be used at the discretion of the designer as an alternative to the secondary button. For example our cancel buttons use the tertiary button color.</p>
          <p>The delete button color is red. This is only used when an action is going to delete, remove, or confirm deletion. It assures the user that this action can't be undone.</p>
          <p>A disabled button should not be used without a clear call to action to the next state. It should be used to reinforce the importance of missing information or as a way of reiterating that the next progression in the customer's journey is unattainable. We also use tooltips when hovering over a disabled button to provide more information on why this is disabled and what they can do to progress. It's important that the user has a clear way to continue.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul class="list-unstyled row">
            <li class="col-lg-3 text-center mb-7">
              <div class="bg-primary rounded p-4">
                <small class="text-white d-block">#70bf49</small>
                <span class="text-white">Primary</span>
              </div>
              <span class="text-primary">.text-primary</span>
            </li>
            <li class="col-lg-3 text-center mb-7" style="margin-bottom:20px;">
              <div class="bg-secondary rounded p-4">
                <small class="text-white d-block">#2d8691</small>
                <span class="text-white">Secondary</span>
              </div>
              <span class="text-secondary">.text-secondary</span>
            </li>
            <li class="col-lg-3 text-center mb-7" style="margin-bottom:20px;">
              <div class="bg-success rounded p-4">
                <small class="text-white d-block">#00955f</small>
                <span class="text-white">Success</span>
              </div>
              <span class="text-success">.text-success</span>
            </li>
            <li class="col-lg-3 text-center mb-7" style="margin-bottom:20px;">
              <div class="bg-danger rounded p-4">
                <small class="text-white d-block">#e94f3d</small>
                <span class="text-white">Danger</span>
              </div>
              <span class="text-danger">.text-danger</span>
            </li>
            <li class="col-lg-3 text-center mb-7" style="margin-bottom:20px;">
              <div class="bg-warning rounded p-4">
                <small class="text-white d-block">#f7b334</small>
                <span class="text-white">Warning</span>
              </div>
              <span class="text-warning">.text-warning</span>
            </li>
            <li class="col-lg-3 text-center mb-7" style="margin-bottom:20px;">
              <div class="bg-info rounded p-4">
                <small class="text-white d-block">#456Caa</small>
                <span class="text-white">Info</span>
              </div>
              <span class="text-info">.text-info</span>
            </li>
            <li class="col-lg-3 text-center mb-7" style="margin-bottom:20px;">
              <div class="bg-dark rounded p-4">
                <small class="text-white d-block">#343a40</small>
                <span class="text-white">Dark</span>
              </div>
              <span class="text-dark">.text-dark</span>
            </li>
            <li class="col-lg-3 text-center mb-7" style="margin-bottom:20px;">
              <div class="bg-light rounded p-4">
                <small class="text-dark d-block">#f8f9fa</small>
                <span class="text-dark">Light</span>
              </div>
              <span class="text-light bg-dark">.text-light</span>
            </li>
            <li class="col-lg-3 text-center mb-7">
              <div class="bg-white u-box-shadow-sm rounded p-4">
                <small class="text-dark d-block">#fff</small>
                <span class="text-dark">White</span>
              </div>
              <span class="text-white bg-dark">.text-white</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </dashboard>
</template>

<script>
import Dashboard from '@/components/dashboard/Dashboard.vue'

export default {
  components: {
    Dashboard
  }
}
</script>