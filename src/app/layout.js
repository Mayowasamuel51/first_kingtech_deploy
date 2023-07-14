import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
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
import ErrorBoundary from './ErrorBoundary';
import Provider from './SessionProvider';
import Error from './error';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Kingship Technologies',
  description: 'Cyber Security e-learning platform',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={inter.className}   >
        <Provider>
          <ErrorBoundary fallback={<Error/>}>
            {children}
            <Analytics />
          </ErrorBoundary>
        </Provider>
      </body>
    </html>
  )
}
