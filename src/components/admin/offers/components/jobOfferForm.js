import Button from "@/components/common/button";
import CheckBox from "@/components/common/checkBox";
import DatePickerFeild from "@/components/common/datePicker";
import InputField from "@/components/common/inputField";
import Label from "@/components/common/label";
import ReactSelectField from "@/components/common/reactSelectField";
import TextAreaField from "@/components/common/textAreaField";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

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

const JobOfferForm = ({jobOffer = null}) => {
  console.log("🚀 ~ file: jobOfferForm.js:49 ~ JobOfferForm ~ jobOffer:", jobOffer)
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({});
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state?.auth);
  const { info } = useSelector((state) => state?.user);
  const { isLoading } = useSelector((state) => state?.user);

    useEffect(()=>{
      if(jobOffer != null){
        for(let key in jobOffer){
          if(jobOffer[key] != null && jobOffer[key] != undefined && jobOffer[key] != ''){
            setValue(key, jobOffer[key])
          }
          if(key == 'contract_type'){
            let formatedId = jobOffer[key]?.toLowerCase();
            setValue(key ,{id: formatedId, label: jobOffer[key]})
          }
          if(key == 'company'){
            // let formatedId = jobOffer[key]?.toLowerCase();
            setValue(key ,{id: jobOffer[key]?.branch_id, label: jobOffer[key]?.business_name})
          }
        }
      }
    },[jobOffer])

  const onSubmit = (data) => {
    // if (data) {
    //   for (let key in data) {
    //     if(data[key] === undefined){
    //       data[key]  = "";
    //     }
    //     if(key == 'gender'){
    //       data[key] = data[key].label
    //     }
    //     if(key == 'birth_date'){
    //        let formatedDate = moment(data[key]).format("yyyy/MM/DD");
    //        data[key] = formatedDate
    //     }
    //   }
    //   let postData = {...data, fiscal_code: '13123', residence_municipality: 'georgia', residence_province: 'german'}
    //   dispatch(userSettings(postData, token, router))
    // }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className={`w-full flex justify-between`}>
        <div className={`flex flex-col gap-y-6 w-[62%]`}>
          <div className="flex gap-x-2">
            <div className="flex-col w-full">
              <Label name="Linked company" />

              <ReactSelectField
                name="company"
                control={control}
                defaultValue={{ id: "m", label: "M" }}
                optionData={[
                  { id: "m", label: "M" },
                  { id: "f", label: "F" },
                ]}
              />
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col w-full">
              <Label name="Offer name" />

              <InputField
                name="surname"
                placeholder="Rossi"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Field required!",
                  },
                }}
                errors={errors}
              />
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex-col w-[49%]">
              <Label name="City" />

              <ReactSelectField
                name="gender"
                control={control}
                defaultValue={{ id: "m", label: "M" }}
                optionData={[
                  { id: "m", label: "M" },
                  { id: "f", label: "F" },
                ]}
              />
            </div>
            <div className="flex-col w-[49%]">
              <Label name="Working Hours" />

              <ReactSelectField
                name="gender"
                control={control}
                defaultValue={{ id: "m", label: "M" }}
                optionData={[
                  { id: "m", label: "M" },
                  { id: "f", label: "F" },
                ]}
              />
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex-col w-[49%]">
              <Label name="Contract Type" />

              <ReactSelectField
                name="contract_type"
                control={control}
                defaultValue={{ id: "m", label: "M" }}
                // optionData={[
                //   { id: "m", label: "M" },
                //   { id: "f", label: "F" },
                // ]}
              />
            </div>

            <div className="flex-col w-[49%]">
              <Label name="Expire date" />

              <DatePickerFeild
                name="expire_date"
                title="08-05-1997"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Field required!",
                  },
                }}
                errors={errors}
                // showYearPicker={true}
              />
            </div>
          </div>

          <div className="flex flex-col gap-x-2">
            <Label name="Offer description" />
            <TextAreaField
              name="description"
              control={control}
              rows={8}
            />
          </div>

          <Button
            title="Update information"
            ring={true}
            style={
              "w-full mt-2 py-[1.2rem] rounded-[12px] text-[18px] xl:text-[20px] bg-[#4338ca] text-white"
            }
            //   loading={isLoading}
          />
        </div>
        <div className="w-[34%] bg-white mt-6 rounded-[8px] border border-[#C6C4C4] h-[100%] pt-6 pb-10 px-8 flex flex-col gap-y-4">
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
      </div>
    </form>
  );
};

export default JobOfferForm;
