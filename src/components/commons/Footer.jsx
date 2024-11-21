import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full h-14 flex justify-between items-center bg-primary-dark text-text-light py-4 px-10">
      <p className="text-sm">
        &copy; 2024 ThinkTab Platform. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-text-light hover:text-text">
          Privacy Policy
        </a>
        <a href="#" className="text-text-light hover:text-text">
          Terms of Service
        </a>
        <a href="#" className="text-text-light hover:text-text">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
