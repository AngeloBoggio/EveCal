"use client";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="text-2xl flex justify-between text-white bg-black items-center p-16 shadow-md">
      {/* Left Section: Logo */}
      <div className="flex items-center text-2xl ">
        <h1
          onClick={handleLogoClick}
          className="cursor-pointer hover:text-blue-500"
        >
          EveCal
        </h1>
      </div>

      {/* Right Section: Navigation Buttons */}
      <nav className="flex space-x-10 text-2xl">
        <button className="hover:text-gray-200">About</button>
        <button className="hover:text-gray-200">+</button>
      </nav>
    </div>
  );
}
