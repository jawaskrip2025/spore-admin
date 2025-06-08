'use client'
import DataTable from '@/components/datatable'
import { useAllTicker } from '@/modules/ticker/hooks/useChain'
import FormSubmit from '../form-submit'
import { columns } from './columns'

export default function Table() {
  const { data, isLoading } = useAllTicker()
  return (
    <DataTable
      actions={<FormSubmit name='' />}
      data={data || []}
      columns={columns}
      isLoading={isLoading}
      manualPagination={false}
    />
  )
}
