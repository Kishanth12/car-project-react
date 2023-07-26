import { relative } from 'path'
import './globals.css'
import { Footer, NavBar } from '@/components'

export const metadata= {
  title: 'Car hub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar/>{children}<Footer/></body>
    </html>
  )
}
