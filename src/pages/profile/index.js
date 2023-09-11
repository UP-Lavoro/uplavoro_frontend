import React, { useEffect, useState } from "react";
import Contracts from "@/components/profile/contracts";
import Payrolls from "@/components/profile/payrolls";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "@/components/privateRoute";
import { getSession } from "next-auth/react";
import { getConfig, getUser, getUserCV } from "@/redux/actions/userActions";
import ProfileLayout from "@/components/profileLayout";
import Communications from "@/components/profile/communications";
import { useRouter } from "next/router";
import ProfileDocumentBar from "@/components/profile/profileDocumentBar";
import IncompleteProfileIcon from "@/components/svgs/incompleteProfileIcon";


const Profile = ({ session }) => {
  const { token } = useSelector((state) => state?.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUser(token));
    }else{
      router.push('/login')
    }
  }, [token]);

  

  return (
    <ProfileLayout >
      <div className="flex flex-col">
      <p className='text-hero text-[30px] tracking-[-0.9px] font-extrabold pb-4'>My Documents</p>
        <Contracts />
        <Payrolls />
        <Communications />
      </div>
    </ProfileLayout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default withAuth(Profile);
