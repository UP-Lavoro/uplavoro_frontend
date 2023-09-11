import DashboardScreen from '@/components/admin/dashboard/dashboardScreen';
import DashboardLayout from '@/components/dashboardLayout';
import withAuth from '@/components/privateRoute';
import { getAdmin } from '@/redux/actions/adminActions';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const auth = useSelector(state=> state?.auth)
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(auth?.token){
      dispatch(getAdmin(auth?.token))
    }else{
      router.push('/admin/login')
    }
  },[auth])

  return (
    <DashboardLayout component={'dashboard'}>
          <DashboardScreen/>
      </DashboardLayout>
  )
}

export async function getServerSideProps(context) {
  
    return {
      props: {
        notShowHeader: true,
      },
    };
  }

export default withAuth(Dashboard)