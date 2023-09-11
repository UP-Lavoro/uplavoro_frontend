import React from "react";

const StatusIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : '24'}
      height={props?.height ? props?.height : '24'}
      viewBox="0 0 24 24"
    >
      <g
        id="vuesax_linear_arrow-2"
        data-name="vuesax/linear/arrow-2"
        transform="translate(-236 -188)"
      >
        <g id="arrow-2">
          <g id="Group">
            <path
              id="Vector"
              d="M0,7.44,3.72,3.72,0,0"
              transform="translate(253.28 191.01)"
              fill="none"
              stroke={props?.color ? props?.color : "#a5b4fa"}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M0,0H18"
              transform="translate(239 194.73)"
              fill="none"
              stroke={props?.color ? props?.color : "#a5b4fa"}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M3.72,0,0,3.72,3.72,7.44"
              transform="translate(239 201.55)"
              fill="none"
              stroke={props?.color ? props?.color : "#a5b4fa"}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-4"
              data-name="Vector"
              d="M18,0H0"
              transform="translate(239 205.27)"
              fill="none"
              stroke={props?.color ? props?.color : "#a5b4fa"}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </g>
          <path
            id="Vector-5"
            data-name="Vector"
            d="M0,0H24V24H0Z"
            transform="translate(236 188)"
            fill="none"
            opacity="0"
          />
        </g>
      </g>
    </svg>
  );
};

export default StatusIcon;
