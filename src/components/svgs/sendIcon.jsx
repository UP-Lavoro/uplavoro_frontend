import React from "react";

const SendIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : '24'}
      height={props?.height ? props?.height : '24'}
      viewBox="0 0 24 24"
    >
      <g
        id="vuesax_linear_route-square"
        data-name="vuesax/linear/route-square"
        transform="translate(-364 -316)"
      >
        <g id="route-square">
          <g id="Group">
            <path
              id="Vector"
              d="M11.3,2.5l-2.34,7.54a1.92,1.92,0,0,1-3.66.04l-.7-2.07A1.9,1.9,0,0,0,3.39,6.8L1.31,6.1a1.922,1.922,0,0,1,.05-3.66L8.9.086A1.922,1.922,0,0,1,11.3,2.5Z"
              transform="translate(370.05 322.554)"
              fill="none"
              stroke={props?.color ? props?.color : "#a5b4fa"}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </g>
          <path
            id="Vector-2"
            data-name="Vector"
            d="M7,20h6c5,0,7-2,7-7V7c0-5-2-7-7-7H7C2,0,0,2,0,7v6C0,18,2,20,7,20Z"
            transform="translate(366 318)"
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
            transform="translate(364 316)"
            fill="none"
            opacity="0"
          />
        </g>
      </g>
    </svg>
  );
};

export default SendIcon;
