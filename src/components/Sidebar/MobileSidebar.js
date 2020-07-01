import React, { useContext } from 'react'

import SidebarContent from './SidebarContent'
import { Transition } from 'windmill-react-ui'
import { Backdrop } from 'windmill-react-ui'

import { SidebarContext } from '../../context/SidebarContext'

function MobileSidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)

  return (
    <Transition show={isSidebarOpen}>
      <>
        <Transition
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop onClick={closeSidebar} />
        </Transition>

        <Transition
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0 transform -translate-x-20"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 transform -translate-x-20"
        >
          <aside className="fixed inset-y-0 z-30 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
            <SidebarContent />
          </aside>
        </Transition>
      </>
    </Transition>
  )
}

export default MobileSidebar
