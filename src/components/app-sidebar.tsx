"use client"

import {
  AudioWaveform,
  Command,
  DatabaseZap,
  GalleryVerticalEnd,
  Settings2
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Spore VC",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Master",
      url: "#",
      icon: DatabaseZap,
      isActive: true,
      items: [
        {
          title: "Chain",
          url: "/chain",
          isActive: true,
        },
        {
          title: "Ticker",
          url: "/ticker",
        },
        {
          title: "Balance",
          url: "/balance",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "Users",
          url: "/users",
        },
        {
          title: "Api Key",
          url: "#",
        },
        {
          title: "Wallet Admin",
          url: "/wallet-admin",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} >
      <SidebarHeader className="bg-white dark:bg-black md:bg-transparent">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-white dark:bg-black md:bg-transparent">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-white dark:bg-black md:bg-transparent">
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}