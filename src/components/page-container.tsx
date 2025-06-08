import React from 'react'
type PageContainerProps = {
  children: React.ReactNode
  actions?: React.ReactNode
  title?: string
  subtitle?: string
}
export default function PageContainer(props: PageContainerProps) {
  return (
    <div className='container'>
      <div className='flex flex-col md:flex-row md:items-center py-4'>
        <div className='flex-1'>
          <h1 className='text-base md:text-xl font-semibold'>{props.title}</h1>
          <p className='text-sm text-balance'>{props.subtitle}</p>
        </div>
        <div>{props.actions}</div>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}
