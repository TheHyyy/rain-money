type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // 数据类型 object | string
  createdAt?: Date; // 类 / 构造函数
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated'; // success表示成功 duplicated表示name重复     联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  save: () => void;
  remove: (id: string) => boolean;
}
interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  // updateTag: TagListModel['update']
  updateTag: (
    id: string,
    name: string,
  ) => 'success' | 'not found' | 'duplicated';
  findTag: (id: string) => Tag | undefined;
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
