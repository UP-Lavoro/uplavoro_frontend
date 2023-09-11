import OffersScreen from "@/components/admin/offers/offersScreen";
import DashboardLayout from "@/components/dashboardLayout";
import withAuth from "@/components/privateRoute";
import { getJobOffers, getJobOffersCategory, getJobOffersGroup } from "@/redux/actions/adminActions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Offers = () => {
  const auth = useSelector(state=> state?.auth)
  const {jobOffers} = useSelector(state=> state?.admin)
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(auth?.token){
      dispatch(getJobOffers(auth?.token))
      dispatch(getJobOffersGroup(auth?.token))
      dispatch(getJobOffersCategory(auth?.token))
    }else{
      router.push('/admin/login')
    }
  },[auth])
  return (
    <DashboardLayout component={"offers"}>
      <OffersScreen jobOffers={jobOffers} callFrom='admin_offers'/>
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

export default withAuth(Offers);
