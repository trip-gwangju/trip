import React from "react";
import Footer from "../components/Footer";
import CityBox from "../components/CityBox";
import "../styles/Main.css";

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
