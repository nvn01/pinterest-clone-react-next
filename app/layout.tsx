import type { ReactNode } from "react";
// If you have a Navbar component, import it here:
// import Navbar from '@/components/navbar/Navbar';

import "./globals.css"; // Your global or Tailwind CSS

export const metadata = {
  title: "Pinterest Clone",
  description: "A Pinterest clone built with Next.js and React",
};

// Root layout that wraps all routes
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
