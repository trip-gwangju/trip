import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/TourInfoBox.css";

function DetailTourList({ Lists }) {
  const { tour_id } = useParams();
  const API_KEY ="YAHkF40pRCYGFbXP%2FXeCrB3nJ4B9G9DObwb71txY0kHNQ2bqTcpLBbUDW0wrx%2BQHAYSJiDg8uYoFvsSWKYl3Kw%3D%3D";
  const [lists, setLists] = useState([]);
  const FetchData = async () => {
    await axios
      .get(
        `http://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo?serviceKey=${API_KEY}&type=json`
      )
      .then((res) => {
        setLists(res.data.TourDestBaseInfo);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);
  const list = lists.filter((item) => item.id === tour_id);

  console.log(tour_id);
  console.log(list);
  return (
    <div className="tourInfo">
      <h1 className="LOGO">TRIP</h1>
      <div className="tourInfoBox"></div>
      <Footer />
    </div>
  );
}

export default DetailTourList;
