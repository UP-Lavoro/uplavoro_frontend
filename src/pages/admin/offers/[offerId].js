import BackLink from '@/components/admin/backLink';
import Appliers from '@/components/admin/offers/components/appliers';
import Favourites from '@/components/admin/offers/components/favourites';
import JobOfferForm from '@/components/admin/offers/components/jobOfferForm';
import DashboardLayout from '@/components/dashboardLayout';
import withAuth from '@/components/privateRoute';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const JobOfferPage = () => {
    const router = useRouter();
    const { offerId } = router.query;
    const { jobOffers } = useSelector((state) => state?.admin);
  const [offerById, setOfferById] = useState(null);

  useEffect(() => {
    if (offerId && jobOffers) {
      let specificOffer = jobOffers?.find((obj) => obj?.id == offerId);
      setOfferById(specificOffer);
    }
  }, [offerId]);
  
    return (
      <DashboardLayout component={"offers"}>
        <div className="flex flex-col gap-y-2">
        <BackLink name={"offers"} link={"/admin/offers"} />
        <div className='flex flex-col gap-y-4'>
        <p className="text-[40px] font-bold tracking-[-1.2px]">
          Warehouse worker part-time
        </p>
        <p className="text-[20px] font-semibold tracking-[-0.6px]">
          Job offer <span className='text-hero'>#21</span>
        </p>
        </div>
        <div className="flex flex-col divide-y divide-[#C3C1C1]">
          <div className="w-full flex pb-10 pt-4">
          <JobOfferForm jobOffer={offerById}/>
          </div>
          {offerId == 'new' ? '' :
          <>
          <div className="w-full flex pt-10 pb-16">
            <Appliers />
          </div>
          <div className="w-full flex py-10">
            <Favourites />
          </div>
          </>
          }
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

export default withAuth(JobOfferPage)