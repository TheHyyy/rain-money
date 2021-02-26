<template>
  <div class="x">
    <Layout>
      <Tabs
        class-prefix="types"
        :data-source="recordTypeList"
        :value.sync="type"
      />
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
import intervalList from '@/constants/intervalList.ts'
import recordTypeList from '@/constants/recordTypeList.ts'

@Component({
  components: { Types, Tabs },
})
export default class Statistics extends Vue {
  type = '-'
  interval = 'day'
  intervalList = intervalList
  recordTypeList = recordTypeList
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
