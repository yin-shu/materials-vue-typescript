<template>
  <svg :class="svgClass" aria-hidden="true" :style="style">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SvgIcon extends Vue {
  @Prop({ default: '' }) iconClass!: string

  @Prop({ default: '' }) className!: string

  @Prop({ default: '' }) width?: string
  @Prop({ default: '' }) height?: string

  get iconName (): string {
    return `#icon-${this.iconClass}`
  }
  get svgClass (): string {
    if (this.className) {
      return 'svg-icon ' + this.className
    } else {
      return 'svg-icon'
    }
  }
  get style () {
    return {
      width: this.width,
      height: this.height
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  overflow: hidden;
}
</style>
