'use client'
import React, { useEffect } from 'react'
import Main from '../Admin/Main'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
const page = () => {
  const router = useRouter()
  // const email = localStorage.getItem('email');
  // const password = localStorage.getItem('password')

  // const [input, setInput] = useState({
  //   email: email,
  //   password:password
  // })
  useEffect(() => {
    if (!localStorage.getItem('email') && localStorage.getItem('password')) {
        router.push('/AdminLayouts/login')
    }
  }, [])




  return (
    <>
      <Main />
    </>
  )
}

export default page
