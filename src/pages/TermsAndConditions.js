import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-stone-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Terms and Conditions</h1> 

        <p className="mb-4 text-sm md:text-lg">
          These terms and conditions outline the rules and regulations for the use of our ecommerce app and the delivery services we provide. By accessing or using our app, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, please refrain from using our services.
        </p>

        <h2 className="text-lg md:text-2xl font-bold mb-2">1. Service Description:</h2>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>"Trendel" offers a delivery service that aims to deliver any product within a 29 minutes timeframe to customers located within a 5-kilometer radius of the seller's location.</li>
          <li>For delivery addresses located outside the 5-kilometer radius, the delivery time may be extended based on the distance.</li>
          <li>The actual delivery time will be communicated to the customer during the ordering process.</li>
        </ul>


        <h2 className="text-lg md:text-2xl font-bold mb-2">2. Product Availability and Selection:</h2>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>We strive to maintain accurate and up-to-date information about product availability.</li>
          <li>In rare cases, due to unforeseen circumstances or inventory issues, certain products may be unavailable for immediate delivery. In such cases, we will notify you and provide alternatives if possible.</li>
          <li>Product selection and availability may vary based on the seller's inventory.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-bold mb-2">3. Delivery Fees and Charges:</h2>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>Delivery fees may apply to each order and will be clearly displayed during the checkout process.</li>
          <li>Additional charges, such as taxes or surcharges, may be applicable based on your location or the nature of the products ordered. Such charges will be communicated to you before finalizing the order.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-bold mb-2">4. Order Cancellation and Returns:</h2>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>Order cancellations are subject to the cancellation policies of the Trendel's team.</li>
          <li>Returns and refunds for delivered products are governed by the respective seller's return policy. Please refer to the seller's terms and conditions for more information.</li>
          <li>If the product is damaged or incorrect, please contact our customer support within 24 hours of delivery for assistance.</li>
        </ul>


        <h2 className="text-lg md:text-2xl font-bold mb-2">5. Accuracy of Information:</h2>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>While we strive to provide accurate product information, we cannot guarantee the completeness, reliability, or suitability of the information displayed on our app. It is the customer's responsibility to verify any information before making a purchase.</li>
          <li>We reserve the right to make changes to product descriptions, pricing, availability, and any other information without prior notice</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-bold mb-2">6. Limitation of Liability:</h2>

        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use our services, including but not limited to delays, delivery failures, or inaccurate information</li>
          <li>Our liability is limited to the total amount paid by the customer for the specific order in question.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-bold mb-2">7. Privacy and Data Security:</h2>
        
        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>We value your privacy and handle your personal information in accordance with our Privacy Policy. By using our app, you consent to the collection, storage, and use of your information as described in the Privacy Policy.</li>
        </ul>

        <h2 className="text-lg md:text-2xl font-bold mb-2">8. Intellectual Property:</h2>
        
        <ul className="list-disc list-inside mb-4 text-sm md:text-lg">
          <li>All intellectual property rights, including trademarks, logos, and content displayed on our app, belong to their respective owners.</li>
          <li>You are not permitted to use, reproduce, modify, or distribute any intellectual property without prior written consent from the rightful owner</li>
        </ul>


        <p className="mb-4 text-sm md:text-lg">
        These Terms and Conditions is subject to change without notice.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
