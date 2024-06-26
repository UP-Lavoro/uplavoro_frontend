import React from "react";

const InfoCircle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g
        id="vuesax_linear_info-circle"
        data-name="vuesax/linear/info-circle"
        transform="translate(-364 -252)"
      >
        <g id="info-circle">
          <path
            id="Vector"
            d="M10,20A10,10,0,1,0,0,10,10.029,10.029,0,0,0,10,20Z"
            transform="translate(366 254)"
            fill="none"
            stroke={props?.color ? props?.color : "#500e9e"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M0,0V5"
            transform="translate(376 260)"
            fill="none"
            stroke={props?.color ? props?.color : "#500e9e"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M0,0H.009"
            transform="translate(375.995 268)"
            fill="none"
            stroke={props?.color ? props?.color : "#500e9e"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Vector-4"
            data-name="Vector"
            d="M0,0H24V24H0Z"
            transform="translate(364 252)"
            fill="none"
            opacity="0"
          />
        </g>
      </g>
    </svg>
  );
};

export default InfoCircle;
