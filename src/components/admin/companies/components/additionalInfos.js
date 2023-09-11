import React from 'react'

const AdditionalInfosCompany = () => {
  return (
    <div className="w-full p-6 rounded-[16px] border border-[#C3C1C1] bg-white">
      <p className="font-bold text-[25px] tracking-[-0.75px]">
        Additional infos
      </p>
      <div className="flex flex-col gap-y-4 py-6">
        <p className="text-[18px] xl:text-[20px] text-[#696969] tracking-[-0.6px]">
        WN Code: <span className="text-[#4338CA]">SKI39D</span>
        <br/>
        Contact: <span className="text-[#4338CA]">WN-0001</span>  
        <br/>
        Via Facebook Registrered: <span className="text-[#4338CA]">12 Gen 2020</span>  
        <br/>
        Synced: <span className="text-[#4338CA]"> - </span>  
        </p>
      </div>

    </div>
  )
}

export default AdditionalInfosCompany