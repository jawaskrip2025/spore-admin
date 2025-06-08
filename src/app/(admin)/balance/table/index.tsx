'use client'
import DataTable from '@/components/datatable'
import { useAllBalance } from '@/modules/balance/hooks/useBalalnce'
import { useRouter, useSearchParams } from 'next/navigation'
import FormSubmit from '../form-submit'
import { columns } from './columns'

export default function Table() {
  const { data, isLoading } = useAllBalance()
  const router = useRouter()
  const searchParams = useSearchParams()
  async function onPageChange(e: number) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(e + 1))
    router.push(`?${params.toString()}`)
  }
  return (
    <DataTable
      actions={<FormSubmit
        ticker_id={0}
        chain_id={0}
        wallet={''}
        balance={0}
        price={0}
        sub_total={0}
      />}
      data={data?.data || []}
      columns={columns}
      isLoading={isLoading}
      pageSize={data?.page_size || 10}
      pageCount={data?.total_pages || 1}
      manualPagination={true}
      pageIndex={data?.page && data?.page - 1}
      onPageChange={onPageChange}
    />
  )
}
