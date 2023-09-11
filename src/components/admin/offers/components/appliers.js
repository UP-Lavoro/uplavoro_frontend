import React from 'react'
import UserBar from '../../users/componenets/userBar'

const Appliers = () => {
  return (
    <div className='w-full flex flex-col gap-y-6'>
      <p className='text-[40px] font-bold tracking-[-1.2px]'>Appliers</p>
      <div className='w-full flex flex-col gap-y-4'>
        <UserBar />
        <UserBar />
        <UserBar />
      </div>
    </div>
  )
}

export default Appliers