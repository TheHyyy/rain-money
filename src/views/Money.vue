<template>
  <Layout class-prefix="layout">
    <div>
      <Tabs class="t" :data-source="recordTypeList" :value.sync="record.type" />
      <Tags @update:value="record.tags = $event" />
      <FormItem
        @update:value="onUpdateNotes"
        filed-name="备注"
        placeholder="在这里输入备注"
        :value="record.notes"
      />

      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import FormItem from '@/components/Money/FormItem.vue'
import Tags from '@/components/Money/Tags.vue'
import Tabs from '@/components/Tabs.vue'
import { Component } from 'vue-property-decorator'
import recordTypeList from '@/constants/recordTypeList'
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
  components: { Tags, FormItem, NumberPad, Tabs },
  computed: {},
})
export default class Money extends Vue {
  record: RecordItem = { tags: [], notes: '', type: '-', amount: 0 }
  get recordList() {
    return this.$store.state.recordList
  }
  recordTypeList = recordTypeList
  created() {
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value)
  }
  saveRecord() {
    if (!this.record.tags.length || this.record.tags.length === 0) {
      return window.alert('请选择标签并重新输入数字')
    }
    this.$store.commit('createRecord', this.record)
    window.alert('已保存')
    this.record.notes = ''
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.t {
  position: absolute;
  top: 0;
  width: 480px;
}
@media (max-width: 500px) {
  .t {
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
