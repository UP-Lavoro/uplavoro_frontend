import React from "react";
import { useController, Controller } from "react-hook-form";
import _ from "lodash";

const CheckBox = React.forwardRef((props, ref) => {
  const { field, fieldState } = useController(props);
  const { title, style, type, errors, defaultValue, labelClass, disabled, ...others } = props;
  let err = _.get(errors, props.name);

  return (
    <>
      <Controller
        name={props?.name}
        control={props?.control}
        rules={props?.rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
            <div className="flex items-center">
              <label
                className={`cursor-pointer flex gap-x-2 items-center ${labelClass ? labelClass : "text-black"}  ${props?.disabled ? "cursor-not-allowed" : ""}`}
              >
                <input
                  {...field}
                  ref={ref}
                  checked={
                    field.value == "1" || field.value === true ? true : false
                  }
                  type="checkbox"
                  disabled={disabled}
                  onChange={(e) => {
                    onChange(e.target.checked);
                    if (props.onChange) {
                      props.onChange(e);
                    }
                  }}
                  style={style ? style : {}}
                  className={`w-[29px] h-[26px] rounded-md text-[#0B76EF] ${props.rules && errors && err
                    ? "border-red-600" :
                    'border-gray-100'}  focus:shadow-none`}
                />
                <span className="px-2 text-[16px]">
                  {title}
                </span>
              </label>
            </div>
        )}
      />
    </>
  );
});

CheckBox.displayName = "CheckBox";

export default CheckBox;
