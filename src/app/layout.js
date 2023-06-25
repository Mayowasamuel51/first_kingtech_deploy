import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head";
// components
import Footer from './components/Footer'
import Header from './components/Header'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Kingship Technologies',
  description: 'Cyber Security e-learning platform',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bruno+Ace&family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head> */}
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
