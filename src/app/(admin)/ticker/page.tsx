import PageContainer from '@/components/page-container'
import { Suspense } from 'react'
import Table from './table'

export default function TickerPage() {
  return (
    <PageContainer
      title='Ticker'
      subtitle='List Of Ticker'
    >
      <Suspense>
        <Table />
      </Suspense>
    </PageContainer>
  )
}
