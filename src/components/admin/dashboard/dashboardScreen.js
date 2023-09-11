import React from "react";
import DashboardCard from "./components/dashboardCard";

const cardsJson = [
  {
    title: "Manage Users",
    bgColor: "bg-[#500E9E]",
    textColor: "text-[#500E9E]",
    bgOpacity: "bg-opacity-[0.07]",
    link: '/admin/users',
  },
  {
    title: "Manage Job Offers",
    bgColor: "bg-[#8738CA]",
    textColor: "text-[#8738CA]",
    bgOpacity: "bg-opacity-[0.1]",
    link: '/admin/offers',
  },
  {
    title: "Manage Companies",
    bgColor: "bg-[#4338CA]",
    textColor: "text-[#4338CA]",
    bgOpacity: "bg-opacity-[0.08]",
    link: '/admin/companies',
  },
  {
    title: "Manage Branches",
    bgColor: "bg-[#0E9E19]",
    textColor: "text-[#0E9E19]",
    bgOpacity: "bg-opacity-[0.08]",
    link: '/admin/branches',
  },
];

const typeOfUsers = [
    {name: 'Users via LinkedIn', slug: 'linkedin', value: 293},
    {name: 'Users via Facebook', slug: 'facebook', value: 293},
    {name: 'Users via Instagram', slug: 'instagram', value: 293},
    {name: 'Users via Google', slug: 'google', value: 293},
    {name: 'Users via Youtube', slug: 'youtube', value: 293},
    {name: 'Users via word-of-mouth', slug: 'word_of_mouth', value: 293},
    {name: 'Users via offline advertising', slug: 'offline_advertising', value: 293},
]

const DashboardScreen = () => {
  return (
    <div className="flex w-full flex-col gap-y-12">
      <div className="w-full flex flex-wrap gap-4">
        {cardsJson.map((card, index) => {
          return (
            <DashboardCard
              key={index}
              title={card.title}
              bgColor={card.bgColor}
              textColor={card.textColor}
              bgOpacity={card.bgOpacity}
              link={card.link}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-y-6">
        <p className="text-black font-bold text-[35px]">Analytics</p>
        <div className="flex flex-wrap gap-x-4 w-full">
          <div className="flex flex-col py-2 w-[48%] h-[362px] bg-white border border-[#C3C1C1] rounded-[16px]">
            <div className="flex flex-col gap-y-3 p-6 border-b border-[#C3C1C1] lg:text-[18px] xl:text-[20px]">
              <p className="font-bold">
                Total users: <span className="text-hero">9028</span>
              </p>
              <p className="font-bold">
                Synced users: <span className="text-hero">9028</span>
              </p>
            </div>
            <div className="flex flex-col gap-y-3 p-6 border-b border-[#C3C1C1] lg:text-[18px] xl:text-[20px]">
              <p className="font-bold">
                Total Companies: <span className="text-hero">9028</span>
              </p>
              <p className="font-bold">
                Synced Companies: <span className="text-hero">9028</span>
              </p>
            </div>
            <div className="flex flex-col gap-y-3 p-6 lg:text-[18px] xl:text-[20px]">
              <p className="font-bold">
                Total Companies: <span className="text-hero">9028</span>
              </p>
              <p className="font-bold">
                Synced Companies: <span className="text-hero">9028</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 py-8 px-6 w-[48%] min-h-[350px] bg-white border border-[#C3C1C1] rounded-[16px]">
            <p className="font-bold lg:text-[18px] xl:text-[20px]">
              Type of users
            </p>
            <div className="flex flex-col gap-y-2">
                {typeOfUsers?.length > 0 && typeOfUsers.map((type, index) => {
                    return (
                        <p key={index} className="font-bold text-[14px] xl:text-[16px] text-[#111111]">
                            <span className="text-hero pr-2">{type.value}</span>
                            {type.name}
                        </p>
                    )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
