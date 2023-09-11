import LoginCard from '@/components/login/loginCard';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Logo from "../../../public/assets/images/Logo.svg";
import AdminLoginSvg from '@/components/svgs/adminLoginSvg';


const Adminlogin = () => {
  return (
    <div className="relative overflow-hidden w-full min-h-screen py-6 flex flex-col items-center justify-center bg-white">
      <Link href={"/"} className="">
        <Image
          src={Logo}
          alt=""
          style={{ width: "102.73px", height: "59.99px" }}
        />
      </Link>
      <div className="flex flex-col gap-y-10 justify-center items-center z-10 py-12">
      <LoginCard callFrom='admin' />
      <Link href={"admin/login"}>
        <AdminLoginSvg/>
      </Link>
      </div>
    </div>
  )
}

Adminlogin.getInitialProps = async () => {
  const notShowHeader = true;
  return { notShowHeader };
};

export default Adminlogin