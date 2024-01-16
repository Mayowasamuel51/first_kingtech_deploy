import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
// components
import ErrorBoundary from './ErrorBoundary';
import Provider from './SessionProvider';
import Error from './error';
import GoogleTagManager from './Google';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Kingship Technologies',
  description: 'Trusted By Students Around The World    ,   Cyber Security e-learning platform  ',  
  keywords: "cybersecurity training, cybersecurity courses, information security, cyber defense, network security, ethical hacking, penetration testing, data privacy cyber security kingship",
  content:"Discover the importance of cybersecurity in the digital age and learn about effective strategies and practices to safeguard your online presence. Explore expert tips, tools, and resources to protect your personal information, defend against cyber threats, and navigate the evolving landscape of online security." 
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
     
      <GoogleTagManager/>
      <body
        className={inter.className}   >
        <Provider>
          <ErrorBoundary fallback={<Error />}>
            {children}
            
            <Analytics />
          </ErrorBoundary>
        </Provider>
      </body>
    </html>
  )
}
