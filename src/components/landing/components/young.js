import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../../public/assets/images/Logo.svg";
import Young1 from "../../../../public/assets/images/young1.svg";
import Young2 from "../../../../public/assets/images/young2.svg";
import Young3 from "../../../../public/assets/images/young3.svg";
import Young4 from "../../../../public/assets/images/young4.svg";
import Young5 from "../../../../public/assets/images/young5.svg";
import Young6 from "../../../../public/assets/images/young6.svg";
import Young7 from "../../../../public/assets/images/young7.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Hero2 from "../../../../public/assets/images/hero-2.svg";

const images = [
  { id: 1, url: Young1 },
  { id: 2, url: Young2 },
  { id: 3, url: Young3 },
  { id: 4, url: Young4 },
  { id: 5, url: Young5 },
  { id: 6, url: Young6 },
  { id: 7, url: Young7 },
  { id: 4, url: Young4 },
  { id: 5, url: Young5 },
  { id: 6, url: Young6 },
  { id: 7, url: Young7 },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 7, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 7,
    slidesToSlide: 7, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Young = () => {
  const [centerIndex, setCenterIndex] = useState(Math.floor(images.length / 2));

  const handleLeftArrowClick = () => {
    setCenterIndex(centerIndex === 0 ? images.length - 1 : centerIndex - 1);
  };

  const handleRightArrowClick = () => {
    setCenterIndex(centerIndex === images.length - 1 ? 0 : centerIndex + 1);
  };
  return (
    <div className="w-full relative bg-hero py-20 overflow-hidden">
      <div className="w-full flex flex-col items-center">
        <Image
          style={{ width: "51.86px", height: "30.29px" }}
          src={Logo}
          alt=""
        />
        <p className="text-white text-[32px] xl:text-[50px] font-extrabold">Young</p>
        <p className="text-white xl:text-[20px] py-4">
          Discover our initiative. Power to the young, the future of our
          country.
        </p>
        <div className="w-full py-6 z-10">
          <Carousel
            ssr
            itemClass="image-item"
            responsive={responsive}
            draggable={true}
            swipeable={true}
            keyBoardControl={true}
            // containerClass="carousel-container"
            arrows={true}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={2200}
            customTransition="transform 1000ms ease-in"
            // className='flex justify-center items-center'
          >
            {images.map((image, ind) => {
              return (
                <div key={ind} className="px-2">
                  <Image src={image?.url} alt="" style={{ width: "200px" }} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="">
        <Image
          style={{
            width: "306px",
            height: "611px",
            position: "absolute",
            left: "20px",
            top: "150px",
          }}
          src={Hero2}
          alt=""
        />
      </div>

      <div className="">
        <Image
          style={{
            width: "306px",
            height: "611px",
            position: "absolute",
            right: "-20px",
            bottom: "150px",
          }}
          src={Hero2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Young;
