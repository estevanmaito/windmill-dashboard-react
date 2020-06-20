import React from 'react'

import SidebarContent from './SidebarContent'

function DesktopSidebar(props) {
  return (
    <aside className="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block">
      <SidebarContent />
    </aside>
  )
}

export default DesktopSidebar
