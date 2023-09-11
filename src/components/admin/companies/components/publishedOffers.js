import React from 'react'
import JobOfferBar from '../../offers/components/jobOfferBar'

const PublishedOffers = () => {
  return (
    <div className='w-full flex flex-col gap-y-6'>
      <p className='text-[40px] font-bold tracking-[-1.2px]'>Published offers</p>
      <div className='w-full flex flex-col gap-y-4'>
        <JobOfferBar />
        <JobOfferBar />
      </div>
    </div>
  )
}

export default PublishedOffers