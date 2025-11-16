import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goal Prediction App",
  description: "Rate daily actions and see goal achievement probabilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh bg-white">
          <header className="border-b">
            <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
              <h1 className="text-lg font-semibold">Goal Prediction</h1>
              <nav className="text-sm space-x-4">
                <a className="hover:underline" href="/">Dashboard</a>
                <a className="hover:underline" href="/rate">Rate today</a>
                <a className="hover:underline" href="/history">History</a>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
