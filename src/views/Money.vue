<template>
  <Layout class-prefix="layout">
    <div>
      <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
      <Notes @update:value="onUpdateNotes" />
      <Types :value.sync="record.type" />
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'
import { Component, Watch } from 'vue-property-decorator'
import model from '@/model.ts'

const recordList = model.fetch()
type RecordItem = {
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  tags: string[]
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  notes: string
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  type: string
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  amount: number
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  created?: Date
}

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '运动']
  recordList: RecordItem[] = recordList
  record: RecordItem = { tags: [], notes: '', type: '-', amount: 0 }
  onUpdateTags(value: string[]) {
    this.record.tags = value

    console.log('我是Tag')
    console.log(value)
  }
  onUpdateNotes(value: string) {
    this.record.notes = value
    console.log('我是Note')
    console.log(value)
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value)
    console.log('我是Amount')
    console.log(value)
  }
  saveRecord() {
    const record2 = model.clone(this.record)
    record2.createdAt = new Date()
    this.recordList.push(record2)
    console.log(this.recordList)
  }
  @Watch('recordList')
  onRecordListChange() {
    model.save(this.recordList)
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
