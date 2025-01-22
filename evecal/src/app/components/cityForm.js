"use client";

import { useState } from "react";

export default function CityForm() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`City submitted: ${city}`);
    console.log(`State submitted: ${state}`);
    // Additional actions, such as making an API call, can be added here.
  };

  return (
    <div className="flex justify-center h-auto">
      <div className="flex justify-center flex-col">
      <form
        onSubmit={handleSubmit}
        className=" p-4 rounded shadow-md w-full max-w-md"
      >
        <label
          htmlFor="city"
          className="block text-2xl font-medium text-gray-200 mb-2"
        >
          City:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="block w-full px-4 py-2 border text-gray-600 text-xl border-gray-300 rounded-md shadow-sm bg-transparent focus:ring-blue-500 focus:border-blue-500 mb-4"
          placeholder="Enter city name"
          required
        />
        <label
          htmlFor="city"
          className="block text-2xl font-medium text-gray-200 mb-2"
        >
          State:
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="block w-full px-4 py-2 border text-gray-600 text-xl border-gray-300 rounded-md shadow-sm bg-transparent focus:ring-blue-500 focus:border-blue-500 mb-4"
          placeholder="Enter state name"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}
