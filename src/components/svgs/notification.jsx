import React from "react";

const Notification = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g id="notification" transform="translate(-171 -188)">
        <path
          id="Vector"
          d="M8.046,0a6,6,0,0,0-6,6V8.89a4.778,4.778,0,0,1-.57,2.06L.326,12.86a1.919,1.919,0,0,0,1.08,2.93,20.921,20.921,0,0,0,13.27,0,2,2,0,0,0,1.08-2.93l-1.15-1.91a4.91,4.91,0,0,1-.56-2.06V6A6.018,6.018,0,0,0,8.046,0Z"
          transform="translate(174.974 190.91)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M3.7,1.26a6.054,6.054,0,0,0-.96-.2A6.754,6.754,0,0,0,0,1.26a1.988,1.988,0,0,1,3.7,0Z"
          transform="translate(181.17 189.94)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M6,0A3.009,3.009,0,0,1,3,3,3.011,3.011,0,0,1,.88,2.12,3.011,3.011,0,0,1,0,0"
          transform="translate(180.02 207.06)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          strokeWidth="1.5"
        />
        <path
          id="Vector-4"
          data-name="Vector"
          d="M0,0H24V24H0Z"
          transform="translate(171 188)"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>
  );
};

export default Notification;
