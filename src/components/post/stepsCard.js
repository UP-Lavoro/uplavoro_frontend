import React from 'react'

const StepsCard = (props) => {
  return (
    <div className={`md:min-w-[500px] xl:min-w-[681px] h-[231px] text-white flex flex-col px-8 py-10 gap-y-2 rounded-[12px] ${props?.background ? props?.background : 'bg-hero'}`}>
        <p className='md:text-[22px] text-[25px] tracking-[-0.6px]'>{props?.heading ? props?.heading : ''}</p>
        <p className='md:text-[18px] text-[20px] tracking-[-0.6px]'>{props?.paragraph ? props?.paragraph : ''}</p>
    </div>
  )
}

export default StepsCard