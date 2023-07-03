import './globals.css'
import { Inter } from 'next/font/google'
// components
import {
  SquarePaymentsForm,
  ApplePay,
  CreditCardInput,
  GooglePay,
  CreditCard,
  PaymentForm,
} from "react-square-web-payments-sdk";
import Footer from './components/Footer'
import Header from './components/Header'
import Provider from './SessionProvider';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Kingship Technologies',
  description: 'Cyber Security e-learning platform',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={inter.className}
      >
        {/* <Header /> */}
        <Provider>
            {children}
        </Provider>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
