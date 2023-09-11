import UsersScreen from '@/components/admin/users/usersScreen';
import DashboardLayout from '@/components/dashboardLayout';
import withAuth from '@/components/privateRoute';
import { getBranchUsers } from '@/redux/actions/adminActions';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const BranchUsers = () => {
    const auth = useSelector(state=> state?.auth)
    const router = useRouter();
    const dispatch = useDispatch();
    const { branchUsers } = useSelector(state=> state?.admin)
    const { id } = router.query;
    useEffect(()=>{
      if(auth?.token){
        dispatch(getBranchUsers(auth?.token, id))
      }else{
        router.push('/admin/login')
      }
    },[auth])
    return (
      <DashboardLayout component={"branches"}>
        <UsersScreen branchUsers={branchUsers} callFrom='branches'/>
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
  

export default withAuth(BranchUsers) 