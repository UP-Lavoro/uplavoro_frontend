import React, { useEffect, useState } from "react";
import JobOfferBar from "./components/jobOfferBar";
import { useForm } from "react-hook-form";
import ReactSelectField from "@/components/common/reactSelectField";
import Button from "@/components/common/button";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const offerBars = [
  {name: 'Ahtisham', userId: 1 },
  {name: 'Qasim', userId: 2 },
  {name: 'Umar', userId: 3 },
  {name: 'Azhar', userId: 4 },
]

const OffersScreen = ({branchJobOffers = null, jobOffers = null, callFrom=''}) => {

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({});
  const router = useRouter();
  const [allJobOffers, setAllJobOffers] = useState([])

  useEffect(()=>{
    if(branchJobOffers?.data != null && callFrom == 'branches'){
      setAllJobOffers([...branchJobOffers?.data])
    }
    if(jobOffers != null && callFrom == 'admin_offers'){
      setAllJobOffers([...jobOffers])
    }
  },[jobOffers, branchJobOffers])
  return (
    <div className="flex w-full flex-col gap-y-12">
      <div className="flex justify-between items-center">
        <p className="text-black font-bold text-[35px]">All job offers</p>
        <div className="w-[200px]">
        <Button
            title={"Create new"}
            style={`w-full text-[20px] rounded-xl tracking-[-0.6px] font-semibold bg-[#2e8cde] text-white py-3`}
            onClick={()=> router.push(`/admin/offers/new`)}
          />
        </div>
      </div>

      <div className='flex gap-x-4'>
          <div className='w-[25%]'>
            <ReactSelectField 
              name="location"
              placeHolder="Filter by location"
              control={control}
              optionData={[{id: 'm', label: 'M'}, {id: 'f', label: 'F'}]}
            />
          </div>
          <div className='w-[25%]'>
            <ReactSelectField 
              name="location"
              placeHolder="Filter by synced"
              control={control}
              optionData={[{id: 'm', label: 'M'}, {id: 'f', label: 'F'}]}
            />
          </div>
          <div className='w-[25%]'>
            <ReactSelectField 
              name="location"
              placeHolder="Order by name"
              control={control}
              optionData={[{id: 'm', label: 'M'}, {id: 'f', label: 'F'}]}
            />
          </div>
        </div>
      <div className='flex flex-col gap-y-4'>
        {allJobOffers?.length > 0 && allJobOffers?.map((offerBar, ind) => {
          return (
            <JobOfferBar key={ind} offer={offerBar} callFrom={callFrom}/>
          )
        })}
        </div>
    </div>
  );
};

export default OffersScreen;
