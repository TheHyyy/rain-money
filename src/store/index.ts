import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createId from '@/lib/idCreator'

Vue.use(Vuex) // 把store 绑到 Vue.prototype
const store = new Vuex.Store({
  //data
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },
  //methods
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem('recordList') || '[]',
      ) as RecordItem[]
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record)
      record2.createdAt = new Date()
      state.recordList.push(record2)
      store.commit('saveRecords')
      // recordStore.saveRecords()
    },
    saveRecords(state) {
      window.localStorage.setItem(
        'recordList',
        JSON.stringify(state.recordList),
      )
    },
    fetchTags(state) {
      const tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
      return (state.tagList = tagList)
    },
    createTag(state, name: string) {
      const names = state.tagList.map((item) => item.name)
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复了')
        return 'duplicated'
      }
      const id = createId().toString()
      state.tagList.push({ id, name: name })
      // saveTags()
      store.commit('saveTags')
      window.alert('添加成功')
      return 'success'
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
    },
  },
  actions: {},
  modules: {},
})

export default store
