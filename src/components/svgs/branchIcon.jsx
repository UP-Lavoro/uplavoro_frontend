import React from "react";

const BranchIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ? props?.width : '24'}
      height={props?.height ? props?.height : '24'}
      viewBox="0 0 35.441 35.441"
    >
      <g
        id="vuesax_linear_route-square"
        data-name="vuesax/linear/route-square"
        transform="translate(-364 -316)"
      >
        <g id="route-square" transform="translate(364 316)">
          <g id="Group" transform="translate(8.934 9.678)">
            <path
              id="Vector"
              d="M16.687,3.686,13.232,14.821a2.836,2.836,0,0,1-5.4.059L6.793,11.823a2.8,2.8,0,0,0-1.787-1.787L1.935,9a2.838,2.838,0,0,1,.074-5.4L13.143.127A2.839,2.839,0,0,1,16.687,3.686Z"
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
            d="M10.337,29.535H19.2c7.384,0,10.337-2.953,10.337-10.337v-8.86C29.535,2.953,26.581,0,19.2,0h-8.86C2.953,0,0,2.953,0,10.337V19.2C0,26.581,2.953,29.535,10.337,29.535Z"
            transform="translate(2.953 2.953)"
            fill="none"
            stroke={props?.color ? props?.color : "#a5b4fa"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M0,0H35.441V35.441H0Z"
            fill="none"
            opacity="0"
          />
        </g>
      </g>
    </svg>
  );
};

export default BranchIcon;
