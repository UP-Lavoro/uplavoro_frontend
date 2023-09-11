import InputField from '@/components/common/inputField'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

const NewsLetter = () => {

    const {
        setValue,
        control,
        formState: { errors },
        handleSubmit,
      } = useForm({})
  return (
    <div className='relative flex items-center justify-between gap-x-3 w-full bg-white md:px-10 xl:px-44 2xl:px-72 py-20' >
        <div className='flex flex-col gap-y-3 w-1/2'>
            <p className='text-hero text-[24px] font-semibold'>
            Sign up to our newsletter
            </p>
            <p className='text-black text-[0.8rem]'>{`Don't miss the `}<strong>job offers</strong> and stay updated on all the <strong>initiatives</strong> of UP Agenzia per il Lavoro.</p>
        </div>
        <div className='flex gap-x-3 w-1/2'>
            <div className='w-[77%]'>
            <InputField name='email' padding={'p-[5px]'} control={control} placeholder='E-mail' />
            </div>
            <button className='w-[23%] bg-hero text-white font-semibold px-6 py-2 rounded-md'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter