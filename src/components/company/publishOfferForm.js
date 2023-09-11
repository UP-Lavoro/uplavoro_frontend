import React from "react";
import InputField from "../common/inputField";
import TextAreaField from "../common/textAreaField";
import CheckBox from "../common/checkBox";
import Label from "../common/label";
import { useForm } from "react-hook-form";
import Button from "../common/button";

export const jobCategories = [
  { slug: "holidays", title: "Availability on public holidays" },
  { slug: "weekend", title: "Availability on weekends" },
  { slug: "trainings", title: "Availability for training courses" },
  { slug: "part_time", title: "Part time availability" },
  { slug: "full_time", title: "Full time availability" },
  { slug: "transfer_italy", title: "Availability for travel in Italy" },
  { slug: "transfer_abroad", title: "Availability for travel abroad" },
  { slug: "fixed_contract", title: "Availability for a limited time contract" },
  {
    slug: "permanent_contract",
    title: "Availability for a permanent contract",
  },
];

const PublishOfferForm = (props) => {
  const {
    setValue,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  return (
    <div className="flex flex-col gap-y-4">
      <p
        className={`text-[#4338ca] text-[30px] tracking-[-0.9px] font-extrabold`}
      >
        Publish an offer
      </p>
      <p className={`text-paragraph text-[20px] tracking-[-0.6px] pb-4`}>
        You can request the publication of the job offer, the request will be
        sent to the reference branch
      </p>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col">
          <Label name="Offer name" />
          <InputField
            name={`offer_name`}
            //   placeholder="Philip Morris s.p.a."
            control={control}
            rules={{
              required: {
                value: true,
                message: "Required!",
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex flex-col">
          <Label name="Describe the job offer" />
          <TextAreaField
            name="description"
            control={control}
            // placeholder="I am [your name and surname], a professional in [work sector] with over X years of experience in [your work], with strong inclination towards [professional ambitions]…"
            rows={8}
            rules={{
              required: {
                value: true,
                message: "Required!",
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className={`text-[23px] tracking-[-0.69px] pt-2`}>
          Select a job category
          </p>
          {jobCategories?.map((item, ind) => {
            return (
              <div key={ind}>
                <CheckBox
                  title={item?.title}
                  control={control}
                  name={item?.slug}
                />
              </div>
            );
          })}
        </div>

        <div className="py-4">
            <Button title={'Send request to your branch'} style={`${
                props?.callFrom == "company" ? 'bg-[#2e8cde]' : ""
              } w-full text-[20px] text-white py-6`}
            //   ring={true}
              // onClick={registerHandler}
            //   loading={isLoading}
              />
        </div>
      </div>
    </div>
  );
};

export default PublishOfferForm;
