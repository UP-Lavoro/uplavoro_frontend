import Button from '@/components/common/button'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import Hero1 from '../../../../public/assets/images/hero-1.svg'
import ReactSelectField from '@/components/common/reactSelectField'
import Send from '../../../../public/assets/icons/send.svg'
import Hero2 from '../../../../public/assets/images/hero-2.svg'
import MultipleFields from '@/components/common/multipleFields'
import useTranslation from 'next-translate/useTranslation'

const Hero = () => {

    const { t, lang } = useTranslation('common')
    const example = t('variable-example', { count: 42 })
    const { control, errors, handleSubmit } = useForm({});

    return (
        <div className='relative w-full bg-hero overflow-hidden'>
            <div className='flex flex-col w-full items-center gap-y-8 py-8 px-44'>
                <div className='flex justify-center'>
                    <Image style={{width: '90.84px'}} src={Hero1} alt=''/>
                </div>
                <div className='flex justify-center text-center px-44'>
                    <p className='text-white md:text-[50px] lg:text-[70px] xl:text-[100px] tracking-tight leading-tight'>
                       {t('Find a job in less than 10 minutes')}
                    </p>
                </div>

                <div className='w-full flex justify-center'>
                <MultipleFields control={control}/>
                </div>
                <div className='flex justify-center gap-x-4 py-12 pr-10'>
                    <Button title='Build your cv' ring={true} style={'w-[220px] bg-white text-hero xl:text-[20px]'}/>
                    <Button title='Browse job offers' ring={true} style={'w-[220px] bg-hero text-white xl:text-[20px]'}/>
                </div>


            </div>
            
            <div className=''>
                <Image style={{width: '235px', height: '470px', position: 'absolute', right: '-20px', bottom: '-150px'}} src={Hero2} alt='' />
            </div>
        </div>
    )
}

export default Hero