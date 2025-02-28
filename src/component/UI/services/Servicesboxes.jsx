'use client'
import React from 'react'
import Link from 'next/link'

const Servicesboxes = ({ title, bgUrl, shifturl }) => {
  return (
    <div className='flex justify-center text-white h-auto align-bottom'>
      <div
        className='w-60 h-80 flex flex-col justify-center border-2 border-white rounded-2xl p-6 shadow-bg custom-width001'
        style={{ backgroundImage: `url(${bgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-auto flex flex-col align-bottom mt-auto items-center'>
          <div className='mt-auto flex flex-col items-center gap-10 w-auto'>
            
            <h1 className='font-extrabold sm:text-2xl text-left text-lg'>{title}</h1>
           
          </div>

          <div className='bg-white h-auto  w-full rounded-xl border-2 border-red-500 flex justify-center items-center text-black text-lg align-bottom py-2'>
              <Link href={shifturl}>
                <h1>Explore Now</h1>
              </Link>
            </div>

        </div>
      </div>
    </div>
  )
}
export default Servicesboxes
