const localStorageKeyName = 'tagList'
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  created?: Date;
}
type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'success' | 'duplicated'; // success表示成功 duplicated表示name重复     联合类型
  save: () => void;
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || '[]',
    )
    return this.data
  },

  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  },
  create(name: string) {
    if (this.data.indexOf(name) >= 0) {
      return 'duplicated'
    }
    this.data.push(name)
    this.save()
    return 'success'
  },
}

export default tagListModel
