import PostPage from "@/components/post";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AppliedOfferPage = () => {
  const router = useRouter();
  const { offerId } = router.query;

  const { appliedOffers } = useSelector((state) => state?.user);
  const [offerById, setOfferById] = useState(null);

  useEffect(() => {
    if (offerId && appliedOffers) {
      let specificOffer = appliedOffers?.find((obj) => obj?.id == offerId);
      setOfferById(specificOffer);
    }
  }, [offerId]);
  return <PostPage offerById={offerById} />;
};

export default AppliedOfferPage;
