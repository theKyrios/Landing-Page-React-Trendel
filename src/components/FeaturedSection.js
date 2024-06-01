import React from "react";
import Featured from "./Featured";
import FeaturedRight from "./FeaturedRight";
import featuredImage1 from "../assets/featured-1.png";
import featuredImage2 from "../assets/featured-2.png";
import featuredImage3 from "../assets/featured-3.png";
import Icon1 from "../assets/clock-Filled.svg";
import Icon2 from "../assets/Slideshow_regular.svg";
import Icon3 from "../assets/map-marker.svg";

const FeaturedSection = () => {
  

return (
  <div id="whytrendel" data-scroll-section className="relative w-screen max-w-6xl px-12 max-md:px-14 overflow-hidden flex flex-col items-start justify-center py-10">
    <div className="my-8">
      <h2 className="text-left font-semibold text-2xl md:text-5xl py-2">
        Get the Ultimate Retail <br />
        Experience with Our App
      </h2>
      <p className="text-left text-sm md:text-lg text-neutral-600 py-2">
        Your favorites faster than ever
      </p>
    </div>
    <Featured
      image={featuredImage1}
      icon={Icon1}
      title="Lightning-fast delivery"
      content="Experience the thrill of 
receiving your favorite 
products within just
40 minutes of placing 
your order."
    ></Featured>
    <FeaturedRight
      image={featuredImage2}
      icon={Icon2}
      title="Vast Product
Selection"
      content="From electronics to fashion,
groceries to home essentials,
we have everything you need,
ready to be delivered straight 
to your doorstep."
    ></FeaturedRight>
    <Featured
      image={featuredImage3}
      icon={Icon3}
      title="Seamless 
Shopping"
      content="Browse, select, and purchase 
your desired items with ease, 
knowing that they'll be swiftly 
delivered to you within just 
half an hour."
    ></Featured>
  </div>
);

};

export default FeaturedSection;
