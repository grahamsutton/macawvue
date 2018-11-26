import Vue from 'vue'
import Router from 'vue-router'

// Introduction
import Welcome from '@/views/introduction/Welcome.vue'
import About from '@/views/introduction/About.vue'
import FAQ from '@/views/introduction/FAQ.vue'

// Standards
import VoiceTone from '@/views/standards/VoiceTone.vue'
import GrammarPunctuation from '@/views/standards/GrammarPunctuation.vue'
import BrowserSupport from '@/views/standards/BrowserSupport.vue'
import EXT from '@/views/standards/EXT.vue'
import LandingPage from '@/views/standards/LandingPage.vue'
import MasterTheming from '@/views/standards/MasterTheming.vue'
import MyWebPages from '@/views/standards/MyWebPages.vue'
import Print from '@/views/standards/Print.vue'

// Layout & Style
import Color from '@/views/layout-style/Color.vue'
import Grids from '@/views/layout-style/Grids.vue'
import Header from '@/views/layout-style/Header.vue'
import Iconography from '@/views/layout-style/Iconography.vue'
import Layout from '@/views/layout-style/Layout.vue'
import Spacing from '@/views/layout-style/Spacing.vue'
import Typography from '@/views/layout-style/Typography.vue'

// Components
import Alerts from '@/views/components/Alerts.vue'
import Accordion from '@/views/components/Accordion.vue'
import Badges from '@/views/components/Badges.vue'
import Buttons from '@/views/components/Buttons.vue'
import Dropdowns from '@/views/components/Dropdowns.vue'
import Errors from '@/views/components/Errors.vue'
import FileUploader from '@/views/components/FileUploader.vue'
import FormElements from '@/views/components/FormElements.vue'
import Lists from '@/views/components/Lists.vue'
import Loading from '@/views/components/Loading.vue'
import Messages from '@/views/components/Messages.vue'
import Modal from '@/views/components/Modal.vue'
import Panels from '@/views/components/Panels.vue'
import Reorder from '@/views/components/Reorder.vue'
import StatsData from '@/views/components/StatsData.vue'
import Steps from '@/views/components/Steps.vue'
import Tables from '@/views/components/Tables.vue'
import Tabs from '@/views/components/Tabs.vue'
import Tooltips from '@/views/components/Tooltips.vue'
import Well from '@/views/components/Well.vue'

// Error Pages
import NotFound from '@/views/errors/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [

    // Introduction
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/introduction/about',
      name: 'About',
      component: About
    },
    {
      path: '/introduction/faq',
      name: 'FAQ',
      component: FAQ
    },

    // Standards
    {
      path: '/standards/voice-tone',
      name: 'VoiceTone',
      component: VoiceTone
    },
    {
      path: '/standards/grammar-punctuation',
      name: 'GrammarPunctuation',
      component: GrammarPunctuation
    },
    {
      path: '/standards/browser-support',
      name: 'BrowserSupport',
      component: BrowserSupport
    },
    {
      path: '/standards/ext',
      name: 'EXT',
      component: EXT
    },
    {
      path: '/standards/landing-page',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/standards/master-theming',
      name: 'MasterTheming',
      component: MasterTheming
    },
    {
      path: '/standards/mwp',
      name: 'MyWebPages',
      component: MyWebPages
    },
    {
      path: '/standards/print',
      name: 'Print',
      component: Print
    },

    // Layout & Style
    {
      path: '/layout-style/color',
      name: 'Color',
      component: Color
    },
    {
      path: '/layout-style/grids',
      name: 'Grids',
      component: Grids
    },
    {
      path: '/layout-style/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/layout-style/iconography',
      name: 'Iconography',
      component: Iconography
    },
    {
      path: '/layout-style/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/layout-style/spacing',
      name: 'Spacing',
      component: Spacing
    },
    {
      path: '/layout-style/typography',
      name: 'Typography',
      component: Typography
    },

    // Components
    {
      path: '/components/alerts',
      name: 'Alerts',
      component: Alerts
    },
    {
      path: '/components/accordion',
      name: 'Accordion',
      component: Accordion
    },
    {
      path: '/components/badges',
      name: 'Badges',
      component: Badges
    },
    {
      path: '/components/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/components/dropdowns',
      name: 'Dropdowns',
      component: Dropdowns
    },
    {
      path: '/components/errors',
      name: 'Errors',
      component: Errors
    },
    {
      path: '/components/file-uploader',
      name: 'FileUploader',
      component: FileUploader
    },
    {
      path: '/components/form-elements',
      name: 'FormElements',
      component: FormElements
    },
    {
      path: '/components/lists',
      name: 'Lists',
      component: Lists
    },
    {
      path: '/components/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/components/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/components/modal',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/components/panels',
      name: 'Panels',
      component: Panels
    },
    {
      path: '/components/reorder',
      name: 'Reorder',
      component: Reorder
    },
    {
      path: '/components/stats-data',
      name: 'StatsData',
      component: StatsData
    },
    {
      path: '/components/steps',
      name: 'Steps',
      component: Steps
    },
    {
      path: '/components/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/components/tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/components/tooltips',
      name: 'Tooltips',
      component: Tooltips
    },
    {
      path: '/components/well',
      name: 'Well',
      component: Well
    },

    // Error Pages
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
