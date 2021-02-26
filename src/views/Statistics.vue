<template>
  <div class="x">
    <Layout>
      <Tabs class-prefix="types" :data-source="typeList" :value.sync="type" />
      <Tabs
        class-prefix="interval"
        :data-source="intervalList"
        :value.sync="interval"
      />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Types from '@/components/Money/Types.vue'
import Tabs from '@/components/Tabs.vue'
import { Component } from 'vue-property-decorator'
@Component({
  components: { Types, Tabs },
})
export default class Statistics extends Vue {
  type = '-'
  interval = 'day'
  intervalList = [
    { text: '按天', value: 'day' },
    { text: '按周', value: 'week' },
    { text: '按月', value: 'month' },
  ]
  typeList = [
    { text: '支出', value: '-' },
    { text: '收入', value: '+' },
  ]
}
</script>

<style lang="scss" scoped>
::v-deep .type-item {
  &.selected {
    background: #1296db;
    color: white;
    &::after {
    }
  }
}
</style>
