import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'

Vue.use(Vuex) // 把store 绑到 Vue.prototype
const store = new Vuex.Store({
  //data
  state: {
    recordList: [] as RecordItem[],
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
  },
  actions: {},
  modules: {},
})

export default store
