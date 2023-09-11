import React, { useEffect, useState } from "react";
import CompanyBar from "./components/companyBar";
import { useForm } from "react-hook-form";
import ReactSelectField from "@/components/common/reactSelectField";
import Button from "@/components/common/button";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const companyBars = [
  { name: "Ahtisham", userId: 1 },
  { name: "Qasim", userId: 2 },
  { name: "Umar", userId: 3 },
  { name: "Azhar", userId: 4 },
];

const CompaniesScreen = ({branchCompanies = null, companies = null, callFrom=''}) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({});
  const router = useRouter();
  const [companiesList, setCompaniesList] = useState([])
  useEffect(()=>{
    if(branchCompanies != null){
      setCompaniesList([...branchCompanies])
    }
    if(companies != null && callFrom == 'admin_companies'){
      setCompaniesList([...companies])
    }
  },[companies, branchCompanies])
  return (
    <div className="flex w-full flex-col gap-y-12">
      <div className="flex justify-between items-center">
        <p className="text-black font-bold text-[35px]">All companies</p>
        <div className="w-[200px]">
        <Button
            title={"Create new"}
            style={`w-full text-[20px] rounded-xl tracking-[-0.6px] font-semibold bg-[#2e8cde] text-white py-3`}
            onClick={()=> router.push(`/admin/companies/new`)}
          />
        </div>
      </div>

      <div className="flex gap-x-4">
        <div className="w-[25%]">
          <ReactSelectField
            name="location"
            placeHolder="Filter by location"
            control={control}
            optionData={[
              { id: "m", label: "M" },
              { id: "f", label: "F" },
            ]}
          />
        </div>
        <div className="w-[25%]">
          <ReactSelectField
            name="location"
            placeHolder="Filter by synced"
            control={control}
            optionData={[
              { id: "m", label: "M" },
              { id: "f", label: "F" },
            ]}
          />
        </div>
        <div className="w-[25%]">
          <ReactSelectField
            name="location"
            placeHolder="Order by name"
            control={control}
            optionData={[
              { id: "m", label: "M" },
              { id: "f", label: "F" },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {companiesList?.length > 0 && companiesList.map((companyBar, ind) => {
          return <CompanyBar key={ind} company={companyBar} callFrom={callFrom}/>;
        })}
      </div>
    </div>
  );
};

export default CompaniesScreen;
