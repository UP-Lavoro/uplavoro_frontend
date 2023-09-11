import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logoutCompany, logoutUser } from "@/redux/actions/authActions";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import ProfileLogo from "../svgs/profileLogo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserMenu = ({callFrom}) => {
  const auth = useSelector((state) => state?.auth);
  const { info } = useSelector((state) => state?.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    if (auth?.token != null) {
      if(callFrom == 'company'){
        dispatch(logoutCompany(auth?.token, router));
      }else{
        dispatch(logoutUser(auth?.token, router));
      }
    }
  };
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className=" flex items-center justify-center text-sm focus:outline-none ">
          <span className="sr-only">Open user menu</span>
          <div className="flex items-center gap-x-2">
          {info?.profile?.name ? (
            <p className="w-20 font-bold tracking-[-0.48px] text-white truncate">{info?.profile?.name?.toUpperCase()}</p>
          ) : (
            ''
          )}
          <ProfileLogo color={'#ffffff'} width={'42'} height={'42'}/>
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/profile"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href={"/profile/settings"}
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                )}
              >
                Settings
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <p
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                )}
                onClick={logoutHandler}
              >
                Sign out
              </p>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
