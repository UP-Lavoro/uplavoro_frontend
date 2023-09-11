import React from 'react'
import Location from '../../../public/assets/icons/location.svg'
import Award from '../../../public/assets/icons/award.svg'
import Timer from '../../../public/assets/icons/timer.svg'
import CalendarRemove from '../../../public/assets/icons/calendar-remove.svg'
import ArrowWhite from '../../../public/assets/icons/arrow-white.svg'
import Image from 'next/image'
import Star from '../svgs/star'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { addRemoveFavouriteOffer, applyForJob } from '@/redux/actions/userActions'

const PostDetail = ({offer={}, city={}}) => {

    const { token } = useSelector(state=> state?.auth);
    const dispatch = useDispatch();
    const jobApplyHandler = (obj) => {
        console.log("🚀 ~ file: postDetail.js:13 ~ jobApplyHandler ~ obj:", obj)
        if(token && obj?.id){
            dispatch(applyForJob({job_id: obj?.id}, token))
        }

    }

    const addToFavouriteHandler = (obj) => {
        if(token && obj?.id){
            dispatch(addRemoveFavouriteOffer({job_id: obj?.id}, token))
        }
    }
    return (
        <div className='flex flex-col lg:w-[100%] xl:w-[90%] gap-y-4'>
        <div className={`flex flex-col gap-y-2 bg-gray-200 rounded-[12px] lg:p-6 xl:p-8`}>
                <p className='text-[30px] tracking-[-0.69px] text-black font-extrabold break-words'>
                   Details
                </p>

            <div className='flex flex-col gap-y-2 xl:gap-y-4 py-2 xl:py-4'>
                <div className='flex gap-x-4 items-center'>
                    <Image src={Location} alt='' style={{ width: '41px', height: '41px' }} />
                    <p className=' tracking-[-0.39px] text-[#707070] font-semibold'>{`${city?.name}, ${city?.country}`}</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Image src={Award} alt='' style={{ width: '41px', height: '41px' }} />
                    <p className=' tracking-[-0.39px] text-[#707070] font-semibold'>{offer?.contract_type}</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Image src={Timer} alt='' style={{ width: '41px', height: '41px' }} />
                    <p className=' tracking-[-0.39px] text-[#707070] font-semibold'>Full Time</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <Image src={CalendarRemove} alt='' style={{ width: '41px', height: '41px' }} />
                    <p className=' tracking-[-0.39px] text-[#707070] font-semibold'>Expires on  {moment(offer?.expire_date).format("MM/DD/yyyy")}</p>
                </div>
            </div>
        </div>

        <div className='w-full flex justify-between rounded-md bg-[#B433F8] px-8 py-4' onClick={()=> jobApplyHandler(offer)}>
            <p className='text-white font-semibold'>Apply</p>
            <Image src={ArrowWhite} alt='' style={{ width: '24px', height: '24px' }} />
        </div>

        <div className='w-full flex justify-between rounded-md border border-[#B433F8] px-8 py-4' onClick={()=> addToFavouriteHandler(offer)}>
            <p className='font-semibold text-[#B433F8]'>Add to favorites</p>
            <Star color='#B433F8'/>
        </div>
        </div>
    )
}

export default PostDetail