import React from "react";
import Location from "../../../../../public/assets/icons/location.svg";
import Award from "../../../../../public/assets/icons/award.svg";
import Timer from "../../../../../public/assets/icons/timer.svg";
import CalendarRemove from "../../../../../public/assets/icons/calendar-remove.svg";
import TickCircle from "../../../../../public/assets/icons/tick-circle.svg";
import Image from "next/image";

const OfferCardDetail = ({offerData = null}) => {
  return (
    <div className="flex justify-between pt-2 pb-20">
      <div className="w-[62%] flex flex-col gap-y-4">
        <p className="text-[40px] font-bold tracking-[-1.2px]">
          Part-time warehouse clerk employee
        </p>
        <div className="flex items-center justify-between w-[273px] rounded-[8px] p-4 border border-[#3E8C2B]">
          <p className="text-[20px] tracking-[-0.6px] text-[#3E8C2B]">
            ONGOING
          </p>
          <Image
            src={TickCircle}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
        </div>
        <div className="flex flex-col gap-y-2 py-2">
        <p className="text-[20px] tracking-[-0.6px]">
          ID Whitenet: <span className="">XJ38D</span>
        </p>
        <p className="text-[20px] tracking-[-0.6px]">
          Company: <span className="text-[#4338CA]">IDC srl</span>
        </p>
        </div>
      </div>
      <div className="w-[34%] pt-20">
        <div className="w-full p-6 rounded-[16px] border border-[#C3C1C1] bg-white">
          <div className="flex flex-col gap-y-4 pt-4">
            <div className="flex gap-x-4 items-center">
              <Image
                src={Location}
                alt=""
                style={{ width: "41px", height: "41px" }}
              />
              <p className="text-[20px] tracking-[-0.39px]">
                Roma, Italia
              </p>
            </div>
            <div className="flex gap-x-4 items-center">
              <Image
                src={Award}
                alt=""
                style={{ width: "41px", height: "41px" }}
              />
              <p className="text-[20px] tracking-[-0.39px]">
                Permanent contract
              </p>
            </div>
            <div className="flex gap-x-4 items-center">
              <Image
                src={Timer}
                alt=""
                style={{ width: "41px", height: "41px" }}
              />
              <p className="text-[20px] tracking-[-0.39px]">
                Full Time
              </p>
            </div>
            <div className="flex gap-x-4 items-center">
              <Image
                src={CalendarRemove}
                alt=""
                style={{ width: "41px", height: "41px" }}
              />
              <p className="text-[20px] tracking-[-0.39px]">
                Expires on 12/10/22
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCardDetail;
