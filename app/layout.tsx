import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Meeting Scheduler Bot",
  description: "Schedule voice meetings across Discord timezones. Find optimal meeting times, send calendar invites, and manage recurring standups."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2c598e10-6201-4569-8732-412f51baa200"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
