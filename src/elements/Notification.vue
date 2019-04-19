<template>
  <div :class="`m-${variant}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'notification',

  props: {

    /**
     * Determines the type of notification that you want to display.
     * `success, warning, danger, info`
     */
    variant: {
      type: String,
      default: 'success',
      validator (value) {
        return ['success', 'warning', 'info', 'danger'].includes(value)
      }
    }

  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

// Design Tokens with local scope
$color-placeholder: tint($color-silver, 50%);

div {
  background-color: $color-black-4;
  border-left-color: $color-danger;
  border-left-width: 4px;
  border-left-style: solid;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  color: #424242;
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  line-height: 130%;
  margin: 2em 0;
  position: relative;
  padding: 12px 24px 12px 30px;
  z-index: 1;

  &:before {
    position: absolute;
    top: 14px;
    left: -12px;
    border-radius: 100%;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    content: "!";
    background-color: #f66;
  }
  &.m-warning {
    border-left-color: $color-warning;
  }
  &.m-warning:before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='401.999px' fill='%23ffffff' height='401.998px' viewBox='0 0 401.999 401.998' style='enable-background:new 0 0 401.999 401.998;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M237.543,301.499h-73.091c-4.95,0-9.233,1.811-12.851,5.425c-3.615,3.617-5.424,7.897-5.424,12.847v63.953 c0,4.948,1.809,9.232,5.424,12.854c3.621,3.61,7.9,5.421,12.851,5.421h73.097c4.942,0,9.227-1.811,12.848-5.421 c3.61-3.621,5.42-7.905,5.42-12.854v-63.953c0-4.949-1.813-9.229-5.427-12.847C246.773,303.307,242.488,301.499,237.543,301.499z' /%3E%3Cpath d='M259.383,5.424C255.862,1.812,251.628,0,246.676,0h-91.359c-4.948,0-9.18,1.812-12.703,5.424 c-3.521,3.617-5.186,7.902-4.996,12.85l7.992,219.265c0.19,4.948,2.139,9.236,5.852,12.847c3.711,3.621,8.041,5.431,12.991,5.431 h73.097c4.942,0,9.271-1.81,12.991-5.431c3.71-3.61,5.653-7.898,5.852-12.847l7.987-219.265 C264.578,13.326,262.905,9.045,259.383,5.424z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
    background-color: $color-warning;
    background-repeat: no-repeat;
    background-size: 11px;
    background-position: center;
  }
  &.m-info {
    border-left-color: $color-info;
  }
  &.m-info:before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='401.998px' fill='%23ffffff' height='401.998px' viewBox='0 0 401.998 401.998' style='enable-background:new 0 0 401.998 401.998;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M164.454,91.363h73.098c4.945,0,9.226-1.807,12.847-5.424c3.61-3.614,5.421-7.898,5.421-12.847V18.274 c0-4.948-1.811-9.229-5.428-12.85C246.777,1.812,242.49,0,237.544,0h-73.091c-4.946,0-9.229,1.812-12.847,5.424 c-3.615,3.617-5.424,7.902-5.424,12.85v54.818c0,4.949,1.809,9.233,5.424,12.847C155.224,89.556,159.507,91.363,164.454,91.363z' /%3E%3Cpath d='M286.936,334.331c-3.613-3.617-7.897-5.427-12.847-5.427h-18.274V164.452c0-4.947-1.807-9.229-5.421-12.845 c-3.62-3.617-7.904-5.426-12.847-5.426H127.912c-4.949,0-9.231,1.809-12.847,5.426c-3.618,3.616-5.424,7.898-5.424,12.845v36.547 c0,4.946,1.807,9.231,5.424,12.845c3.615,3.621,7.898,5.428,12.847,5.428h18.274v109.633h-18.274 c-4.949,0-9.231,1.81-12.847,5.427c-3.618,3.614-5.424,7.898-5.424,12.847v36.546c0,4.948,1.807,9.232,5.424,12.854 c3.615,3.61,7.898,5.421,12.847,5.421h146.177c4.949,0,9.233-1.811,12.847-5.421c3.614-3.621,5.421-7.905,5.421-12.854v-36.546 C292.357,342.229,290.56,337.945,286.936,334.331z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
    background-color: $color-info;
    background-repeat: no-repeat;
    background-size: 11px;
    background-position: center;
  }
  &.m-danger {
    border-left-color: $color-danger;
  }
  &.m-danger:before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='401.999px' fill='%23ffffff' height='401.998px' viewBox='0 0 401.999 401.998' style='enable-background:new 0 0 401.999 401.998;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M237.543,301.499h-73.091c-4.95,0-9.233,1.811-12.851,5.425c-3.615,3.617-5.424,7.897-5.424,12.847v63.953 c0,4.948,1.809,9.232,5.424,12.854c3.621,3.61,7.9,5.421,12.851,5.421h73.097c4.942,0,9.227-1.811,12.848-5.421 c3.61-3.621,5.42-7.905,5.42-12.854v-63.953c0-4.949-1.813-9.229-5.427-12.847C246.773,303.307,242.488,301.499,237.543,301.499z' /%3E%3Cpath d='M259.383,5.424C255.862,1.812,251.628,0,246.676,0h-91.359c-4.948,0-9.18,1.812-12.703,5.424 c-3.521,3.617-5.186,7.902-4.996,12.85l7.992,219.265c0.19,4.948,2.139,9.236,5.852,12.847c3.711,3.621,8.041,5.431,12.991,5.431 h73.097c4.942,0,9.271-1.81,12.991-5.431c3.71-3.61,5.653-7.898,5.852-12.847l7.987-219.265 C264.578,13.326,262.905,9.045,259.383,5.424z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
    background-color: $color-danger;
    background-repeat: no-repeat;
    background-size: 11px;
    background-position: center;
  }
  &.m-success {
    border-left-color: $color-success;
  }
  &.m-success:before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='442.533px' fill='%23ffffff' height='442.533px' viewBox='0 0 442.533 442.533' style='enable-background:new 0 0 442.533 442.533;' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248 l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852 C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828 c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33 c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
    background-color: $color-success;
    background-repeat: no-repeat;
    background-size: 11px;
    background-position: center;
  }
}
</style>
