import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../common/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, loginCompany, loginUser } from "@/redux/actions/authActions";
import InputField from "../common/inputField";
import { useRouter } from "next/router";
import Eye from "../../../public/assets/icons/eye.svg";
import EyeSlash from "../../../public/assets/icons/eye-slash.png";
import useTranslation from "next-translate/useTranslation";
import InfoCircle from "../svgs/infoCircle";
import Label from "../common/label";

const LoginCard = ({ callFrom }) => {
  const { t, lang } = useTranslation("login");
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const auth = useSelector((state) => state?.auth);
  let adminTextColor = "text-[#4338CA]";
  let adminBgColor = "bg-[#4338CA]";
  let companyBgColor = "bg-[#2E8CDE]";
  let companyTextColor = "text-[#2E8CDE]";

  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState("password");
  const showHidePassword = () => {
    if (showPassword != "password") {
      setShowPassword("password");
    } else {
      setShowPassword("text");
    }
  };

  const onSubmit = async (data) => {
    if(callFrom == 'admin'){
      dispatch(loginAdmin(router, data));
    }else if(callFrom == 'company'){
      dispatch(loginCompany(router, data))
    }else{
      dispatch(loginUser(router, data));
    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-6 bg-footer-bar rounded-[16px] px-14 py-14 text-[18px] xl:text-[20px]">
        <p className={`${callFrom == 'admin' && adminTextColor || callFrom == 'company' && companyTextColor || 'text-hero'}  font-semibold text-[30px] tracking-[-0.9px] pb-4`}>
          {callFrom == "admin" ? "Login to admin area" : t("logincard.heading")}
        </p>
        <div className="flex flex-col gap-y-1 w-full ">
        <Label name={t("logincard.email")} required={true} />
          
          <div className="w-[480px] lg:w-[565px]">
            <InputField
              name="email"
              placeholder="Enter your email ..."
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
        <div className="flex flex-col gap-y-1 w-full">
        <Label name={t("logincard.password")} required={true} />

          <div className="relative w-[480px] lg:w-[565px]">
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
        </div>

        <Link style={{width: 'max-content'}} href={"/forgetpassword"}>
          <div className="flex items-center gap-x-6 pb-2">
            <p className={`${callFrom == 'admin' && adminTextColor || callFrom == 'company' && companyTextColor || 'text-hero'} tracking-[-0.6px]`}>
              {t("logincard.forgotpassword")}
            </p>
            <InfoCircle color={callFrom == 'admin' && '#4338CA' || callFrom == 'company' && '#2E8CDE' || null}/>
          </div>
        </Link>
        <div className="w-full">
          <Button
            title="Login"
            // ring={true}
            style={`${callFrom == 'admin' && adminBgColor || callFrom == 'company' && companyBgColor || 'bg-[#B433F8]'} w-full py-5 text-[18px] font-semibold tracking-[-0.54px] text-white`}
            loading={auth?.isLoading}
          />
        </div>

        {callFrom == "admin" ? (
          ""
        ) : (
          <div className="flex justify-center py-2 gap-x-2">
            <p className="text-black tracking-[-0.6px]">
              {t("logincard.donthaveaccount")}
            </p>
            <Link href={`${callFrom == 'company' ? '/company/register' : '/register'}`}>
              <p className={`${callFrom == 'company' && companyTextColor || 'text-hero'}  tracking-[-0.6px]`}>
                {t("logincard.registerhere")}
              </p>
            </Link>
          </div>
        )}
      </div>
    </form>
  );
};

export default LoginCard;
