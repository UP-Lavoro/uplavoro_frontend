import BackLink from '@/components/admin/backLink';
import DashboardLayout from '@/components/dashboardLayout';
import withAuth from '@/components/privateRoute';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import OfferCardDetail from '@/components/admin/offers/components/offerCardDetail';
import Appliers from '@/components/admin/offers/components/appliers';
import Favourites from '@/components/admin/offers/components/favourites';

const OfferDetail = () => {
  const router = useRouter();
  const { offerId } = router.query;
  const { branchJobOffers } = useSelector((state) => state?.admin);
const [offerById, setOfferById] = useState(null);

useEffect(() => {
  if (offerId && branchJobOffers) {
    let specificOffer = branchJobOffers?.find((obj) => obj?.id == offerId);
    setOfferById(specificOffer);
  }
}, [offerId]);

  return (
    <DashboardLayout component={"branches"}>
      <div className="flex flex-col gap-y-2">
      <BackLink name={"offers"} link={"/admin/offers"} />
      
      <div className="flex flex-col divide-y divide-[#C3C1C1]">
        <OfferCardDetail offerData={offerById}/>
        <div className="w-full flex pt-10 pb-16">
          <Appliers />
        </div>
        <div className="w-full flex py-10">
          <Favourites />
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export async function getServerSideProps(context) {
  // const session = await getSession(context);

  return {
    props: {
      notShowHeader: true,
    },
  };
}

export default withAuth(OfferDetail)