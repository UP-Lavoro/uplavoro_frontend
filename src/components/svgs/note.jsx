import React from "react";

const Note = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g id="note-2" transform="translate(-108 -252)">
        <path
          id="Vector"
          d="M14.691,7.939l-.98,4.18c-.84,3.61-2.5,5.07-5.62,4.77a10.514,10.514,0,0,1-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19a10.474,10.474,0,0,1,.74-2.2C3.2.179,5.191-.471,8.531.319l1.67.39C14.391,1.689,15.671,3.759,14.691,7.939Z"
          transform="translate(114.969 254.501)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M13.074,14.29a9.372,9.372,0,0,1-2.35,1.08l-1.58.52c-3.97,1.28-6.06.21-7.35-3.76L.514,8.18C-.766,4.21.294,2.11,4.264.83L5.844.31A10.224,10.224,0,0,1,7.014,0a10.474,10.474,0,0,0-.74,2.2l-.98,4.19c-.98,4.18.31,6.24,4.48,7.23l1.68.4A10.513,10.513,0,0,0,13.074,14.29Z"
          transform="translate(109.986 257.1)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0,4.85,1.23"
          transform="translate(120.64 260.53)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-4"
          data-name="Vector"
          d="M0,0,2.9.74"
          transform="translate(119.66 264.4)"
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
          transform="translate(132 276) rotate(180)"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>
  );
};

export default Note;
