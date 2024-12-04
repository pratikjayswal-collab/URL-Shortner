import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="bg-purple-700 text-white py-4">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">BitLinks</h1>
            <p className="text-sm text-gray-300 mt-2">
              Simplifying your online sharing, one link at a time.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} BitLinks. All rights reserved.
          </div>

          
        </div>
        </div>

      </div>
    </footer>
     </div>
  )
}

export default Footer
