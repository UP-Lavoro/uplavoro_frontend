import React, { useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { cvHeadings } from "./cvData";
import ArrowDown from "../../../public/assets/icons/arrow-down.svg";
import ArrowRight from "../../../public/assets/icons/arrow-right-thin.svg";
import Image from "next/image";
import Address from "./cv/address";
import WorkExperience from "./cv/workExperience";
import CoverLetter from "./cv/coverLetter";
import StudyAndTraining from "./cv/studyAndTraining";
import KnownLanguages from "./cv/knownLanguages";
import SoftSkills from "./cv/softSkills";
import Certificates from "./cv/certificates";
import Licenses from "./cv/licenses";
import Disponibilita from "./cv/disponibilita";
import SocialProfiles from "./cv/socialProfiles";
import { useForm } from "react-hook-form";
import Button from "../common/button";
import { useDispatch, useSelector } from "react-redux";
import { getCitiesData, saveUserCV, updateUserCV } from "@/redux/actions/userActions";

const CreateEditCV = ({ configuration }) => {
  const [accordionForm, setAccordionForm] = useState([]);
  const {
    setValue,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      address: {
        living_address: "",
        living_city: "",
        living_postal_code: "",
      },
      experiances: [],
      cover_letter: "",
      studies: [],
      languages: [],
      skills: [],
      certificates: [],
      license: {
        patente_a: false,
        patente_b: false,
        patente_c: false,
        patente_d: false,
        patente_be: false,
        patente_a1: false,
        patente_ce: false,
        patente_de: false,
        patente_e: false,
        patente_k: false,
        patente_nautica: false,
        patente_cqc: false,
        patente_fuochista: false,
        patente_frigorista: false,
        patente_gruista: false,
        patente_muletto: false,
      },
      availability: {
        holidays: false,
        weekend: false,
        trainings: false,
        part_time: false,
        full_time: false,
        transfer_italy: false,
        transfer_abroad: false,
        fixed_contract: false,
        permanent_contract: false,
      },
      facebook: "http://parker.com/",
      instagram:
        "http://www.kassulke.net/repellat-harum-sint-ratione-blanditiis-id-ut-dicta-necessitatibus.html",
      linkedin:
        "http://cronin.com/ad-earum-eos-et-reiciendis-voluptatem-omnis-sequi",
    },
  });
  const auth = useSelector((state) => state?.auth);
  const {isLoading, cvList} = useSelector((state) => state?.user);
  console.log("🚀 ~ file: createEditCV.js:81 ~ CreateEditCV ~ user:", cvList)
  const dispatch = useDispatch();

  useEffect(() => {
    setAccordionForm(cvHeadings);
    dispatch(getCitiesData(auth?.token));
  }, []);

  useEffect(()=>{
    if(cvList?.length > 0){
      
      for(let key in cvList[0]){
        setValue(key, cvList[0][key])
      }
      
      let languages = cvList[0]?.languages[0]
      for(let key in languages){
        if(languages[key] != null && languages[key] != undefined && languages[key] != ''){
          if(key == 'spoken'|| key == 'written'|| key == 'certificate'){
            setValue(`languages.${[0]}.${key}`, {id: languages[key], label: languages[key]})
          }
        }
      }

      let skills = cvList[0]?.skills[0]
      for(let key in skills){
        if(skills[key] != null && skills[key] != undefined && skills[key] != ''){
          if(key == 'level' || key == 'type'){
            setValue(`skills.${[0]}.${key}`, {id: skills[key], label: skills[key]})
          }
        }
      }

      let studies = cvList[0]?.studies[0]
      console.log("🚀 ~ file: createEditCV.js:114 ~ useEffect ~ studies:", studies)
      for(let key in studies){
        if(studies[key] != null && studies[key] != undefined && studies[key] != ''){
          if(key == 'country'){
            setValue(`studies.${[0]}.${key}`, {id: studies[key], name: studies[key]})
          }
        }
      }
      
    }
  },[cvList])


  const accordionHandler = (item) => {
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

  const onSubmit = async (data) => {
    console.log("🚀 ~ file: createEditCV.js:145 ~ onSubmit ~ data:", data)
    let updatedStudies = []
    let updatedLanguages = []
    let updatedSkills = []

    if(data?.studies?.length > 0){
      updatedStudies = data?.studies?.map((obj, ind) => {
        if (obj?.country) {
          return { ...obj, country: obj?.country?.country };
        }
      })
    }
    if(data?.languages?.length > 0){
      updatedLanguages = data?.languages?.map((obj, ind) => {
        if (obj?.certificate || obj?.spoken || obj?.written) {
          return { ...obj, certificate: obj?.certificate?.id, spoken: obj?.spoken?.id, written: obj?.written?.id };
        }
      })
    }
    if(data?.skills?.length > 0){
      updatedSkills = data?.skills?.map((obj, ind) => {
        if (obj?.level || obj?.type) {
          return { ...obj, level: obj?.level?.id, type: obj?.type?.id};
        }
      })
    }

    const postObj = {
      uploaded_cv: "PDF file",
      ...data,
      studies: updatedStudies,
      languages: updatedLanguages,
      skills: updatedSkills
    };
    if(cvList[0]?.id){
      dispatch(updateUserCV(cvList[0]?.id, postObj, auth?.token))
    }else{
      dispatch(saveUserCV(postObj, auth?.token))
    }
  };
  return (
    <div className="flex flex-col gap-y-4">
      {/* <div className="flex justify-between pr-20"> */}
      <p className="text-hero text-[30px] tracking-[-0.9px] font-extrabold">
        My Curriculum
      </p>

      {/* </div> */}
      <form
        className="w-full flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-y-3 divide-y divide-black">
          {accordionForm?.length > 0 &&
            accordionForm?.map((item, ind) => {
              return (
                <div key={ind}>
                  <div
                    className="flex items-center gap-x-4 py-4 cursor-pointer"
                    onClick={() => accordionHandler(item)}
                  >
                    <p className="text-[22px] xl:text-[25px] font-extrabold">{item?.heading}</p>
                    {item?.state == "open" ? (
                      <Image
                        src={ArrowDown}
                        alt=""
                        style={{ height: "20px", width: "20px" }}
                      />
                    ) : (
                      <Image
                        src={ArrowRight}
                        alt=""
                        style={{ height: "20px", width: "20px" }}
                      />
                    )}
                  </div>
                  {item?.state == "open" && (
                    <Transition
                      show={true}
                      enter="transition duration-150 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-150 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <div className="pb-4 pr-36 xl:pr-[220px] bg-white rounded-lg">
                        {item?.slug == "work_experiences" &&
                          item?.state == "open" && (
                            <WorkExperience control={control} errors={errors} setValue={setValue}/>
                          )}
                        {item?.slug == "cover_letter" &&
                          item?.state == "open" && (
                            <CoverLetter control={control} errors={errors} />
                          )}
                        {item?.slug == "study_and_training" &&
                          item?.state == "open" && (
                            <StudyAndTraining
                              control={control}
                              errors={errors}
                            />
                          )}
                        {item?.slug == "known_languages" &&
                          item?.state == "open" && (
                            <KnownLanguages control={control} errors={errors} />
                          )}
                        {item?.slug == "soft_skills" &&
                          item?.state == "open" && (
                            <SoftSkills control={control} errors={errors} />
                          )}
                        {item?.slug == "certificates" &&
                          item?.state == "open" && (
                            <Certificates control={control} errors={errors} />
                          )}
                        {item?.slug == "licenses" && item?.state == "open" && (
                          <Licenses control={control} errors={errors} />
                        )}
                        {item?.slug == "disponibilita" &&
                          item?.state == "open" && (
                            <Disponibilita control={control} errors={errors} />
                          )}
                        {item?.slug == "social_profiles" &&
                          item?.state == "open" && (
                            <SocialProfiles control={control} errors={errors} />
                          )}
                      </div>
                    </Transition>
                  )}
                </div>
              );
            })}
        </div>
        {accordionForm?.length > 0 && (
          <div className="w-full pr-36 xl:pr-[220px]">
          <Button
            title="Save and download pdf"
            ring={true}
            style={"w-full py-5 bg-[#B433F8] text-[20px] text-white rounded-md"}
            loading={isLoading}
            onClick={handleSubmit(onSubmit)}
            />
            </div>
        )}
      </form>
    </div>
  );
};

export default CreateEditCV;
