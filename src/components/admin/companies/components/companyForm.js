import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelectField from "../../../common/reactSelectField";
import InputField from "../../../common/inputField";
import Button from '@/components/common/button';
import CheckBox from '@/components/common/checkBox';
import Eye from "../../../../../public/assets/icons/eye.svg";
import EyeSlash from "../../../../../public/assets/icons/eye-slash.png";
import Image from 'next/image';

const CompanyForm = ({companyData = null}) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({});
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state?.auth);
  const { info }  = useSelector((state) => state?.user);
  const { isLoading } = useSelector((state) => state?.user);

  const [showPassword, setShowPassword] = useState("password");
  const showHidePassword = () => {
    if (showPassword != "password") {
      setShowPassword("password");
    } else {
      setShowPassword("text");
    }
  };
  
  useEffect(()=>{
    if(companyData != null){
      for(let key in companyData){
        if(companyData[key] != null && companyData[key] != undefined && companyData[key] != ''){
          setValue(key, companyData[key])
        }
        if(key == 'gender'){
          let formatedId = companyData[key]?.toLowerCase();
          setValue(key ,{id: formatedId, label: companyData[key]})
        }
      }
    }
  },[companyData])

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
      <div
        className={`w-full flex justify-start text-[18px] xl:text-[20px]`}
      >
        <div
          className={`w-full flex flex-col gap-y-8`}
        >

<div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">Email</label>
              <InputField
                name="email"
                placeholder="orlandi.enri@gmail.com"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Field required!",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter valid email"
                  }
                }}
                errors={errors}
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">Phone</label>
              <InputField
                name="phone"
                placeholder="3273498412"
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
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px] ">Name</label>
              <InputField
                name="name"
                placeholder="Mario"
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
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Surname
              </label>
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
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
              Business Role
              </label>
              <InputField
                name="Business_role"
                placeholder="Italia"
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
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
              Company name
              </label>
              <ReactSelectField
                  name="company_name"
                  placeholder="Bologna"
                  control={control}
                />
            </div>
          </div>

          

          <div className='flex w-full'>
              <CheckBox 
                title={"Sede Centrale"}
                control={control}
                name={"taxCode"}
              />
          </div>

          <div className="flex gap-x-2">
          <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
              Company VAT
              </label>
              <ReactSelectField
                  name="company_vat"
                  placeholder="Bologna"
                  control={control}
                />
            </div>
            
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
              Company Tax ID
              </label>
              <InputField
                name="company_tax_id"
                placeholder="Italia"
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
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Living address
              </label>
              <InputField
                name="living_address"
                placeholder="Mura di Porta Galliera, 3"
                control={control}
              />
            </div>
            <div className="flex gap-x-2 w-[49%]">
              <div className="flex-col w-[70%]">
                <label className="text-black tracking-[-0.6px]">
                  Living city
                </label>
                <ReactSelectField
                  name="living_city"
                  placeholder="Bologna"
                  control={control}
                />
              </div>
              <div className="flex-col w-[30%]">
                <label className="text-black tracking-[-0.6px]">Postcode</label>
                <InputField
                  name="living_cap"
                  placeholder="40124"
                  control={control}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">CCNL</label>
              <InputField
                name="ccnl"
                placeholder="orlandi.enri@gmail.com"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Field required!",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter valid email"
                  }
                }}
                errors={errors}
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">Codice Ateco</label>
              <InputField
                name="codice_ateco"
                placeholder="3273498412"
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

          <div className="relative w-full">
            <InputField
              name="password"
              placeholder="Enter your password ..."
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password required!",
                },
              }}
              errors={errors}
              type={showPassword}
            />
            {showPassword == "password" ? (
              <Image
                style={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  height: "24px",
                  width: "24px",
                }}
                src={Eye}
                alt=""
                onClick={showHidePassword}
              />
            ) : (
              <Image
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  height: "24px",
                  width: "24px",
                }}
                src={EyeSlash}
                alt=""
                onClick={showHidePassword}
              />
            )}
          </div>

            <Button
              title="Update information"
              ring={true}
              style={"w-full mt-2 py-[1.2rem] rounded-[12px] text-[18px] xl:text-[20px] bg-[#4338ca] text-white"}
              loading={isLoading}
            />
          
            <p className='pt-2 pr-4 text-[18px] xl:text-[20px] text-[#82183C] tracking-[-0.6px]'>Caution: the user is already synced to Whitenet. The information update must be completed directly on Whitenet.</p>
        </div>
      </div>
    </form>
  );
};

export default CompanyForm