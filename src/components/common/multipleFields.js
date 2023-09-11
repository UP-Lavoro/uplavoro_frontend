import React from 'react'
import ReactSelectField from './reactSelectField'
import Send from '../../../public/assets/icons/send.svg'
import Image from 'next/image'


const MultipleFields = (props) => {
    return (
        <div className={`flex w-full ${props?.start ? 'justify-start' : 'justify-center'} items-end`}>
            <div className='flex flex-col gap-y-1 w-[40%]'>
                {props?.start ? '' :
                <label className='text-white text-[22px] xl:text-[30px]'>
                    Select job category
                </label>
                }
                <div className={`bg-white rounded-l-md truncate text-ellipsis`} title={"What type of job are you looking for?"}>
                    <ReactSelectField
                        placeholder="What type of job are you looking for?"
                        name="allergen_type"
                        control={props?.control}
                        borderTopLeftRadius={'5px'}
                        borderBottomLeftRadius={'5px'}
                        minHeight={'40px'}
                    />
                </div>


            </div>

            <div className='flex flex-col gap-y-1 w-[40%]'>
            {props?.start ? '' :
                <label className='text-white text-[22px] xl:text-[30px]'>
                    Select a city
                </label>
                }
                <div className='bg-transparent rounded-r-md truncate text-ellipsis'>
                    <ReactSelectField
                        placeholder="Start typing a city"
                        name="allergen_type"
                        control={props?.control}
                        borderTopRightRadius={'5px'}
                        borderBottomRightRadius={'5px'}
                        minHeight={'40px'}
                    />
                </div>

            </div>

            <div className='ml-1 bg-white rounded-md'>
                <Image src={Send} alt='' style={{width: '61px', height: '61px'}}/>
            </div>

        </div>
    )
}

export default MultipleFields