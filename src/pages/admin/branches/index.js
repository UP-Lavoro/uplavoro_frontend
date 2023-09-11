import BranchesScreen from "@/components/admin/branches/branchesScreen";
import DashboardLayout from "@/components/dashboardLayout";
import withAuth from "@/components/privateRoute";
import { getBranches } from "@/redux/actions/adminActions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Branches = () => {
  const auth = useSelector(state=> state?.auth)
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(auth?.token){
      dispatch(getBranches(auth?.token))
    }else{
      router.push('/admin/login')
    }
  },[auth])
  return (
    <DashboardLayout component={"branches"}>
      <BranchesScreen/>
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

export default withAuth(Branches);