import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarSlash from "../../../public/assets/icons/star-slash.svg";
import Location from "../../../public/assets/icons/location.svg";
import Award from "../../../public/assets/icons/award.svg";
import Timer from "../../../public/assets/icons/timer.svg";
import CalendarRemove from "../../../public/assets/icons/calendar-remove.svg";
import HeartIcon from "../svgs/heartIcon.jsx";
import InfoCircle from "../svgs/infoCircle";
import { useDispatch, useSelector } from "react-redux";
import { addRemoveFavouriteOffer, removeAppliedOffer } from "@/redux/actions/userActions";
import { useRouter } from "next/router";
import moment from "moment";
import Briefcase from "../svgs/briefcase";

const JobCard = (props) => {
console.log("🚀 ~ file: jobCard.js:14 ~ JobCard ~ card:", props?.card)
  const { card={}, callFrom='', cardType='' } = props;

  const { token } = useSelector(state =>  state?.auth)
  const { cities } = useSelector(state =>  state?.user)

  const dispatch = useDispatch();
  const router = useRouter();
  const [favouritePost, setFavouritePost] = useState(true)
  const [city, setCity] = useState(null)

  useEffect(()=>{
    if(card && cities){
        let foundedCity = cities?.find(obj=> obj?.id == card?.city_id)
        setCity(foundedCity)
    }
},[card])

  const handleFavourite = (e,id) =>{
    e.stopPropagation()
    let postObj = {
      job_id: id,
      remove: true
    }
    setFavouritePost(false)
    dispatch(addRemoveFavouriteOffer(postObj,token))
  }

  const cardHandler = (e,card) => {
    if(card?.id && favouritePost){
      router?.push(router?.asPath + '/' + card?.id)
    }
  
  }
  return (
    <div
      className={` ${
        callFrom === "profile" || callFrom === "company"
          ? "md:w-[50%] lg:w-[48%]"
          : "md:w-[32%] xl:w-[32%]"
      } flex flex-col gap-y-2 bg-white border border-gray-100 rounded-[12px] p-6 xl:p-8`}
      onClick={(e)=> cardHandler(e,card)}
    >
      {callFrom === "company" && (
        <div className="flex justify-between items-end">
          <p className="text-[13px] tracking-[-0.39px] text-[#707070] font-semibold py-1">
            Published 4 days ago
          </p>
          <span className="flex gap-x-2 items-center">
          <p className="text-[13px] tracking-[-0.39px] text-[#4338ca] font-semibold py-1">
            active
          </p>
          <Image
            src={StarSlash}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
          </span>
        </div>
      )} 
        {callFrom === "profile" &&
        cardType == 'favourite' ? 
        <div className="flex justify-between items-end">
          <p className="text-[13px] tracking-[-0.39px] text-[#707070] font-semibold py-1">
            Published {moment(card?.published_at, "YYYYMMDD").fromNow()}
          </p>
          <span id='fav_api_call' onClick={(e)=> handleFavourite(e,card?.id)}>
          <HeartIcon bg={"#4F0E9E"}/>
          </span>
        </div>
        :
        <div className="flex justify-between items-end">
          <p className="text-[13px] tracking-[-0.39px] text-[#707070] font-semibold py-1">
            Published {moment(card?.published_at, "YYYYMMDD").fromNow()}
          </p>
          {/* <Briefcase width={24} height={24} color={'#4338ca'}/> */}
          <HeartIcon bg={"#ffffff"}/>

        </div>
        }

      <div className="flex flex-wrap">
        <p className="text-[19px] tracking-[-0.69px] text-black font-semibold break-words">
          {card?.title}
        </p>
      </div>

      <div className="flex flex-col gap-y-4 pt-4">
        <div className="flex gap-x-4 items-center">
          <Image
            src={Location}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
          <p className="text-[13px] tracking-[-0.39px] text-[#707070] font-semibold">
          {`${city?.name}, ${city?.country}`}
          </p>
        </div>
        <div className="flex gap-x-4 items-center">
          <Image src={Award} alt="" style={{ width: "24px", height: "24px" }} />
          <p className="text-[13px] tracking-[-0.39px] text-[#707070] font-semibold">
            {card?.contract_type}
          </p>
        </div>
        <div className="flex gap-x-4 items-center">
          <Image src={Timer} alt="" style={{ width: "24px", height: "24px" }} />
          <p className="text-[13px] tracking-[-0.39px] text-[#707070] font-semibold">
            Full Time
          </p>
        </div>
        <div className="flex gap-x-4 items-center">
          <Image
            src={CalendarRemove}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
          <p className="text-[13px] tracking-[-0.39px] text-[#707070] font-semibold">
          Expires on {card?.expire_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
