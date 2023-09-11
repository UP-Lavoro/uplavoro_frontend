import Image from 'next/image'
import React from 'react'
import Facebook from "../../../../public/assets/icons/facebook.png";
import LinkedIn from "../../../../public/assets/icons/linkedin.png";
import Instagram from "../../../../public/assets/icons/instagram-icon.png";
import { useForm } from "react-hook-form";
import InputField from '@/components/common/inputField';



const SocialProfiles = ({control, errors}) => {

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex gap-x-5 items-center'>
        <Image src={Facebook} alt='' style={{width: '42px', height: '42px'}}/>
        <div className="flex flex-col w-full">
            <InputField
              name="facebook"
              placeholder="facebook.com/user/wosekjds9808s2"
              control={control}
            />
          </div>
      </div>
      <div className='flex gap-x-5 items-center'>
        <Image src={Instagram} alt='' style={{width: '42px', height: '42px'}}/>
        <div className="flex flex-col w-full">
            <InputField
              name="instagram"
              placeholder="Instagram.com/user/enriorlandi"
              control={control}
            />
          </div>
      </div>
      <div className='flex gap-x-5 items-center'>
        <Image src={LinkedIn} alt='' style={{width: '42px', height: '42px'}}/>
        <div className="flex flex-col w-full">
            <InputField
              name="linkedin"
              placeholder="linkedin.com/user/o2ij2nj39ddxk"
              control={control}
            />
          </div>
      </div>
    </div>
  )
}

export default SocialProfiles