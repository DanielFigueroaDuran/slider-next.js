import { ReactNode } from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from "@/components/widgets/Header";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Slider Cars',
  description: 'Slider Cars',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black text-gray-400 ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
