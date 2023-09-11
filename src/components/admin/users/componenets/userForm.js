import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelectField from "../../../common/reactSelectField";
import InputField from "../../../common/inputField";
import DatePickerFeild from "../../../common/datePicker";
import Button from '@/components/common/button';
import { createUser } from '@/redux/actions/adminActions';
import moment from 'moment';

const UserForm = ({userData = null}) => {
  console.log("🚀 ~ file: userForm.js:11 ~ UserForm ~ userData:", userData)
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
  
  useEffect(()=>{
    if(userData != null){
      for(let key in userData){
        if(userData[key] != null && userData[key] != undefined && userData[key] != ''){
          setValue(key, userData[key])
        }
        if(key == 'gender'){
          let formatedId = userData[key]?.toLowerCase();
          setValue(key ,{id: formatedId, label: userData[key]})
        }
      }
    }
  },[userData])

  const onSubmit = async(data) => {
    console.log("🚀 ~ file: userForm.js:40 ~ onSubmit ~ data: before", data)

    if(data){
      for (let key in data) {
        if (data[key] === undefined) {
          data[key] = "";
        }
        if (key == "gender") {
          data[key] = data[key]?.label;
        }
        if (key == "birth_date") {
          let formatedDate = moment(data[key]).format("yyyy/MM/DD");
          data[key] = formatedDate;
        }
      }
      let postData = {...data, branch_id: '1'}
      dispatch(createUser(postData, token, router))
      console.log("🚀 ~ file: userForm.js:40 ~ onSubmit ~ data: after", data)
    }
    
   
  }

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
              <label className="text-black tracking-[-0.6px] ">First name</label>
              <InputField
                name="first_name"
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
                Last Name
              </label>
              <InputField
                name="last_name"
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
                Tax ID code
              </label>
              <InputField
                name="tax_id_code"
                placeholder="MRRSI97E08A944Y"
                control={control}
              />
            </div>
            <div className="flex gap-x-2 w-[49%]">
              <div className="flex-col w-[30%]">
                <label className="text-black tracking-[-0.6px]">
                  Gender
                </label>
                <ReactSelectField
                  name="gender"
                  control={control}
                  defaultValue={{id: 'm', label: 'M'}}
                  optionData={[{id: 'm', label: 'M'}, {id: 'f', label: 'F'}]}
                  rules={{
                    required: {
                      value: true,
                      message: "Field required!",
                    },
                  }}
                  errors={errors}
                />
              </div>
              <div className="flex-col w-[70%]">
                <label className="text-black tracking-[-0.6px]">
                  Birth Date
                </label>
                <DatePickerFeild
                  name="birth_date"
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
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Birth nation
              </label>
              <InputField
                name="birth_nation"
                placeholder="Italia"
                control={control}
              />
            </div>
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Birth City
              </label>
              <InputField
                name="birth_municipality"
                placeholder="Bologna"
                control={control}
              />
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                Residential address
              </label>
              <InputField
                name="residence_address"
                placeholder="Mura di Porta Galliera, 3"
                control={control}
              />
            </div>
            <div className="flex gap-x-2 w-[49%]">
              <div className="flex-col w-[70%]">
                <label className="text-black tracking-[-0.6px]">
                  Residential city
                </label>
                <ReactSelectField
                  name="residence_municipality"
                  placeholder="Bologna"
                  control={control}
                />
              </div>
              <div className="flex-col w-[30%]">
                <label className="text-black tracking-[-0.6px]">Postcode</label>
                <InputField
                  name="residence_postalcode"
                  placeholder="40124"
                  control={control}
                />
              </div>
            </div>
          </div>

          {/* <div className="flex gap-x-2">
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
          </div> */}

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
              />
            </div>
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

export default UserForm