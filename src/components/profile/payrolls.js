import Image from 'next/image'
import React from 'react'
import Download from '../../../public/assets/icons/download.svg'
import ProfileDocumentBar from './profileDocumentBar'

const payrollsList = [
  { id: 1, name: 'Paycheck January 2022' },
  { id: 2, name: 'Paycheck February 2022' },
]

const Payrolls = () => {
  return (
    <div className='py-2 flex flex-col gap-y-4'>
      <p className='text-hero text-[18px] tracking-[-0.72px] font-extrabold'>Payrolls</p>
      <div className='flex flex-col gap-y-3'>
        {payrollsList?.map((item, ind) => {
          return (
            <ProfileDocumentBar key={ind}/>
          )
        })}
      </div>
    </div>
  )
}

export default Payrolls