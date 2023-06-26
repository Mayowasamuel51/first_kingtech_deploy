'use client';
import logo from '../../../../public/images/logo.png'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const [error , setError] = useState(null)
    const notify = () => toast.error("Error Notification !", {
        position: toast.POSITION.TOP_LEFT
      });
    const router = useRouter()
    const info = 
    {
        email: 'admin@gmail.com',
        password: 'admin@gmail.com'
    }
    const [input, setInput] = useState({
        email: '',
        password:''
    })
    const inputHandle = (e) => {
        setInput({...input, [e.target.name]:e.target.value})
    }
    const formSubmit = (e) => {
        e.preventDefault()
        if ( input.email === 'admin@gmail.com' && input.password === 'admin@gmail.com') {
            router.push('/AdminLayouts/admin_pages')
            localStorage.setItem('email', input.email)
            localStorage.setItem('password', input.password)
        } else {
            notify()
            
        }
    }


    return (
        <>
            <ToastContainer/>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={formSubmit} method="POST">
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" value={input.email} onChange={inputHandle} type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input id="password" value={input.password} onChange={inputHandle} name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                  
                </div>
            </div>

        </>
    )
}

export default Login;