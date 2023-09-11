import { useRouter } from "next/router";
import React from "react";

const DashboardCard = (props) => {

  const router = useRouter();
    function splitWithBreakLine(text) {
        const parts = text.split(' ');
        if (parts.length > 1) {
          return <p className={`leading-10 font-bold ${props?.textColor ? props?.textColor : ''}`}>{parts[0]}<br/>{parts[1]} {parts?.length > 2 ? parts[2] : ''}</p>;
        } else {
          return <p className="font-bold">{text}</p>;
        }
      }
  return (
    <div
      className={`md:w-[260px] lg:w-[23%] h-[198px] text-[30px] rounded-[16px] p-6 flex items-center cursor-pointer ${
        props?.bgColor ? props?.bgColor : ""
      } ${props?.bgOpacity ? props?.bgOpacity : ''}`} onClick={()=> router.push(props?.link)}
    >
        {props?.title ? splitWithBreakLine(props?.title) : ""}
    </div>
  );
};

export default DashboardCard;
