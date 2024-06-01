import React, { useState } from "react";

const Button = ({ children, className, onClick, type = "button" }) => {

  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    // Check if the user is on an Apple device
    if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
      // Redirect to the App Store link for iOS
      window.location.href = "https://apps.apple.com/in/app/trendel/id6463705643";
    } else if (/Android/i.test(navigator.userAgent)) {
      // Redirect to the Google Play Store link for Android
      window.location.href = "https://play.google.com/store/apps/details?id=com.Trendel.user";
    } else {
      // For other devices, perform a default action or provide a message
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  
  return (
    <div>
  <button className={className} onClick={onClick ?  onClick : handleClick} type={type}>
    {children}
  </button>
  {showAlert && (
        <div className="fixed z-[99999] inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-50 border border-gray-200 text-sm text-gray-600 rounded-lg p-4" role="alert">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="flex-shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <div className="flex-1 md:flex md:justify-between ms-2">
                    <p className="text-sm">
                    For the best experience, download our app on your mobile device! Get it on the App Store for iPhone or iPad, and on Google Play for Android
                    </p>
                   
                  </div>
                </div>
                <p className="text-sm mt-4 pt-8 text-center md:mt-0 md:ms-6">
                      <button className="text-red-600 hover:text-red-800 font-medium whitespace-nowrap cursor-pointer" onClick={handleCloseAlert}>Got it</button>
                    </p>
              </div>
            </div>
          </div>
        </div>
      )}
  </div>
);
};

export default Button;
