type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // 数据类型 object | string
  createdAt?: Date; // 类 / 构造函数
}

interface Window {
  tagList: Tag[];
}
const localStorageKeyName = 'tagList'
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  created?: Date;
}
type Tag = {
  id: string;
  name: string;
}
