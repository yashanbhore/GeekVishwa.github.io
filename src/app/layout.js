import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight:'300' })

export const metadata = {
  title: 'GFG VIIT',
  description: "Website for GFG VIIT student chapter's Flagship event GeekVishwa",  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className={poppins.className}><div className='fade absolute top-0 left-0 w-full h-full'></div> 
      {/* <video autoPlay loop muted src='../assets/bg.mp4' id='vid'></video> */}
      {children}
      <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  )
}
