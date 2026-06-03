import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router";
import { AppSidebar } from "@/components/app-sidebar"

export default function SidebarLayout() {
    return (
        <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <Outlet/>
      </SidebarInset>
    </SidebarProvider>
    );
}