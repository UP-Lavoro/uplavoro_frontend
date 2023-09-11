import React, { useEffect, useState } from "react";
import { licensesList } from "../cvData";
import CheckBox from "@/components/common/checkBox";
import { useForm } from "react-hook-form";

const Licenses = ({control, errors}) => {
  const [licenseForm, setLicenseForm] = useState([]);
  useEffect(() => {
    setLicenseForm(licensesList);
  }, []);
  return (
    <div className="flex justify-between flex-wrap gap-4">
      {licenseForm?.map((item, ind) => {
        return (
          <div key={ind}>
          <CheckBox
            title={item?.title}
            control={control}
            name={`license.${item?.slug}`}
          />
          </div>
        );
      })}
    </div>
  );
};

export default Licenses;
