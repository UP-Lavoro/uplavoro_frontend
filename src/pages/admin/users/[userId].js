import BackLink from "@/components/admin/backLink";
import DashboardLayout from "@/components/dashboardLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Young1 from "../../../../public/assets/images/young1.svg";
import UserForm from "@/components/admin/users/componenets/userForm";
import QuickActionsUser from "@/components/admin/users/componenets/quickActions";
import AdditionalInfosUser from "@/components/admin/users/componenets/additionalInfos";
import AppliedOffers from "@/components/admin/users/componenets/appliedOffers";
import FavouriteOffers from "@/components/admin/users/componenets/favouriteOffers";
import withAuth from "@/components/privateRoute";
import { useSelector } from "react-redux";
import CheckBox from "@/components/common/checkBox";
import { useForm } from "react-hook-form";

const jobCategoriesArr = [
  {
    slug: "building",
    name: "Building",
  },
  {
    slug: "logistic",
    name: "Logistic",
  },
  {
    slug: "workers_metalworking",
    name: "Workers - Metalworking",
  },
  {
    slug: "sanity",
    name: "Sanity",
  },
  {
    slug: "restauration_tourism",
    name: "Restauration - Tourism",
  },
  {
    slug: "office_administration",
    name: "Office - Administration",
  },
  {
    slug: "clerk_sales",
    name: "Clerk - Sales",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
  },
];

const UserPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { users } = useSelector((state) => state?.admin);
  console.log("🚀 ~ file: [userId].js:7 ~ UserPage ~ userId:", userId);
  const [userById, setUserById] = useState(null);
  const {control} = useForm({})

  useEffect(() => {
    if (userId && users) {
      let specificUser = users?.find((obj) => obj?.slug == userId);
      setUserById(specificUser);
    }
  }, [userId, users]);

  return (
    <DashboardLayout component={"users"}>
      <div className="flex flex-col gap-y-2">
        <BackLink name={"users"} link={"/admin/users"} />
        <div className="flex items-center gap-x-6">
          <p className="text-[40px] font-bold tracking-[-1.2px]">
            Enri Orlandi
          </p>
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
              <UserForm userData={userById} />
            </div>
            <div className="w-[34%] flex flex-col gap-y-6 pt-8">
              <QuickActionsUser />
              <div className="bg-white mt-6 rounded-[8px] border border-[#C6C4C4] h-[100%] pt-6 pb-10 px-8 flex flex-col gap-y-4">
                <p className="text-[20px] font-semibold tracking-[-0.6px]">
                  Job category
                </p>
                <div className="flex flex-col gap-y-4">
                  {jobCategoriesArr?.map((item, ind) => {
                    return (
                      <CheckBox
                        key={ind}
                        title={item.name}
                        control={control}
                        name={item.name}
                        //   rules={{
                        //     required: {
                        //       value: true,
                        //       message: "Checkbox required!",
                        //     },
                        //   }}
                        //   errors={errors}
                      />
                    );
                  })}
                </div>
              </div>
              <AdditionalInfosUser userData={userById} />
            </div>
          </div>
          {userId == 'new' ? '' : 
          <>
          <div className="w-full flex pt-10 pb-16">
            <AppliedOffers />
          </div>
          <div className="w-full flex py-10">
            <FavouriteOffers />
          </div>
          </>
          }
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

export default withAuth(UserPage);
