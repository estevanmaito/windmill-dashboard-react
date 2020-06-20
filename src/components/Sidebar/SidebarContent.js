import React, { useState } from 'react'
import Transition from '../Transition'
import { ReactComponent as Dropdown } from '../../icons/dropdown.svg'
import routes from '../../routes/sidebar'
import { NavLink, Route, Link } from 'react-router-dom'
import * as Icons from '../../icons'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false)

  function handlePagesMenuClick() {
    setIsPagesMenuOpen(!isPagesMenuOpen)
  }

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
        Windmill
      </a>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <li className="relative px-6 py-3" key={route.name}>
              <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                onClick={handlePagesMenuClick}
                aria-haspopup="true"
              >
                <span className="inline-flex items-center">
                  <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                  <span className="ml-4">{route.name}</span>
                </span>
                <Dropdown className="w-4 h-4" aria-hidden="true" />
              </button>
              <Transition
                show={isPagesMenuOpen}
                enter="transition-all ease-in-out duration-300"
                enterFrom="opacity-25 max-h-0"
                enterTo="opacity-100 max-h-xl"
                leave="transition-all ease-in-out duration-300"
                leaveFrom="opacity-100 max-h-xl"
                leaveTo="opacity-0 max-h-0"
              >
                <ul
                  className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                  aria-label="submenu"
                >
                  {route.routes.map((r) => (
                    <li
                      className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      key={r.name}
                    >
                      <Link className="w-full" to={r.path}>
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Transition>
            </li>
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <ul className="mt-6">
        <li className="relative px-6 py-3">
          <button
            className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            onClick={handlePagesMenuClick}
            aria-haspopup="true"
          >
            <span className="inline-flex items-center">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
              <span className="ml-4">Pages</span>
            </span>
            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <Transition
            show={isPagesMenuOpen}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-25 max-h-0"
            enterTo="opacity-100 max-h-xl"
            leave="transition-all ease-in-out duration-300"
            leaveFrom="opacity-100 max-h-xl"
            leaveTo="opacity-0 max-h-0"
          >
            <ul
              className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
              aria-label="submenu"
            >
              <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <a className="w-full" href="pages/login.html">
                  Login
                </a>
              </li>
              <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <a className="w-full" href="pages/create-account.html">
                  Create account
                </a>
              </li>
              <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <a className="w-full" href="pages/forgot-password.html">
                  Forgot password
                </a>
              </li>
              <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <a className="w-full" href="pages/404.html">
                  404
                </a>
              </li>
              <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <a className="w-full" href="pages/blank.html">
                  Blank
                </a>
              </li>
            </ul>
          </Transition>
        </li>
      </ul>
      <div className="px-6 my-6">
        <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </button>
      </div>
    </div>
  )
}

export default SidebarContent
