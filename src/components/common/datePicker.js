import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useController, Controller } from "react-hook-form";
import _ from "lodash";
import moment from "moment";

const DatePickerFeild = React.forwardRef((props, ref) => {
  console.log("🚀 ~ file: datePicker.js:8 ~ DatePickerFeild ~ ref:", ref)
  const [focusState, setFocusState] = useState(false);
  const {
    title,
    style,
    type,
    errors,
    defaultValue,
    isDisabled,
    dateTime = true,
    customStyles,
    onChange,
    maxDate,
    isHighLight=false,
    showYearPicker,
    ...others
  } = props;
  const { field, fieldState } = useController(props);
  let err = _.get(errors, props.name);
  // const inputRef = useRef(null);
  // useEffect(() => {
  //     inputRef.current.setOpen(false)
  // }, [])
  return (
    <>
      {/* <div
        className={`h-[59px] flex items-center relative ${
          customStyles && customStyles
        } border border-[#C6C4C4] bg-white  outlineStyle rounded  ${
          props.rules && err
            ? "focus-within:border-red-600 border-red-600"
            : "focus-within:border-teal-c-900"
        }
        ${isHighLight && " bg-highLight  "}

        `} */}
      {/* > */}
        <Controller
          autoFocus={false}
          name={props?.name}
          control={props?.control}
          rules={props?.rules}
          defaultValue={defaultValue}
          render={({ field }) => {
            function validDate(x) {
              let y = new Date(x);
              return y instanceof Date && !isNaN(y);
            }
            let updateDate = new Date(field?.value);
            if (!validDate(field?.value)) {
              updateDate = "";
            }
            return (
              <DatePicker
                {...field}
                ref={ref}
                autoComplete="off"
                autoFocus={false}
                onChange={(e) => {
                  field.onChange(moment(e).format("yyyy/MM/DD") );
                  if (onChange) {
                    onChange(e, props?.name);
                  }
                }}
                selected={updateDate}
                //new change for handling reset (start)
                value={defaultValue}
                //(end)
                onFocus={() => setFocusState(true)}
                onBlur={() => {
                  field.onBlur;
                  setFocusState(false);
                }}
                dateFormat={showYearPicker ? "yyyy" : "yyyy/MM/dd"}
                className={`block rounded-lg p-[1.3rem] h-full w-full bg-white border border-[#C6C4C4] appearance-none relative focus:outline-none bg-transparent focus:ring-0 font-normal text-base text-black-c-400 ${isDisabled ? 'opacity-50' : ''}                     ${isHighLight && " focus:bg-highLight   "}                `}
                placeholder={props.placeholder ? props.placeholder : ""}
                disabled={isDisabled}
                maxDate={props?.maxDate}
                minDate={props?.minDate}
                showYearPicker={showYearPicker ? showYearPicker : false}
                {...others}
              />
            );
          }}
        />
      {/* </div> */}
      {props.rules && err && (
        <p className=" text-xs text-red-600 h-3" id="email-error">
          {props.rules && err && props.rules && err.message}
        </p>
      )}
    </>
  );
});

DatePickerFeild.displayName = "DatePickerFeild";

export default DatePickerFeild;