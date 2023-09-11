import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FooterAccordionIcon from "@/components/svgs/footerAccordionIcon";

const accordionItems = [
  {
    slug: "bologna_centergross",
    heading: "Bologna Centergross",
    state: "close",
    content: {
      city: "Funo (BO)",
      address: "Viale Della Mercanzia, 39",
    },
  },
  {
    slug: "bologna_sede",
    heading: "Bologna Sede",
    state: "close",
    content: {
      city: "Medicina (BO) ",
      address: "Via San Vitale Est, 740/B",
    },
  },
  {
    slug: "foggia",
    heading: "Foggia",
    state: "close",
    content: {
      city: "Rignano Garganico (FG)",
      address: "Via Roma, 31",
    },
  },
  {
    slug: "forlì",
    heading: "Forlì",
    state: "close",
    content: {
      city: "Forlì (FC)",
      address: "Corso della Repubblica, 19",
    },
  },
  {
    slug: "napoli",
    heading: "Napoli",
    state: "close",
    content: {
      city: "Napoli (NA)",
      address: "Via Nuova Poggioreale, 152",
    },
  },
  {
    slug: "reggio_calabria",
    heading: "Reggio Calabria",
    state: "close",
    content: {
      city: "Siderno (RC)",
      address: "Via Cesare Battisti, 103",
    },
  },
  {
    slug: "reggio_emilia",
    heading: "Reggio Emilia",
    state: "close",
    content: {
      city: "Reggio Emilia (RE)",
      address: "Via Pietro Colletta, 2",
    },
  },
  {
    slug: "rovigo",
    heading: "Rovigo",
    state: "close",
    content: {
      city: "Rovigo (RO)",
      address: "Via Eridania 133/1/d, Occhiobello",
    },
  },
  {
    slug: "roma",
    heading: "Roma",
    state: "close",
    content: {
      city: "Roma (RM)",
      address: "Via Veglia, 15/17",
    },
  },
  {
    slug: "venezia",
    heading: "Venezia",
    state: "close",
    content: {
      city: "Spinea (VE)",
      address: "Piazza Fermi, 6",
    },
  },
];

const usefullLinks = [
  {
    slug: "Job offers",
    heading: "Job offers",
    state: "close",
    
  },
  {
    slug: "Send your resume",
    heading: "Send your resume",
    state: "close",
  },
  {
    slug: "Companies",
    heading: "Companies",
    state: "close",
    
  },
  {
    slug: "lab",
    heading: "LAB",
    state: "close",
    
  },
  {
    slug: "About us",
    heading: "About us",
    state: "close",
    
  },
  {
    slug: "Contacts",
    heading: "Contacts",
    state: "close",
    
  },
  {
    slug: "EN",
    heading: "EN",
    state: "close",
  },
  {
    slug: "FAQS",
    heading: "FAQS",
    state: "close",
    content: {
      city: "Rovigo (RO)",
      address: "Via Eridania 133/1/d, Occhiobello",
    },
  },
  
];

const FooterAccordion = () => {
  const [openAcc, setOpenAcc] = useState(null);
  const [accordionForm, setAccordionForm] = useState([]);

  useEffect(() => {
    setAccordionForm(accordionItems);
  }, []);
  // const handleOpenAcc = (slug) => setOpenAcc(slug);

  const handleOpenAcc = (item) => {
    let tempObj = null;
    let indexObj = accordionForm?.findIndex(
      (obj, ind) => item?.slug == obj?.slug
    );
    tempObj = accordionForm?.find((obj, ind) => item?.slug == obj?.slug);
    if (tempObj != null) {
      if (tempObj?.state == "open") {
        tempObj.state = "close";
      } else {
        tempObj.state = "open";
      }
    }
    accordionForm.splice(indexObj, 1, tempObj);
    setAccordionForm([...accordionForm]);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <div className="footer_accordion ">
        {accordionForm.map((item, ind) => {
          return (
            <Accordion
              key={ind}
              open={item?.state == "open" ? true : false}
              animate={customAnimation}
            >
              <AccordionHeader onClick={() => handleOpenAcc(item)}>
                <div className="flex gap-x-2">
                  {/* <FooterAccordionIcon /> */}
                  →
                  <p className="text-[#111111] text-[0.8rem] font-bold">
                    {item?.heading}
                  </p>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className="flex flex-col gap-y-2 py-4 pl-5">
                  <p className="text-paragraph">
                    {item?.content?.city}
                    <br />
                    {item?.content?.address}
                  </p>
                  {item?.slug == 'rovigo' ? '' : 
                  <p className="text-[#5804A4] tracking-[-0.5px]">
                    View on google maps →
                  </p>
                  }
                </div>
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </Fragment>
  );
};

export default FooterAccordion;
