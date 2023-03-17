import React from "react";
import "../styles/Main.css";
import Footer from "../components/Footer";
import CityBox from "../components/CityBox";

function Main() {
  return (
    <>
      <div>
        <h1>TRIP</h1>
        <CityBox />
        <Footer />
      </div>
    </>
  );
}

export default Main;
