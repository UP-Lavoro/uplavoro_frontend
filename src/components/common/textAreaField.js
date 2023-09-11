import React, { useState } from "react";
import { useController, Controller } from "react-hook-form";

export const TextAreaField = React.forwardRef((props, ref) => {
  const { field, fieldState } = useController(props);
  const [focusState, setFocusState] = useState(false);
  const {
    title,
    isHighLight = false,
    style,
    type,
    errors,
    defaultValue,
    disabled = false,
    showTextLimit,
    rounded = false,
    border = '',
    ...others
  } = props;
  let err = _.get(errors, props.name);
  return (
    <>
      
        <Controller
          name={props?.name}
          control={props?.control}
          rules={props?.rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <textarea
              {...field}
              onChange={(e) => {
                field.onChange(e);
                if (props.onChange) {
                  props.onChange(e);
                }
              }}
              style={{borderRadius: '16px' }}
              disabled={disabled}
              onBlurCapture={() => setFocusState(false)}
              onFocus={() => setFocusState(true)}
              rows={props.rows || 2}
              value={field.value}
              placeholder={props.placeholder ? props.placeholder : ""}
              className={`w-full flex p-[0.8rem] border ${border != '' ? border : 'border-[#C6C4C4]'} ${rounded ? 'rounded-[16px]': 'rounded-[8px]'}  focus:outline-none bg-white text-base font-light text-black-300 ${
                disabled && "bg-gray-100"
              }                     ${
                isHighLight && " bg-highLight  "
              }                            `}
            />
          )}
        />

      {props.rules && err && (
        <p className="mt-0.5 text-xs text-red-600 h-3" id="email-error">
          {props.rules && err && props.rules && err.message}
        </p>
      )}
    </>
  );
});

TextAreaField.displayName = "TextAreaField";

export default TextAreaField
