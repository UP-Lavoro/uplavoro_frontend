import PostPage from "@/components/post";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OfferPage = () => {
  const router = useRouter();
  const { offerId } = router.query;

  const { jobOffers } = useSelector((state) => state?.user);
  const [offerById, setOfferById] = useState(null);

  useEffect(() => {
    if (offerId && jobOffers) {
      let specificOffer = jobOffers?.data?.find((obj) => obj?.id == offerId);
      setOfferById(specificOffer);
    }
  }, [offerId]);
  return <PostPage offerById={offerById}/>;
};

export default OfferPage;
