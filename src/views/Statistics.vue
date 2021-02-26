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
      <ol>
        <li v-for="(group, index) in result" :key="index">
          <h3 class="title">{{ group.title }}</h3>
          <ol>
            <li v-for="item in group.items" class="record" :key="item.id">
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tabs from '@/components/Tabs.vue'
import { Component } from 'vue-property-decorator'
import intervalList from '@/constants/intervalList.ts'
import recordTypeList from '@/constants/recordTypeList.ts'

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(',')
  }
  get recordList() {
    return (this.$store.state as RootState).recordList
  }
  get result() {
    const { recordList } = this
    type HashTableValue = { title: string; items: RecordItem[] }
    // type HashTableValue = { title: string; items: RecordList[] }
    const hashTable: {
      // eslint-disable-next-line @typescript-eslint/member-delimiter-style
      [key: string]: HashTableValue
    } = {}
    for (let i = 0; i < recordList.length; i++) {
      const [data, time] = recordList[i].createdAt!.split('T')
      hashTable[data] = hashTable[data] || { title: data, items: [] }

      hashTable[data].items.push(recordList[i])
    }
    console.log('hashTable:')

    console.log(hashTable)

    return hashTable
  }
  beforeCreate() {
    this.$store.commit('fetchRecords')
  }
  type = '-'
  interval = 'day'
  intervalList = intervalList
  recordTypeList = recordTypeList
}
</script>
<style scoped lang="scss">
::v-deep {
  .type-tabs-item {
    background: #c4c4c4;
    &.selected {
      background: white;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
::v-deep li.interval-tabs-item {
  height: 36px;
  font-size: 18px;
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
