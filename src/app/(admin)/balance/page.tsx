import PageContainer from '@/components/page-container'
import { Suspense } from 'react'
import Table from './table'

export default function BalancePage() {
  return (
    <PageContainer
      title='Balance'
      subtitle='List Of Balance'
    >
      <Suspense>
        <Table />
      </Suspense>
    </PageContainer>
  )
}
