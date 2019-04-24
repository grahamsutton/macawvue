<template>
  <header class="col-12 col-lg-2 bg-white border-r-light main-header-ct nav-sidebar sidebar-sticky ps ps--active-y">
    <div class="row">
        
      <!-- Logo -->
      <div class="py-3 logo-ct">
        <a href="">
          <img src="@/assets/macaw-logo.png" />
        </a>
      </div>

    </div>
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light main-nav-ct px-0">

        <!-- Mobile Navbar Toggle Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Sidebar -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav flex-column">

            <!-- Introduction -->
            <ul class="nav flex-column list-group py-3 mb-0">
              <li class="nav-item parent-option ">
                <router-link to="#" class="nav-link">Overview</router-link>
              </li>
              <li v-for="route in activeRoutes('introduction')" class="nav-item ">
                <router-link :to="route.path" class="nav-link" exact>{{ route.name }}</router-link>
              </li>
            </ul>

            <!-- Standards -->
            <ul class="nav flex-column list-group py-3 mb-0">
              <li class="nav-item parent-option ">
                <a href="standards/standards.html">Standards</a>
              </li>
              <li v-for="route in activeRoutes('standards')" class="nav-item ">
                <router-link :to="route.path" class="nav-link" exact>{{ route.name }}</router-link>
              </li>
            </ul>

            <!-- Layout & Style -->
            <ul class="nav flex-column list-group py-3 mb-0">
              <li class="nav-item parent-option ">
                <a class="nav-link" href="#">Design</a>
              </li>
              <li v-for="route in activeRoutes('layout-style')" class="nav-item ">
                <router-link :to="route.path" class="nav-link" exact>{{ route.name }}</router-link>
              </li>                  
            </ul>

            <!-- Elements -->
            <ul class="nav flex-column list-group py-3 mb-0">
              <li class="nav-item parent-option ">
                <a class="nav-link" href="#">Elements</a>
              </li>
              <li v-for="route in activeRoutes('elements')" class="nav-item ">
                <router-link :to="route.path" class="nav-link" exact>{{ route.name }}</router-link>
              </li>
            </ul>

            <!-- Templates -->
            <ul class="nav flex-column list-group py-3 mb-0">
              <li class="nav-item parent-option ">
                <a class="nav-link" href="#">Templates</a>
              </li>
              <li v-for="route in activeRoutes('templates')" class="nav-item ">
                <router-link :to="route.path" class="nav-link" exact>{{ route.name }}</router-link>
              </li>
            </ul>

          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import routes from '@/router/routes'

export default {
  name: 'Sidebar',

  data () {
    return {
      routes: routes
    }
  },

  methods: {
    activeRoutes (section) {
      return this.routes.filter(route => {
        return route.active && route.section === section
      })
    }
  }
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
