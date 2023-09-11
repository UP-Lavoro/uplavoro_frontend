import React from 'react'
import JobCard from '../jobOffers/jobCard'

const CompanyOffers = ({callFrom = ''}) => {
  return (
    <div className="flex flex-col gap-y-6">
      <p className={`text-[#4338ca] text-[30px] tracking-[-0.9px] font-extrabold`}>
        My Offers
      </p>
      <div className="flex flex-wrap lg:gap-4 xl:gap-6">
        <JobCard callFrom={callFrom}/>
        <JobCard callFrom={callFrom}/>
      </div>
    </div>
  )
}

export default CompanyOffers