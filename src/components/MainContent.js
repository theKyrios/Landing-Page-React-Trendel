import React from "react";
import Button from "./Button";
import hero1 from '../assets/herobanner1.png';
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";

const MainContent = () => (
  <div className="relative w-screen overflow-hidden flex flex-col items-center justify-center rounded-lg">
 
    <section className=" mt-20 text-5xl md:text-6xl font-semibold text-center text-fuchsia-800 max-md:text-4xl">
      <h1 className="h-fit text-black relative z-10">
        Shop Smarter<br /><span className="text-fuchsia-800 text-5xl md:text-6xl">Get it Faster</span>
      </h1>
      <p className="mt-4 md:mt-9 text-sm md:text-xl font-extralight leading-8 text-center text-neutral-700 realtive z-10">Experience 40 minutes delivery</p>
    </section>
    <section className="flex w-screen justify-center mt-8">
      <div className="flex justify-center">
        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center w-fit text-center h-fit">
        <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white bg-[linear-gradient(110deg,#861890,45%,#C730D3,55%,#861890)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-50">
        Download App
        </Button>
      
            <div className="flex gap-0 mt-0 text-base text-black w-screen justify-center items-center">
              <img loading="lazy" src={hero1} className="h-[360px] md:h-[680px] max-w-full" alt="Fast delivery graphic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);


export default MainContent;
