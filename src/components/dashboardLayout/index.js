import { Dialog, Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Briefcase from "@/components/svgs/briefcase";
import DashboardIcon from "@/components/svgs/dashboardIcon";
import ProfileCircle from "@/components/svgs/profileCircle";
import JobOfferIcon from "@/components/svgs/jobOfferIcon";
import BranchIcon from "@/components/svgs/branchIcon";
import Link from "next/link";
import Logo from "../svgs/logo";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "@/redux/actions/authActions";
import { useRouter } from "next/router";

const navigation = [
  {
    slug: "dashboard",
    title: "Dashboard",
    link: "/admin",
    icon: DashboardIcon,
  },
  {
    slug: "users",
    title: "Users",
    link: "/admin/users",
    icon: ProfileCircle,
  },
  {
    slug: "offers",
    title: "Job Offers",
    link: "/admin/offers",
    icon: JobOfferIcon,
  },
  {
    slug: "companies",
    title: "Companies",
    link: "/admin/companies",
    icon: Briefcase,
  },
  {
    slug: "branches",
    title: "Branches",
    link: "/admin/branches",
    icon: BranchIcon,
  },
];

const userNavigation = [
  { title: "Your profile", href: "/admin", slug: "profile" },
  { title: "Sign out", href: "#", slug: "signout" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DashboardLayout = ({ children, component }) => {
  console.log("🚀 ~ file: index.js:63 ~ DashboardLayout ~ children:", children)
  
  const auth = useSelector((state) => state?.auth);
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [seletedTabIndex, setSelectedTabIndex] = useState("");
  const [displayedTab, setDisplayedTab] = useState("");
  const dispatch = useDispatch();

  const tabHandler = (tab, index) => {
    setDisplayedTab(tab);
    setSelectedTabIndex(index);
  };

  const userNavHandler = (slug) =>{
    if(slug == 'signout' && auth?.token){
      dispatch(logoutAdmin(auth?.token, router))
    }
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 xl:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex pt-2 grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                    <div className="flex gap-x-2 h-16 shrink-0 items-center">
                      <Logo />
                      <p className="text-[#A5B4FA] text-[17px]">
                        Administration panel
                      </p>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((tab, index) => (
                              <li key={tab.slug}>
                                <Link
                                  href={tab.link}
                                  className={classNames(
                                    seletedTabIndex === index
                                      ? "bg-indigo-700 text-white"
                                      : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                                    "group flex items-center gap-x-3 rounded-md p-2 text-[21px] tracking-[-0.63px]"
                                  )}
                                >
                                  <tab.icon
                                    className={classNames(
                                      seletedTabIndex === index
                                        ? "text-white"
                                        : "text-indigo-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                    color={"#a5b4fa"}
                                    width={34}
                                    height={34}
                                  />
                                  {tab.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-[23%] xl:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#4338ca] px-6 py-6">
            <div className="flex gap-x-4 shrink-0 items-center">
              <div>
                <Logo />
              </div>
              {/* <Image className="h-[42px] w-[71px]" src={Logo} /> */}
              <p className="text-[#A5B4FA] text-[17px] tracking-[-0.51px] pr-10 leading-6">
                Administration panel
              </p>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-3 py-3">
                    {navigation.map((tab, index) => (
                      <li key={tab.slug} onClick={() => tabHandler(tab, index)}>
                        <Link
                          href={tab.link}
                          className={classNames(
                            tab?.slug == component
                              ? "bg-[#3730A3] text-white"
                              : "text-white hover:bg-[#3730A3]",
                            "group flex items-center gap-x-3 rounded-md p-3 text-[21px] tracking-[-0.63px] ease-in-out duration-300"
                          )}
                        >
                          <tab.icon
                            className={classNames(
                              seletedTabIndex === index
                                ? "text-white"
                                : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                            color={"#a5b4fa"}
                            width={34}
                            height={34}
                          />
                          {tab.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-[23%] flex flex-col h-screen">
          <div className="sticky top-0 z-40 flex h-[70px] shrink-0 items-center gap-x-4 border-b-[1.5px] border-gray-100 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 xl:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    {/* <Image className='h-8 w-8 rounded-full bg-gray-50' src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}/> */}
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.slug}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                              onClick={()=> userNavHandler(item?.slug)}
                            >
                              {item.title}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-8 flex grow bg-gray-200">
            <div className=" w-full px-4 sm:px-6 lg:px-8 pb-16">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
