type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: string
  createdAt?: string
}
type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'updateTage'
  save: () => void
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
}

interface Window {

}
