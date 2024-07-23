import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next"
import './globals.css'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'DocSync',
  description: 'Welcome to DocSync, the ultimate solution for seamless real-time document collaboration. DocSync empowers users to create, edit and share documents effortlessly, no matter where you are.'
}

export default function RootLayout({ children }: {children : React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
