import BackLink from '@/components/admin/backLink';
import AdditionalInfosUser from '@/components/admin/users/componenets/additionalInfos';
import AppliedOffers from '@/components/admin/users/componenets/appliedOffers';
import FavouriteOffers from '@/components/admin/users/componenets/favouriteOffers';
import QuickActionsUser from '@/components/admin/users/componenets/quickActions';
import UserForm from '@/components/admin/users/componenets/userForm';
import DashboardLayout from '@/components/dashboardLayout';
import withAuth from '@/components/privateRoute';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Young1 from "../../../../../../public/assets/images/young1.svg";

const UserDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { branchUsers } = useSelector(state=> state?.admin)
    const [userById, setUserById] = useState(null)
    console.log("🚀 ~ file: [userId].js:7 ~ UserPage ~ userId:", id);
  
    useEffect(()=>{
      if(id && branchUsers){
        let specificUser = branchUsers?.find(obj=> obj?.slug == id)
        setUserById(specificUser)
      }
    },[id])
  
    return (
      <DashboardLayout component={"branches"}>
        <div className="flex flex-col gap-y-2">
          <BackLink name={"users"} link={"/admin/branches/users"} />
          <div className="flex items-center gap-x-6">
            <p className="text-[40px] font-bold tracking-[-1.2px]">Enri Orlandi</p>
            <Image
              src={Young1}
              style={{ borderRadius: "100%" }}
              alt="user image"
              width={50}
              height={50}
            />
          </div>
  
          <div className="flex flex-col divide-y divide-[#C3C1C1]">
            <div className="flex justify-between py-4 pb-10">
              <div className="w-[62%]">
                <UserForm userData={userById}/>
              </div>
              <div className="w-[34%] flex flex-col gap-y-6 pt-8">
                <QuickActionsUser />
                <AdditionalInfosUser userData={userById}/>
              </div>
            </div>
            <div className="w-full flex pt-10 pb-16">
              <AppliedOffers />
            </div>
            <div className="w-full flex py-10">
              <FavouriteOffers />
            </div>
          </div>
        </div>
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

export default withAuth(UserDetail)