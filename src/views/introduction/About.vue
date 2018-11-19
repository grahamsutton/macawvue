<template>
  <dashboard>
    <div class="row">
      <!-- main container block -->
      <div class="col-12 col-md-12 order-md-1 col-lg-7 offset-lg-1 py-5">
        <!-- Here goes the content of the About page -->
        <div class="row">
          <div class="col-12 col-lg-10 titles-ct mt-0">
            <h1>About</h1>
            <h2>Macaw is a set of SproutLoud’s design standards, documentation, and principles along with the patterns and code components  to achieve those standards.</h2>
          </div>
        </div>
        <div class="row"><div class="col-md-12"><hr></div></div>
        <div class="row">
          <div class="col-md-12">
            <p>SproutLoud is growing, constantly. One of the challenges we face as we evolve is maintaining a consistent, cohesive and captivating experience across our entire digital ecosystem.</p>
            
            <p class="mb-3">Meet Macaw, SproutLoud’s Design System. We’ve been working to create this design system as a centralised hub for showcasing our design rules, principles, and frontend components. It will help us meet those challenges as well as empowering our team to be confident that our code meets our guidelines.</p>
          </div>
          <div class="col-12">
            <hr>
            <h2>Our Goals</h2>
            <div class="list-group mt-3">
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Consistency</h5>
                </div>
                <p class="mb-1">Everyone will work with the most up to date UI patterns, principles, and guidelines to maintain cohesion across the teams.</p>
              </a>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Have a living, cohesive design language</h5>
                </div>
                <p class="mb-1">An update to any component in the design system will roll out across SproutLoud’s application, reducing variation and inconsistency in experience across our interface. Basically, when we make a change here, it updates it across the application easily.</p>
              </a>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Efficiency</h5>
                </div>
                <p class="mb-1">This single-source approach to building out our interface means we can create and iterate faster, whilst empowering our team to implement design changes and deliver features with less upfront design work.</p>
              </a>
            </div>
          </div>
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