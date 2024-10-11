import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Providers from "./lib/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gym Management",
  description: "This is a gym management service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: "orange" },
            className: "my-toast",
          }}
        />
      </body>
    </html>
  );
}
