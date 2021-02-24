<template>
  <div>
    <Layout>
      <div>
        <Icon name="left" />
        <span>我是EditLabel</span>
      </div>
      <Notes filed-name="标签名" placeholder="请输入标签名" />
    </Layout>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import tagListModel from '@/models/tagListModel'
import Notes from '@/components/Money/Notes.vue'
@Component({
  components: { Notes },
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags = tagListModel.data
    const tag = tags.filter((t) => t.id === id)[0]
    if (tag) {
      console.log(tag)
    } else {
      this.$router.replace('/404')
    }
  }
}
</script>

<style scoped></style>
