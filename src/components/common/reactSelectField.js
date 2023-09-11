import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useController, Controller } from "react-hook-form";
import _ from "lodash";

const ReactSelectField = React.forwardRef((props, ref) => {
  const [focusState, setFocusState] = useState(false);
  const [inputValue, setInputValue] = useState();
  const {
    title,
    style,
    type,
    errors,
    defaultValue,
    onChange,
    isMulti = false,
    onFocus,
    onBlur,
    capitalize = true,
    menuPlacement,
    isHighLight=false,
    ellipses,
    ...others
  } = props;
  const { field, fieldState,formState } = useController(props);
  
  let err = _.get(errors, props.name);
  const handleInputChange = (e) => {
    if (props.onInputChange) {
      props.onInputChange(e);
    }
    setInputValue(e);
    if (props.handleSelectOption) {
      props.handleSelectOption(e);
    }
  };
  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: "100%",
      minHeight: props.minHeight ? props.minHeight : 62,
      maxHeight: 66,
      boxShadow: "none",
      border: props.rules && err ? "1px solid #DC2626" : "1px solid #C6C4C4",
      backgroundColor: props?.backgroundColor ? props?.backgroundColor : '#ffffff',
      padding: props?.padding ? props?.padding : '0.72rem',
      borderRadius: props?.borderRadius ? props?.borderRadius : '8px',
    }),
    // menu: (provided, state) => ({
    //   ...provided,
    //   zIndex: 50,
    // }),
  };
  const getOptionLabel = (e) => {
    if (props.getOptionLabel) {
      return props.getOptionLabel(e);
    } else {
      return e[props.showLabel || "label"];
    }
  };

  const onCrossHandler = (event) => {
    // console.log(
    //   "🚀 ~ file: ReactSelectField.js:47 ~ onCrossHandler ~ event",
    //   event
    // );
  };

  return (
    <>
        <Controller
          name={props?.name}
          rules={props?.rules}
          control={props?.control}
          defaultValue={defaultValue}
          render={({ field: { onChange } }) => (
            <Select
              {...field}
              {...others}
              ref={ref || field.ref}
              components={ props?.CustomOption && { Option: props?.CustomOption}}

              isLoading={props.isLoading || false}
              noOptionsMessage={() => null}
              getOptionLabel={getOptionLabel}
              styles={customStyles}
              isSearchable={true}
              options={props?.optionData}
              placeholder={props?.placeHolder ? props?.placeHolder : ''}
              menuPlacement={menuPlacement || "auto"}
              className={`text-[16px] bg-white placeholder:text-black ${
                              capitalize && "capitalize"
                            }`}
              // isClearable={true}
              defaultOptions
              onChange={(val, action) => {
                onChange(val);
                if (props.onChange) {
                  props.onChange(val, action);
                }
              }}
              value={field.value}
              menuIsOpen={props.menuIsOpen || undefined}
              onFocus={() => {
                setFocusState(true);
                if (props.onFocus) {
                  props.onFocus(e);
                }
              }}
              onBlur={(e) => {
                field.onBlur;
                setFocusState(false);
                if (props.onBlur) {
                  props.onBlur(e);
                }
              }}
              isDisabled={props.isDisabled}
              onInputChange={handleInputChange}
              getOptionValue={(option) => option[props.showLabel || "label"]} // changes here!!!
              // styles={customStyles}
              onMenuClose={() => onCrossHandler()}
              isOptionDisabled={(option) => option.disabled}
              isMulti={isMulti}
              {...others}
            />
          )}
        />
      {props.rules && err && props.rules && err?.message ? (
        <p className=" text-xs text-red-600 h-3" id="email-error">
          {props.rules && err && props.rules && err?.message}
        </p>
      ) : (
        ""
      )}
    </>
  );
});

ReactSelectField.displayName = "ReactSelectField";

export default ReactSelectField;