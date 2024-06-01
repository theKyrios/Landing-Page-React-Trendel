import React from "react";
import { Vortex } from "./ui/vortex";

function Contact() {

  const handleNeedHelpClick = () => {
    window.location.href = "mailto:admin@thetrendel.com?subject=Need Help&body=Type your query below.";
  };

  const handleSellWithUsClick = () => {
    window.location.href = "mailto:admin@thetrendel.com?subject=Sell with Trendel&body=Type your requirements below.";
  };

  return (
    <div id="contact" className="w-screen mx-auto  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
          Want to talk with us?
        </h2>
        <p className="text-white text-[0.8rem] md:text-2xl max-w-xl mt-6 text-center">
        Just email us and relax. We will handle the rest.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]" onClick={handleNeedHelpClick}>
            Need Help?
          </button>
          <button className="px-4 py-2 underline text-white hover:text-orange-600 " onClick={handleSellWithUsClick}>Sell with us</button>
        </div>
      </Vortex>
    </div>
  );
}

export default Contact;