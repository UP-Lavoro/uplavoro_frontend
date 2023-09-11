import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArrowRight from "../../../public/assets/icons/arrow-purple.svg";
import ArrowLeft from "../../../public/assets/icons/arrow-left-purple.svg";
import StepsCard from "./stepsCard";

const cardArr = [
  {
    id: 1,
    step: "Step 1 - Application",
    desc: "Login to your account and apply for the offer of job that interests you, just one click!",
    background: "",
  },
  {
    id: 2,
    step: "Step 2 - You will be contacted",
    desc: "You will be contacted by our staff to get to know us Better",
    background: "bg-green",
  },
  {
    id: 3,
    step: "Step 3 - Face-to-face interview",
    desc: "Come to the branch for an introductory meeting, talk to us of your experiences and let’s understand together if the work",
    background: "bg-orange",
  },
];

const StepsOfApplication = () => {

  const [stepsCard, setStepsCard] = useState([]);

  useEffect(()=>{
    if(cardArr?.length > 0){
      setStepsCard(cardArr)
    }
  },[])
  const [currentIndex, setCurrentIndex] = useState(1);
  const prevHandler = () =>{
    let tempArr = stepsCard.filter((obj, ind)=> 
      (stepsCard?.length - 1) != ind
    )
    let tempObj = stepsCard.find((obj, ind)=> 
      (stepsCard?.length - 1) == ind
    )
    tempArr.unshift(tempObj) 
    setStepsCard([...tempArr])
    
  }

  const nextHandler = () =>{
    let tempArr = stepsCard.filter((obj, ind)=> 
     ind != 0
    )
    let tempObj = stepsCard.find((obj, ind)=> 
     ind == 0
    )
    tempArr.push(tempObj)
    setStepsCard([...tempArr])
  
  }
  return (
    <div className="w-full md:pl-14 lg:pl-28 xl:pl-48 2xl:pl-72 flex flex-col py-20 bg-white gap-y-6">
      <div className="flex pr-40 justify-between">
        <p className="md:text-[32px] xl:text-[50px] text-hero tracking-tight">
          What are the steps after the application?
        </p>
        <div className="flex gap-x-3 items-center" >
          <Image
            src={ArrowLeft}
            alt=""
            style={{ width: "24px", height: "24px" }}
            onClick={prevHandler}
          />
          <Image
            src={ArrowRight}
            alt=""
            style={{ width: "24px", height: "24px" }}
            onClick={nextHandler}
          />
        </div>
      </div>
      <div className="flex gap-x-4 overflow-hidden">
        {stepsCard?.map((item, ind) => {
          return (
            <StepsCard
              key={ind}            
              background={item?.background}
              heading={item?.step}
              paragraph={item?.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StepsOfApplication;
