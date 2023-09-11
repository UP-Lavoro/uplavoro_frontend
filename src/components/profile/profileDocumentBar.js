import React from "react";
import TickCircle from "../svgs/tickCircle";
import Image from "next/image";
import ArrowSquareRight from '../../../public/assets/icons/arrow-square-right.svg'

const ProfileDocumentBar = () => {
  return (
    <div class="w-full grid grid-cols-10 divide-x rounded-[8px] border border-[#C3C1C1]">
      <div className="p-4 col-span-3">
        <p className="font-semibold text-black tracking-[-0.48px]">Document name</p>
      </div>
      <div className="p-3 flex gap-x-2 items-center border-l-[#C3C1C1] col-span-4">
        <TickCircle color={'#008E10'}/>
      <p className="font-semibold text-[#008E10] text-[15px] tracking-[-0.48px]">Opened in 25/06/2023 at 13:30</p>
      </div>
      <div className="p-2 border-l-[#C3C1C1] col-span-3 flex items-center justify-end">
        <Image src={ArrowSquareRight} alt="" width={37} height={37}/>
      </div>
    </div>
  );
};

export default ProfileDocumentBar;
