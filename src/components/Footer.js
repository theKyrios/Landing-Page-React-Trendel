import React, { useState } from "react";
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"

function IconLinks({ src, alt }) {
  return <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-square w-[36px]" />;
}

function InfoSection({ title, content }) {
  return (
    <div className="flex flex-col text-white max-md:mt-10">
      <h2 className="text-2xl font-normal text-left hover:text-orange-500">{title}</h2>
      <p className="mt-5 text-md font-extralight text-neutral-300 hover:text-white leading-8">{content}</p>
    </div>
  );
}

function Footer() {

  

  const icons = [
    { src: instagram, alt: "Icon 1" },
    { src: facebook, alt: "Icon 2" },
    { src: twitter, alt: "Icon 3" },
  ];

  

  return (
    <div data-scroll-section className="bg-black flex flex-col justify-between pb-10">
    <section className="px-20 pb-10 bg-black max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-1.5 text-3xl leading-8 text-center text-fuchsia-800 whitespace-nowrap font-[590]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f17959c225a2f16b1e0e592beffcd4a0aaf9774be0abd83fb13ea6a38530f24?apiKey=32342c19bb8741638734d2b686bbebdc&"
                alt="Logo"
                className="shrink-0 aspect-[0.7] w-[26px]"
              />
              <div className="self-start mt-3">rendel</div>
            </div>
            <p className="self-stretch mt-2 md:mt-6 text-sm md:text-lg font-extralight text-neutral-300 hover:text-orange-500 max-md:max-w-full">
              Our mission is to revolutionize the way you shop by providing access to a vast selection of
              products, including clothes, electronics, home appliances, self-care products, shoes, and books,
              all delivered within an hour.
            </p>
            <div className="flex gap-2 justify-between items-start mt-8">
              {icons.map((icon, index) => (
                <IconLinks key={index} src={icon.src} alt={icon.alt} />
              ))}
            </div>
          </div>
        </article>
        <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <article className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-white max-md:mt-10">
                  <h2 className="text-lg md:text-2xl text-left font-normal hover:text-orange-500">Contact</h2>
                  <address className="mt-5 text-[0.8rem] md:text-md font-extralight text-neutral-300 hover:text-white">
                    Shri Venkateshwara University,<br /> Beside RUSSA Building,<br /> 2nd Floor, 2nd Block<br /><br />
                    <a href="tel:+918639213893" className="text-neutral-300 hover:text-neutral-200 font-normal">+91 8639213893</a><br />
                    <a href="mailto:admin@thetrendel.com" className="text-neutral-300 hover:text-white font-normal">admin@thetrendel.com</a>
                  </address>
                </div>
              </article>
              <article className="flex flex-col ml-5 max-md:ml-0 max-md:w-full py-5 md:py-0">
                <h4 className="text-lg md:text-2xl text-left font-normal text-white hover:text-orange-500">Useful Links</h4>
                <ul className="grid gird-cols-1 text-[0.8rem] md:text-md text-white mt-5">
                    <li className="cursor-pointer hover:text-orange-500">
                      <a href="/policies/privacy-and-policy" > Privacy Policy </a>
                    </li>
                    <li className="cursor-pointer hover:text-orange-500">
                       <a href="/policies/terms-and-conditions"> Terms & Conditions </a>
                    </li>
                    <li className="cursor-pointer hover:text-orange-500">
                       <a href="/policies/refund-policy"> Refund Policy </a>
                    </li>
                    <li className="cursor-pointer hover:text-orange-500">
                    <a href="/policies/cancellation-policy" >  Cancellation Policy </a>
                    </li>
                </ul>
              </article>
            </div>
          </div>
        </article>
      </div>
    </section>
    </div>
  );
}

export default Footer;