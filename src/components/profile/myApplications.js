import React, { useEffect, useState } from "react";
import JobCard from "../jobOffers/jobCard";
import { useSelector } from "react-redux";

const MyApplications = () => {
  const { appliedOffers } = useSelector((state) => state?.user);
  const [appliedOffersList, setAppliedOffersList] = useState([]);

  useEffect(() => {
    if (appliedOffers?.length >= 0) {
      setAppliedOffersList([...appliedOffers]);
    }
  }, [appliedOffers]);
  return (
    <div className="flex flex-col gap-y-6">
      <p className="text-hero text-[30px] tracking-[-0.9px] font-extrabold">
        My Applications
      </p>
      <div className="flex flex-wrap lg:gap-4 xl:gap-6">
        {appliedOffersList?.length > 0 ? (
          appliedOffersList?.map((offer, ind) => {
            return <JobCard key={ind} callFrom="profile" card={offer}/>;
          })
        ) : (
          <p className="text-black font-bold">No Applied Offers</p>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
