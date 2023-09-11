import React from 'react'
import JobOfferBar from '../../offers/components/jobOfferBar'

const AppliedOffers = () => {
  return (
    <div className='w-full flex flex-col gap-y-6'>
      <p className='text-[40px] font-bold tracking-[-1.2px]'>Applied offers</p>
      <div className='w-full flex flex-col gap-y-4'>
        <JobOfferBar />
        <JobOfferBar />
        <JobOfferBar />
      </div>
    </div>
  )
}

export default AppliedOffers