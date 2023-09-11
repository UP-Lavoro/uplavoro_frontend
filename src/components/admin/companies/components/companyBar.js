import React from 'react'
import Young1 from "../../../../../public/assets/images/young1.svg";
import Location from "@/components/svgs/location";
import ArrowSquareRight from "../../../../../public/assets/icons/arrow-square-right.svg";
import StatusIcon from "@/components/svgs/statusIcon";
import SendIcon from "@/components/svgs/sendIcon";
import Image from 'next/image';
import ImageAlternate from '@/components/common/imageAlternate';
import { useRouter } from 'next/router';

const userData = {
  name: "IDC Srl",
  img: Young1,
  taxIdCode: "IT03932791209",
  location: "Bologna",
  status: "Synced",
  assignment: "Bologna 1",
};

const CompanyBar = ({company, callFrom=''}) => {
  const router = useRouter();
  return (
    <div className="min-h-[90px] rounded-[8px] border border-[#C3C1C1] flex divide-x divide-[#C3C1C1] bg-white" onClick={()=>{
      if(callFrom == 'branches'){
        router.push(`/admin/branches/companies/detail/${company?.slug}`)
      }else{
        router.push(`/admin/companies/${company?.id}`)
      }
    }}>
      <div className="w-[29%] p-2.5 flex justify-start items-center gap-x-3">
        {company?.image ? (
          <Image
            src={userData?.img ? userData?.img : ""}
            width={"70"}
            height={"70"}
            alt=""
            style={{ borderRadius: "100%" }}
          />
        ) : (
          <ImageAlternate name={company?.business_name}/>
        )}
        <div className="flex  flex-col">
          <p className="text-black font-semibold tracking-[-0.6px] text-[20px]">
            {company?.business_name}
          </p>
          <p className="text-black tracking-[-0.45px] text-[15px]">
            {company?.slug}
          </p>
        </div>
      </div>
      <div className="w-[15%] p-4 flex items-center gap-x-2">
        <div>
        <Location color="#4338CA" />
        </div>
        <p className="text-[#4338CA] tracking-[-0.45px] text-[15px]">
          {company?.country}
        </p>
      </div>
      <div className="w-[15%] p-4 flex items-center gap-x-2">
        <div>
        <StatusIcon color={'#3E8C2B'}/>
        </div>
        <p className="text-[#3E8C2B] tracking-[-0.45px] text-[15px]">
          {userData?.status}
        </p>
      </div>
      <div className="w-[41%] p-4 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div>
          <SendIcon color={'#3E8C2B'}/>
          </div>
          <p className="text-[#3E8C2B] tracking-[-0.45px] text-[15px]">
            {company?.city}
          </p>
        </div>
        <Image src={ArrowSquareRight} width={"36"} height={"36"} alt="" />
      </div>
    </div>
  )
}

export default CompanyBar