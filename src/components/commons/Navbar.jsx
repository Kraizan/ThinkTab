import React from "react";

const navbarOptions = [
  { name: "Dashboard", path: "/" },
  { name: "Notepad", path: "/notepad" },
  { name: "Learn", path: "/edu" },
  { name: "Classroom", path: "/classroom" },
  { name: "ChatSpace", path: "/chatspace" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-16 bg-primary text-text-light px-10 flex justify-between items-center">
      <a href="/" className="font-bold text-2xl">ThinkTab</a>
      <div className="flex gap-x-4 text-md font-semibold">
        {navbarOptions.map((option, index) => (
          <a key={index} href={option.path} className="hover:text-text-dark">
            {option.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
