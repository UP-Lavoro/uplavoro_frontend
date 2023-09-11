import React, { useEffect, useState } from "react";
import DeleteIcon from "../../../../public/assets/icons/delete.svg";
import AddIcon from "../../../../public/assets/icons/add-circle.svg";
import ReactSelectField from "@/components/common/reactSelectField";
import InputField from "@/components/common/inputField";
import Image from "next/image";
import { useSelector } from "react-redux";

const SoftSkills = ({ control, errors, skill_level, skill_types }) => {
  const [multipleItems, setMultipleItems] = useState([{ key: 1 }]);

  const {configuration} = useSelector((state) => state.user);
  const [skillLevel, setskillLevel] = useState([]);
  const [skillType, setskillType] = useState([]);
  
  useEffect(() => {
    if (configuration?.skill_types) {
      let updatedSkillTypes = configuration?.skill_types?.map((obj, ind)=>{
        return {
          id: obj,
          label: obj
        }
      })

      let updatedSkillLevel = configuration?.skill_level?.map((obj, ind)=>{
        return {
          id: obj,
          label: obj
        }
      })

      setskillLevel(updatedSkillLevel)
      setskillType(updatedSkillTypes)
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
  return (
    <div className="flex flex-col gap-y-4">
      {multipleItems?.length > 0 &&
        multipleItems?.map((item, ind) => {
          return (
            <div className="flex flex-col gap-y-4 py-6 px-8 border border-paragraph rounded-[16px]" key={ind}>
              <div className="flex flex-col">
                <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                  Knowledge
                </label>
                <InputField
                  name={`skills.${[ind]}.skill`}
                  placeholder="Public speaking"
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
                <div className="flex-col w-[49%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Level
                  </label>
                  <ReactSelectField
                    name={`skills.${[ind]}.level`}
                    placeholder="Good"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Required!",
                      },
                    }}
                    errors={errors}
                    optionData={skillLevel}
                  />
                </div>
                <div className="flex-col w-[49%] truncate">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Type
                  </label>
                  <ReactSelectField
                    name={`skills.${[ind]}.type`}
                    placeholder="Comunicazione e marketing"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Required!",
                      },
                    }}
                    errors={errors}
                    optionData={skillType}
                  />
                </div>
              </div>

              <div className="flex gap-x-3 items-center py-4 cursor-pointer" onClick={()=> delObjectHandler(item)}>
                <Image
                  src={DeleteIcon}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
                <p className="tracking-[-0.6px] text-delete text-[18px] xl:text-[20px]">
                  Delete soft skill
                </p>
              </div>
            </div>
          );
        })}

      <div className="flex items-center gap-x-3 py-6 px-8 border border-paragraph rounded-[16px] cursor-pointer" onClick={addObjectHandler}>
        <Image src={AddIcon} alt="" style={{ width: "24px", height: "24px" }} />
        <p className="tracking-[-0.6px] text-black text-[18px] xl:text-[20px]">Add soft skill</p>
      </div>
    </div>
  );
};

export default SoftSkills;
