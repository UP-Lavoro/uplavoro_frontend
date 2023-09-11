import React from "react";

const DashboardIcon = (props) => {
  return (
    <svg
      id="category"
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : '24'}
      height={props?.height ? props?.height : '24'}
      viewBox="0 0 34.432 34.432"
    >
      <path
        id="Vector"
        d="M4.3,11.477H7.173q4.3,0,4.3-4.3V4.3q0-4.3-4.3-4.3H4.3Q0,0,0,4.3V7.173Q0,11.477,4.3,11.477Z"
        transform="translate(2.869 2.869)"
        fill="none"
        stroke="#a5b4fa"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector-2"
        data-name="Vector"
        d="M4.3,11.477H7.173q4.3,0,4.3-4.3V4.3q0-4.3-4.3-4.3H4.3Q0,0,0,4.3V7.173Q0,11.477,4.3,11.477Z"
        transform="translate(20.085 2.869)"
        fill="none"
        stroke={props?.color ? props?.color : "#a5b4fa"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector-3"
        data-name="Vector"
        d="M4.3,11.477H7.173q4.3,0,4.3-4.3V4.3q0-4.3-4.3-4.3H4.3Q0,0,0,4.3V7.173Q0,11.477,4.3,11.477Z"
        transform="translate(20.085 20.085)"
        fill="none"
        stroke={props?.color ? props?.color : "#a5b4fa"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector-4"
        data-name="Vector"
        d="M4.3,11.477H7.173q4.3,0,4.3-4.3V4.3q0-4.3-4.3-4.3H4.3Q0,0,0,4.3V7.173Q0,11.477,4.3,11.477Z"
        transform="translate(2.869 20.085)"
        fill="none"
        stroke={props?.color ? props?.color : "#a5b4fa"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Vector-5"
        data-name="Vector"
        d="M0,0H34.432V34.432H0Z"
        fill="none"
        opacity="0"
      />
    </svg>
  );
};

export default DashboardIcon;
