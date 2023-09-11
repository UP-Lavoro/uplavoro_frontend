import TitleCard from "@/components/common/titleCard";
import BrowseJobs from "@/components/landing/components/browseJobs";
import PostDescription from "@/components/post/postDescription";
import PostDetail from "@/components/post/postDetail";
import SimilarJobOffers from "@/components/post/similarJobOffers";
import StepsOfApplication from "@/components/post/stepsOfApplication";
import CalendarReomve from "@/components/svgs/calendarReomve";
import Location from "@/components/svgs/location";
import React from "react";

const Post = (props) => {
  return (
    <div>
      <div className="bg-hero flex flex-col gap-y-3 md:px-14 lg:px-28 xl:px-48 2xl:px-72 py-12">
        <div className="flex gap-x-8">
          <div className="flex gap-x-2 items-center">
            <Location color="#ffffff" />
            <p className="text-white tracking-[-0.9px]">Roma Italia</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <CalendarReomve color="#ffffff" />
            <p className="text-white tracking-[-0.9px]">
              Published on 20/12/2022
            </p>
          </div>
        </div>
        <p className="text-white text-[32px] xl:text-[50px] font-extrabold">
          Warehouse filling clerk part time
        </p>
      </div>

      <div className="w-full md:pl-14 lg:pl-28 xl:pl-48 2xl:pl-72 py-12">
        <div className="flex w-full gap-x-8">
          <div className={`w-[30%]`}>
            <PostDetail />
          </div>
          <div className="w-[70%]">
            <PostDescription />
          </div>
        </div>
      </div>
      <SimilarJobOffers/>
      <StepsOfApplication />
      <BrowseJobs />
    </div>
  );
};

export default Post;
