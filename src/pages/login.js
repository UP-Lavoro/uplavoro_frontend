import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/images/Logo.svg";
import ArrowWhite from "../../public/assets/icons/arrow-white.svg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import LoginCard from "../components/login/loginCard";
import Hero2 from "../../public/assets/images/hero-2.svg";

const Login = ({ loginProp }) => {
  const dispatch = useDispatch();

  return (
    <div className="relative overflow-hidden w-full min-h-screen py-6 flex flex-col items-center justify-center gap-y-16 bg-hero">
      <Link href={"/"} className="pb-6">
        <Image
          src={Logo}
          alt=""
          style={{ width: "102.73px", height: "59.99px" }}
        />
      </Link>
      <div className="flex flex-col gap-y-10 justify-center items-center z-10">
      <LoginCard />
      <Link href={"company/login"}>
      <div className="flex gap-x-8 pb-4">
        <p className="text-[#e7e3ec] font-light text-[18px] xl:text-[20px] tracking-[-0.6px]">
          Are you a company? Access the company portal from here
        </p>
        <Image
          src={ArrowWhite}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      </Link>
      </div>
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

Login.getInitialProps = async () => {
  const notShowHeader = true;
  return { notShowHeader };
};

export default Login;
