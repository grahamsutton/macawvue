// Overview
import About from '@/views/introduction/About.vue'
import FAQ from '@/views/introduction/FAQ.vue'

// Standards
import NamingConventions from '@/views/standards/NamingConventions.vue'
import VoiceTone from '@/views/standards/VoiceTone.vue'
import GrammarPunctuation from '@/views/standards/GrammarPunctuation.vue'
import CommonTranslations from '@/views/standards/CommonTranslations.vue'
import BrowserSupport from '@/views/standards/BrowserSupport.vue'

// Design
import Color from '@/views/layout-style/Color.vue'
import Grids from '@/views/layout-style/Grids.vue'
import Iconography from '@/views/layout-style/Iconography.vue'
import Layout from '@/views/layout-style/Layout.vue'
import Spacing from '@/views/layout-style/Spacing.vue'
import Typography from '@/views/layout-style/Typography.vue'

// Elements
import Alerts from '@/views/elements/Alerts.vue'
import Accordion from '@/views/elements/Accordion.vue'
import Badges from '@/views/elements/Badges.vue'
import Buttons from '@/views/elements/Buttons.vue'
import Dropdowns from '@/views/elements/Dropdowns.vue'
import Errors from '@/views/elements/Errors.vue'
import FileUploader from '@/views/elements/FileUploader.vue'
import FormElements from '@/views/elements/FormElements.vue'
import Icons from '@/views/elements/Icons.vue'
import Lists from '@/views/elements/Lists.vue'
import Loading from '@/views/elements/Loading.vue'
import Messages from '@/views/elements/Messages.vue'
import Modal from '@/views/elements/Modal.vue'
import Notifications from '@/views/elements/Notifications.vue'
import Panels from '@/views/elements/Panels.vue'
import PushNotifications from '@/views/elements/PushNotifications.vue'
import Reorder from '@/views/elements/Reorder.vue'
import StatsData from '@/views/elements/StatsData.vue'
import Steps from '@/views/elements/Steps.vue'
import Tables from '@/views/elements/Tables.vue'
import Tabs from '@/views/elements/Tabs.vue'
import Tooltips from '@/views/elements/Tooltips.vue'
import Well from '@/views/elements/Well.vue'

// Templates
import Header from '@/views/layout-style/Header.vue'
import NotFound from '@/views/errors/NotFound.vue'

export default [

  // Introduction
  {
    path: '/',
    name: 'About',
    component: About,
    section: 'introduction',
    active: true
  },
  {
    path: '/introduction/faq',
    name: 'FAQ',
    component: FAQ,
    section: 'introduction',
    active: true
  },

  // Standards
  {
    path: '/standards/naming-conventions',
    name: 'Naming Conventions',
    component: NamingConventions,
    section: 'standards',
    active: true
  },
  {
    path: '/standards/voice-tone',
    name: 'Voice & Tone',
    component: VoiceTone,
    section: 'standards',
    active: true
  },
  {
    path: '/standards/grammar-punctuation',
    name: 'Grammar & Punctuation',
    component: GrammarPunctuation,
    section: 'standards',
    active: true
  },
  {
    path: '/standards/common-translations',
    name: 'Common Translations',
    component: CommonTranslations,
    section: 'standards',
    active: true
  },
  {
    path: '/standards/browser-support',
    name: 'Browser Support',
    component: BrowserSupport,
    section: 'standards',
    active: true
  },

  // Design
  {
    path: '/layout-style/color',
    name: 'Color',
    component: Color,
    section: 'layout-style',
    active: true
  },
  {
    path: '/layout-style/grids',
    name: 'Grids',
    component: Grids,
    section: 'layout-style',
    active: true
  },
  {
    path: '/layout-style/iconography',
    name: 'Iconography',
    component: Iconography,
    section: 'layout-style',
    active: true
  },
  {
    path: '/layout-style/layout',
    name: 'Layout',
    component: Layout,
    section: 'layout-style',
    active: true
  },
  {
    path: '/layout-style/spacing',
    name: 'Spacing',
    component: Spacing,
    section: 'layout-style',
    active: true
  },
  {
    path: '/layout-style/typography',
    name: 'Typography',
    component: Typography,
    section: 'layout-style',
    active: true
  },

  // Elements
  {
    path: '/elements/alerts',
    name: 'Alerts',
    component: Alerts,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/accordion',
    name: 'Accordion',
    component: Accordion,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/badges',
    name: 'Badges',
    component: Badges,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/buttons',
    name: 'Buttons',
    component: Buttons,
    section: 'elements',
    active: true
  },
  {
    path: '/elements/dropdowns',
    name: 'Dropdowns',
    component: Dropdowns,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/errors',
    name: 'Errors',
    component: Errors,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/file-uploader',
    name: 'FileUploader',
    component: FileUploader,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/form-elements',
    name: 'FormElements',
    component: FormElements,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/icons',
    name: 'Icons',
    component: Icons,
    section: 'elements',
    active: true
  },
  {
    path: '/elements/lists',
    name: 'Lists',
    component: Lists,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/loading',
    name: 'Loading',
    component: Loading,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/messages',
    name: 'Messages',
    component: Messages,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/modal',
    name: 'Modal',
    component: Modal,
    section: 'elements',
    active: true
  },
  {
    path: '/elements/notifications',
    name: 'Notifications',
    component: Notifications,
    section: 'elements',
    active: true
  },
  {
    path: '/elements/panels',
    name: 'Panels',
    component: Panels,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/push-notifications',
    name: 'Push Notifications',
    component: PushNotifications,
    section: 'elements',
    active: true
  },
  {
    path: '/elements/reorder',
    name: 'Reorder',
    component: Reorder,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/stats-data',
    name: 'StatsData',
    component: StatsData,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/steps',
    name: 'Steps',
    component: Steps,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/tables',
    name: 'Tables',
    component: Tables,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/tabs',
    name: 'Tabs',
    component: Tabs,
    section: 'elements',
    active: false
  },
  {
    path: '/elements/tooltips',
    name: 'Tooltips',
    component: Tooltips,
    section: 'elements',
    active: true
  },
  {
    path: '/elements/well',
    name: 'Well',
    component: Well,
    section: 'elements',
    active: false
  },

  // Templates
  {
    path: '/layout-style/header',
    name: 'Header',
    component: Header,
    section: 'templates',
    active: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    section: 'errors',
    active: true
  }
]
