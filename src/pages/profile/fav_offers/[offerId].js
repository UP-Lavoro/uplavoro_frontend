import PostPage from "@/components/post";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FavouriteOfferPage = () => {
  const router = useRouter();
  const { offerId } = router.query;

  const { favouriteOffers } = useSelector((state) => state?.user);
  const [offerById, setOfferById] = useState(null);
  
  useEffect(() => {
      if (offerId && favouriteOffers) {
          let specificOffer = favouriteOffers?.find((obj) => obj?.id == offerId);
          console.log("🚀 ~ file: [offerId].js:12 ~ FavouriteOfferPage ~ offerById:", specificOffer)
      setOfferById(specificOffer);
    }
  }, [offerId]);
  return <PostPage offerById={offerById}/>;
};

export default FavouriteOfferPage;