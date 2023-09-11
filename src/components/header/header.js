import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/assets/images/Logo.svg";
import Button from "../common/button";
import UserMenu from "../profile/userMenu";
import { useSelector } from "react-redux";
import ProfileLogo from "../svgs/profileLogo";
import LanguageSelctor from "../languageSelector";
import DropdownComponent from "../common/dropdown";

const navigation = [
  { name: "Job offers", href: "/profile/offers" },
  { name: "Send your resume", href: "send-resume" },
  { name: "Companies", href: "companies" },
  { name: "LAB", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contacts", href: "#" },
  { name: "EN", href: "#" },
];

const labsArr = [
  { name: "UP Young", href: "#" },
  { name: "UP Sanity", href: "#" },
  { name: "UP Romania", href: "#" },
  { name: "UP Pakistan", href: "#" },
]

const Header = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const auth = useSelector((state) => state?.auth);

  const [isHovered, setIsHovered] = useState("");

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered("");
  };

  return (
    <header
      className={`sticky top-0 z-10 ${
        props?.callFrom === "company" ? "bg-[#4338ca]" : "bg-hero"
      }`}
    >
      <nav
        className={`flex items-center justify-between top-0 py-6 ${
          auth?.isAuthenticated ? "md:px-10" : "lg:px-24"
        } md:px-10 xl:px-44 2xl:px-72`}
        aria-label="Global"
      >
        <div className="flex lg:flex w-[80px] xl:w-[106px]">
          <Link href="/">
            <Image
              style={{ width: "85.1px", height: "49.7px" }}
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        {/* {auth?.isAuthenticated ? '' :  */}
        <div className="hidden lg:flex md:gap-x-6 xl:gap-x-8">
          {navigation.map((item, ind) => (
            <>
              <Link key={ind} href={item.href}>
                {item.name === "EN" && <LanguageSelctor isHovered={isHovered}/> || item.name == 'LAB' && <DropdownComponent title={'LAB'} elements={labsArr}/> || 
                <p
                  key={item.name}
                  className={`${
                    item.name === "EN" || item.name === "LAB" ? "dropdown" : ""
                  } relative flex items-center gap-x-2 font-bold tracking-[-0.48px] text-white`}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={() => handleMouseLeave(ind)}
                >
                  {item.name}
                  {item.name === "EN" || item.name === "LAB" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#fff"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </p>
                }
              </Link>
              
            </>
          ))}

        </div>

        {/* } */}
        <div className="flex items-center md:gap-x-4 xl:gap-x-6">
          {/* <p className="font-bold tracking-[-0.48px] text-white">Enri</p> */}
          
          {/* <ProfileLogo color={'#ffffff'} width={'38'} height={'38'}/> */}
          {auth?.isAuthenticated ? (
          <UserMenu callFrom={props?.callFrom}/>
          ) : (
            <>
              <Link href="/login">
                <Button title="Login" style={"text-white xl:text-[20px]"} />
              </Link>
              <Link href="/register">
                <Button
                  title="Register"
                  ring={true}
                  style={"text-hero bg-white xl:text-[20px]"}
                />
              </Link>
            </>
          )}
        </div>

        {/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="">Open menu</span>
          </button>
        </div> */}
      </nav>
      
    </header>
  );
};

export default Header;
