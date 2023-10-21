import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '@/component/Nav'

const poppins = Poppins({ subsets: ['latin'], weight:'300' })

export const metadata = {
  title: 'GFG VIIT',
  description: "Website for GFG VIIT student chapter's Flagship event GeekVishwa",  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>

      <head>

      

      </head>

      <body className={poppins.className}>
        <div className=''>

      <div class="letter l00 t200"><div></div></div>
<div class="letter l10 t500"><div></div></div>
<div class="letter l20 t180"><div></div></div>
<div class="letter l30 t700"><div></div></div>
<div class="letter l40 t800"><div></div></div>
<div class="letter l50 t900"><div></div></div>
<div class="letter l60 t300"><div></div></div>
<div class="letter l70 t400"><div></div></div>
<div class="letter l80 t320"><div></div></div>
<div class="letter l90 t190"><div></div></div>
<div class="letter l100 t520"><div></div></div>
<div class="letter l05 t380 big"><div></div></div>
<div class="letter l15 t400 big"><div></div></div>
<div class="letter l25 t600 big"><div></div></div>
<div class="letter l35 t650 big"><div></div></div>
<div class="letter l45 t290 big"><div></div></div>
<div class="letter l55 t530 big"><div></div></div>
<div class="letter l65 t420 big"><div></div></div>
<div class="letter l75 t900 big"><div></div></div>
<div class="letter l85 t200 big"><div></div></div>
<div class="letter l95 t180 big"><div></div></div>

<div class="letter l00 t200 d2"><div></div></div>
<div class="letter l10 t500 d2"><div></div></div>
<div class="letter l20 t180 d2"><div></div></div>
<div class="letter l30 t700 d2"><div></div></div>
<div class="letter l40 t800 d2"><div></div></div>
<div class="letter l50 t900 d2"><div></div></div>
<div class="letter l60 t300 d2"><div></div></div>
<div class="letter l70 t400 d2"><div></div></div>
<div class="letter l80 t320 d2"><div></div></div>
<div class="letter l90 t190 d2"><div></div></div>
<div class="letter l100 t520 d2"><div></div></div>
<div class="letter l05 t380 big d2"><div></div></div>
<div class="letter l15 t400 big d2"><div></div></div>
<div class="letter l25 t600 big d2"><div></div></div>
<div class="letter l35 t650 big d2"><div></div></div>
<div class="letter l45 t290 big d2"><div></div></div>
<div class="letter l55 t530 big d2"><div></div></div>
<div class="letter l65 t420 big d2"><div></div></div>
<div class="letter l75 t900 big d2"><div></div></div>
<div class="letter l85 t200 big d2"><div></div></div>
<div class="letter l95 t180 big d2"><div></div></div>
        </div>

        <div className='fade absolute top-0 left-0 w-full h-full'></div> 
      {/* <video autoPlay loop muted src='../assets/bg.mp4' id='vid'></video> */}
      {children}
      <Nav/>
      <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      <script defer async src="https://unpkg.com/css-doodle@0.17.2/css-doodle.min.js"></script>
      <script>
        
      </script>

      </body>
    </html>
  )
}
