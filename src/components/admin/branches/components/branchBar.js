import Image from 'next/image'
import React from 'react'
import Young1 from "../../../../../public/assets/images/Logo.svg";
import Location from "@/components/svgs/location";
import Briefcase from '@/components/svgs/briefcase';
import ProfileCircle from '@/components/svgs/profileCircle';
import { useRouter } from 'next/router';

const userData = {
    name: "Castel San Pietro Terme",
    img: Young1,
    taxIdCode: "IT03932791209",
    location: "Job offers",
    status: "Linked users",
    assignment: "Linked companies",
  };

const BranchBar = ({branch}) => {
  console.log("🚀 ~ file: branchBar.js:19 ~ BranchBar ~ branch:", branch)
  const router = useRouter()
  return (
    <div className="min-h-[90px] rounded-[8px] border border-[#C3C1C1] flex divide-x divide-[#C3C1C1] bg-white" >
      <div className="w-[49%] p-2.5 flex justify-start items-center gap-x-3">
        {userData?.img ? (
          <Image
            src={userData?.img ? userData?.img : ""}
            width={"70"}
            height={"70"}
            alt=""
            style={{ borderRadius: "100%" }}
          />
        ) : (
          <span class="font-bold text-xl text-gray-50 dark:text-gray-50">
            {userData?.name?.charAt(0).toUpperCase()}
          </span>
        )}
        <div className="flex  flex-col">
          <p className="text-black font-semibold tracking-[-0.6px] text-[20px]">
            {userData?.name}
          </p>
        </div>
      </div>
      <div className="w-[17%] p-4 flex items-center gap-x-2 cursor-pointer" onClick={()=> router.push(`/admin/branches/offers/${branch?.id}`)}>
        <div>
        <Location color="#4338CA" />
        </div>
        <p className="text-[#4338CA] tracking-[-0.45px] text-[15px]">
          {userData?.location}
        </p>
      </div>
      <div className="w-[17%] p-4 flex items-center gap-x-2 cursor-pointer" onClick={()=> router.push(`/admin/branches/users/${branch?.id}`)}>
        <div>
        <ProfileCircle color={'#4338CA'}/>
        </div>
        <p className="text-[#4338CA] tracking-[-0.45px] text-[15px]">
          {userData?.status}
        </p>
      </div>
      <div className="w-[17%] p-4 flex items-center gap-x-2 cursor-pointer" onClick={()=> router.push(`/admin/branches/companies/${branch?.id}`)}>
        <div>
        <Briefcase color={'#4338CA'}/>
        </div>
        <p className="text-[#4338CA] tracking-[-0.45px] text-[15px]">
          {userData?.assignment}
        </p>
      </div>
     
    </div>
  )
}

export default BranchBar