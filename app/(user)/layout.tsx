import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "CourseEdgeX",
  description: "Unlock high-quality courses designed to help you grow and excel in your career.",
};

export default function UserLayout({
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
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
        </div>
      </ThemeProvider>
      <SanityLive />
    </ClerkProvider>
  );
}