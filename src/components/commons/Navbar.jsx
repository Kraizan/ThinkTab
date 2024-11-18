import React from "react";

const navbarOptions = [
  { name: "Home", path: "/" },
  { name: "Learn", path: "/edu" },
  { name: "Classroom", path: "/classroom" },
  { name: "About", path: "/about" },
  { name: "Support", path: "/support" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-16 bg-primary text-text-light px-10 flex justify-between items-center">
      <div className="font-bold text-2xl">StudentHub</div>
      <div className="flex gap-x-4 text-md font-semibold">
        {navbarOptions.map((option, index) => (
          <a key={index} href={option.path} className="">
            {option.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
