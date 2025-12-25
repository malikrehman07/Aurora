import React from 'react'

const Copyright = () => {
  const year = new Date().getFullYear()
  return (

    <div className='bg-black' >
      <div className="container mx-auto">
        <div className="py-2 border-t border-gray-800 text-center text-gray-500 text-sm ">&copy; {year} Malik Rehman. All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Copyright