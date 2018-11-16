<template>
  <div>
    <Top/>
    <LeftNav />
    <Content>
      <slot></slot>
    </Content>
    <Bottom/>
  </div>
</template>

<script>
import Top from '@/components/Top'
import LeftNav from '@/components/LeftNav'
import Content from '@/components/Content'
import Bottom from '@/components/Bottom'

export default {
  components: {
    Top,
    LeftNav,
    Content,
    Bottom
  }
}
</script>