import React from "react";

const Location = (props) => {
  return (
    <svg
      id="vuesax_outline_location"
      data-name="vuesax/outline/location"
      xmlns="http://www.w3.org/2000/svg"
      width="29.127"
      height="29.127"
      viewBox="0 0 29.127 29.127"
    >
      <g id="location">
        <path
          id="Vector"
          d="M4.7,9.381A4.691,4.691,0,1,1,9.393,4.7,4.7,4.7,0,0,1,4.7,9.381Zm0-7.561A2.876,2.876,0,1,0,7.573,4.7,2.882,2.882,0,0,0,4.7,1.82Z"
          transform="translate(9.867 7.816)"
          fill={props?.color ? props?.color : "#292d32"}
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M11.38,26.1a7.246,7.246,0,0,1-5.012-2.027C2.787,20.631-1.169,15.134.324,8.592A11.063,11.063,0,0,1,11.38,0h.012A11.062,11.062,0,0,1,22.448,8.6c1.481,6.541-2.476,12.027-6.056,15.474A7.246,7.246,0,0,1,11.38,26.1Zm0-24.284A9.165,9.165,0,0,0,2.108,8.993C.8,14.709,4.389,19.636,7.642,22.755a5.371,5.371,0,0,0,7.488,0c3.24-3.119,6.833-8.046,5.546-13.762A9.2,9.2,0,0,0,11.38,1.82Z"
          transform="translate(3.184 1.517)"
          fill={props?.color ? props?.color : "#292d32"}
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0H29.127V29.127H0Z"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>
  );
};

export default Location;
