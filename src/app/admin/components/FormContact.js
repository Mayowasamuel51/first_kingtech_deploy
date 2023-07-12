'use client'
import { useState } from 'react';
function FormContact({ contact }) {
    // const [currentpage, setCurrentpage] = useState(4)
    // const recordPerpage = 30;
    // const lastindex = currentpage * recordPerpage;
    // const firstindex = lastindex - recordPerpage;
    // const records = contact.slice(firstindex, lastindex)
    // const npage = Math.ceil(contact.length / recordPerpage);
    // const number = [...Array(npage + 1).keys()].slice(1)

    // function nextPage() {
    //     if (currentpage !== lastindex) {
    //         setCurrentpage(currentpage + 1)
    //     }
    // }

    // function prePage() {
    //     if (currentpage !== 1) {
    //         setCurrentpage(currentpage - 1)
    //     }
    // }

    // function changecpage(id) {
    //     setCurrentpage(id)
    // }
    return (
        <>
            <div className="mt-10 max-w-full p-10">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Phone
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Message
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                        </tr>
                    </thead>

                    <tbody >
                    {contact.map((item) => {
                        return (
                           
                                <tr key={item.id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">

                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.name}
                                                </p>

                                            </div>
                                        </div>
                                    </td>
                                
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{item.email}</p>
                                        {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                                    </td>
                              
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{item.phone}</p>

                                    </td>
                              
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{item.message}</p>
                                    </td>
                               
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                        <p className="text-gray-900 whitespace-no-wrap">{item.createdAt}</p>
                                    </td>
                                </tr>

                           
                        )
                    })}
                    </tbody>
                </table>
                {/* <nav aria-label="Page navigation example" role="navigation" >
                    <ul classNameName="pagination m-4">
                        <li>
                            <a herf="#" className="page-link" aria-label="Previous" onClick={prePage}> prev</a>
                        </li>
                        {
                            number.map((n, i) => {
                                <li className={`pagination-link ${currentpage === n ? `pagination` : ''}`}>
                                    <a herf="#"
                                        className="pagination-linl"
                                        onClick={() => changecpage(n)} >{n}</a>
                                </li>
                            })
                        }
                        <li>
                            <a herf="#" className="page-link" aria-label="Previous" onClick={nextPage}> next</a>
                        </li>
                    </ul>
                </nav> */}
            </div>

        </>
    )
}

export default FormContact;