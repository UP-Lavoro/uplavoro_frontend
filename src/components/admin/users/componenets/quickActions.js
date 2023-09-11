import Button from "@/components/common/button";
import Clipboard from "@/components/svgs/clipboard";
import React from "react";

const QuickActionsUser = () => {
  return (
    <div className="w-full p-6 rounded-[16px] border border-[#C3C1C1] bg-white">
      <p className="font-bold text-[25px] tracking-[-0.75px]">Quick actions</p>
      <div className="flex flex-col gap-y-4 py-6">
        <div className="flex justify-between items-center p-4 rounded-[8px] border border-[#4338CA]">
          <p className="text-[18px] xl:text-[20px] text-[#4338ca] tracking-[-0.6px]">
            View resume
          </p>
          <Clipboard color={"#4338ca"} />
        </div>

        <div className="flex justify-between items-center p-4 rounded-[8px] border border-[#4338CA]">
          <p className="text-[18px] xl:text-[20px] text-[#4338ca] tracking-[-0.6px]">
            Send an email
          </p>
          <Clipboard color={"#4338ca"} />
        </div>
        <div className="flex justify-between items-center p-4 rounded-[8px] border border-[#4338CA]">
          <p className="text-[18px] xl:text-[20px] text-[#4338ca] tracking-[-0.6px]">
            Assign a branch
          </p>
          <Clipboard color={"#4338ca"} />
        </div>

        <Button
          title="Synchronize with Whitenet"
          style={
            "w-full py-4 rounded-[12px] text-[18px] xl:text-[20px] bg-[#4338ca] text-white"
          }
          // loading={isLoading}
        />
      </div>
    </div>
  );
};

export default QuickActionsUser;
