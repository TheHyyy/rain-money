<template>
  <Layout class-prefix="layout">
    <div class="la">
      <div class="la2">
        <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
        <Notes @update:value="onUpdateNotes" />
        <Types :value.sync="record.type" />
        <NumberPad @update:value="onUpdateAmount" />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'
import { Component, Prop } from 'vue-property-decorator'

type Record = {
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  tags: string[]
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  notes: string
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  type: string
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  amount: number
}

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '运动']
  record: Record = { tags: [], notes: '', type: '-', amount: 0 }
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
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
