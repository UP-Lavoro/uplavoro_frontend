import Image from 'next/image'
import React from 'react'
import JobCard from '../jobOffers/jobCard'
import ArrowPurple from '../../../public/assets/icons/arrow-purple.svg'

const SimilarJobOffers = () => {
  return (
    <div className="w-full md:px-14 lg:px-28 xl:px-48 2xl:px-72 flex flex-col py-20 bg-gray-200 gap-y-4">
      <div className="flex justify-between">
        <p className="text-[50px] text-hero tracking-tight">
          Similar job offers
        </p>
        <div className="flex gap-x-3 items-center">
          <p className="text-[20px] text-hero">Browse all</p>
          <Image src={ArrowPurple} alt='' style={{width: '24px', height: '24px'}}/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-4">
        <JobCard/>
        <JobCard/>
        <JobCard/>
      </div>
    </div>
  )
}

export default SimilarJobOffers