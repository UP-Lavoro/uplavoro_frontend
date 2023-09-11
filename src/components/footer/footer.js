import React from "react";
import FooterAccordion from "./components/accordion";
import NewsLetter from "./components/newsLetter";
import LanguageSelctor from "../languageSelector";
import DropdownComponent from "../common/dropdown";
import NewsletterBgImage from ".././../../public/assets/images/newsletter-bg.svg";
import Image from "next/image";

const navigation = [
  { name: "Job offers", href: "/profile/joboffers" },
  { name: "Send your resume", href: "send-resume" },
  { name: "Companies", href: "companies" },
  { name: "LAB", href: "#" },
  { name: "About us", href: "#" },
  { name: "Contacts", href: "#" },
  { name: "EN", href: "#" },
  { name: "FAQS", href: "#" },
];

const documents = [
  { name: "Politica per la Parità di Genere", href: "#" },
  { name: "Politica di Responsabilità Sociale", href: "#" },
  { name: "Stop Work Policy", href: "#" },
  { name: "Unconcious Bias o pregiudizi impliciti", href: "#" },
  { name: "Privacy policy", href: "#" },
  { name: "Reclami e Segnalazioni", href: "#" },
];

const labsArr = [
  { name: "UP Young", href: "#" },
  { name: "UP Sanity", href: "#" },
  { name: "UP Romania", href: "#" },
  { name: "UP Pakistan", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-white " aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="">
        {/* <FooterAccordion /> */}
        <div className="flex-col w-full relative">
          <Image
            src={NewsletterBgImage}
            alt=""
            style={{ width: "100%", height: "80px" }}
          />
          <NewsLetter />
        </div>
        <div className="bg-footer-bar w-full flex justify-between items-start py-16 md:px-10 xl:px-44 2xl:px-72">
          <div className="w-1/3 flex flex-col gap-y-4 items-start">
            <p className="text-black text-[1.4rem] font-bold tracking-[-0.5px]">
              Our branches
            </p>
            <div className="flex flex-col">
              <FooterAccordion />
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-y-4 items-start">
            <div className="flex flex-col gap-y-4">
              <p className="text-black text-[1.4rem] font-bold tracking-[-0.5px]">
                Useful links
              </p>
              <div className="flex flex-col gap-y-2">
                {navigation?.map((nav, index) => {
                  return (
                    <>
                      {(nav.name === "EN" && (
                        <LanguageSelctor callFrom="footer" />
                      )) ||
                        (nav.name == "LAB" && (
                          <DropdownComponent
                            title={"LAB"}
                            elements={labsArr}
                            callFrom="footer"
                          />
                        )) || (
                          <p
                            className="text-black text-[14px] tracking-[-0.5px]"
                            key={index}
                          >
                            {nav?.name}
                            {nav.name === "EN" || nav.name === "LAB" ? (
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
                        )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-y-4 items-start">
            <p className="text-black text-[1.4rem] font-bold tracking-[-0.5px]">
              Partners
            </p>

            <p class="text-paragraph text-[12px]">
              UP Agenzia per il Lavoro S.p.A
              <br />
              Digital Domicile / CEM: uplavoro@pec.it
              <br />
              Registered Office: Via San Vitale EST 740/B Medicina (BO)
              <br />
              Postcode: 40059
              <br />
              VAT number: 04018461204
              <br />
              Recipient code for electronic invoicing: BA6ET11
              <br />
              Share capital: € 1.160.000 i.v.
              <br />
              Provisional Ministerial Authorization R. 0000170 of 20/12/2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
