<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon name="left" class="leftIcon" @click.native="goBack" />
        <span class="title">编辑标签</span>
        <span class="rightIcon" />
      </div>
      <div class="form-wrapper">
        <FormItem
          :value="currentTag.name"
          filed-name="标签名"
          placeholder="请输入标签名"
          @update:value="update"
        />
      </div>
      <div class="button-wrapper">
        <Button @click="remove" class="removClass">删除标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Button from '@/components/Button.vue'
import FormItem from '@/components/Money/FormItem.vue'
@Component({
  components: { FormItem, Button },
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag
  }
  created() {
    const id = this.$route.params.id
    this.$store.commit('fetchTags')
    this.$store.commit('setCurrentTag', id)
    if (!this.currentTag) {
      this.$router.replace('/404')
    }
  }
  update(name: string) {
    console.log(name)

    if (this.currentTag) {
      this.$store.commit('updateTag', { id: this.currentTag.id, name })
    }
  }
  remove() {
    if (confirm('你确定要删除这个标签吗？')) {
      if (this.currentTag) {
        this.$store.commit('removeTag', this.currentTag.id)
        this.goBack()
        return
      }
    } else {
      return
    }
  }
  goBack() {
    console.log(1)

    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
.removClass {
  background-color: red;
}
</style>
