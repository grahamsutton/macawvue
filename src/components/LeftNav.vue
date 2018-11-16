<template>
  <header class="col-12 col-lg-2 bg-white border-r-light main-header-ct nav-sidebar sidebar-sticky ps ps--active-y">
    <div class="row">
        <!-- logo container -->
        <div class="py-3 logo-ct">
            <a href="">
            </a>
        </div>
        <!-- / logo container -->
    </div>
    <div class="row">
      <!-- main menu container -->
      <nav class="navbar navbar-expand-lg navbar-light main-nav-ct px-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav flex-column">                
              <!-- introduction menu -->
              <ul class="nav flex-column list-group py-3 mb-0">
                  <li class="nav-item parent-option active">
                    <router-link to="/" class="nav-link">Introduction</router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/introduction/about" class="nav-link">About</router-link>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link" href="introduction/faq.html">FAQ</a>
                  </li>
              </ul>
              <!-- / introduction menu -->            
              <!-- standards menu -->
              <ul class="nav flex-column list-group py-3 mb-0">
                <li class="nav-item parent-option ">
                    <a href="standards/standards.html">Standards</a>
                </li><!-- Parent option -->
                <li class="nav-item ">
                    <a class="nav-link" href="standards/voice-tone.html">Voice &amp; Tone</a>
                </li>   
                <li class="nav-item ">
                    <a class="nav-link" href="standards/grammar-punctuations.html">Grammar &amp; Punctuation</a>
                </li>  
                <li class="nav-item ">
                    <a class="nav-link" href="standards/browser-support.html">Browser Support</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="standards/ext.html">EXT</a>
                </li> 
                <li class="nav-item ">
                    <a class="nav-link" href="standards/landing-page.html">Landing Page</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="standards/master-theming.html">Master Theming</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="standards/mwp.html">My Web Pages</a>
                </li> 
                <li class="nav-item ">
                    <a class="nav-link" href="standards/print.html">Print</a>
                </li>   
            </ul>
            <!-- / standards menu -->            
            <!-- layout & style menu -->
            <ul class="nav flex-column list-group py-3 mb-0">
              <li class="nav-item parent-option ">
                  <a class="nav-link" href="layout/layout-style.html">Layout &amp; Style</a>
              </li><!-- Parent option -->
              <li class="nav-item ">
                  <a class="nav-link" href="layout/color.html">Color</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="layout/grids.html">Grids</a>
              </li> 
              <li class="nav-item ">
                  <a class="nav-link" href="layout/header.html">Header</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="layout/iconography.html">Iconography</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="layout/layout.html">Layout</a>
              </li> 
              <li class="nav-item ">
                  <a class="nav-link" href="layout/spacing.html">Spacing</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="layout/typography.html">Typography</a>
              </li>                      
            </ul>
            <!-- / layout & style menu -->            
            <!-- components menu -->
            <ul class="nav flex-column list-group py-3 mb-0">
              <li class="nav-item parent-option ">
                  <a class="nav-link" href="components/components.html">Components</a>
              </li><!-- Parent option -->
              <li class="nav-item ">
                  <a class="nav-link" href="components/accordion.html">Accordion</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/badges.html">Badges</a>
              </li> 
              <li class="nav-item ">
                  <a class="nav-link" href="components/buttons.html">Buttons</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/dialogs.html">Dialogs</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/modal.html">Modal</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/dropdowns.html">Dropdowns</a>
              </li> 
              <li class="nav-item ">
                  <a class="nav-link" href="components/errors.html">Errors</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/file-uploader.html">File Uploader</a>
              </li> 
              <li class="nav-item ">
                  <a class="nav-link" href="components/form-elements.html">Form Elements</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/lists.html">Lists</a>
              </li> 
              <li class="nav-item ">
                  <a class="nav-link" href="components/loading.html">Loading</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/messages.html">Messages</a>
              </li>  
              <li class="nav-item ">
                  <a class="nav-link" href="components/panels.html">Panels</a>
              </li> 
              <li class="nav-item ">
                  <a class="nav-link" href="components/reorder.html">Reorder</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/stats-data.html">Stats &amp; Data</a>
              </li> 
              <li class="nav-item ">
                  <a class="nav-link" href="components/steps.html">Steps</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/tables.html">Tables</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/tabs.html">Tabs</a>
              </li> 
              <li class="nav-item ">
                  <a class="nav-link" href="components/tooltips.html">Tooltips</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="components/well.html">Well</a>
              </li>                     
            </ul>
            <!-- / components menu -->
          </ul>
        </div>
      </nav>
      <!-- / main menu container -->    
    </div>
    <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
      <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
    </div>
    <div class="ps__rail-y" style="top: 0px; height: 754px; right: 0px;">
      <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 369px;"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LeftNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

/* 2. Header ==================== */
header.main-header-ct {
  position: absolute; 
  top: 0;
  z-index: 1;

  @media (min-width: 1024px) {
    border-right: 1px solid #ededed;
    height: 100%;
    position: fixed;
  }

  .logo-ct {
    border-bottom: 1px solid #ededed;
    text-align: center;
    width: 100%;

    img {
      height: auto;
      max-width: 210px;

      @media (min-width: 1024px) {
        max-width: 130px;
      }

      @media (min-width: 1280px) {
        max-width: 180px;
      }

    }

  }

  .main-nav-ct {
    border-bottom: 1px solid #ededed;
    display: inline-block !important;
    text-align: center;
    width: 100%;

    @media (min-width: 1024px) {
      text-align: left;  
    }

    ul.nav {
      display: inline-block;
      width: 100%;

      ul.list-group {
        position: relative;

        &:after {
          background: #ededed;
          content: '';
          height: 1px;
          left: 0;
          margin: 0 auto;
          position: absolute;
          right: 0;
          top: 100%;
          width: 85%;
        }

        &:last-child:after { display: none; }

        li {

          a {
            color: #1c252c;
            display: inline-block;
            font-weight: 300;
            padding: 4px 10px;
            position: relative;
            text-decoration: none;
            width: 100%;

            @media (min-width: 1280px) {
              padding: 4px 20px;
            }

            &:hover:after {
              background: #ffc500;
              content: '';
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 5px;
            }

          }

          &.active {
            position: relative;

            &:after {
              background: #ffc500;
              content: '';
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 5px;
            }

          }

          &.parent-option {
            text-transform: uppercase;

            a { font-weight: 600; }

          } 
        
        }
      
      }

    }

  }

}
</style>
