<template>
  <transition name="notification-anim" leave-active-class="hide-notification">
    <div
      @mouseover="hover = true"
      @mouseleave="hover = false"
      v-show="visible || hover"
      class="m-notification"
    >
      <div :class="['m-alert-icon', variant]">
        <icon :name="icon" fill="#fff" class="m-icon" size="medium"></icon>
      </div>
      <main class="m-alert-content"><slot></slot></main>
    </div>
  </transition>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'push-notification',

  components: {
    Icon
  },

  data () {
    return {

      /**
       * The hover property will set as true when the user hovers over the notification.
       *
       * @type {Boolean}
       */
      hover: false
    }
  },

  props: {

    /**
     * Select the notification that you want to display.
     * Valid options: `success, warning, danger, info`
     */
    variant: {
      type: String,
      default: 'success',
      validator (value) {
        return ['success', 'warning', 'info', 'danger'].includes(value)
      }
    },

    /**
     * Controls the visibility of the push notificdation.
     */
    visible: {
      type: Boolean,
      default: false
    },

    /**
     * Length of time the push notification should be
     * visible in milliseconds.
     *
     * Default: 5000 milliseconds == 5 seconds
     */
    time: {
      type: Number,
      default: 20000
    }
  },

  computed: {

    /**
     * Return icon name according to prop type in order to build an icon.
     *
     * @returns {string}
     */
    icon () {
      switch (this.variant) {
        case 'success':
          return 'check'
        case 'warning':
          return 'exclamation'
        case 'danger':
          return 'exclamation'
        case 'info':
          return 'info'
      }
    }
  },

  watch: {

    /**
     * Make push notification begin to fade away after a specified amount of time when
     * visible is set to false.
     *
     * @return {void}
     */
    visible () {
      if (this.visible) {
        setTimeout(this.onExpire, this.time)
      }
    }
  },

  methods: {

    /**
     * Emits an event when the notification begins to fade away.
     *
     * @return {void}
     */
    onExpire () {
      this.$emit('expire')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

body {
  font-family: "Roboto", sans-serif;
}

p {
  font-family: "Roboto", sans-serif;
}

.m-notification {
  opacity: 1;
  // width: 300px;
  // position: fixed;
  // bottom: 30px;
  // right: 50px;
  border-radius: 6px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0);
  background-color: rgba(255, 255, 255, 0);
  color: rgba(0, 0, 0, 0);
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  -webkit-animation: alert-notification-content 1s ease-in-out forwards;
  -moz-animation: alert-notification-content 1s ease-in-out forwards;
  -o-animation: alert-notification-content 1s ease-in-out forwards;
  -ms-animation: alert-notification-content 1s ease-in-out forwards;
  animation: alert-notification-content 1s ease-in-out forwards;

  animation-delay: 0.5s;
}

.m-alert-icon {
  width: 40px;
  color: #fff !important;
  text-align: center;
  display: flex !important;
  transform: translateX(270px) scale(0);
  border-radius: 50px 50px 50px 50px;
  display: inline-block;

  -webkit-animation: alert-notification-icon 1s ease forwards;
  -moz-animation: alert-notification-icon 1s ease forwards;
  -o-animation: alert-notification-icon 1s ease forwards;
  -ms-animation: alert-notification-icon 1s ease forwards;
  animation: alert-notification-icon 1s ease forwards;
}

.success {
  background-color: $color-primary;
}

.warning {
  background-color: $color-warning;
}

.danger {
  background-color: $color-danger;
}

.info {
  background-color: $color-info;
}

.m-icon {
  margin: auto;
}

.m-alert-content {
  font-size: 12px;
  display: inline-block !important;
  padding: 10px 20px;
  max-width: 220px;
  opacity: 1;
  font-family: "Roboto", sans-serif;
}

@-webkit-keyframes alert-notification-icon {
  0% {
    transform: translateX(270px) scale(0);
    border-radius: 50px 50px 50px 50px;
  }
  25% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  40% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  100% {
    transform: translateX(0px) scale(1);
    border-radius: 6px 0px 0px 6px;
  }
}

@-moz-keyframes alert-notification-icon {
  0% {
    transform: translateX(270px) scale(0);
    border-radius: 50px 50px 50px 50px;
  }
  25% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  40% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  100% {
    transform: translateX(0px) scale(1);
    border-radius: 6px 0px 0px 6px;
  }
}

@-o-keyframes alert-notification-icon {
  0% {
    transform: translateX(270px) scale(0);
    border-radius: 50px 50px 50px 50px;
  }
  25% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  40% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  100% {
    transform: translateX(0px) scale(1);
    border-radius: 6px 0px 0px 6px;
  }
}

@-ms-keyframes alert-notification-icon {
  0% {
    transform: translateX(270px) scale(0);
    border-radius: 50px 50px 50px 50px;
  }
  25% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  40% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  100% {
    transform: translateX(0px) scale(1);
    border-radius: 6px 0px 0px 6px;
  }
}

@keyframes alert-notification-icon {
  0% {
    transform: translateX(270px) scale(0);
    border-radius: 50px 50px 50px 50px;
  }
  25% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  40% {
    transform: translateX(270px) scale(1);
    border-radius: 50px 50px 50px 50px;
  }

  100% {
    transform: translateX(0px) scale(1);
    border-radius: 6px 0px 0px 6px;
  }
}

@keyframes alert-notification-content {
  from {
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0);
    background-color: rgba(255, 255, 255, 0);
    color: rgba(0, 0, 0, 0);
  }
  to {
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
  }
}

path {
  fill: #fff !important;
}

.hide-notification {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
</style>
