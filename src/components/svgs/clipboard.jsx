import React from "react";

const Clipboard = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g id="clipboard-text" transform="translate(-108 -252)">
        <path
          id="Vector"
          d="M0,0H7"
          transform="translate(116 264.2)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,0H4.38"
          transform="translate(116 268.2)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M2,4H6C8,4,8,3,8,2,8,0,7,0,6,0H2C1,0,0,0,0,2S1,4,2,4Z"
          transform="translate(116 254)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-4"
          data-name="Vector"
          d="M13,0c3.33.18,5,1.41,5,5.98v6c0,4-1,6-6,6H6c-5,0-6-2-6-6v-6C0,1.42,1.67.18,5,0"
          transform="translate(111 256.02)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-5"
          data-name="Vector"
          d="M0,0H24V24H0Z"
          transform="translate(108 252)"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>
  );
};

export default Clipboard;
