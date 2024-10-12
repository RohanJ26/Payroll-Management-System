import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to handle the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-500 p-4 px-10 flex justify-between items-center">
      {/* Header on the left */}
      <div className="text-white text-2xl">
        Payroll Management System
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navbar Links for Desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-5 space-x-4">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="text-white hover:underline">
              Search
            </Link>
          </li>
          <li>
            <Link to="/insert" className="text-white hover:underline">
              Insert
            </Link>
          </li>
          <li>
            <Link to="/update" className="text-white hover:underline">
              Update
            </Link>
          </li>
          <li>
            <Link to="/delete" className="text-white hover:underline">
              Delete
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navbar Links for Mobile (Toggled) */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 w-full bg-blue-500`}
      >
        <ul className="flex flex-col items-center gap-5 p-5">
          <li>
            <Link to="/" className="text-white hover:underline" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="text-white hover:underline" onClick={toggleMenu}>
              Search
            </Link>
          </li>
          <li>
            <Link to="/insert" className="text-white hover:underline" onClick={toggleMenu}>
              Insert
            </Link>
          </li>
          <li>
            <Link to="/update" className="text-white hover:underline" onClick={toggleMenu}>
              Update
            </Link>
          </li>
          <li>
            <Link to="/delete" className="text-white hover:underline" onClick={toggleMenu}>
              Delete
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
