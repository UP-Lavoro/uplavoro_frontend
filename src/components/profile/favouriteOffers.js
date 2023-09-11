import React, { useEffect, useState } from "react";
import JobCard from "../jobOffers/jobCard";
import { useSelector } from "react-redux";

const FavouriteOffers = () => {
  const { favouriteOffers } = useSelector((state) => state?.user);
  const [favOffers, setFavOffers] = useState([]);
  console.log("🚀 ~ file: favouriteOffers.js:8 ~ FavouriteOffers ~ favOffers:", favouriteOffers)

  useEffect(() => {
    if (favouriteOffers.length >= 0) {
      setFavOffers([...favouriteOffers]);
    }
  }, [favouriteOffers]);
  return (
    <div className="flex flex-col gap-y-6">
      <p className="text-hero text-[30px] tracking-[-0.9px] font-extrabold">
        Favorites offers
      </p>
      <div className="flex flex-wrap lg:gap-4 xl:gap-6">
        {favOffers?.length > 0 ? (
          favOffers?.map((offer, ind) => {
            return (
              <JobCard
                key={ind}
                cardType={"favourite"}
                callFrom="profile"
                card={offer}
              />
            );
          })
        ) : (
          <p className="text-black font-bold">No Favourite Offers</p>
        )}
      </div>
    </div>
  );
};

export default FavouriteOffers;
