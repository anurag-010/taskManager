import React from 'react';

interface NavElement {
  label: string;
  href: string;
}

const Navbar = () => {
  const navElements: NavElement[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Founder", href: "/founder" },
    { label: "Quick Fun", href: "/quick-fun" },
  ];

  return (
    <nav className="flex flex-wrap bg-blue-500 p-4">
      {navElements.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-white text-xl px-4 py-2 cursor-pointer hover:bg-blue-700 rounded"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
