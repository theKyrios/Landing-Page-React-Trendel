import React, { useEffect } from "react";
import { gsap } from "gsap";
import Button from "./Button";
import hero1 from '../assets/herobanner1.png';

const MainContent = () => {

  useEffect(() => {
    const x = gsap.timeline();

    x.from(
      "#heading", {
        y : 180,
        stagger  : {
          amount : 0.8
        }, 
        duration: 2,
         ease: "power3.out" 
      }
    );

  }, []);

return (
  <div id="home" data-scroll-section className="relative w-screen overflow-hidden bg-grid-small-black/[0.2] flex flex-col items-center justify-center rounded-lg px-12 max-md:px-5">
 

 <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <section className="relative mt-20 text-5xl md:text-6xl font-semibold text-center text-fuchsia-800 max-md:text-4xl">
    
      <div className="h-[120px] overflow-hidden">
      <h1 id="heading" className=" text-fuchsia-800 relative z-10" >
      Store to Door<br /><span className="text-fuchsia-800 text-5xl md:text-6xl">In<span className="text-orange-600">&nbsp;30&nbsp;</span>Minutes</span>
      </h1>
      </div>
      <p className="mt-4 md:mt-9 text-sm md:text-xl font-extralight leading-8 text-center text-neutral-700 realtive z-10">Your city at your fingertips</p>
    </section>
    <section className="flex w-screen justify-center mt-8">
      <div className="flex justify-center">
        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center w-fit text-center h-fit">
        <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white bg-[linear-gradient(110deg,#861890,45%,#C730D3,55%,#861890)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-50">
        Download App
        </Button>
      
            <div className="flex gap-0 mt-0 text-base text-black w-screen justify-center items-center z-[99]">
              <img loading="lazy" src={hero1} className="h-auto w-screen md:w-auto md:h-[680px] max-w-full" alt="Fast delivery graphic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};


export default MainContent;
