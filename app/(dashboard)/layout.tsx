import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import { SidebarProvider } from "@/components/providers/SidebarProvider";

export const metadata: Metadata = {
  title: "CourseEdgeX - Dashboard",
  description: "Unlock high-quality courses designed to help you grow and excel in your career.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <div className="h-full">{children}</div>
        </SidebarProvider>
      </ThemeProvider>
      
      <SanityLive />
    </ClerkProvider>
  );
}