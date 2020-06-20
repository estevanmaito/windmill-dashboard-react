import React from 'react'

function TableFooter() {
  return (
    <div className="flex flex-col justify-between px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 sm:flex-row bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
      <span className="flex items-center col-span-3">Showing 21-30 of 100</span>
      {/* <!-- Pagination --> */}
      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center">
            <li>
              <button
                className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Previous"
              >
                <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                1
              </button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                2
              </button>
            </li>
            <li>
              <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                3
              </button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                4
              </button>
            </li>
            <li>
              <span className="px-3 py-1">...</span>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                8
              </button>
            </li>
            <li>
              <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                9
              </button>
            </li>
            <li>
              <button
                className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Next"
              >
                <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                  <path
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  )
}

export default TableFooter
