import tagListModel from '@/models/tagListModel'
import recordListModel from '@/models/recordListModel'
const store = {
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    return recordListModel.create(record)
  },
  // tag store
  tagList: tagListModel.fetch(),
  // 增
  createTag: (name: string) => {
    if (name) {
      const message = tagListModel.create(name)
      if (message === 'duplicated') {
        alert('标签名重复')
      } else if (message === 'success') {
        alert('添加成功')
      }
    }
  },
  // 删
  removeTag: (id: string) => {
    return tagListModel.remove(id)
  },
  // 改
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name)
  },
  // 查
  findTag: (id: string) => {
    return store.tagList.filter((t) => t.id === id)[0]
  },
}
export default store
