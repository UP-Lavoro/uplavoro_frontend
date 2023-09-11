import OffersScreen from '@/components/admin/offers/offersScreen';
import DashboardLayout from '@/components/dashboardLayout';
import { getBranchJobOffers } from '@/redux/actions/adminActions';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const BranchJobOffers = () => {
    const auth = useSelector(state=> state?.auth)
    const router = useRouter();
    const dispatch = useDispatch();
    const { branchJobOffers } = useSelector(state=> state?.admin)
    const { id } = router.query;
    useEffect(()=>{
      if(auth?.token){
        dispatch(getBranchJobOffers(auth?.token, id))
      }else{
        router.push('/admin/login')
      }
    },[auth])
    return (
      <DashboardLayout component={"branches"}>
        <OffersScreen branchJobOffers={branchJobOffers} callFrom='branches'/>
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
  

export default BranchJobOffers