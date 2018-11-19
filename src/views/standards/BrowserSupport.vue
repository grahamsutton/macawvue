<template>
  <dashboard>
    <div class="row">
      <!-- main container block -->
      <div class="col-12 col-md-12 order-md-1 col-lg-7 offset-lg-1 py-5">
        <!-- Here goes the content of the Browser Support page -->
        <div class="row">
          <div class="col-12 col-lg-10 titles-ct mt-0">
            <h1>Browser Support</h1>
            <h2>Find the latest about which browsers we support and where</h2>
          </div>
        </div>
        <div class="row"><div class="col-md-12"><hr></div></div>
        <div class="row">
          <div class="col-md-12 text-justify mb-4">
            <p>As a general rule, we support the latest 2 versions for supported browsers. Our users will see <a href="https://app.sproutloud.com/index/browser" target="_blank">this page</a> if they are using a browser that is unsupported.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mb-4">
            <h3>Member</h3>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Browser</th>
                  <th>Supported Versions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Chrome</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Mozilla Firefox</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Safari</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Opera</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Internet Explorer</td>
                  <td>11, Edge</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-12 mb-4">
            <h3>Master</h3>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Browser</th>
                  <th>Supported Versions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Chrome</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Mozilla Firefox</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Safari</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Opera</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Internet Explorer</td>
                  <td>Not Supported</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-12 mb-4">
            <h3>Admin</h3>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Browser</th>
                  <th>Supported Versions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Chrome</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Mozilla Firefox</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Safari</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Opera</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Internet Explorer</td>
                  <td>Not supported</td>
                </tr>
              </tbody>
            </table>
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