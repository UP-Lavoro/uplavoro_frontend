import TitleCard from "@/components/common/titleCard";
import withAuth from "@/components/privateRoute";
import CompleteProfileForm from "@/components/settings/completeProfileForm";
import { getUser } from "@/redux/actions/userActions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
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
    <div className="flex-flex-col">
      <TitleCard
        headingWithBr={true}
        beforeBr={"Complete your profile"}
        afterBr={"to start using the platform"}
      />
      <CompleteProfileForm />
    </div>
  );
};

export default withAuth(Settings);
