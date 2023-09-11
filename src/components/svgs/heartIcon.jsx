import React from "react";

const HeartIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : '24'}
      height={props?.height ? props?.height : '24'}
      viewBox="0 0 21.5 19.321"
    >
      <path
        id="Path_154"
        data-name="Path 154"
        d="M12.62,20.81a2.181,2.181,0,0,1-1.24,0C8.48,19.82,2,15.69,2,8.69A5.574,5.574,0,0,1,7.56,3.1,5.515,5.515,0,0,1,12,5.34,5.547,5.547,0,0,1,22,8.69C22,15.69,15.52,19.82,12.62,20.81Z"
        transform="translate(-1.25 -2.35)"
        fill={props?.bg ? props?.bg : "#4f0e9e"}
        stroke={props?.border ? props?.border : "#500e9e"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </svg>
  );
};

export default HeartIcon;
