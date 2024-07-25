import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { Metadata } from "next"
import './globals.css'
import Provider from "./Provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'DocSync',
  description: `Welcome to DocSync, the ultimate solution for seamless real-time document collaboration. DocSync empowers users to create, edit, and share documents effortlessly, no matter where they are. With its intuitive interface and robust features, DocSync allows multiple users to work on the same document simultaneously, ensuring that everyone's contributions are captured in real time. `,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { 
          colorPrimary: "#3371FF" ,
          fontSize: '16px'
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
