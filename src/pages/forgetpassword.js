import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/images/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import InputField from "@/components/common/inputField";
import Button from "@/components/common/button";
import { forgetPassword } from "@/redux/actions/authActions";
import Hero2 from "../../public/assets/images/hero-2.svg";


const ForgetPassword = () => {
  const { t, lang } = useTranslation("login");
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const { isLoading } = useSelector(state => state?.auth)
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data) => {
    dispatch(forgetPassword(data, router));
  };
  return (
    <div className="relative overflow-hidden w-full min-h-screen py-6 flex flex-col items-center gap-y-10 bg-hero">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt=""
          style={{ width: "102.73px", height: "59.99px" }}
        />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-6 bg-footer-bar rounded-2xl px-10 py-10 text-[18px] xl:text-[20px]">
          <p className="text-hero font-semibold text-[28px] xl:text-[30px] tracking-[-0.9px] pb-2">
            Please enter your email
          </p>
          <div className="flex flex-col w-full ">
            <label className="text-black xl:text-[20px]">Email address</label>
            <div className="bg-white w-[466px]">
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

          
          <div className="w-full">
            <Button
              title="Recover Password"
              ring={true}
              style={"w-full py-4 bg-[#B433F8] text-white"}
              loading={isLoading}
            />
          </div>

          <div className="flex justify-center gap-x-2">
            <p className="text-black xl:text-[20px] tracking-[-0.6px]">
              {t("logincard.donthaveaccount")}
            </p>
            <Link href={"/register"}>
              <p className="text-hero xl:text-[20px] tracking-[-0.6px]">
                {t("logincard.registerhere")}
              </p>
            </Link>
          </div>
        </div>
      </form>

      <div className="">
        <Image
          style={{
            width: "275px",
            height: "490px",
            position: "absolute",
            right: "-20px",
            bottom: "-130px",
          }}
          src={Hero2}
          alt=""
        />
      </div>
    </div>
  );
};

ForgetPassword.getInitialProps = async () => {
  const notShowHeader = true;
  return { notShowHeader };
};

export default ForgetPassword;
