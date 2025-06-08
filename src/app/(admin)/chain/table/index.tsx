'use client'
import DataTable from '@/components/datatable'
import { useAllChain } from '@/modules/chain/hooks/useChain'
import FormSubmit from '../form-submit'
import { columns } from './columns'

export default function Table() {
  const { data,isLoading } = useAllChain()
  return (
    <DataTable
      actions={<FormSubmit />}
      data={data || []}
      columns={columns}
      isLoading={isLoading}
      manualPagination={false}
    />
  )
}
