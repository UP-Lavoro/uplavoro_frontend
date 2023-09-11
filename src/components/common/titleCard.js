import React from 'react'
import MultipleFields from './multipleFields'

const TitleCard = (props) => {
    return (
        <div className={`${props?.bgColor ? props?.bgColor : 'bg-hero'}  flex flex-col gap-y-3 md:px-14 lg:px-28 xl:px-[180px] 2xl:px-72 py-12`}>
            {props?.heading && <p className='text-white text-[32px] font-extrabold'>{props?.heading}</p>}
            {props?.headingWithBr && <p className='text-white text-[32px] font-extrabold'>{props?.beforeBr} <br/> {props?.afterBr}</p>}
            {props?.paragraph && <p className='text-white tracking-[-0.9px]'>{props?.paragraph}</p>}
            {props?.paragraphWithBr && <p className='text-white tracking-[-0.9px]'>{props?.beforeBr} <br/> {props?.afterBr}</p>}
            {props?.headingAfterParagraph && <p className='text-white text-[32px] font-extrabold'>{props?.headingAfterParagraph}</p>}
            {props?.field && props?.control && <div className='flex w-full justify-start'> <MultipleFields control={props?.control} start={props?.start ? props?.start : false}/></div>}
        </div>
    )
}

export default TitleCard