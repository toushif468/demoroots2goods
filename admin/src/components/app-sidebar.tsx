import { ChartCandlestick, LayoutDashboard, Tractor, Store, Settings,Truck,ClipboardPen,ClipboardList } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Farmers",
    url: "/farmers",
    icon: Tractor,
  },
  {
    title: "Traders",
    url: "/traders",
    icon: ChartCandlestick,
  },
  {
    title: "Wholesalers",
    url: "/wholesalers",
    icon: Store,
  },
  {
    title: "Transportations",
    url: "/transportations",
    icon: Truck,
  },  {
    title: "General report",
    url: "/general-report",
    icon: ClipboardPen,
  },  {
    title: "Price bound report",
    url: "/price-bound-report",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarContent className="border-solid border-2 border-white-500 bg-lime-800 rounded-lg">
        <SidebarGroup >
          <SidebarGroupLabel className="text-yellow-300 text-lg font-bold mr-4">Roots2Goods</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className=" bg-lime-800 text-white rounded-lg hover:bg-yellow-500 hover:text-white hover:font-bold" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
