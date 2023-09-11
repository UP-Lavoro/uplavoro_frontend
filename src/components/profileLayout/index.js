import React, { useEffect, useState } from "react";
import TitleCard from "../common/titleCard";
import BrowseJobs from "../landing/components/browseJobs";
import Clipboard from "@/components/svgs/clipboard";
import Star from "@/components/svgs/star";
import Briefcase from "@/components/svgs/briefcase";
import Note from "@/components/svgs/note";
import Notification from "@/components/svgs/notification";
import ProfileCircle from "@/components/svgs/profileCircle";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const userTabs = [
  {
    slug: "documents",
    title: "My documents",
    link: "/profile",
    icon: Clipboard,
  },
  {
    slug: "offers",
    title: "Favourite offers",
    link: "/profile/fav_offers",
    icon: Star,
  },
  {
    slug: "applications",
    title: "My applications",
    link: "/profile/applications",
    icon: Briefcase,
  },
  {
    slug: "create_edit_cv",
    title: "Create/edit my CV",
    link: "/profile/create_edit_cv",
    icon: Note,
  },
  {
    slug: "notifications",
    title: "Notifiations, emails, SMS",
    link: "/profile/notifications",
    icon: Notification,
  },
  {
    slug: "personal_data",
    title: "My personal data",
    alternateTitle: "Complete my profile",
    link: "/profile/personal_data",
    icon: ProfileCircle,
  },
];

const companyTabs = [
  {
    slug: "my_offers",
    title: "My offers",
    link: "/company",
    icon: Star,
  },
  {
    slug: "publish_an_offer",
    title: "Publish an offer",
    link: "/company/publish_offer",
    icon: Briefcase,
  },
  {
    slug: "notifications",
    title: "Notifiations, emails, SMS",
    link: "/company/notifications",
    icon: Notification,
  },
  {
    slug: "company_data",
    title: "My company data",
    link: "/company/company_data",
    icon: ProfileCircle,
  },
];

const ProfileLayout = ({ children, callFrom }) => {
  const { info } = useSelector((state) => state?.user);
  const { asPath } = useRouter();
  const [profileTabs, setProfileTabs] = useState([]);

  useEffect(() => {
    if (callFrom === "company") {
      setProfileTabs(companyTabs);
    } else {
      setProfileTabs(userTabs);
    }
  }, []);

  const [profileStatus, setProfileStatus] = useState(false)
  useEffect(()=>{
    if(info != null && info != undefined){
      if (
        info?.profile?.name != null &&
        info?.profile?.surname != null &&
        info?.profile?.gender != null &&
        info?.profile?.birth_date != null &&
        info?.profile?.birth_nation != null &&
        info?.profile?.birth_municipality != null &&
        info?.profile?.residence_address != null &&
        info?.profile?.residence_postalcode != null &&
        info?.profile?.phone != null
      ){
        setProfileStatus(true)
      }else{
        setProfileStatus(false)
      }
    }
  },[info])

  const [isHovered, setIsHovered] = useState("");

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered("");
  };
  return (
    <div>
      <TitleCard
        heading={`Hello, ${info?.profile?.name ? info?.profile?.name : 'Axtral srls!'}`}
        paragraphWithBr={true}
        beforeBr={callFrom === "company" ? "From your personal area you can manage all your job offers" :
          "From your personal area you can manage all your personal information,"
        }
        afterBr={callFrom === "company" ? "and manage the company data." : " create your CV and share it."}
        bgColor={callFrom === 'company' && 'bg-[#4338ca]'}
      />
      <div className="flex w-full gap-y-4">
        <div className="w-[35%] flex justify-end bg-footer-bar px-6 py-16">
          <div className="flex lg:w-[78%] xl:w-[66%] 2xl:w-[56%] flex-col">
            <p className={`${callFrom === 'company' ? 'text-[#4338ca]' : 'text-hero'} text-[32px] font-extrabold`}>
              Profile
            </p>
            <div className="flex flex-col py-2">
              {profileTabs?.map((tab, index) => {
                return (
                  <Link key={index} href={tab.link}>
                    <div
                      className={`flex my-2 px-4 border ${
                        tab.link === asPath
                          ? callFrom === 'company' ? "border-[#4338ca] text-[#4338ca]" : "border-[#500e9e] text-[#500e9e]" 
                          : "border-paragraph text-paragraph"
                      } rounded-md ${callFrom === 'company' ? 'hover:border-[#4338ca] hover:text-[#4338ca]' : 'hover:border-[#500e9e] hover:text-[#500e9e]'}  items-center justify-between gap-x-4 py-4 cursor-pointer ease-in-out duration-300`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <p
                        className={`text-[18px] xl:text-[20px] tracking-[-0.6px]`}
                      >
                        {tab?.slug == 'personal_data' ? profileStatus == false ? tab?.alternateTitle : tab?.title : tab?.title}
                        {/* {tab?.title} */}
                      </p>
                      <div className={`w-[24px] h-[24px] ${callFrom === 'company' ? 'hover:text-[#4338ca]' : 'hover:text-[#500e9e]'} `}>
                        {tab?.icon !== "" && (
                          <tab.icon
                            color={
                              tab.link === asPath
                                ? callFrom === 'company' ? '#4338ca' : '#500e9e'
                                : isHovered === index
                                ? callFrom === 'company' ? '#4338ca' : '#500e9e'
                                : "#696969"
                            }
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className={`w-[65%] bg-white ${
            asPath === "/profile/create_edit_cv" ? "pl-12" : "px-12"
          }  py-16`}
        >
          <div
            className={`${
              asPath === "/profile/create_edit_cv"
                ? "w-full"
                : "lg:w-[90%] xl:w-[86%] 2xl:w-[70%]"
            } `}
          >
            {children}
          </div>
        </div>
      </div>
      <BrowseJobs callFrom={callFrom}/>
    </div>
  );
};

export default ProfileLayout;
