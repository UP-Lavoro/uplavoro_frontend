import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LinkedIn from "../../../public/assets/icons/linkedin.png";
import Google from "../../../public/assets/icons/google.svg";
import ReactSelectField from "../common/reactSelectField";
import { useForm } from "react-hook-form";
import Button from "../common/button";
import CheckBox from "../common/checkBox";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  handleThirdPartyRegister,
  registerCompany,
  registerUser,
} from "@/redux/actions/authActions";
import InputField from "../common/inputField";
import { signIn } from "next-auth/react";
import Address from "../profile/cv/address";
import Label from "../common/label";

const userRegisterConsents = [
  {
    id: 1,
    name: "I want to be updated on opportunities, news, promotional offers and other initiatives designed for you as indicated in the privacy policy in point X",
  },
  {
    id: 2,
    name: "I agree to the promotion of your application with the UP Jobs and potential group customers, through the use of your images, audio and video, as indicated in the privacy policy in point X",
  },
  {
    id: 3,
    name: "I consent to the use of my personal data for online marketing purposes as indicated in the privacy policy at point X",
  },
  {
    id: 4,
    name: "I agree to the promotion of your application with the UP Jobs and potential group customers, through the use of your images, audio and video, as indicated in the information privacy at point X",
  },
  { id: 5, name: "I have read and understood the UP privacy policy" },
];

const companyRegisterConsents = [
  {
    id: 1,
    name: "I declare that I have read and understood the Privacy Policy.",
  },
  {
    id: 2,
    name: "I declare to consent to the processing of data for purposes related to marketing activities.",
  },
  {
    id: 3,
    name: "I declare to consent to the processing of personal data for marketing purposes through online channels.",
  },
];

const RightSection = (props) => {
  let companyTextColor = "text-[#4338CA]";
  let companyBgColor = "text-[#4338CA]";
  let companyBtnBgColor = "bg-[#2e8cde]";

  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const [checkboxArray, setCheckboxArray] = useState([]);
  useEffect(() => {
    if (props?.callFrom == "company") {
      setCheckboxArray(companyRegisterConsents);
    } else {
      setCheckboxArray(userRegisterConsents);
    }
  }, []);
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // setFile(file);
  };

  const linkedInRegisterHandler = (e) => {
    e.preventDefault();
    dispatch(handleThirdPartyRegister());
    signIn("linkedin");
  };

  const googleRegisterHandler = (e) => {
    // e.preventDefault();
    dispatch(handleThirdPartyRegister());
    signIn("google");
  };

  const onSubmit = async (data) => {
    if (data?.email && data?.taxIdCode && props?.callFrom != "company") {
      dispatch(registerUser(data, router));
    }else{
      dispatch(registerCompany(data, router))
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-footer-bar py-10 px-16 pb-20">
        <div className="md:w-[98%] xl:w-[80%] flex flex-col gap-y-6">
          <div className="flex gap-x-2 justify-end">
            <p className="text-gray-300">Already have an account?</p>
            <Link
              href={`${
                props?.callFrom == "company" ? "/company/login" : "/login"
              }`}
            >
              <p
                className={`${
                  props?.callFrom == "company" ? companyTextColor : "text-hero"
                }`}
              >
                Login
              </p>
            </Link>
          </div>

          {props?.callFrom == "company" ? (
            ""
          ) : (
            <div className="flex flex-col gap-y-4">
              <p className="text-hero text-[23px] font-semibold tracking-[-0.9px]">
                Subscribe with one click!
              </p>
              <div className="flex gap-x-4">
                <div
                  onClick={(e) => linkedInRegisterHandler(e)}
                  className="bg-white flex gap-x-4 w-[437px] h-[74px] p-2 items-center border border-gray-100 rounded-md"
                >
                  <Image
                    src={LinkedIn}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="text-black tracking-[-0.54px]">
                    Register with LinkedIn
                  </p>
                </div>
                <div
                  onClick={(e) => googleRegisterHandler(e)}
                  className="bg-white flex gap-x-4 w-[437px] h-[74px] p-2 items-center border border-gray-100 rounded-md"
                >
                  <Image
                    src={Google}
                    alt=""
                    style={{ width: "", height: "" }}
                  />
                  <p className="text-black tracking-[-0.54px]">
                    Register with Google
                  </p>
                </div>
              </div>

              <hr className="h-px my-2 text-black bg-black border-0 dark:bg-gray-700" />
            </div>
          )}

          <div className="flex flex-col gap-y-4">
            <p
              className={`${
                props?.callFrom == "company" ? companyTextColor : "text-hero"
              } text-[23px] font-semibold tracking-[-0.9px]`}
            >
              {props?.callFrom == "company"
                ? "Subscribe to find your perfect team"
                : "Subscribe with your email"}
            </p>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1 w-full">
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

              {props?.callFrom == "company" && (
                <div className="flex flex-col gap-y-1 w-full">
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
              )}

              <div className="flex flex-col gap-y-1 w-full">
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

              <div className="flex flex-col gap-y-1 w-full">
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

              {props?.callFrom == "company" && (
                <div className="flex flex-col gap-y-1 w-full">
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
              )}

              {props?.callFrom == "company" && (
                <div className="flex flex-col gap-y-1 w-full">
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
              )}

              {props?.callFrom == "company" && (
                <div className="py-2">
                  <CheckBox
                    title={"Physical person"}
                    control={control}
                    name={"physical_person"}
                    errors={errors}
                  />
                </div>
              )}

              {props?.callFrom == "company" && (
                <div className="flex flex-col gap-y-1 w-full">
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
              )}

              {props?.callFrom == "company" && (
                <div className="flex flex-col gap-y-1 w-full">
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
              )}

              {props?.callFrom == "company" && (
                <Address
                  control={control}
                  errors={errors}
                  setValue={setValue}
                />
              )}

              {props?.callFrom == "company" && (
                <div className="flex flex-col gap-y-1 w-full">
                  <Label name="CCNL" />
                  <div className="">
                    <InputField
                      name="ccnl"
                      control={control}
                    />
                  </div>
                </div>
              )}

              {props?.callFrom == "company" && (
                <div className="flex flex-col gap-y-1 w-full">
                  <Label name="Ateco Code" />
                  <div className="">
                    <InputField
                      name="ateco_code"
                      control={control}
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-y-1 w-full">
                <Label name="Nearest Branch" required={true} />
                <div className="">
                  <ReactSelectField
                    name="branch"
                    optionData={[]}
                    // placeholder="Enter your name ..."
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Branch required!",
                      },
                    }}
                    errors={errors}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-1 w-full">
                <Label name="Password" required={true} />
                <div className="">
                  <InputField
                    name="password"
                    // placeholder="Enter your name ..."
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Password required!",
                      },
                    }}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-y-4">
          <p className="text-hero text-[28px] xl:text-[30px] font-semibold tracking-[-0.9px]">
            Attach your curriculum
          </p>
          <form onSubmit={handleSubmit}>
            <div
              className="flex flex-col items-center border-2 py-10 px-2 border-dashed border-gray-300 rounded-md gap-y-4"
              type="file"
              onClick={() => document.getElementById("fileInput").click()}
              onChange={handleFileChange}
            >
              <p className="text-hero">Choose a file from your device</p>
              <input type="file" id="fileInput" className="sr-only" />
            </div>
          </form>
          <p className="text-black">Formats: DOC, DOCX, PDF | Maximum 5Mb</p>
        </div> */}

          <div className="flex flex-col gap-y-4 w-full py-4">
            {checkboxArray?.map((item, ind) => {
              return (
                <CheckBox
                  key={ind}
                  title={item.name}
                  control={control}
                  name={item.name}
                  rules={{
                    required: {
                      value: true,
                      message: "Checkbox required!",
                    },
                  }}
                  errors={errors}
                />
              );
            })}
          </div>

          <div className="w-full">
            <Button
              title={"Join the family"}
              style={`${
                props?.callFrom == "company" ? companyBtnBgColor : "bg-button-full"
              } w-full text-[20px] text-white py-6`}
              ring={true}
              loading={isLoading}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default RightSection;
