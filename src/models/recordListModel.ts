const localStorageKeyName = 'recordList'
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  created?: Date;
}

const recordListModel = {
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data))
  },
  fetch() {
    return JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || '[]',
    ) as RecordItem[]
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))
  },
}

export default recordListModel
