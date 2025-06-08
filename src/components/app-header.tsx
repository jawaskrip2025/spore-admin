"use client"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ModeToggle } from "./mode-toggle"
function AppHeader() {
  const pathname = usePathname()
  const listspath = pathname.split("/").filter(i => i !== '')
  return (
    <header>
      <div className="container flex justify-between border-b h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {listspath.map((item, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <>
                      <BreadcrumbItem className="hidden md:block capitalize">
                        <BreadcrumbLink className="font-semibold" href={`/${item}`}>
                          {item}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {listspath.length > 1 && <BreadcrumbSeparator className="hidden md:block" />}
                    </>
                  ) : (
                    <BreadcrumbItem>
                      <BreadcrumbPage className='capitalize text-slate-500'>{item}</BreadcrumbPage>
                    </BreadcrumbItem>
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex gap-1 items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default AppHeader