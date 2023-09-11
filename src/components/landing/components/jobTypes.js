import Image from 'next/image'
import React from 'react'
import ArrowRight from '../../../../public/assets/icons/arrow-purple.svg'

const cards = [
  { name: 'Workers and production', href: '#' },
  { name: 'Warehouse and logistics', href: '#' },
  { name: 'IT and technology', href: '#' },
  { name: 'Catering and tourism', href: '#' },
  { name: 'Administration and accounting', href: '#' },
  { name: 'Drivers and pilots', href: '#' },
  { name: 'Employees and office', href: '#' },
  { name: 'Sales and purchases', href: '#' },
]

const JobTypes = () => {
  return (
    <div className='flex flex-col items-center gap-y-6 bg-footer-bar px-40 2xl:px-72 py-16'>
      <p className='text-hero xl:text-[20px]'>Work. Smart. Easy.</p>
      <p className='text-black text-[32px] xl:text-[50px] font-extrabold'>What job are you looking for?</p>
      <div className='flex flex-wrap lg:gap-2 xl:gap-4 py-8'>
        {cards.map((item, ind) => {
          return (
            <div key={ind} className='my-2 flex justify-center items-center w-[250px] h-[63px] bg-white p-[8px] border-[1px] border-[#C6C4C4]'>
              <p className='text-black'>{item?.name}</p>
            </div>
          )
        })
        }

      </div>
      <div className='flex gap-x-4 items-center'>
        <p className='text-hero xl:text-[20px]'>Browse all offers</p>
        <Image src={ArrowRight} alt='' style={{height: '24px', width: '24px'}} />
      </div>
    </div>
  )
}

export default JobTypes