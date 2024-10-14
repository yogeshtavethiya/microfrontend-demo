import React from 'react'

const Header = ({ app }) => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl">
        Spinner {app.name}
    </div>
  )
}

export default Header