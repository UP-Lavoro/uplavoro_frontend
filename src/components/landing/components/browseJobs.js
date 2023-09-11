import Button from "../../common/button";
import React from "react";

const BrowseJobs = ({ callFrom = "" }) => {
  return (
    <div
      className={`${
        callFrom == "company" ? "bg-[#4338ca]" : "bg-hero"
      } px-40 py-20`}
    >
      <div className="flex flex-col items-center">
        <p className="text-white text-[32px] font-extrabold">
          {callFrom == "company" ? "UP Lavoro." : "What are you waiting for?"}
        </p>
        <p className="text-white text-[32px] font-extrabold">
          {callFrom == "company"
            ? "We are your problem solver."
            : "Find the job that’s right for you!"}
        </p>
        {callFrom == "company" ? (
          ""
        ) : (
          <div className="pt-6">
            <Button
              title="Browse offers"
              style="bg-white text-hero text-[18px]"
              ring={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseJobs;
