<template>
  <header class="col-12 col-lg-2 bg-white border-r-light main-header-ct nav-sidebar sidebar-sticky ps ps--active-y">
    <div class="row">
        <!-- logo container -->
        <div class="py-3 logo-ct">
            <a href="">
              <img src="../../assets/macaw-logo.png" />
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
                  <li class="nav-item parent-option ">
                    <router-link to="/introduction/" class="nav-link">Introduction</router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/introduction/about" class="nav-link">About</router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/introduction/faq" class="nav-link">FAQ</router-link>
                  </li>
              </ul>
              <!-- / introduction menu -->            
              <!-- standards menu -->
              <ul class="nav flex-column list-group py-3 mb-0">
                <li class="nav-item parent-option ">
                    <a href="standards/standards.html">Standards</a>
                </li><!-- Parent option -->
                <li class="nav-item ">
                    <router-link to="/standards/voice-tone" class="nav-link">Voice &amp; Tone</router-link>
                </li>   
                <li class="nav-item ">
                    <router-link to="/standards/grammar-punctuation" class="nav-link">Grammar &amp; Punctuation</router-link>
                </li>  
                <li class="nav-item ">
                    <router-link to="/standards/browser-support" class="nav-link">Browser Support</router-link>
                </li>
                <li class="nav-item ">
                    <router-link to="/standards/ext" class="nav-link">EXT</router-link>
                </li> 
                <li class="nav-item ">
                    <router-link to="/standards/landing-page" class="nav-link">Landing Page</router-link>
                </li>
                <li class="nav-item ">
                    <router-link to="/standards/master-theming" class="nav-link">Master Theming</router-link>
                </li>
                <li class="nav-item ">
                    <router-link to="/standards/mwp" class="nav-link">My Web Pages</router-link>
                </li> 
                <li class="nav-item ">
                    <router-link to="/standards/print" class="nav-link">Print</router-link>
                </li>   
            </ul>
            <!-- / standards menu -->            
            <!-- layout & style menu -->
            <ul class="nav flex-column list-group py-3 mb-0">
              <li class="nav-item parent-option ">
                  <a class="nav-link" href="layout/layout-style.html">Layout &amp; Style</a>
              </li><!-- Parent option -->
              <li class="nav-item ">
                  <router-link to="/layout-style/color" class="nav-link">Color</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/layout-style/grids" class="nav-link">Grids</router-link>
              </li> 
              <li class="nav-item ">
                  <router-link to="/layout-style/header" class="nav-link">Header</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/layout-style/iconography" class="nav-link">Iconography</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/layout-style/layout" class="nav-link">Layout</router-link>
              </li> 
              <li class="nav-item ">
                  <router-link to="/layout-style/spacing" class="nav-link">Spacing</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/layout-style/typography" class="nav-link">Typography</router-link>
              </li>                      
            </ul>
            <!-- / layout & style menu -->            
            <!-- components menu -->
            <ul class="nav flex-column list-group py-3 mb-0">
              <li class="nav-item parent-option ">
                  <a class="nav-link" href="components/components.html">Components</a>
              </li><!-- Parent option -->
              <li class="nav-item ">
                  <router-link to="/components/alerts" class="nav-link">Alerts</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/accordion" class="nav-link">Accordion</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/badges" class="nav-link">Badges</router-link>
              </li> 
              <li class="nav-item ">
                  <router-link to="/components/buttons" class="nav-link">Buttons</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/dropdowns" class="nav-link">Dropdowns</router-link>
              </li> 
              <li class="nav-item ">
                  <router-link to="/components/errors" class="nav-link">Errors</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/file-uploader" class="nav-link">File Uploader</router-link>
              </li> 
              <li class="nav-item ">
                  <router-link to="/components/form-elements" class="nav-link">Form Elements</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/lists" class="nav-link">Lists</router-link>
              </li> 
              <li class="nav-item ">
                  <router-link to="/components/loading" class="nav-link">Loading</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/messages" class="nav-link">Messages</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/modal" class="nav-link">Modal</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/panels" class="nav-link">Panels</router-link>
              </li> 
              <li class="nav-item ">
                  <router-link to="/components/reorder" class="nav-link">Reorder</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/stats-data" class="nav-link">Stats &amp; Data</router-link>
              </li> 
              <li class="nav-item ">
                  <router-link to="/components/steps" class="nav-link">Steps</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/tables" class="nav-link">Tables</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/tabs" class="nav-link">Tabs</router-link>
              </li> 
              <li class="nav-item ">
                  <router-link to="/components/tooltips" class="nav-link">Tooltips</router-link>
              </li>
              <li class="nav-item ">
                  <router-link to="/components/well" class="nav-link">Well</router-link>
              </li>                     
            </ul>
            <!-- / components menu -->
          </ul>
        </div>
      </nav>
      <!-- / main menu container -->    
    </div>
  </header>
</template>

<script>
export default {
  name: 'LeftNav'
}
</script>

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
    overflow-y: auto;
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

          &.active, .router-link-active {
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
