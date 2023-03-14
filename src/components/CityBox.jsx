import React from "react";
import "../styles/Citybox.css";

function City({ cityName }) {
  return (
    <div className="cityBox">
      <span class="material-symbols-outlined list">list</span>
      <button className="cityName">GwangJu(광주)</button>
    </div>
  );
}

export default City;
