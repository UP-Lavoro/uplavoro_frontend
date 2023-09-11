import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Logo from '../../../public/assets/images/Logo.svg'
import ArrowWhite from '../../../public/assets/icons/arrow-white.svg'
import Note2 from '../../../public/assets/icons/note-2.svg'
import Briefcase from '../../../public/assets/icons/briefcase.svg'
import Star from '../../../public/assets/icons/star.svg'
import Send2 from '../../../public/assets/icons/send-2.svg'


const LeftSection = (props) => {
    let companyBgColor = 'bg-[#4338CA]'
    
    return (
        <div className={`${props?.callFrom == 'company' ? companyBgColor : 'bg-hero'} flex justify-evenly py-2 h-[100%]`}>
            <div className={`flex flex-col gap-y-8 py-6`}>

            
            <Link href={'/'}>
                <Image src={Logo} alt='' style={{ width: '102.73px', height: '59.99px' }} />
            </Link>
            <div className='flex flex-col pt-6 font-extrabold text-white text-[32px]'>
                <p className='flex items-end'>The first step
                    <br />towards a new
                </p>
                <div className='flex gap-x-4 items-center'>
                    <p className='flex items-end '>
                        future
                    </p>
                    <Image src={ArrowWhite} alt='' style={{ width: '24px', height: '24px' }} />
                </div>

            </div>

            
        {props?.callFrom == 'company' ?
            <div className='flex flex-col gap-y-2 text-white text-[18px] font-light tracking-[-0.6px]'>
                <div className='flex gap-x-2'>
                    <Image src={Note2} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=''>Manage job offers</p>
                </div>
                <div className='flex gap-x-2 '>
                    <Image src={Briefcase} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=' '>Find the right employees</p>
                </div>
            </div>
            : 
            <div className='flex flex-col gap-y-2 text-white text-[18px] font-light tracking-[-0.6px]'>
                <div className='flex gap-x-2'>
                    <Image src={Note2} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=''>Create and share your CV</p>
                </div>
                <div className='flex gap-x-2 '>
                    <Image src={Briefcase} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=' '>Find the job that’s right for you</p>
                </div>
                <div className='flex gap-x-2'>
                    <Image src={Star} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=''>Save jobs to your favorites</p>
                </div>
                <div className='flex gap-x-2'>
                    <Image src={Send2} alt='' style={{ width: '24px', height: '24px' }} />
                    <p className=''>Apply and send your CV</p>
                </div>
            </div>
            }
            </div>
        </div>
    )
}

export default LeftSection