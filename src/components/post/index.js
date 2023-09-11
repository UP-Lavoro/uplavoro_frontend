import BrowseJobs from "@/components/landing/components/browseJobs";
import PostDescription from "@/components/post/postDescription";
import PostDetail from "@/components/post/postDetail";
import SimilarJobOffers from "@/components/post/similarJobOffers";
import StepsOfApplication from "@/components/post/stepsOfApplication";
import CalendarReomve from "@/components/svgs/calendarReomve";
import Location from "@/components/svgs/location";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PostPage = ({offerById}) => {
    const { cities } = useSelector(state=> state?.user)
    const [getCity, setCity] = useState(null);

    useEffect(()=>{
        if(offerById && cities){
            let foundedCity = cities?.find(obj=> obj?.id == offerById?.city_id)
            setCity(foundedCity)
        }
    },[offerById])
    console.log("🚀 ~ file: index.js:15 ~ PostPage ~ cities:", cities)
  return (
    <div>
      <div className="bg-hero flex flex-col gap-y-6 md:px-14 lg:px-28 xl:px-48 2xl:px-72 py-16">
        <div className="flex gap-x-8">
          <div className="flex gap-x-2 items-center">
            <Location color="#ffffff" />
            <p className="text-white tracking-[-0.9px] text-[13px]">{`${getCity?.name}, ${getCity?.country}`}</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <CalendarReomve color="#ffffff" />
            <p className="text-white tracking-[-0.9px] text-[13px]">
              Published on {moment(offerById?.published_at).format("MM/DD/yyyy")}
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <CalendarReomve color="#ffffff" />
            <p className="text-white tracking-[-0.9px] text-[13px]">
              Reference #123
            </p>
          </div>
        </div>
        <p className="text-white max-w-[50%] tracking-[-0.96px] text-[32px] font-extrabold">
          {offerById?.title}
        </p>
      </div>

      <div className="w-full md:pl-14 lg:pl-28 xl:pl-48 2xl:pl-72 pt-12 pb-20">
        <div className="flex w-full gap-x-8">
          <div className={`w-[30%]`}>
            <PostDetail offer={offerById} city={getCity}/>
          </div>
          <div className="w-[70%]">
            <PostDescription offer={offerById}/>
          </div>
        </div>
      </div>
      <SimilarJobOffers/>
      <StepsOfApplication />
      <BrowseJobs />
    </div>
  )
}


export default PostPage