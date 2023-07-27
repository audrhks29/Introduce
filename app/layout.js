
import './globals.css'
import { Inter } from 'next/font/google'

import { Header, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' 이명관 포트폴리오',
  description: '페이지 작업 설명',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
