import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Search, Mail, Bell, LogOut } from "lucide-react";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Admin - Roots2Goods",
  description: "An agricultural business and supplychain management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-lime-950">
        <div >
          {" "}
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <div>
                <Navbar />
              </div>
              {/* <SidebarTrigger /> */}

              {children}
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
