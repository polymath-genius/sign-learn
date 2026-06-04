import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, GraduationCap, Languages, User, BookOpenText } from "lucide-react"
import Courses from "../pages/courses"
import Translation from "../pages/translation"
import App from "../App"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: (
        <Home />
      ),
    },
    {
      title: "Courses",
      url: "/courses",
      icon: (
        <GraduationCap />
      ),
    },
    {
      title: "Translation",
      url: "/translation",
      icon: (
        <Languages />
      ),
    },
    {
      title: "Dictionary",
      url: "/dictionary",
      icon: (
        <BookOpenText />
      ),
    },
    {
      title: "Profile",
      url: "/profile",
      icon: (
        <User />
      ),
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <a href="#">
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
