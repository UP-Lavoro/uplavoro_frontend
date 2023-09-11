import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CheckBox from "../common/checkBox";
import { useDispatch, useSelector } from "react-redux";
import { getUserConsents } from "@/redux/actions/userActions";

const NotificationsEmailSMS = ({callFrom = ''}) => {
  const { setValue, control, errors, handleSubmit } = useForm({});
  const { token } = useSelector((state) => state?.auth);
  const { info } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  const notificationHandler = (event) => {
    let usersconsent = null;
    if(info?.profile?.usersconsent){
      usersconsent = info?.profile?.usersconsent;
    }
    let postObj = {
      privacy: true,
      email_marketing:
        event?.target?.name == "email_marketing"
          ? event?.target?.checked  
          : usersconsent?.email_marketing == true ? true : false,
      sms_marketing:
        event?.target?.name == "sms_marketing" ? event?.target?.checked : usersconsent?.sms_marketing == true ? true : false,
      marketing_purpose:
        event?.target?.name == "marketing_purpose"
          ? event?.target?.checked
          : usersconsent?.marketing_purpose == true ? true : false,
    };
    dispatch(getUserConsents(postObj, token));
  };

  useEffect(() => {
    if (info?.profile?.usersconsent != null) {
      let usersconsent = info?.profile?.usersconsent;
      if (usersconsent?.email_marketing != null) {
        setValue("email_marketing", usersconsent?.email_marketing == true ? true : false);
      }
      if (usersconsent?.sms_marketing != null) {
        setValue("sms_marketing", usersconsent?.sms_marketing);
      }
      if (usersconsent?.marketing_purpose != null) {
        setValue("marketing_purpose", usersconsent?.marketing_purpose);
      }
    }
  }, [info?.profile?.usersconsent]);
  return (
    <div className="flex flex-col gap-y-6">
      <p className={`${callFrom == 'company' ? 'text-[#4338ca]' : 'text-hero'} text-[30px] tracking-[-0.9px] font-extrabold`}>
        Manage notifications
      </p>
      <div className="flex flex-col gap-y-3">
        <CheckBox
          title={"Email Notifications"}
          control={control}
          name={"email_marketing"}
          onChange={notificationHandler}
        />
        <CheckBox
          title={"SMS Notifications"}
          control={control}
          name={"sms_marketing"}
          onChange={notificationHandler}
        />
        <CheckBox
          title={"I just want the important communications"}
          control={control}
          name={"marketing_purpose"}
          onChange={notificationHandler}
        />
      </div>
    </div>
  );
};

export default NotificationsEmailSMS;
