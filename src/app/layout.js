import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GFG VIIT',
  description: "Website for GFG VIIT student chapter's Flagship event GeekVishwa",  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}><div className='fade absolute top-0 left-0 w-full h-full'></div> <video autoPlay loop muted src='../assets/bg.mp4' id='vid'></video>{children}</body>
    </html>
  )
}
