import React from "react";
import InputField from "../common/inputField";
import Label from "../common/label";
import ReactSelectField from "../common/reactSelectField";
import Address from "../profile/cv/address";
import CheckBox from "../common/checkBox";
import { useForm } from "react-hook-form";
import Button from "../common/button";

const CompanyForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({});
  return (
    <div className="flex flex-col gap-y-6">
      <p
        className={`text-[#4338ca] text-[30px] tracking-[-0.9px] font-extrabold`}
      >
        My company data
      </p>
      <div className="flex flex-col gap-y-5">
      <div className="flex gap-4">
        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="Email" required={true} />
          <div className="">
            <InputField
              name="email"
              // placeholder="Enter your email ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Email required!",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter valid email",
                },
              }}
              errors={errors}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="Phone" required={true} />
          <div className="">
            <InputField
              name="phone"
              // placeholder="Enter your email ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Phone number required!",
                },
              }}
              errors={errors}
            />
          </div>
        </div>
        </div>

        <div className="flex gap-4">
        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="Name" required={true} />
          <div className="">
            <InputField
              name="name"
              // placeholder="Enter your name ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Name required!",
                },
              }}
              errors={errors}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="Surname" required={true} />
          <div className="">
            <InputField
              name="surname"
              // placeholder="Enter your name ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Surname required!",
                },
              }}
              errors={errors}
            />
          </div>
        </div>
        </div>

        <div className="flex gap-4">
        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="Business Role" required={true} />
          <div className="">
            <InputField
              name="business_role"
              // placeholder="Enter your email ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Business Role required!",
                },
              }}
              errors={errors}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="Company name" required={true} />
          <div className="">
            <InputField
              name="company_name"
              // placeholder="Enter your email ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Company name required!",
                },
              }}
              errors={errors}
            />
          </div>
        </div>
        </div>

        <div className="py-2">
          <CheckBox
            title={"Physical person"}
            control={control}
            name={"physical_person"}
            errors={errors}
          />
        </div>

        <div className="flex gap-4">
        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="Company VAT" required={true} />
          <div className="">
            <InputField
              name="company_vat"
              // placeholder="Enter your email ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Company VAT required!",
                },
              }}
              errors={errors}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="Company Tax ID" required={true} />
          <div className="">
            <InputField
              name="company_tax_id"
              // placeholder="Enter your email ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Company Tax ID required!",
                },
              }}
              errors={errors}
            />
          </div>
        </div>
        </div>

        <Address control={control} errors={errors} setValue={setValue} callFrom={'company_data'}/>

        <div className="flex gap-4">
        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="CCNL" />
          <div className="">
            <InputField
              name="ccnl"
              // placeholder="Enter your email ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "CCNL required!",
                },
              }}
              errors={errors}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 w-[49%]">
          <Label name="Ateco Code" />
          <div className="">
            <InputField
              name="ateco_code"
              // placeholder="Enter your email ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Ateco Code required!",
                },
              }}
              errors={errors}
            />
          </div>
        </div>
        </div>

        <div className="w-full py-6">
            <Button
              title={"Update information"}
              style={`w-full text-[20px] bg-[#4338CA] text-white py-6`}
              // ring={true}
              // onClick={registerHandler}
              // loading={isLoading}
            />
          </div>
      </div>
    </div>
  );
};

export default CompanyForm;
