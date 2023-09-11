import Briefcase from "@/components/svgs/briefcase";
import SendIcon from "@/components/svgs/sendIcon";
import React from "react";
import ArrowSquareRight from "../../../../../public/assets/icons/arrow-square-right.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const userData = {
  name: "Warehouse worker part-time",
  taxIdCode: "SFI3SX",
  location: "13",
  status: "Parma 2",
  assignment: "Ongoing",
};

const JobOfferBar = ({offer, callFrom}) => {
  const router = useRouter();
  return (
    <div className="min-h-[90px] rounded-[8px] border border-[#C3C1C1] flex divide-x divide-[#C3C1C1] bg-white cursor-pointer" onClick={()=>{
      if(callFrom == 'branches'){
        router.push(`/admin/branches/offers/detail/${offer?.id}`)
      }else{
        router.push(`/admin/offers/${offer?.id}`)
      }
    }}>
      <div className="w-[33%] p-4 flex justify-start items-center gap-x-3">
        <div className="flex  flex-col">
          <p className="text-black font-semibold tracking-[-0.6px] text-[20px]">
            {userData?.name}
          </p>
          <p className="text-black tracking-[-0.45px] text-[15px]">
            Offer code: <span className="text-hero">{userData?.taxIdCode}</span>
            {" - "}
            Company code:{" "}
            <span className="text-hero">{userData?.taxIdCode}</span>
          </p>
        </div>
      </div>
      <div className="w-[17%] p-4 flex items-center gap-x-2">
        <div>
          <Briefcase color="#4338CA" />
        </div>
        <p className="text-[#4338CA] tracking-[-0.45px] text-[15px]">
          {userData?.location} Candidates
        </p>
      </div>
      <div className="w-[17%] p-4 flex items-center gap-x-2">
        <div>
          <SendIcon color={"#4338CA"} />
        </div>
        <p className="text-[#4338CA] tracking-[-0.45px] text-[15px]">
          {userData?.status}
        </p>
      </div>
      <div className="w-[33%] p-4 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div>
            <SendIcon color={"#3E8C2B"} />
          </div>
          <p className="text-[#3E8C2B] tracking-[-0.45px] text-[15px]">
            {userData?.assignment}
          </p>
        </div>
        <Image src={ArrowSquareRight} width={"36"} height={"36"} alt="" />
      </div>
    </div>
  );
};

export default JobOfferBar;
