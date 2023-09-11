import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import setLanguage from "next-translate/setLanguage";

const people = [
  { name: "English", shortName: "EN", language: "en" },
  { name: "Arabic", shortName: "AR", language: "ar" },
  { name: "French", shortName: "FR", language: "fr" },
  { name: "German", shortName: "DE", language: "de" },
  { name: "Italian", shortName: "IT", language: "it" },
  { name: "Romanian", shortName: "RO", language: "ro" },
  { name: "Urdu", shortName: "UR", language: "ur" },
];

const LanguageSelctor = ({isHovered, callFrom=''}) => {
  console.log("🚀 ~ file: index.js:17 ~ LanguageSelctor ~ isHovered:", isHovered)
  const [selected, setSelected] = useState(people[0]);
  const selectHandler = (e) => {
    setSelected(e);
    setLanguage(e?.language);
  };
  return (
    // <div className="">
      <Listbox value={selected} onChange={(e) => selectHandler(e)}>
        <div className="">
          <div className={`${isHovered == "EN" && 'dropdown'}`}>

          <Listbox.Button className={`${isHovered == "EN" && 'dropdown'} relative w-18 flex items-center gap-x-2 cursor-default rounded-lg  tracking-[-0.48px] ${callFrom == 'footer' ? 'text-black text-[14px]' : 'text-white font-bold'} `}>
            <span className="block truncate">{selected.shortName}</span>
            <ChevronDownIcon
            className={`-mr-1  ${callFrom == 'footer' ? 'text-black h-4 w-4' : 'text-white h-5 w-5'} `}
            aria-hidden="true"
          />
          </Listbox.Button>
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`${isHovered == "EN" && 'dropdown-content'}`}>

            <Listbox.Options className={`${isHovered == "EN" && 'dropdown-content'} absolute w-30 mt-1 max-h-70 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {/* {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null} */}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
            </div>

          </Transition>
        </div>
      </Listbox>
    // </div>
  );
};

export default LanguageSelctor;
