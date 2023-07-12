'use client'
import React, { useState } from 'react'

const CommentComponents = ({ comments }) => {
    return (
        <div className="mt-10 max-w-full p-10">
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Comments
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Date Added
                        </th>
                    </tr>
                </thead>

                <tbody >
                    {comments.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{item.email}</p>
                                    {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <p className="text-gray-900 whitespace-no-wrap">{item.commentBody}</p>
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <p className="text-gray-900 whitespace-no-wrap">{item.createdAt}</p>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
          
        </div>
    )
}

export default CommentComponents