"use client";

export default function NavBar() {
  return (
    <div className="text-2xl flex justify-between items-center p-16 shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center text-2xl ">
        <h1>EveCal</h1>
      </div>

      {/* Right Section: Navigation Buttons */}
      <nav className="flex space-x-10 text-2xl">
        <button className="hover:text-gray-200">About</button>
        <button className="hover:text-gray-200">+</button>
      </nav>
    </div>
  );
}
