import CompaniesScreen from "@/components/admin/companies/companiesScreen";
import DashboardLayout from "@/components/dashboardLayout";
import withAuth from "@/components/privateRoute";
import { getCompanies } from "@/redux/actions/adminActions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Companies = () => {
  const auth = useSelector(state=> state?.auth)
  const {companies} = useSelector(state=> state?.admin)
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(auth?.token){
      dispatch(getCompanies(auth?.token))
    }else{
      router.push('/admin/login')
    }
  },[auth])
  return (
    <DashboardLayout component={"companies"}>
      <CompaniesScreen companies={companies} callFrom='admin_companies'/>
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

export default withAuth(Companies);
