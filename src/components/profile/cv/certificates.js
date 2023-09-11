import React, { useState } from "react";
import Delete from "../../../../public/assets/icons/delete.svg";
import AddIcon from "../../../../public/assets/icons/add-circle.svg";
import ReactSelectField from "@/components/common/reactSelectField";
import InputField from "@/components/common/inputField";
import Image from "next/image";
import DatePickerFeild from "@/components/common/datePicker";
import DeleteIcon from "@/components/svgs/deleteIcon";

const Certificates = ({ control, errors }) => {
  const [multipleItems, setMultipleItems] = useState([{ key: 1 }]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const addObjectHandler = () => {
    let length = multipleItems?.length;
    multipleItems.push({ key: length + 1 });
    setMultipleItems([...multipleItems]);
  };

  const delObjectHandler = (item) => {
    let tempArr = multipleItems?.filter((obj) => obj?.key != item?.key);
    setMultipleItems([...tempArr]);
    setUploadedFile(null)
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(
        "🚀 ~ file: certificates.js:26 ~ handleFileChange ~ file:",
        file
      );
      setUploadedFile(file);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      {multipleItems?.length > 0 &&
        multipleItems?.map((item, ind) => {
          return (
            <div
              className="flex flex-col gap-y-4 py-6 px-8 border border-paragraph rounded-[16px]"
              key={ind}
            >
              <div className="flex gap-x-4">
                <div className="flex flex-col w-[49%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Certificate name
                  </label>
                  <InputField
                    name={`certificates.${[ind]}.name`}
                    placeholder="Lifeguard certificate"
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
                <div className="flex flex-col w-[49%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Issued by:
                  </label>
                  <InputField
                    name={`certificates.${[ind]}.issued_by`}
                    placeholder="IMAB Italia"
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

              <div className="flex gap-x-4">
                <div className="flex-col w-[49%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Data di rilascio
                  </label>
                  <DatePickerFeild
                    name={`certificates.${[ind]}.issued_date`}
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

                {/* <form onSubmit={handleSubmit}> */}
                {/* <input className="flex flex-col w-full items-center border-2 py-10 px-2 border-dashed border-gray-300 rounded-md gap-y-4" type="file" onChange={handleFileChange} > */}
                <div className="flex-col w-[49%]">
                  <label className="text-[#111111] tracking-[-0.6px] text-[18px] xl:text-[20px]">
                    Attach file:
                  </label>
                  <div
                    className="flex flex-col border-2 py-2 px-2 border-dashed border-gray-100 rounded-md gap-y-4"
                    type="file"
                    onClick={() =>
                      uploadedFile == null &&
                      document.getElementById("fileInput").click()
                    }
                    onChange={handleFileChange}
                  >
                    {uploadedFile != null && uploadedFile?.name ? (
                      <div className="p-2 rounded-md bg-hero flex justify-between items-center">
                        <p className="text-white truncate">
                          {uploadedFile?.name}
                        </p>
                        <div onClick={() => setUploadedFile(null)}>
                          <DeleteIcon color={"white"} />
                        </div>
                      </div>
                    ) : (
                      <p className="text-paragraph">
                        Select file from your device
                      </p>
                    )}
                    <input type="file" id="fileInput" className="sr-only" />
                  </div>
                </div>
                {/* </input> */}
                {/* </form> */}
              </div>

              <div
                className="flex gap-x-3 items-center py-4 cursor-pointer"
                onClick={() => delObjectHandler(item)}
              >
                <Image
                  src={Delete}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
                <p className="tracking-[-0.6px] text-delete text-[18px] xl:text-[20px]">
                  Delete certificate
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
        <p className="tracking-[-0.6px] text-black text-[18px] xl:text-[20px]">Add certificate</p>
      </div>
    </div>
  );
};

export default Certificates;
