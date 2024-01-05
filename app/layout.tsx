import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Review',
  description: 'Movie Review/Rating App',
  keywords: 'movie, review, rating, app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ToastContainer />
        <div className='mx-auto mt-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
