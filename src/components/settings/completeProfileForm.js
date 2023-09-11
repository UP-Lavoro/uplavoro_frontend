import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../common/button";
import ReactSelectField from "../common/reactSelectField";
import InputField from "../common/inputField";
import DatePickerFeild from "../common/datePicker";
import MessageQuestion from "../../../public/assets/icons/message-question.svg";
import { useDispatch, useSelector } from "react-redux";
import { userSettings } from "@/redux/actions/userActions";
import CheckBox from "../common/checkBox";

const jobCategoriesArr = [
  {
    slug: "building",
    name: "Building",
    disabled: false,
  },
  {
    slug: "logistic",
    name: "Logistic",
    disabled: false,
  },
  {
    slug: "workers_metalworking",
    name: "Workers - Metalworking",
    disabled: false,
  },
  {
    slug: "sanity",
    name: "Sanity",
    disabled: false,
  },
  {
    slug: "restauration_tourism",
    name: "Restauration - Tourism",
    disabled: false,
  },
  {
    slug: "office_administration",
    name: "Office - Administration",
    disabled: false,
  },
  {
    slug: "clerk_sales",
    name: "Clerk - Sales",
    disabled: false,
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    disabled: false,
  },
];

const CompleteProfileForm = (props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({});
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state?.auth);
  const { info } = useSelector((state) => state?.user);
  const { isLoading } = useSelector((state) => state?.user);

  const [uploadedFile, setUploadedFile] = useState(null);
  console.log(
    "🚀 ~ file: completeProfileForm.js:64 ~ CompleteProfileForm ~ uploadedFile:",
    uploadedFile
  );
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(
      "🚀 ~ file: completeProfileForm.js:66 ~ handleFileChange ~ file:",
      file?.name
    );
    setUploadedFile(file);
  };

  useEffect(() => {
    if (info) {
      for (let key in info?.profile) {
        if (
          info?.profile[key] != null &&
          info?.profile[key] != undefined &&
          info?.profile[key] != ""
        ) {
          setValue(key, info?.profile[key]);
        }
        if (key == "gender") {
          let formatedId = info?.profile[key]?.toLowerCase();
          setValue(key, { id: formatedId, label: info?.profile[key] });
        }
      }
    }
  }, [info]);

  const onSubmit = (data) => {
    if (data) {
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
      let postData = {
        ...data,
        fiscal_code: "13123",
        residence_municipality: "georgia",
        residence_province: "german",
      };
      dispatch(userSettings(postData, token, router));
    }
  };

  const [selectedJobCategories, setSelectedJobCategories] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  useEffect(() => {
    setJobCategories(jobCategoriesArr);
  }, []);

  const jobSelectHandler = (e, slug) => {
    if (e?.target?.checked == true) {
      setSelectedJobCategories([...selectedJobCategories, slug]);
    }
    if (e?.target?.checked == false) {
      // let foundedItem = selectedItems?.findIndex(obj=> obj == slug)
      let filteredItems = selectedJobCategories?.filter((obj) => obj != slug);
      setSelectedJobCategories([...filteredItems]);
    }
  };
  console.log(
    "🚀 ~ file: completeProfileForm.js:116 ~ jobSelectHandler ~ e:",
    selectedJobCategories
  );

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`w-full flex justify-start text-[18px] xl:text-[20px] ${
          props?.callFrom === "from_profile"
            ? "bg-white py-2 2xl:px-0"
            : "bg-footer-bar py-12 md:px-20 lg:px-28 xl:px-48 2xl:px-72"
        }`}
      >
        <div
          className={`${
            props?.callFrom === "from_profile"
              ? "2xl:w-[100%] divide-y-2 divide-[#C6C6C6]"
              : "md:w-[100%] lg:w-[75%]"
          } flex flex-col gap-y-6`}
        >
          <div className="flex flex-col gap-y-6 py-8">
            {/* <div className='desktop:pr-80'> */}
            {props?.callFrom === "from_profile" ? (
              <p className="text-[23px] tracking-[-0.69px] text-black font-semibold">
                {`Step 1 - Personal data`}
              </p>
            ) : (
              <p className="text-black text-[26px] xl:text-[30px] tracking-[-0.9px] pr-36">
                Complete your profile with this information to complete register
                and enter your reserved area
              </p>
            )}
            {/* </div> */}
            <div className="flex gap-4">
              <div className="flex flex-col w-[49%]">
                <label className="text-black tracking-[-0.6px]">Name</label>
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
                <label className="text-black tracking-[-0.6px]">Surname</label>
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

            <div className="flex gap-4">
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
              <div className="flex gap-4 w-[49%]">
                <div className="flex-col w-[30%] ">
                  <label className="text-black tracking-[-0.6px]">Gender</label>
                  <ReactSelectField
                    name="gender"
                    control={control}
                    // defaultValue={{id: 'm', label: 'M'}}
                    optionData={[
                      { id: "m", label: "M" },
                      { id: "f", label: "F" },
                    ]}
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

            <div className="flex gap-4">
              <div className="flex flex-col w-[49%]">
                <label className="text-black tracking-[-0.6px]">
                  Birth nation
                </label>
                <InputField
                  name="birth_nation"
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
                  Birth City
                </label>
                <InputField
                  name="birth_municipality"
                  placeholder="Bologna"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Field Required!",
                    },
                  }}
                  errors={errors}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col w-[49%]">
                <label className="text-black tracking-[-0.6px]">
                  Residential address
                </label>
                <InputField
                  name="residence_address"
                  placeholder="Mura di Porta Galliera, 3"
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
              <div className="flex gap-4 w-[49%]">
                <div className="flex-col w-[75%]">
                  <label className="text-black tracking-[-0.6px]">
                    Residential city
                  </label>
                  <ReactSelectField
                    name="residence_municipality"
                    placeholder="Bologna"
                    control={control}
                    // rules={{
                    //   required: {
                    //     value: true,
                    //     message: "Field required!",
                    //   },
                    // }}
                    // errors={errors}
                  />
                </div>
                <div className="flex-col w-[25%]">
                  <label className="text-black tracking-[-0.6px]">
                    Postcode
                  </label>
                  <InputField
                    name="residence_postalcode"
                    placeholder="40124"
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
            </div>

            <div className="flex gap-4">
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
              <div className="flex gap-4 w-[49%]">
                <div className="flex-col w-[75%]">
                  <label className="text-black tracking-[-0.6px]">
                    Living city
                  </label>
                  <ReactSelectField
                    name="living_city"
                    placeholder="Bologna"
                    control={control}
                  />
                </div>
                <div className="flex-col w-[25%]">
                  <label className="text-black tracking-[-0.6px]">
                    Postcode
                  </label>
                  <InputField
                    name="living_cap"
                    placeholder="40124"
                    control={control}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
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
                      message: "Please enter valid email",
                    },
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

            <div className="flex gap-4">
            <div className="flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
                How did you find out about UP?
              </label>
              <ReactSelectField
                name="how_to_find"
                placeholder="Via Facebook"
                control={control}
              />
            </div>
            <div className="flex-col w-[49%]">
              <label className="text-black tracking-[-0.6px]">
              Nearest branch
              </label>
              <ReactSelectField
                name="nearest_branch"
                placeholder="Bologna"
                control={control}
              />
            </div>
            </div>


            {props?.callFrom === "from_profile" ? (
              ""
            ) : (
              <p className="text-hero tracking-[-0.6px] pr-36">
                Attention, the data entered will not be modifiable (excluding
                telephone and email) verify correctness before saving!
              </p>
            )}
          </div>

          {props?.callFrom == "from_profile" ? (
            <>
              <div className="flex flex-col gap-y-6 py-8">
                <p className="text-[23px] tracking-[-0.69px] text-black font-semibold">
                  {`Step 2 - Favorite job categories (max. 3) •`}
                </p>
                {jobCategories?.map((item, ind) => {
                  return (
                    <CheckBox
                      key={ind}
                      title={item.name}
                      control={control}
                      name={item.slug}
                      rules={{
                        required: {
                          value: true,
                          message: "Checkbox required!",
                        },
                      }}
                      errors={errors}
                      onChange={(e) => jobSelectHandler(e, item?.slug)}
                      disabled={item?.disabled}
                    />
                  );
                })}
              </div>

              <div className="flex flex-col gap-y-6 py-8">
                <p className="text-[23px] tracking-[-0.69px] text-black font-semibold">
                  {`Step 3 - Resume`}
                </p>
                <div className="flex flex-col gap-y-4">
                  <p className="flex gap-x-1 text-black tracking-[-0.48px]">
                    Attach your resume here.{" "}
                    <span className="text-hero">{`Don’t have one? Create it with us!`}</span>
                  </p>
                  {/* <form onSubmit={handleSubmit}> */}
                  <div
                    className="flex flex-col items-center border-2 py-10 px-2 border-dashed border-gray-300 rounded-md gap-y-4"
                    type="file"
                    onClick={() => document.getElementById("fileInput").click()}
                    onChange={handleFileChange}
                  >
                    <p className="text-hero">
                      {uploadedFile != null
                        ? uploadedFile?.name?.toString()
                        : "Choose a file from your device"}
                    </p>
                    <input type="file" id="fileInput" className="sr-only" />
                  </div>
                  {/* </form> */}
                  {/* <p className="text-black">Formats: DOC, DOCX, PDF | Maximum 5Mb</p> */}
                </div>
                <Button
                  title={"Save my data"}
                  ring={true}
                  style={"w-full py-5 bg-[#B433F8] text-white"}
                  loading={isLoading}
                />
              </div>
            </>
          ) : (
            <Button
              title={"Save settings"}
              ring={true}
              style={"w-full py-5 bg-[#B433F8] text-white"}
              loading={isLoading}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default CompleteProfileForm;
