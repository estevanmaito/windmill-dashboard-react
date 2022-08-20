import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import routes from '../routes'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'
const Page404 = lazy(() => import('../pages/404'))

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
  }, [location])

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Routes>
            {routes.map((route, i) => {
                return route.element ? (
                    <Route
                      key={i}
                      path={`${route.path}`}            
                      element={route.element}
                    />
                  ) : 'null'
                })}
                <Route path="/" element={<Navigate to="dashboard" replace />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  )
}

export default Layout
