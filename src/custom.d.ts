type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number; // 数据类型 object | string
  createdAt?: string; // 类 / 构造函数
}
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
  createTagError: Error | null;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated'; // success表示成功 duplicated表示name重复     联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  save: () => void;
  remove: (id: string) => boolean;
}

type Tag = {
  id: string;
  name: string;
}
