import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-stone-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Refund Policy</h1> 

        <p className="mb-4 text-sm md:text-lg">
          This Refund policy is designed to ensure fairness and clarity. Please take a moment to review our policy below:
        </p>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>We accept refund requests within 1 day from the date of delivery.</li>
          <li>The item must be unused, in its original packaging, and in the same condition as received.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-bold mb-2">Process for Refund Requests:</h2>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>To initiate a refund, please contact our customer support team by clicking on contact us page.</li>
          <li>Provide your order details and a clear reason for the refund request.</li>
          <li>Our team will review your request and guide you through the process.</li>
        </ul>

       

        <h2 className="text-lg md:text-2xl font-bold mb-2">Refund Approval and Options:</h2>

        <p className="mb-4 text-sm md:text-lg">
        Once your refund request is approved, we offer two options:
        </p>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>Full Refund: We will issue a full refund to your original payment method.</li>
          <li>Store Credit: You may opt for store credit, which can be used for future purchases.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-bold mb-2">Return Shipping:</h2>

        <p className="mb-4 text-sm md:text-lg">
        In some cases, return shipping costs may apply. Our customer support team will provide instructions on how to proceed.
        </p>

        <h2 className="text-lg md:text-2xl font-bold mb-2">Exceptions to Refunds:</h2>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>Certain items, such as perishable goods or personalized products, may not be eligible for refunds unless damaged or defective.</li>
          <li>Digital products, including e-books or software downloads, are non-refundable.</li>
        </ul>



        <h2 className="text-lg md:text-2xl font-bold mb-2">Damaged or Defective Items:</h2>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>If you receive a damaged or defective item, please contact us within 1 day of delivery.</li>
          <li>Provide clear details and, if possible, attach supporting images.</li>
          <li>We will arrange for a replacement or issue a refund, depending on the specific situation.</li>
          <li>Please note that our refund policy applies to products purchased through "Trendel". For products purchased directly from our registered sellers, their individual refund policies may apply.</li>
        </ul>


        <p className="mb-4 text-sm md:text-lg">
        We are committed to ensuring your satisfaction and resolving any issues promptly. If you have any questions or need further assistance, please don't hesitate to contact our customer support team. Your trust and happiness are our top priorities. "Trendel" - Making your shopping experience seamless and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default RefundPolicy;
