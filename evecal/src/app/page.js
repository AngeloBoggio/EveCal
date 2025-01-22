"use client";
import NavBar from "./components/navbar";
import CityForm from "./components/cityForm";
import UserCalendar from "./calendar/page";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <CityForm />
    </div>
  );
}
