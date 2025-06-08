export type TPagination<T> = {
  data: T[],
  total_pages: number
  total_row: number
  page: number
  page_size: number
  total_balance_usd?: number
}