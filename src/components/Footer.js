import * as React from "react";

function IconLinks({ src, alt }) {
  return <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-square w-[46px]" />;
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
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cd1a0bedcbe0acf0118c1eeefb5ea4425e50e934941bad74c671f74f8139ffe?apiKey=32342c19bb8741638734d2b686bbebdc&", alt: "Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4cfcc2ad8dad842fd2840016723c837920d70dbb499b6c7e5b54e5ab997fdcda?apiKey=32342c19bb8741638734d2b686bbebdc&", alt: "Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f71d25910d1ad96c2eabc4ba794f8aa98e5f078d3659dba3755b3b2caa8f0ce?apiKey=32342c19bb8741638734d2b686bbebdc&", alt: "Icon 3" },
  ];

  return (
    <div className="min-h-screen bg-black z-[999] flex flex-col justify-between">
    <section className="flex justify-center items-center px-16 py-16 bg-white text-center max-md:px-5">
      <div className="flex flex-col max-w-full w-50%">
        <h1 className="text-5xl max-md:max-w-full max-md:text-4xl">
          Endless Choices
          <br />
          <b className="text-orange-500">Instant Gratification</b>
        </h1>
        <div className="light-button justify-center self-center px-7 py-4 mt-12 text-xl leading-8 rounded-[50px] text-stone-50 max-md:px-5 max-md:mt-10">
  <button className="bt">
    <div className="light-holder">
      <div className="dot"></div>
      <div className="light"></div>
    </div>
    <div className="button-holder">
     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
        <path
          d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
        ></path>
  </svg> */}
      <p>Download</p>
    </div>
  </button>
</div>

      </div>
    </section>
    <div className="hidden md:block">
    <dotlottie-player
      src="https://lottie.host/b85d3799-f703-4f9b-abd1-df46631ac851/CumINtQjUi.json"
      background="black"
      speed="1"
      style={{ width: '100%', height: '200px'}}
      loop
      autoplay
    ></dotlottie-player>
    </div>
    <div className="block md:hidden">
    <dotlottie-player
      src="https://lottie.host/b85d3799-f703-4f9b-abd1-df46631ac851/CumINtQjUi.json"
      background="black"
      className = "h-auto"
      speed="1"
      style={{ width: '100%' }}
      loop
      autoplay
    ></dotlottie-player>
    </div>
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
            <div className="flex gap-5 justify-between items-start mt-8">
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
                  <address className="mt-5 text-[0.8rem] md:text-md leading-6 font-extralight text-neutral-300 hover:text-white">
                    Shri Venkateshwara University,<br /> Beside RUSSA Building,<br /> 2nd Floor, 2nd Block<br /><br />
                    <a href="tel:+918639213893" className="text-neutral-300 hover:text-neutral-200 font-normal">+91 8639213893</a><br /><br />
                    <a href="mailto:admin@thetrendel.com" className="text-neutral-300 hover:text-white font-normal">admin@thetrendel.com</a>
                  </address>
                </div>
              </article>
              <article className="flex flex-col ml-5 max-md:ml-0 max-md:w-full py-5 md:py-0">
                <h4 className="text-lg md:text-2xl text-left font-normal text-white hover:text-orange-500">Useful Links</h4>
                <ul className="grid gird-cols-1 md:gris-cols-2 lg:grid-cols-4 text-[0.8rem] md:text-md text-white mt-5">
                    <li className="cursor-pointer hover:text-orange-500">
                        Privacy Policy
                    </li>
                    <li className="cursor-pointer hover:text-orange-500">
                        Terms & Conditions
                    </li>
                    <li className="cursor-pointer hover:text-orange-500">
                        Refund Policy
                    </li>
                    <li className="cursor-pointer hover:text-orange-500">
                        Cancellation Policy
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