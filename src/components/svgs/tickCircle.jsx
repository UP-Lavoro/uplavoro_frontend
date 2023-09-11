import React from "react";

const TickCircle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : '24'}
      height={props?.height ? props?.height : '24'}
      viewBox="0 0 24 24"
    >
      <g id="tick-circle" transform="translate(-748 -188)">
        <path
          id="Vector"
          d="M10,20A10,10,0,1,0,0,10,10.029,10.029,0,0,0,10,20Z"
          transform="translate(750 190)"
          fill="none"
          stroke={props?.color ? props?.color : "#a5b4fa"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,2.83,2.83,5.66,8.5,0"
          transform="translate(755.75 197.17)"
          fill="none"
          stroke={props?.color ? props?.color : "#a5b4fa"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0H24V24H0Z"
          transform="translate(748 188)"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>
  );
};

export default TickCircle;
