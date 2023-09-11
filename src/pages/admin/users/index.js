import UsersScreen from "@/components/admin/users/usersScreen";
import DashboardLayout from "@/components/dashboardLayout";
import withAuth from "@/components/privateRoute";
import { getUsers } from "@/redux/actions/adminActions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const auth = useSelector(state=> state?.auth)
  const {users} = useSelector(state=> state?.admin)
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(auth?.token){
      dispatch(getUsers(auth?.token))
    }else{
      router.push('/admin/login')
    }
  },[auth])
  return (
    <DashboardLayout component={"users"}>
      <UsersScreen users={users} callFrom='admin_users'/>
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

export default withAuth(Users);
