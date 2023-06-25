import React from "react";

const AllStudents = () => {
  return (
    <>
      <div className="container mx-auto w-full max-w-full">
        <div className="w-full relative top-[4em] p-4">
          <h2 className="text-2xl text-orange-500 px-8">All Students</h2>
        </div>

        <div className="mt-10 max-w-full p-10">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Student Name/ID
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Course Enrolled
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Molly Sanders
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">000004</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">molly@gmail.com</p>
                  {/* <p class="text-gray-600 whitespace-no-wrap">USD</p> */}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                  <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Paid</span>
                  </span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      class="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Michael Roberts
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">000003</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">micheal@gmail.com</p>
                  {/* <p class="text-gray-600 whitespace-no-wrap">USD</p> */}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Sept 25, 2019</p>
                  <p class="text-gray-600 whitespace-no-wrap">Due in 6 days</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Paid</span>
                  </span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      class="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Devin Childs
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">000002</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">devin@gmail.com</p>
                  {/* <p class="text-gray-600 whitespace-no-wrap">USD</p> */}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Sept 14, 2019</p>
                  <p class="text-gray-600 whitespace-no-wrap">Due in 2 weeks</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Pending</span>
                  </span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      class="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="px-5 py-5 bg-white text-sm">
                  <div class="flex">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Frederick Nicholas
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">000001</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">fred@gmail.com</p>
                  {/* <p class="text-gray-600 whitespace-no-wrap">USD</p> */}
                </td>
                <td class="px-5 py-5 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Sept 6, 2019</p>
                  <p class="text-gray-600 whitespace-no-wrap">
                    Due 3 weeks ago
                  </p>
                </td>
                <td class="px-5 py-5 bg-white text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Overdue</span>
                  </span>
                </td>
                <td class="px-5 py-5 bg-white text-sm text-right">
                  <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      class="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllStudents;
