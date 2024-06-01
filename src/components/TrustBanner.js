import * as React from "react";

function MetricItem({ amount, description }) {
  return (
    <div className="my-auto text-lg md:text-4xl text-center">
      {amount}
      <br />
      <span className="text-[0.5rem] md:text-2xl">{description}</span>
    </div>
  );
}

function TrustBanner() {
  const metrics = [
    { amount: "250+", description: "Stores Available" },
    { amount: "30k", description: "Active Users" },
    { amount: "30mins.", description: "Delivery Guaranteed" },
  ];

  return (
    <section data-scroll-section className="flex justify-center w-screen items-center px-20 max-md:px-20 py-4 md:py-9 text-4xl text-white max-md:px-5 badgeSection">
      <div className=" gap-2 md:gap-5 justify-between w-full max-w-[1119px] grid grid-cols-3">
        {metrics.map((metric, index) => (
          <MetricItem key={index} amount={metric.amount} description={metric.description} />
        ))}
      </div>
    </section>
  );
}

export default TrustBanner;