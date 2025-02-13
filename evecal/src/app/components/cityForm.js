"use client";

import { useState } from "react";
import UserCalendar from "../calendar/page";

export default function CityForm() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Start the submission process
    console.log(`City submitted: ${city}`);
    console.log(`State submitted: ${state}`);

    // Simulate an API call
    setTimeout(() => {
      console.log("Submission completed");
      setIsSubmitting(false); // Stop processing
      setShowCalendar(true); // Show the calendar
    }, 2000);
  };

  const returnToForm = (event) => {
    event.preventDefault();
    setShowCalendar(false); // Hide the calendar
    setCity(""); // Reset city input
    setState(""); // Reset state input
  };

  return (
    <div className="flex justify-center h-auto">
      <div className="flex justify-center flex-col">
        {!showCalendar ? (
          !isSubmitting ? (
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded shadow-md w-96 space-y-4"
            >
              <h2 className="text-xl font-bold">Submit Location</h2>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className="w-full p-2 border text-white border-gray-300 rounded bg-black"
              />
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter state"
                className="w-full p-2 border border-gray-300 text-white bg-black rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center">
              <button
                type="button"
                className="bg-blue-500 text-white p-3 rounded flex items-center justify-center"
                disabled
              >
                <svg
                  className="animate-spin h-6 w-6 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                  />
                </svg>
                Processing...
              </button>
            </div>
          )
        ) : (
          <div className="">
            <button
              onClick={returnToForm}
              className="text-xl border-gray-200 border p-2"
            >
              x
            </button>
            <UserCalendar />
          </div>
        )}
      </div>
    </div>
  );
}
