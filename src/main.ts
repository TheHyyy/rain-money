import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagListModel from './models/tagListModel'
import recordListModel from './models/recordListModel'

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)
// record store
window.recordList = recordListModel.fetch()
window.createRecord = (record: RecordItem) => {
  return recordListModel.create(record)
}
// tag store
window.tagList = tagListModel.fetch()
// 增
window.createTag = (name: string) => {
  const message = window.prompt('请输入标签名')
  if (name) {
    const message = tagListModel.create(name)
    if (message === 'duplicated') {
      alert('标签名重复')
    } else if (message === 'success') {
      alert('添加成功')
    }
  }
}
// 删
window.removeTag = (id: string) => {
  return tagListModel.remove(id)
}
// 改
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name)
}
// 查
window.findTag = (id: string) => {
  return window.tagList.filter((t) => t.id === id)[0]
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
