import DatePickerFeild from "@/components/common/datePicker";
import InputField from "@/components/common/inputField";
import ReactSelectField from "@/components/common/reactSelectField";
import React, { useEffect, useState } from "react";
import DeleteIcon from "../../../../public/assets/icons/delete.svg";
import AddIcon from "../../../../public/assets/icons/add-circle.svg";
import Image from "next/image";
import { useSelector } from "react-redux";


const WorkExperience = ({ control, errors, setValue }) => {
  const [multipleItems, setMultipleItems] = useState([{ key: 1 }]);
  const {configuration, cvList} = useSelector((state) => state.user);
  const [contractTypeList,setContractTypeList] = useState([])

  useEffect(() => {
    if (configuration?.contract_types) {
      setContractTypeList(configuration?.contract_types);
    }
  }, [configuration]);
  const addObjectHandler = () => {
    let length = multipleItems?.length;
    multipleItems.push({ key: length + 1 });
    setMultipleItems([...multipleItems]);
  };

  const delObjectHandler = (item) => {
    let tempArr = multipleItems?.filter((obj) => obj?.key != item?.key);
    setMultipleItems([...tempArr]);
  };

  // useEffect(()=>{
  //   if(cvList?.length > 0){
  //     let experiences = cvList[0]?.experiances[0]
  //     // let experiences = cvList[0]?.experiances[0]
  //     // for(let key in cvList[0]){
  //     //   setValue(key, cvList[0][key])
  //     // }
  //     for(let key in experiences){
  //       if(experiences[key] != null && experiences[key] != undefined && experiences[key] != ''){
          
  //         setValue(`experiances.${[0]}.${key}`, experiences[key])
  //       }
  //       console.log("🚀 ~ file: address.js:20 ~ useEffect ~ key:", key, experiences[key])
        
  //     }
      
  //   }
  // },[cvList])
  return (
    <div className="flex flex-col gap-y-4">
      {multipleItems?.length > 0 &&
        multipleItems?.map((item, ind) => {
          return (
            <div
              key={ind}
              className="flex flex-col gap-y-4 py-6 px-8 border border-paragraph rounded-[16px] "
            >
              <div className="flex flex-col">
                <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                  Company Name
                </label>
                <InputField
                  name={`experiances.${[ind]}.company_name`}
                  placeholder="Philip Morris s.p.a."
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
                <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">Job</label>
                <InputField
                  name={`experiances.${[ind]}.task`}
                  placeholder="Employee"
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
              <div className="flex gap-x-4">
                <div className="flex-col w-[30%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    From date
                  </label>
                  <DatePickerFeild
                    name={`experiances.${[ind]}.from_date`}
                    title="08-05-1997"
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
                <div className="flex-col w-[30%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    To date
                  </label>
                  <DatePickerFeild
                    name={`experiances.${[ind]}.to_date`}
                    title="08-05-1997"
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
              <div className="flex-col w-[62%]">
                <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                  Contract type
                </label>
                <ReactSelectField
                  name={`experiances.${[ind]}.contract_type`}
                  placeholder="Permanent contractM"
                  control={control}
                  optionData={[{id: 'permanent', label: 'Permanent'}, {id: 'temporary', label: 'Temporary'}]}
                />
              </div>
              <div
                className="flex gap-x-3 items-center py-4 cursor-pointer"
                onClick={() => delObjectHandler(item)}
              >
                <Image
                  src={DeleteIcon}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
                <p className="tracking-[-0.6px] text-delete text-[18px] xl:text-[20px]">
                  Delete this work experience
                </p>
              </div>
            </div>
          );
        })}

      <div
        className="flex items-center gap-x-3 py-6 px-8 border border-paragraph rounded-[16px] cursor-pointer"
        onClick={addObjectHandler}
      >
        <Image src={AddIcon} alt="" style={{ width: "24px", height: "24px" }} />
        <p className="tracking-[-0.6px] text-black text-[18px] xl:text-[20px]">Add work experience</p>
      </div>
    </div>
  );
};

export default WorkExperience;
