import CompaniesScreen from '@/components/admin/companies/companiesScreen';
import DashboardLayout from '@/components/dashboardLayout';
import { getBranchCompanies } from '@/redux/actions/adminActions';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const BranchCompanies = () => {
    const auth = useSelector(state=> state?.auth)
    const router = useRouter();
    const dispatch = useDispatch();
    const { branchCompanies } = useSelector(state=> state?.admin)
    const { id } = router.query;
    useEffect(()=>{
      if(auth?.token){
        dispatch(getBranchCompanies(auth?.token, id))
      }else{
        router.push('/admin/login')
      }
    },[auth])
    return (
      <DashboardLayout component={"branches"}>
        <CompaniesScreen branchCompanies={branchCompanies} callFrom='branches'/>
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

export default BranchCompanies