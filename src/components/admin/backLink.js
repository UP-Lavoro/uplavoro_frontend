import React from 'react'
import ArrowLeft from '../../../public/assets/icons/arrow-square-left.svg'
import Image from 'next/image'
import Link from 'next/link'

const BackLink = (props) => {
  return (
    <Link href={props?.link ? props?.link : ''} className='flex gap-x-2'>
        <Image src={ArrowLeft} alt='' width={24} height={24}/>
        <p className='text-[20px] text-[#280E9E] tracking-[-0.6px]'>Back to {props?.name ? props?.name : ''}</p>
    </Link>
  )
}

export default BackLink