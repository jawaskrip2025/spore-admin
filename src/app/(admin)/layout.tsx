import AppHeader from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full overflow-hidden">
        <AppHeader />
        <div className="mb-6">{children}</div>
      </main>
    </SidebarProvider>
  )
}