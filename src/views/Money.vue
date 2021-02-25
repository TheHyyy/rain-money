<template>
  <Layout class-prefix="layout">
    <div>
      <Tags />
      <FormItem
        @update:value="onUpdateNotes"
        filed-name="备注"
        placeholder="在这里输入备注"
      />
      <Types :value.sync="record.type" />
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import FormItem from '@/components/Money/FormItem.vue'
import Tags from '@/components/Money/Tags.vue'
import { Component } from 'vue-property-decorator'

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
  components: { Tags, FormItem, Types, NumberPad },
})
export default class Money extends Vue {
  record: RecordItem = { tags: [], notes: '', type: '-', amount: 0 }
  get recordList() {
    return this.$store.state.recordList
  }
  created() {
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value)
    console.log('我是Amount')
    console.log(value)
  }
  saveRecord() {
    this.$store.commit('createRecord', this.record)
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
