import React, { useEffect, useState } from "react";
import CompleteProfileForm from "../settings/completeProfileForm";
import IncompleteProfileIcon from "../svgs/incompleteProfileIcon";
import { useSelector } from "react-redux";

const PersonalData = ({ user }) => {
  const { info } = useSelector((state) => state?.user);

  const [profileStatus, setProfileStatus] = useState(false);
  useEffect(() => {
    if (info != null && info != undefined) {
      if (
        info?.profile?.name != null &&
        info?.profile?.surname != null &&
        info?.profile?.gender != null &&
        info?.profile?.birth_date != null &&
        info?.profile?.birth_nation != null &&
        info?.profile?.birth_municipality != null &&
        info?.profile?.residence_address != null &&
        info?.profile?.residence_postalcode != null &&
        info?.profile?.phone != null
      ) {
        setProfileStatus(true);
      } else {
        setProfileStatus(false);
      }
    }
  }, [info]);
  return (
    <div className="flex flex-col gap-y-6">
      <p className="text-hero text-[30px] tracking-[-0.9px] font-extrabold">
        My personal data
      </p>
      <div className="w-full flex flex-col gap-y-4 divide-y-2 divide-[#C6C6C6]">
        <div className="pb-4">
          {profileStatus == false ? (
            <>
              <div className="flex items-center gap-x-2">
                <IncompleteProfileIcon
                  width={24}
                  height={24}
                  color={"#CB0000"}
                />
                <p className="text-[20px] tracking-[-0.6px] text-black">
                  Profile incomplete. Complete your profile to apply for job
                  offers.{" "}
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <IncompleteProfileIcon
                  width={24}
                  height={24}
                  color={"#CB0000"}
                />
                <p className="text-[20px] tracking-[-0.6px] text-black">
                  Resume not uploaded or created.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-x-2">
                <IncompleteProfileIcon
                  width={24}
                  height={24}
                  color={"#008e10"}
                />
                <p className="text-[20px] tracking-[-0.6px] text-black">
                  Profile complete! You can apply for job offers.
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <IncompleteProfileIcon
                  width={24}
                  height={24}
                  color={"#008e10"}
                />
                <p className="text-[20px] tracking-[-0.6px] text-black">
                  Resume correctly uploaded/created!
                </p>
              </div>
            </>
          )}
        </div>
        <div className="">
          <CompleteProfileForm callFrom="from_profile" />
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
