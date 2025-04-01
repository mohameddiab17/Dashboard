// import React from 'react'

import Elements from "./Elements"


const Sidebar = () => {
  return (
    <div>
      <div className="sticky top-4 hidden md:block h-[calc(100vh-32px-48px)]">
        <Elements/>
      </div>
    </div>
  )
}

export default Sidebar
