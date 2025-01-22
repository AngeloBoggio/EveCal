"use client";

export default function NavBar() {
  return (
    <div className="text-2xl flex justify-between items-center p-16 shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img
          className="w-48 h-auto opacity-80"
          src="/logo.jpg"
          alt="EveCal Logo"
        />
      </div>

      {/* Right Section: Navigation Buttons */}
      <nav className="flex space-x-10 text-2xl">
        <button className="hover:text-blue-500">About</button>
        <button className="hover:text-blue-500">+</button>
      </nav>
    </div>
  );
}
