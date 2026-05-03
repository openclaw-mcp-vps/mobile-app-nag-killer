import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobile App Nag Killer — Block App Install Popups",
  description: "Browser extension that automatically dismisses download our app popups and banners. Browse the mobile web in peace."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f11f234f-8cd7-4d88-b2bf-bcc2d8977b1f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
