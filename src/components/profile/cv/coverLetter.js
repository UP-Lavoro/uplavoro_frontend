import Image from "next/image";
import React from "react";
import MsgQuestion from "../../../../public/assets/icons/message-question.svg";
import { TextAreaField } from "../../common/textAreaField";

const CoverLetter = ({ control, errors }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-black tracking-[-0.6px] text-[18px] xl:text-[20px]">
        The cover letter could give you a big advantage: it is a perfect tool
        for enhance your candidacy and demonstrate that you are the person they
        are looking for.
      </p>
      <div className="flex items-center gap-x-4">
        <p className="text-hero tracking-[-0.6px] text-[18px] xl:text-[20px]">Need help? Read our guide</p>
        <Image
          src={MsgQuestion}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      <div className="">
        <TextAreaField
          name="cover_letter"
          control={control}
          placeholder="I am [your name and surname], a professional in [work sector] with over X years of experience in [your work], with strong inclination towards [professional ambitions]…"
          rows={8}
          border={'border-paragraph'}
          rules={{
            required: {
              value: true,
              message: "Required!",
            },
          }}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default CoverLetter;
