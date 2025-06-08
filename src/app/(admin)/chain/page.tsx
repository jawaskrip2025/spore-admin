import PageContainer from '@/components/page-container'
import { Suspense } from 'react'
import Table from './table'

export default function ChainPage() {
  return (
    <PageContainer
      title='Chain'
      subtitle='List Of Chain'
    >
      <Suspense>
        <Table />
      </Suspense>
    </PageContainer>
  )
}
