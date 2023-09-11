import InputField from "@/components/common/inputField";
import Label from "@/components/common/label";
import ReactSelectField from "@/components/common/reactSelectField";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Address = ({ control, errors, cities, setValue, callFrom = '' }) => {
  const { user, configuration, cvList } = useSelector((state) => state.user);
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    if (configuration?.city_model) {
      setCitiesList(configuration?.city_model);
    }
  }, [configuration]);

  useEffect(() => {
    if (cvList?.length > 0) {
      for (let key in cvList[0]) {
        console.log(
          "🚀 ~ file: address.js:20 ~ useEffect ~ key:",
          key,
          cvList[0]
        );
      }
    }
  }, [cvList]);
  return (
    <div className="flex gap-x-4">
      <div className={`flex flex-col ${callFrom == 'company_data' ? 'w-[49%]': 'w-[46%]'} `}>
        <Label name="Address" required={true} />
        <InputField
          name="address"
          placeholder="Mura di Porta Galliera, 3"
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
      <div className={`flex gap-x-4 ${callFrom == 'company_data' ? 'w-[49%]': 'w-[52%]'}`}>
        <div className="flex-col w-[65%]">
          <Label name="Municipality" required={true} />

          <ReactSelectField
            showLabel="name"
            name="municipality"
            placeholder="Bologna"
            control={control}
            optionData={citiesList}
            rules={{
              required: {
                value: true,
                message: "Required!",
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex-col w-[35%]">
          <Label name="Post Code" required={true} />
          <InputField
            name="post_code"
            placeholder="40124"
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
      </div>
    </div>
  );
};

export default Address;
