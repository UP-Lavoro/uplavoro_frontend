import React from "react";

const ImageAlternate = (props) => {
  return (
    <span class="h-16 w-16 rounded-full ring-2 bg-black ring-white flex items-center justify-center text-white">
      {props?.name?.charAt(0).toUpperCase()}
    </span>
  );
};

export default ImageAlternate;
