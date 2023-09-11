import InputField from "@/components/common/inputField";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DeleteIcon from "../../../../public/assets/icons/delete.svg";
import AddIcon from "../../../../public/assets/icons/add-circle.svg";
import ReactSelectField from "@/components/common/reactSelectField";
import DatePickerFeild from "@/components/common/datePicker";
import { useSelector } from "react-redux";

const StudyAndTraining = ({ control, errors, study_levels, states }) => {
  const [multipleItems, setMultipleItems] = useState([{ key: 1 }]);
  const {configuration} = useSelector((state) => state.user);
  const [citiesList, setCitiesList] = useState([]);
  const [studyLevel, setStudyLevel] = useState([])
  
  useEffect(() => {
    if (configuration?.city_model) {
      console.log("🚀 ~ file: studyAndTraining.js:15 ~ StudyAndTraining ~ studyLevel:", configuration?.study_level)
      setCitiesList(configuration?.city_model);
      if(configuration?.study_level){
        let updatedArr = configuration?.study_level?.map((obj, ind)=>{
          return {
            id: obj,
            label: obj
          }
        })
        setStudyLevel(updatedArr)
      }
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

  const options = [
    {id: 'high_school', label: 'High School'},
    {id: 'associate_degree', label: `Associate's Degree`},
    {id: 'bachelor_degree', label: `Bachelor's Degree`},
    {id: 'master_degree', label: `Master's Degree`},
  ]

  return (
    <div className="flex flex-col gap-y-4">
      {multipleItems?.length > 0 &&
        multipleItems?.map((item, ind) => {
          return (
            <div className="flex flex-col gap-y-4 py-6 px-8 border border-paragraph rounded-[16px] " key={ind}>
              <div className="flex gap-x-4">
                <div className="flex flex-col w-[69%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Institution name
                  </label>
                  <InputField
                    name={`studies.${[ind]}.name`}
                    placeholder="Nikola Tesla Scientific High School"
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
                <div className="flex-col w-[29%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    State
                  </label>
                  <ReactSelectField
                  showLabel={'name'}
                    name={`studies.${[ind]}.country`}
                    placeholder="IT"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Required!",
                      },
                    }}
                    errors={errors}
                    optionData={citiesList}
                  />
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="flex-col w-[69%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Level of study
                  </label>
                  <ReactSelectField
                    name={`studies.${[ind]}.level_of_study`}
                    placeholder="High School/Professional Diploma"
                    control={control}
                    optionData={studyLevel}
                  />
                </div>
                <div className="flex-col w-[29%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Year graduated
                  </label>
                  <DatePickerFeild
                    name={`studies.${[ind]}.issued_date`}
                    title="08-05-1997"
                    control={control}
                    showYearPicker={true}
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

              <div className="flex flex-col">
                <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                  Degree
                </label>
                <InputField
                  name={`studies.${[ind]}.title`}
                  placeholder="Diploma as an interpreter / translator"
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

              <div
                className="flex gap-x-3 items-center py-4 cursor-pointer"
                onClick={() => delObjectHandler(item)}
              >
                <Image
                  src={DeleteIcon}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
                <p className="tracking-[-0.6px] text-delete text-[18px] xl:text-[20px]">Remove degree</p>
              </div>
            </div>
          );
        })}

      <div
        className="flex items-center gap-x-3 py-6 px-8 border border-paragraph rounded-[16px] cursor-pointer"
        onClick={addObjectHandler}
      >
        <Image src={AddIcon} alt="" style={{ width: "24px", height: "24px" }} />
        <p className="tracking-[-0.6px] text-black text-[18px] xl:text-[20px]">Add degree</p>
      </div>
    </div>
  );
};

export default StudyAndTraining;
