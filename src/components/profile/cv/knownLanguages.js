import React, { useEffect, useState } from "react";
import DeleteIcon from "../../../../public/assets/icons/delete.svg";
import AddIcon from "../../../../public/assets/icons/add-circle.svg";
import ReactSelectField from "@/components/common/reactSelectField";
import InputField from "@/components/common/inputField";
import Image from "next/image";
import { useSelector } from "react-redux";

const KnownLanguages = ({ control, errors, spoken_knowledges, written_knowledges, certificate_types }) => {
  const [multipleItems, setMultipleItems] = useState([{ key: 1 }]);

  const {configuration} = useSelector((state) => state.user);
  const [spokenKnowledges, setSpokenKnowledges] = useState([]);
  const [writtenKnowledges, setWrittenKnowledges] = useState([]);
  const [certificateTypes, setCertificateTypes] = useState([]);
  
  useEffect(() => {
    if (configuration?.spoken_knowledge) {
      let updatedSpokenLang = configuration?.spoken_knowledge?.map((obj, ind)=>{
        return {
          id: obj,
          label: obj
        }
      })

      let updatedWrittenLang = configuration?.written_knowledge?.map((obj, ind)=>{
        return {
          id: obj,
          label: obj
        }
      })

      let updatedCertificateTypes = configuration?.certificate_types?.map((obj, ind)=>{
        return {
          id: obj,
          label: obj
        }
      })
      setSpokenKnowledges(updatedSpokenLang)
      setWrittenKnowledges(updatedWrittenLang)
      setCertificateTypes(updatedCertificateTypes)
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
            <div className="flex flex-col gap-y-4 py-6 px-8 border border-paragraph rounded-[16px] " key={ind}>
              <div className="flex flex-col">
                <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                  Language
                </label>
                <InputField
                  placeholder="French"
                  control={control}
                  name={`languages.${[ind]}.language`}
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
                    Spoken knowledge
                  </label>
                  <ReactSelectField
                    placeholder="Discrete"
                    control={control}
                    name={`languages.${[ind]}.spoken`}
                    rules={{
                      required: {
                        value: true,
                        message: "Required!",
                      },
                    }}
                    errors={errors}
                    optionData={spokenKnowledges}
                  />
                </div>
                <div className="flex-col w-[49%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Written knowledge
                  </label>
                  <ReactSelectField
                    placeholder="Good"
                    control={control}
                    name={`languages.${[ind]}.written`}
                    rules={{
                      required: {
                        value: true,
                        message: "Required!",
                      },
                    }}
                    errors={errors}
                    optionData={writtenKnowledges}
                  />
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="flex-col w-[49%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Certificate
                  </label>
                  <ReactSelectField
                    placeholder="IELTS"
                    control={control}
                    name={`languages.${[ind]}.certificate`}
                    rules={{
                      required: {
                        value: true,
                        message: "Required!",
                      },
                    }}
                    errors={errors}
                    optionData={certificateTypes}
                  />
                </div>
                <div className="flex flex-col w-[49%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Final vote
                  </label>
                  <InputField
                    placeholder="110"
                    control={control}
                    name={`languages.${[ind]}.certificate_evaluation`}
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

              <div
                className="flex gap-x-3 items-center py-4 cursor-pointer"
                onClick={() => delObjectHandler(item)}
              >
                <Image
                  src={DeleteIcon}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
                <p className="tracking-[-0.6px] text-delete text-[18px] xl:text-[20px]">Delete language</p>
              </div>
            </div>
          );
        })}

      <div
        className="flex items-center gap-x-3 py-6 px-8 border border-paragraph rounded-[16px] cursor-pointer"
        onClick={addObjectHandler}
      >
        <Image src={AddIcon} alt="" style={{ width: "24px", height: "24px" }} />
        <p className="tracking-[-0.6px] text-black text-[18px] xl:text-[20px]">Add language</p>
      </div>
    </div>
  );
};

export default KnownLanguages;
