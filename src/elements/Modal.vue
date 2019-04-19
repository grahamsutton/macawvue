<template>
  <div v-show="visible" @keydown.esc="onClose" class="m-modal" aria-hidden="true" id="SubmitModal">
    <div class="m-modal-overlay" tabindex="-1" role="dialog">
      <div @click.stop class="m-modal-container" aria-modal="true">
        <header class="m-modal-header">
          <h2 class="m-modal-title"><slot name="header"></slot></h2>
          <button @click="onClose" class="m-modal-close" aria-label="Close modal"></button>
        </header>
        <main class="m-modal-content"><slot></slot></main>
        <footer class="m-modal-footer">
          <m-button
            v-show="!hasFooterSlot"
            @click="onClose"
            variant="link"
            class="button button-link t-modal-footer-close-btn"
            id="CloseBtn"
            aria-label="Close this dialog window"
          >
            {{ closeLabel }}
          </m-button>
          <m-button
            v-show="!hasFooterSlot && !disableSubmit"
            @click="onSubmit"
            variant="primary"
            class="t-modal-footer-submit-btn"
            id="SubmitButton"
          >
            {{ submitLabel }}
          </m-button>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

/**
 * Modals are used to provide a way for users to focus on specific content
 * that requires the user's immediate attention without redirecting their
 * focus to another page.
 */
export default {
  name: 'modal',

  components: {
    'm-button': Button
  },

  props: {
    /**
     * Shows or hides the modal.
     */
    visible: {
      type: Boolean,
      default: false
    },

    /**
     * The label for the "Close" button.
     * Not needed if using your own custom footer slot.
     */
    closeLabel: {
      type: String,
      default: 'Close'
    },

    /**
     * The label for the "Submit" button.
     * Not needed if using your own custom footer slot.
     */
    submitLabel: {
      type: String,
      default: 'Submit'
    },

    /**
     * Disables the "Submit" from being clickable when true;
     * enables the button when false.
     * Not needed if using your own custom footer slot.
     */
    disableSubmit: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    /**
     * Returns true if footer slot has been provided. This will hide
     * the default Close and Submit buttons and replace them with the
     * custom slot content.
     *
     * @return {Boolean}
     */
    hasFooterSlot () {
      return !!this.$slots.footer
    }
  },

  methods: {
    /**
     * Emits the "close" event when the modal is being closed. You can
     * hook in a callback by using @close.
     *
     * @example <modal @close="() => { do stuff... }" />
     *
     * @return {void}
     */
    onClose () {
      this.$emit('close')
    },

    /**
     * Emits the "submit" event when Submit button in the footer is clicked.
     * You can hook in a callback by using @submit.
     *
     * NOTE: Do not use in conjunction with a custom footer. If you provide
     * a custom footer slot, that content will replace the Close and Submit
     * buttons which will cause this event to do nothing.
     *
     * @example <modal @submit="() => { do stuff... }" />
     *
     * @return {void}
     */
    onSubmit () {
      this.$emit('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
// Animate the Opening Style
@keyframes mmfadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes mmfadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes mmslideIn {
  from {
    transform: translateY(15%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes mmslideOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10%);
  }
}

.m-modal {
  font-family: "Roboto", sans-serif;
  color: #424242;
  font-size: 16px;
  font-weight: 300;
  line-height: 130%;
}

.m-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.m-modal-container {
  background-color: #fff;
  max-width: 700px;
  max-height: 100vh;
  border-radius: 4px;
  overflow-y: auto;
  box-sizing: border-box;
}

.m-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 10px 30px;
}

.m-modal-title {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.25;
  color: #424242;
  box-sizing: border-box;
}

.m-modal-close {
  background: transparent;
  border: 0;
}

.m-modal-close:hover {
  cursor: pointer;
}

.m-modal-header .m-modal-close:before {
  content: "\2715";
}

.m-modal-content {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 30px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
}

.m-modal-footer {
  background: #fafafa;
  padding: 20px 30px;
  text-align: right;
}

.m-modal[aria-hidden="true"] .m-modal-overlay {
  animation: mmfadeIn 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.m-modal[aria-hidden="true"] .m-modal-container {
  animation: mmslideIn 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.m-modal[aria-hidden="false"] .m-modal-overlay {
  animation: mmfadeOut 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.m-modal[aria-hidden="false"] .m-modal-container {
  animation: mmslideOut 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.m-modal .m-modal-container,
.m-modal .m-modal-overlay {
  will-change: transform;
}
</style>
